import { fabric } from 'fabric';
import "jest-canvas-mock";
import { loadCanvasElements, renderCanvasObjectByType, toPageElementList } from '../../../src/shared/util/library.adaptor';
import { PageElement } from '@store/models/page.model';
import { text } from 'stream/consumers';


const rectOptions: fabric.IRectOptions = {
  type: 'rect',
  width: 100,
  height: 50,
  fill: 'red',
};

const circleOptions: fabric.ICircleOptions = {
  type: 'circle',
  radius: 30,
  fill: 'blue',
};

const triangleOptions: fabric.ITriangleOptions = {
  type: 'triangle',
  width: 80,
  height: 80,
  fill: 'green',
};

const textOptions: fabric.ITextOptions = {
  type: 'text',
  text: 'Hello Canvas',
  fontSize: 20,
  fill: 'black',
};

describe('renderCanvasObjectByType', () => {
  test('should render a fabricjs object based on its type', () => {

    const rectObject = renderCanvasObjectByType(rectOptions);
    const circleObject = renderCanvasObjectByType(circleOptions);
    const triangleObject = renderCanvasObjectByType(triangleOptions);

    expect(rectObject).toBeInstanceOf(fabric.Rect);
    expect(circleObject).toBeInstanceOf(fabric.Circle);
    expect(triangleObject).toBeInstanceOf(fabric.Triangle);
  });

  test('should render a generic fabricjs object if type is not recognized', () => {
    const unknownObjectOptions: fabric.IObjectOptions = {
      type: 'unknown',
    };

    const unknownObject = renderCanvasObjectByType(unknownObjectOptions);

    expect(unknownObject).toBeInstanceOf(fabric.Object);
  });


});

describe('toPageElementList', () => {
  test('should convert an array of fabric objects to a list of PageElements', () => {
    const fabricObjects: fabric.Object[] = [
      new fabric.Rect(rectOptions),
      new fabric.Circle(circleOptions),
      new fabric.Text('Hello Text'),
    ];

    const oldPageElementList: PageElement[] = [
      { code: '0', name: 'Element 0', data: {} },
      { code: '1', name: 'Element 1', data: {} },
      { code: '2', name: 'Element 2', data: {} },
    ];

    const pageElementList = toPageElementList(fabricObjects, oldPageElementList);

    expect(pageElementList).toHaveLength(3);

    expect(pageElementList[0]).toEqual({
      code: '0',
      name: 'Element 0',
      data: expect.objectContaining({ type: 'rect' }),
    });

    expect(pageElementList[1]).toEqual({
      code: '1',
      name: 'Element 1',
      data: expect.objectContaining({ type: 'circle' }),
    });

    expect(pageElementList[2]).toEqual({
      code: '2',
      name: 'Element 2',
      data: expect.objectContaining({ type: 'text', text: 'Hello Text' }),
    });
  });
});

describe('loadCanvasElements', () => {
  let canvas: fabric.Canvas;

  beforeEach(() => {
    canvas = new fabric.Canvas('canvas');
  });

  afterEach(() => {
    canvas.dispose();
  });

  test('should load a list of page elements to the fabric canvas', () => {
    const pageElementList: PageElement[] = [
      { code: '0', name: 'Element 0', data: rectOptions },
      { code: '1', name: 'Element 1', data: circleOptions },
      { code: '2', name: 'Element 2', data: textOptions },
    ];

    loadCanvasElements(canvas, pageElementList);

    const canvasObjects = canvas.getObjects();
    expect(canvasObjects).toHaveLength(3);

    expect(canvasObjects[0]).toBeInstanceOf(fabric.Rect);
    expect(canvasObjects[1]).toBeInstanceOf(fabric.Circle);
    expect(canvasObjects[2]).toBeInstanceOf(fabric.Text);
  });

  test('should handle elements with unknown types and log a warning', () => {
    const pageElementList: PageElement[] = [
      { code: '0', name: 'Element 0', data: { type: 'unknown', width: 100, height: 50 } },
    ];

    const consoleWarnSpy = jest.spyOn(console, 'warn');
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    consoleWarnSpy.mockImplementation(() => { });

    loadCanvasElements(canvas, pageElementList);

    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledWith('[page element loading error]: type unknown not found');

    consoleWarnSpy.mockRestore();
  });
});
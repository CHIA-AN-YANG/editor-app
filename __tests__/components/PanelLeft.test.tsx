import '@testing-library/jest-dom';
import PanelLeft from '@components/PanelLeft';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockState = {
  page: {
    pages: [
      { id: '1', name: 'Page 1', element: [] },
      { id: '2', name: 'Page 2', element: [] },
    ],
  },
  selectedPage: {
    page: {
      id: '1',
      name: 'Page 1',
      elements: [{
          code: '1',
          name: 'Element 1',
          data: { type: 'text', text: 'Hello World' },
        },],
}}};

// Create a mock store with middleware
const mockStore = configureMockStore([thunk]);

describe('PanelLeft', () => {
  it('should render the component correctly', () => {
    const store = mockStore(mockState);

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <PanelLeft />
      </Provider>
    );

    const page1 = getAllByText('Page 1');
    const page2 = getAllByText('Page 2');
    const page1Element = getByText('Element 1');

    expect(page1[1]).toBeInTheDocument();
    expect(page2[0]).toBeInTheDocument();
    expect(page1Element).toBeInTheDocument();
  });

  it('should handle page selection', () => {
    const store = mockStore({
      page: {
        pages: [
          { id: '1', name: 'Page 1', elements: [] },
          { id: '2', name: 'Page 2', elements: [] },
        ],
      },
      selectedPage: {
        page: { id: '2', name: 'Page 2', elements: [] },
      },
    });

    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <PanelLeft />
      </Provider>
    );

    const page1Element = getByText('Page 1');
    if (!page1Element.parentElement?.parentElement)
      throw new Error('Page 1 list row not found');
    fireEvent.click(page1Element.parentElement?.parentElement);

    waitFor(() => {
      const selectedPage = getAllByText('Page 1');
      expect(
        selectedPage[1].parentElement?.parentElement?.classList.contains(
          'activeItem'
        )
      ).toBe(true);
    });
  });

  it('should handle page deletion', () => {
    const store = mockStore(mockState);

    const { getAllByText, container } = render(
      <Provider store={store}>
        <PanelLeft />
      </Provider>
    );

    const deleteButton = container.querySelector('[aria-label="Delete Page"]');
    deleteButton && fireEvent.click(deleteButton);
    waitFor(() => {
      const selectedPage = getAllByText('Page 1');
      expect(selectedPage[0]).not.toBeInTheDocument();
    });
  });

  it('should handle page name update', () => {
    const store = mockStore(mockState);

    const { getAllByPlaceholderText, container, getAllByText } = render(
      <Provider store={store}>
        <PanelLeft />
      </Provider>
    );
    const page1Element = getAllByText('Page 1');
    if (!page1Element[1].parentElement?.parentElement)
      throw new Error('Page 1 list row not found');
    fireEvent.click(page1Element[1].parentElement?.parentElement);

    waitFor(() => {
      const nameInput = getAllByPlaceholderText('Page 1');
      fireEvent.change(nameInput[0], { target: { value: 'Updated Page' } });

      const selectedPageElement = container.querySelector('[key="1"]');
      expect(selectedPageElement).toHaveTextContent('Updated Page');
    });
  });

  it('should change the element name when updated', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={mockStore(mockState)}>
        <PanelLeft />
      </Provider>
    );

    const element1 = getByText('Element 1');
    fireEvent.click(element1);
    const newNameInput = getByPlaceholderText('Element 1');
    fireEvent.change(newNameInput, { target: { value: 'New Element Name' } });
    fireEvent.blur(newNameInput);
    
    waitFor(() => {
      expect(element1).toHaveTextContent('New Element Name');
    });
  });
});

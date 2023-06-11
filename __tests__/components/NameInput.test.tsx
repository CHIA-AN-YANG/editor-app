import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { NameInput } from '@components/NameInput';

describe('NameInput', () => {
  it('should render the name correctly', () => {
    const name = 'John Doe';
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByText } = render(<NameInput name={name} onUpdateName={() => {}} />);
    const nameElement = getByText(name);
    expect(nameElement).toBeInTheDocument();
  });

  it('should call onUpdateName when the name is updated', () => {
    const name = 'John Doe';
    const updatedName = 'Jane Smith';
    const onUpdateName = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <NameInput name={name} onUpdateName={onUpdateName} />
    );
    const nameElement = getByText(name);
    fireEvent.click(nameElement);

    const inputElement = getByPlaceholderText(name);
    fireEvent.change(inputElement, { target: { value: updatedName } });
    fireEvent.blur(inputElement);

    expect(onUpdateName).toHaveBeenCalledWith(updatedName);
  });
});
import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

it('renders without crashing', () => {
    const fields = [{name: 'test', label: 'Test', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={() => {}} loading={false} fields={fields}/>);
});

it('displays the correct label', () => {
    const fields = [{name: 'test', label: 'Test', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={() => {}} loading={false} fields={fields}/>);
    let label = screen.getByTestId('label');
    expect(label.textContent).toBe('Test:');
});

it('displays the correct text', () => {
    const fields = [{name: 'test', label: 'Test', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={() => {}} loading={false} fields={fields}/>);
    let input = screen.getByTestId('label-input');
    expect(input).toHaveValue('This is a test');
});

it('displays the correct placeholder', () => {
    const fields = [{name: 'test', label: 'Test', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={() => {}} loading={false} fields={fields}/>);
    let input = screen.getByLabelText('Test:');
    expect(input.getAttribute('placeholder')).toBe('Test');
});

it('displays the correct button text', () => {
    const fields = [{name: 'test', label: 'Test', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={() => {}} loading={false} fields={fields}/>);
    let button = screen.getByTestId('button');
    expect(button.textContent).toBe('Submit');
    cleanup();

    render(<Form onSubmit={() => {}} onChange={() => {}} loading={true} fields={fields}/>);
    button = screen.getByTestId('button');
    expect(button.textContent).toBe('Loading...');
});

it('invokes onChange', () => {
    const onChange = jest.fn();
    const fields = [{name: 'test', label: 'Test Label', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={() => {}} onChange={onChange} loading={false} fields={fields}/>);
    let input = screen.getByLabelText('Test Label:');
    fireEvent.change(input, {target: {value: 'a'}});
    expect(onChange).toBeCalledTimes(1);
});

it('invokes onSubmit', () => {
    const onSubmit = jest.fn();
    const fields = [{name: 'test', label: 'Test Label', type: 'text', value: 'This is a test'}];
    render(<Form onSubmit={onSubmit} onChange={() => {}} loading={false} fields={fields}/>);
    let form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).toBeCalledTimes(1);
});
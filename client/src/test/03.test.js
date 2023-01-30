import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from 'react-redux';
import Search from "./Search";
import { search } from '../actions';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe("Search tests", () => {
    let dispatch;
    let setInput;
    let setCurrent;

    beforeEach(() => {
        dispatch = jest.fn();
        setInput = jest.fn();
        setCurrent = jest.fn();
        useDispatch.mockImplementation(() => dispatch);
        useSelector.mockImplementation(cb => cb({}));
    });

    it("should call the search action", () => {
        const { getByTestId } = render(<Search setInput={setInput} setCurrent={setCurrent}/>);
        fireEvent.change(getByTestId("search"), { target: { value: 'Argentina'}});
        expect(dispatch).toBeCalledWith(search("Argentina"))
    });
    })



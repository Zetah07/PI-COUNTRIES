import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from 'react-redux';
import {getSort, population, continent, deleteFilters, getSelectActivity } from "../../redux/actions";
import Filters from "./Filters";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe("Filters tests", () => {
  let dispatch;
  let setInput;
  let setCurrent;

  beforeEach(() => {
    dispatch = jest.fn();
    setInput = jest.fn();
    setCurrent = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation(cb => cb({}));
  }
  );

  it("should call the getSort action", () => {
    const { getByTestId } = render(<Filters setInput={setInput} setCurrent={setCurrent}/>);
    fireEvent.change(getByTestId("sort"), { target: { value: 'asc'}});
    expect(dispatch).toBeCalledWith(getSort("asc"))
  });

  it("should call the population action", () => {
    const { getByTestId } = render(<Filters setInput={setInput} setCurrent={setCurrent}/>);
    fireEvent.change(getByTestId("population"), { target: { value: 'high'}});
    expect(dispatch).toBeCalledWith(population("high"))
  });

  it("should call the continent action", () => {
    const { getByTestId } = render(<Filters setInput={setInput} setCurrent={setCurrent}/>);
    fireEvent.change(getByTestId("continents"), { target: { value: 'Europe'}});
    expect(dispatch).toBeCalledWith(continent("Europe"))
  })

  it("should call the deleteFilters action", () => {
    const { getByTestId } = render(<Filters setInput={setInput} setCurrent={setCurrent}/>);
    fireEvent.click(getByTestId("delete"));
    expect(dispatch).toBeCalledWith(deleteFilters())
  })

  it("should call the getSelectActivity action", () => {
    const { getByTestId } = render(<Filters setInput={setInput} setCurrent={setCurrent}/>);
    fireEvent.change(getByTestId("activities"), { target: { value: 'ski'}});
    expect(dispatch).toBeCalledWith(getSelectActivity("ski"))
  })
})

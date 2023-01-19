import React, { useState } from "react";
import Style from "./Search.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(search));
    setSearch("");
  };

  return (
    <div className={Style.searchBar}>
      <input
        id="search"
        type="search"
        className={Style.input}
        placeholder="Search u destiny"
        onChange={(e) => handleSearchChange(e)}
        value={search}
        autoComplete="off"
      />
      <button
        type="submit"
        className={Style.searchButton}
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

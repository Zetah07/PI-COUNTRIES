import React, { useState } from "react";
import Style from "./Search.module.css";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = () => {
    if (search.length) {
      dispatch(getByName(search));
      document.getElementById("search").value = "";
    }
  };


  return (
    <div className={Style.searchBar}>
      <input
        id="search"
        type="search"
        className={Style.input}
        placeholder="Search..."
        onChange={(event) => handleSearch(event)}
        value={search}
        autoComplete="on"
        
      />
      <button
        type="submit"
        className={Style.searchBtn}
        onClick={(event) => handleSubmit(event)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

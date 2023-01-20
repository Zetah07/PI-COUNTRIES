import React, { useState } from "react";
import s from './Search.module.css'
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const Search = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleSubmit = (e) => {
        if (search.length) {
            dispatch(getByName(search))
            document.getElementById('search').value = ''
        }
    }

    return (
        <div className={s.searchBar}>
            <input id="search" type="search" className={s.input} placeholder="Search..." onChange={(e) => handleSearch(e)} value={search} autoComplete='off' />
            <button type="submit" className={s.searchBtn} onClick={(e) => handleSubmit(e)} >Search</button>
        </div>
    )
}

export default Search;
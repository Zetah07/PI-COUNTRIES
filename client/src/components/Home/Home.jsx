import React, { useEffect, useState } from "react";
import './Continents.css'
import s from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities, getCountries } from "../../redux/actions";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Errors from "../Errors/Errors";
import Create from "../Create/Create";
import Check from "../Check/Check";

const Home = () => {

    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sorting)
    const error = useSelector(state => state.error)
    const check = useSelector(state => state.check)
    const [form, setForm] = useState(false)
    const activities = useSelector(state => state.activities)

    const [sort, setSort] = useState(true)
    // Pagination
    const [input, setInput] = useState(1)
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(9)
    const max = Math.ceil(sorting.length / perPage);

    useEffect(() => {
        if (!sorting[0]) {
            dispatch(getCountries())
        }
        if (!activities[0]) {
            dispatch(getActivities())
        }

    }, [dispatch, sorting, activities])
    return (
        <div className={s.container}>
            {sorting.length ?
                <div>
                    <Nav setForm={setForm} />
                    {error && <Errors />}
                    {check && <Check />}
                    {form && <Create setForm={setForm} />}
                    <Filters setSort={setSort} sort={sort} setInput={setInput} setCurrent={setCurrent} />
                    <div className={s.gridContainer}>
                        <div className={s.grid}>
                            {sorting?.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map(country => {
                                return (
                                    <div className={country.continent.split(' ')[0].toLowerCase()} key={country.id}  >
                                        <Card id={country.id} name={country.name} flag={country.flag} continent={country.continent} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination current={current} setCurrent={setCurrent} max={max} input={input} setInput={setInput} />
                    
                </div> : <Loader />
            }
        </div>
    )
}

export default Home;
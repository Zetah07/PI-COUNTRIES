import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSort, getPopulation, getContinents, deleteFilters, getSelectActivity } from "../../store/actions";
import s from './Filters.module.css'

const Filters = ({ setSort, sort, setInput, setCurrent }) => {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)


    const handleSort = (e) => {
        dispatch(getSort(e.target.value))
        setSort(!sort)
    }

    const handlePopulation = (e) => {
        dispatch(getPopulation(e.target.value))
        setSort(!sort)
    }

    const handleContinent = (e) => {
        dispatch(getContinents(e.target.value))
        setInput(1)
        setCurrent(1)
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(deleteFilters())
        document.getElementById('sort').value = 'sort'
        document.getElementById('population').value = 'population'
        document.getElementById('continents').value = 'all'
    }

    const handleActivity = (e) => {
        dispatch(getSelectActivity(e.target.value))
        setInput(1)
        setCurrent(1)
    }

    return (
        <div className={s.container}>
            <div className={s.selectContainer}>
                <label htmlFor="" className={s.label}>Sort</label>
                <select id='sort' name="Sort" className={s.select} onChange={handleSort} >
                    <option value='sort' className={s.option}>Sort</option>
                    <option value='asc' className={s.option} >Name (A-Z)</option>
                    <option value='desc' className={s.option}>Name (Z-A)</option>
                </select>
            </div>
            <div className={s.selectContainer}>
                <label htmlFor="" className={s.label}>Population</label>
                <select id="population" name="Population" className={s.select} onChange={handlePopulation}>
                    <option value='population' className={s.option}>Population</option>
                    <option value='high' className={s.option}>Highest (↑)</option>
                    <option value='low' className={s.option}>Lowest (↓)</option>
                </select>
            </div>
            <div className={s.selectContainer}>
                <label htmlFor="" className={s.label}>Continents</label>
                <select id="continents" name="Continents" className={s.select} onChange={handleContinent}>
                    <option value='all' className={s.option}>All</option>
                    <option value='Africa' className={s.option}>Africa</option>
                    <option value='Antarctica' className={s.option}>Antarctica</option>
                    <option value='Asia' className={s.option}>Asia</option>
                    <option value='Europe' className={s.option}>Europe</option>
                    <option value='North America' className={s.option}>North America</option>
                    <option value='Oceania' className={s.option}>Oceania</option>
                    <option value='South America' className={s.option}>South America</option>
                </select>
            </div>
            <div className={s.selectContainer}>
                <label htmlFor="" className={s.label}>Activity</label>
                <select name="Activity" className={s.select} onChange={handleActivity}>
                    <option value='activities' className={s.option}>Activities</option>
                    {activities?.map((e, i) => <option key={i} value={e.name} >{e.name}</option>)}
                </select>
            </div>
            <button className={s.deleteFilter} onClick={handleClick}>
                <span className={s.shadow}></span>
                <span className={s.edge}></span>
                <span className={s.front}>Delete Filters</span>
            </button>
        </div>
    )
}

export default Filters;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSort, population, continent, deleteFilters, getSelectActivity } from "../../redux/actions";
import Style from './Filters.module.css'

const Filters = ({ setSort, sort, setInput, setCurrent }) => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)


    const handleSort = (event) => {
        dispatch(getSort(event.target.value))
        setSort(!sort)
    }

    const handlePopulation = (event) => {
        dispatch(population(event.target.value))
        setSort(!sort)
    }

    const handleContinent = (event) => {
        dispatch(continent(event.target.value))
        setInput(1)
        setCurrent(1)
    }

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(deleteFilters())
        document.getElementById('sort').value = 'sort'
        document.getElementById('population').value = 'population'
        document.getElementById('continents').value = 'all'
    }

    const handleActivity = (event) => {
        dispatch(getSelectActivity(event.target.value))
        setInput(1)
        setCurrent(1)
    }

    
    return (
        <div className={Style.container}>
            <div className={Style.selectContainer}>
                <label htmlFor="" className={Style.label}>Sort</label>
                <select id='sort' name="Sort" className={Style.select} onChange={handleSort} >
                    <option value='sort' className={Style.option}>Sort</option>
                    <option value='asc' className={Style.option} >Name (A-Z)</option>
                    <option value='desc' className={Style.option}>Name (Z-A)</option>
                </select>
            </div>
            <div className={Style.selectContainer}>
                <label htmlFor="" className={Style.label}>Population</label>
                <select id="population" name="Population" className={Style.select} onChange={handlePopulation}>
                    <option value='population' className={Style.option}>Population</option>
                    <option value='high' className={Style.option}>Highest (↑)</option>
                    <option value='low' className={Style.option}>Lowest (↓)</option>
                </select>
            </div>
            <div className={Style.selectContainer}>
                <label htmlFor="" className={Style.label}>Continents</label>
                <select id="continents" name="Continents" className={Style.select} onChange={handleContinent}>
                    <option value='all' className={Style.option}>All</option>
                    <option value='Africa' className={Style.option}>Africa</option>
                    <option value='Antarctica' className={Style.option}>Antarctica</option>
                    <option value='Asia' className={Style.option}>Asia</option>
                    <option value='Europe' className={Style.option}>Europe</option>
                    <option value='North America' className={Style.option}>North America</option>
                    <option value='Oceania' className={Style.option}>Oceania</option>
                    <option value='South America' className={Style.option}>South America</option>
                </select>
            </div>
            <div className={Style.selectContainer}>
                <label htmlFor="" className={Style.label}>Activity</label>
                <select name="Activity" className={Style.select} onChange={handleActivity}>
                    <option value='activities' className={Style.option}>Activities</option>
                    {activities?.map((event, i) => <option key={i} value={event.name} >{event.name}</option>)}
                </select>
            </div>
            <button className={Style.deleteFilter} onClick={handleClick}>
                <span className={Style.shadow}></span>
                <span className={Style.edge}></span>
                <span className={Style.front}>Delete Filters</span>
            </button>
        </div>
    )
}

export default Filters;
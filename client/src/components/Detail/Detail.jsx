import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './Detail.module.css';

const Detail = () => {

    const [country, setCountry] = useState()
    let { id } = useParams()
    useEffect(() => {
        axios.get(`/countries/${id}`)
            .then(res => setCountry(res.data))

    }, [id])

    return (
        
        <div className={s.container}>
            {
                country ?
                    <div className={s.card}>
                        <div className={s.flex}>
                            <h3>{country.id}</h3>
                            <Link to='/home'>
                                <button className={s.btn}>X</button>
                            </Link>
                        </div>
                        <img className={s.flag} src={country.flag} alt={country.name} />
                        <h3 className={s.title}>{country.name}</h3>
                        <div className={s.grid}>
                            <h4>Population: <span className={s.span}>{country.population}</span> </h4>
                            <h4>Continent: <span className={s.span}>{country.continent}</span></h4>
                            <h4>Subregion: <span className={s.span}> {country.subregion}</span></h4>
                            <h4>Area: <span className={s.span}>{country.area}</span></h4>
                            <h4>Capital: <span className={s.span}>{country.capital}</span></h4>
                        </div>
                    </div>
                    :
                    <div className={s.loader}>
                        <div className={s.spinner}>
                            <div className={s.inner}>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Detail;
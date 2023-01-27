import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Style from './Detail.module.css';

const Detail = () => {

    const [country, setCountry] = useState()
    let { id } = useParams()
    useEffect(() => {
        axios.get(`/countries/${id}`)
            .then(res => setCountry(res.data))

    }, [id])

    return (
        
        <div className={Style.container}>
            {
                country ?
                    <div className={Style.card}>
                        <div className={Style.flex}>
                            <h3>{country.id}</h3>
                            <Link to='/home'>
                                <button className={Style.btn}>X</button>
                            </Link>
                        </div>
                        <img className={Style.flag} src={country.flag} alt={country.name} />
                        <h3 className={Style.title}>{country.name}</h3>
                        <div className={Style.grid}>
                            <h4>Population: <span className={Style.span}>{country.population}</span> </h4>
                            <h4>Continent: <span className={Style.span}>{country.continent}</span></h4>
                            <h4>Subregion: <span className={Style.span}> {country.subregion}</span></h4>
                            <h4>Area: <span className={Style.span}>{country.area}</span></h4>
                            <h4>Capital: <span className={Style.span}>{country.capital}</span></h4>
                        </div>
                    </div>
                    :
                    <div className={Style.loader}>
                        <div className={Style.spinner}>
                            <div className={Style.inner}>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Detail;
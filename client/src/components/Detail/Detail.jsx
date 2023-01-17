import React, { useEffect, useState }from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Style from './Detail.module.css';
import Loader from '../Loader/Loader';
import {AiOutlineClose} from 'react-icons/ai';


const Detail = () => {

  const [country, setCountry] = useState();
  let{id} =useParams();

  useEffect(() => {
    axios.get(`/countries/${id}`)
    .then(responsy => setCountry(responsy.data))
  }, [id]);

  return (
    <div className={Style.container} >
    {country ? 
    <div className={Style.target} >
      <div className={Style.flex} >
        <h3>{country.id}</h3>
        <Link to='/home'>
          <button className={Style.button} ><AiOutlineClose/></button>
        </Link>
      </div>
      <img className={Style.flag} src={country.flag} alt={country.name} />
      <h3 className={Style.name} >{country.name}</h3>
      <div className={Style.info} >
        <h4>Population: <span className={Style.span}>{country.population}</span> </h4>
        <h4>Continent: <span className={Style.span}>{country.continent}</span> </h4>
        <h4>Subregion: <span className={Style.span}>{country.subregion}</span></h4>
        <h4>Area: <span className={Style.span}>{country.area}</span></h4>
        <h4>Capital: <span className={Style.span}>{country.capital}</span></h4>
      </div>
      </div>
      :
        <Loader />
      }
      </div>
    
  )
}

export default Detail

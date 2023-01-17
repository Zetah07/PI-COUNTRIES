import React, { useState, useEffect } from 'react'
import '../Share/Continents.css'
import Style from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {getActivities, getAllCountries} from '../../store/actions';
import TitleWrite from '../Share/TitleWrite';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import Errors from '../Errors/Errors';
import Check from '../Check/Check';
import Create from '../Create/Create';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';



function Home() {

  //title interactive
let title = 'Welcome My Individual Proyect';

//ordering and filter
  const dispatch = useDispatch();
  const sorting = useSelector (state => state.sorting);
  const error = useSelector (state => state.error);

  
  // const countries = useSelector (state => state.countries);
  const activities = useSelector (state => state.activities);
  const check = useSelector (state => state.check)
  const[form, setForm] =useState (false);
  const [sort, setSort] = useState('name');
  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(9);
  const max = Math.ceil(sorting.length / perPage);


  useEffect(() => {
    if(!sorting[0]) {
      dispatch(getAllCountries())
    }
    if(!activities[0]) {
      dispatch(getActivities())
    }
  }, [dispatch, sorting, activities])

  return (
    <> 
      <TitleWrite title={title} />
      <div className={Style.container}>
      {sorting.length ?
                <div>
                    <Nav setForm={setForm} />
                    {error && <Errors />}
                    {check && <Check />}
                    {form && <Create setForm={setForm} />}
                    <Filters setSort={setSort} sort={sort} setInput={setInput} setCurrent={setCurrent} />
                    <div className={Style.gridContainer}>
                        <div className={Style.grid}>
                            {sorting?.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map(e => {
                                return (
                                    <div className={e.continent.split(' ')[0].toLowerCase()} key={e.id}  >
                                        <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination current={current} setCurrent={setCurrent} max={max} input={input} setInput={setInput} />
                </div> : <Loader />
            }
    </div>
    </>
    )
}

export default Home
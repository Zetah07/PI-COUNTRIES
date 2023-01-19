import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking, getAllCountries } from "../../store/actions";
import Style from './Create.module.css';
import { AiOutlineClose } from "react-icons/ai";
import { CgArrowTopLeftR } from "react-icons/cg";
import { Link } from "react-router-dom";


const Create = ({ setForm }) => {
    let countries = useSelector(state => state.countries)
    let sorting = useSelector(state => state.sorting)

    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [create, setCreate] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: [],
    })

    useEffect(() => {
        setError(validateCreate(create))
        if (!sorting[0]) dispatch(getAllCountries())

    }, [dispatch, sorting, create])


    const validateCreate = (create) => {
        const errors = {}
        if (create.name.length < 3) errors.name = true

        if (create.difficulty === '') errors.difficulty = 'error'

        if (create.duration === '') errors.duration = 'error'

        if (create.season === '') errors.season = 'error'

        if (!create.country[0]) errors.country = 'error'

        return errors
    }

    const handleInput = (e) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        if (e.target.value !== 'countries') {
            setCreate({
                ...create,
                country: [...create.country, e.target.value],
            })
        }
    }

    const handleCreate = (e) => {
        axios.post('/activities', create)
        setForm(false)
        dispatch(checking())
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setCreate({
            ...create,
            country: create.country.filter(el => el !== e.target.value)
        })
    }


  return (
<div className={Style.container}>
            <div className={Style.card}>
                <div className={Style.flex}>
          <Link className={Style.close} to='/home'>
            <CgArrowTopLeftR />
          </Link>
       </div>
                <form className={Style.form} onSubmit={handleCreate} >
                    <div>
                        <h2 className={Style.title}>Create Activity</h2>
                        <div className={Style.column}>
                            <div className={Style.div}>
                                <label className={Style.label} >Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  className={Style.input}
                  autoComplete="off"
                />
              </div>
              {error.name && <span><AiOutlineClose /></span>}
              </div>
                        <div className={Style.column}>
                            <div className={Style.div} >
                                <label className={Style.label} >Difficulty</label>
                                <select name="difficulty" onChange={handleInput} className={Style.input}>
                                    <option value="">--Select Difficulty--</option>
                                    <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                                    <option value="2">⭐⭐ ☆ ☆ ☆</option>
                                    <option value="3">⭐⭐⭐ ☆ ☆</option>
                                    <option value="4">⭐⭐⭐⭐ ☆</option>
                                    <option value="5">⭐⭐⭐⭐⭐</option>
                                </select>
                            </div>
                            {error.difficulty && <span><AiOutlineClose /></span>}
                            </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Duration</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleInput}
                  className={Style.input}
                  min="1"
                  max="100"
                />
              </div>
              {error.duration && <span><AiOutlineClose /></span>}
              </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Season</label>
                <select
                  name="season"
                  onChange={handleInput}
                  className={Style.input}
                >
                  <option value="">--Select Season--</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
              </div>
              {error.season && <span><AiOutlineClose /></span>}
              </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Countries</label>
                <select
                  name="country"
                  onChange={handleSelect}
                  className={Style.input}
                >
                  <option value="countries">--Select Countries--</option>
                  {countries?.map((e, i) => (
                    <option key={i} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              {error.country && <span><AiOutlineClose /></span>}
              </div>
            <div className={Style.flagBox}>
              {/* {create.country?.map(e => <button onClick={handleDelete} key={e}><img className={s.flag} src={e} alt='flag' /></button>)} */}
              {create.country?.map((e, i) => (
                <span key={i} className={Style.span} value={e}>
                  {e}
                  <button
                    onClick={handleDelete}
                    className={Style.btnDelete}
                    value={e}
                  >
                    <AiOutlineClose />
                  </button>{" "}
                </span>
              ))}
            </div>
          </div>
          <div className={Style.btnBox}>
            <button
              type="submit"
              className={Style.btn}
              hidden={Object.entries(error).length ? true : false}
            >
              <span className={Style.shadow}></span>
              <span className={Style.edge}></span>
              <span className={Style.front}>Create</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;

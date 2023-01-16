import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, checking } from "../../actions/actions";
import axios from "axios";
import Style from "./Create.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Create = ({ setForm }) => {
  const countries = useSelector((state) => state.countries);
  const sorting = useSelector((state) => state.sorting);

  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [create, setCreate] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  useEffect(() => {
    setError(validateCreate(create));
    if (!sorting[0]) dispatch(getCountries());
  }, [dispatch, sorting, create]);

  const validateCreate = (create) => {
    const errors = {};
    if (!create.name) errors.name = "Name is required";
    if (!create.difficulty) errors.difficulty = "Difficulty is required";
    if (!create.duration) errors.duration = "Duration is required";
    if (!create.season) errors.season = "Season is required";
    if (!create.country) errors.country = "Country is required";

    return errors;
  };

  const handleInput = (event) => {
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setCreate({
      ...create,
      country: [...create.country, event.target.value],
    });
  };

  const handleCreate = (event) => {
    axios.post("/activities", create);
    setForm(false);
    dispatch(checking());
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setCreate({
      ...create,
      country: create.country.filter((cache) => cache !== event.target.value),
    });
  };

  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.buttonBox}>
          <button className={Style.close} onClick={() => setForm(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <form className={Style.form} onSubmit={handleCreate}>
          <div>
            <h2 className={Style.title}>Create Activity</h2>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  className={Style.input}
                  autoComplete="off"
                />
              </div>
              {error.name && (
                <span className={Style.close}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Difficulty</label>
                <select
                  name="difficulty"
                  onChange={handleInput}
                  className={Style.input}
                >
                  <option value="">Select</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              {error.difficulty && (
                <span className={Style.close}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Duration</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleInput}
                  className={Style.input}
                  autoComplete="off"
                  min="1"
                  max="100"
                />
              </div>
              {error.duration && (
                <span className={Style.close}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Season</label>
                <select
                  name="season"
                  onChange={handleInput}
                  className={Style.input}
                >
                  <option value="">Select</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
              </div>
              {error.season && (
                <span className={Style.close}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className={Style.column}>
              <div className={Style.div}>
                <label className={Style.label}>Countries</label>
                <select
                  name="country"
                  onChange={handleSelect}
                  className={Style.input}
                >
                  <option value="">Select Countries</option>
                  {countries?.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              {error.country && (
                <span className={Style.close}>
                  <AiOutlineClose />
                </span>
              )}
            </div>
            <div className={Style.flagBox}>
              
              {create.country?.map((event, index) => (
                <span key={index} className={Style.span} value={event}>
                  {event}
                  <button
                    onClick={handleDelete}
                    className={Style.btnDelete}
                    value={event}
                  >
                    <AiOutlineClose />
                  </button>{" "}
                </span>
              ))}
            </div>
            <div classname={Style.buttonBox} >
              <button className={Style.button} type="submit" hidden={Object.entries(error).length ? true : false} >
              <span className={Style.shadow}></span>
              <span className={Style.edge}></span>
              <span className={Style.front}>Create</span>
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

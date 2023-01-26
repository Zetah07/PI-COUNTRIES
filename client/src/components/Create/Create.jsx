import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking, getCountries } from "../../redux/actions";
import s from "./Create.module.css";

const Create = ({ setForm }) => {
  let countries = useSelector((state) => state.countries);
  let sorting = useSelector((state) => state.sorting);

  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [create, setCreate] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
    // flags: ''
  });

  useEffect(() => {
    setError(validateCreate(create));
    if (!sorting[0]) dispatch(getCountries());
  }, [dispatch, sorting, create]);

  const validateCreate = (create) => {
    const errors = {};
    if (create.name.length < 3) errors.name = true;

    if (create.difficulty === "") errors.difficulty = "error";

    if (create.duration === "") errors.duration = "error";

    if (create.season === "") errors.season = "error";

    if (!create.country[0]) errors.country = "error";

    return errors;
  };

  const handleInput = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (event) => {
    if (event.target.value !== "countries") {
      setCreate({
        ...create,
        country: [...create.country, event.target.value],
        // flags: [...create.flags, e.target.valor]
      });
    }
  };

  const handleCreate = () => {
    axios.post("/activities", create);
    setForm(false);
    dispatch(checking());
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setCreate({
      ...create,
      country: create.country.filter(
        (country) => country !== event.target.value
      ),
    });
  };

  let countriesSorted = countries.sort((a, b) => a.name.localeCompare(b.name));  

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.flex}>
          <button className={s.close} onClick={() => setForm(false)}>
            X
          </button>
        </div>
        <form className={s.form} onSubmit={handleCreate}>
          <div className={s.input_container}>
            <h2 className={s.title}>Create Activity</h2>
            <div className={s.column}>
              <div className={s.div}>
                <label className={s.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  className={s.input}
                  autoComplete="off"
                />
              </div>
              {error.name && <span className={s.x}>❗❗</span>}
            </div>
            <div className={s.column}>
              <div className={s.div}>
                <label className={s.label}>Difficulty</label>
                <select
                  name="difficulty"
                  onChange={handleInput}
                  className={s.input}
                >
                  <option value="">--Select Difficulty--</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              {error.difficulty && <span className={s.x}>❗❗</span>}
            </div>
            <div className={s.column}>
              <div className={s.div}>
                <label className={s.label}>Duration</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleInput}
                  className={s.input}
                  min="1"
                  max="100"
                />
              </div>
              {error.duration && <span className={s.x}>❗❗</span>}
            </div>
            <div className={s.column}>
              <div className={s.div}>
                <label className={s.label}>Season</label>
                <select
                  name="season"
                  onChange={handleInput}
                  className={s.input}
                >
                  <option value="">--Select Season--</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
              </div>
              {error.season && <span className={s.x}>❗❗</span>}
            </div>
            <div className={s.column}>
              <div className={s.div}>
                <label className={s.label}>Countries</label>
                <select
                  name="country"
                  onChange={handleSelect}
                  className={s.input}
                >
                  <option value="countries">--Select Countries--</option>
                  {countriesSorted?.map((e, i) => (
                    <option key={i} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              {error.country && <span className={s.x}>❗❗</span>}
            </div>
            <div className={s.flagBox}>
              {create.country?.map((country, i) => (
                <span key={i} className={s.span} value={country}>
                  {country}
                  <button
                    onClick={handleDelete}
                    className={s.btnDelete}
                    value={country}
                  >
                    x
                  </button>{" "}
                </span>
              ))}
            </div>
          </div>
          <div className={s.btnBox}>
            <button
              type="submit"
              className={s.btn}
              hidden={Object.entries(error).length ? true : false}
            >
              <span className={s.shadow}></span>
              <span className={s.edge}></span>
              <span className={s.front}>Create</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;

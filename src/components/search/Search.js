import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from '../../Axios';
import ApiContext from '../../context/Context';

import './search.css'



export default function Search() {

  let { getSingleItemByName } = useContext(ApiContext)

  const [input, setInput] = useState(null);
  const [suggestions, setSuggestions] = useState();
  let [isEmpty, setIsEmpty] = useState(true)


  // set suggested data to state
  const sugHandler = () => {
    if (isEmpty === false) {
      axios.get(`api/json/v1/1/search.php?s=${input}`).then((res) => {
        const mealNames = res.data.meals.map((meal) => meal.strMeal);
        setSuggestions(mealNames);
      });
    } else {
      setInput(null)
    }

  };


  // set data when input is changed
  const handleInputChange = (e) => {
    if (e.target.value === '') {
      setIsEmpty(true)
      setInput('')

    } else {
      setInput(e.target.value);
      setIsEmpty(false)
    }
  };




  useEffect(() => {
    setSuggestions('')
    sugHandler()
  }, [input])




  return (
    <div>
      <div className="hero-input d-flex  px-3">
        <FaSearch onClick={() => getSingleItemByName(input)} className="mt-2 pt-1 search-icon" />
        <input
          onChange={handleInputChange}
          value={input}
          className="search-inp px-3"
          type="text"
          placeholder="Search"
        />
        <div className="search-more">
          <p className="mx-1 p-2 more-items">All</p>
        </div>
      </div>


      {!isEmpty && <div className="sug-main">
        <div className="sugbox">
          {suggestions && suggestions.length > 0 && (

            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <div onClick={() => setInput(suggestion)} className='border-bottom p-2 sug-items' key={index}>{suggestion}</div>
              ))}
            </div>

          )}
        </div>
      </div>
      }
    </div>
  );
}

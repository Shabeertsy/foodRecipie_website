import React, { useContext, useEffect, useState } from 'react'
import axios from '../../Axios'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ApiContext from '../../context/Context'

import './singleitem.css'



export default function SingleItem() {
  let [meal, setMeal] = useState()

  const array = ['1', '2', '3', '4', '5', '6', '7',' 8', '9', '10', '11', '12', '13', '14', '15', '16',' 17', '18', '19', '20']

  let { singleItemData } = useContext(ApiContext)



  console.log('pagesssd', singleItemData);

  useEffect(() => {

  }, [])


  return (
    <div>
      <Navbar />
      <div className="single-items-main">
        <div className="single-container">
          <div className="container mt-5 single-img-container">
            {
              <img className='single-item-img' src={singleItemData && singleItemData[0].strMealThumb} alt="" />
            }

            <div className="single-item-shadow">

              <div>
                <h4>{singleItemData && singleItemData[0].strMeal}</h4>
                <p className='text-center'>{singleItemData && singleItemData[0].strArea}</p>
                <p className='text-center'>{singleItemData && singleItemData[0].strCategory}</p>
              </div>
            </div>

          </div>

        </div>
        <div className="single-recipe">
          <div className="container">
            <div className="row"> 
              <div className="col-lg-6 text-center">
                <h4 className='text-center mt-5 mb-5'>Ingredients</h4>

                {
                  array.map((obj) => {
                    console.log('objj',singleItemData && singleItemData[0].strIngredient1);
                    return (
                      singleItemData && singleItemData[0]['strIngredient'+obj] && <p>{singleItemData[0]['strIngredient'+obj]} : { singleItemData[0]['strMeasure'+obj]}</p>

                     
                    )
                  })
                }
              </div>
              <div className="col-lg-6">
                <h4 className='text-center mt-5 mb-5'>Instructions</h4>
                <p>{singleItemData && singleItemData[0].strInstructions}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import ApiContext from '../../context/Context';
import Search from '../search/Search';
import Footer from '../footer/Footer';
import axios from '../../Axios';


import './Hero.css'



export default function Hero() {

    let { category, filteredData, filteredItem,areaDishes, getSingleItem, currentCategory } = useContext(ApiContext)
    let [cover, setCover] = useState()



    let coverImage = () => {
        axios.get('api/json/v1/1/random.php').then((obj) => {
            console.log('cover', obj.data.meals[0]);
            setCover(obj.data.meals[0])
        })
    }


    useEffect(() => {
        filteredItem()
        coverImage()
    }, [])


    console.log('filterd data', currentCategory);

    return (
        <div>
            <Navbar />
            <div className="hero-main font-family">

                {
                    cover ?
                        <div className="hero-image cover-image mb-5" style={cover && {
                            backgroundImage: `url(${cover.strMealThumb})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                            height: '60vh',
                            width: '100vw'
                        }}>

                            <div className="shadow text-light">
                                <h1 className=' font-family pt-5 px-3'>Find your Favourite recipe</h1>
                                <p className="px-3 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore quasi sint neque nobis nostrum laboriosam modi maxime, saepe eligendi? Ea, omnis aut amet necessitatibus <br /> in quia consequuntur beatae vel ut.</p>
                            </div>
                            areaDishes
                        </div> : <div className="on-load">
                            <Loader />
                        </div>
                }


                <div className="position">

                    <div className="search-container mb-5">
                        <Search />
                    </div>


                    <div className="hero-container">
                        <div className="categories-container mb-5 ">
                            {
                                category && category.map((obj) => {
                                    return (
                                        <div >
                                            <div className="catergory-btn mb-4 mx-4">
                                                <div onClick={() => filteredItem(obj.strCategory)} className='category' >
                                                    <img className='category-img shadow-lg' src={obj.strCategoryThumb} alt="" />
                                                    {obj.strCategory}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <h4 className='text-dark mt-5 mx-3 font-family cat-heading'>{currentCategory ? currentCategory : ' Beef'} Dishes</h4>


                        {/* show filtered items */}
                        <div className="item-cards">
                            {
                                filteredData ? filteredData.map((obj, index) => {
                                    if (index < 5) {
                                        return (


                                            <div class="card mt-3 mx-2">
                                                <div onClick={() => getSingleItem(obj.idMeal)} class="card-image">
                                                    <div>
                                                        <img className=' filtered-image' src={obj.strMealThumb} alt="" />

                                                    </div>
                                                </div>
                                                <div class="heading mt-3">{obj.strMeal}
                                                </div>
                                            </div>

                                        )
                                    }
                                }) : <div className="on-load">
                                    <Loader />
                                </div>
                            }

                        </div>


                        <h4 className='text-dark mt-5 mx-3 font-family cat-heading'>Canadian </h4>

                           {/* show filtered items by area */}
                           <div className="item-cards">
                           {
                               areaDishes && areaDishes.map((obj, index) => {
                                   if (index < 5) {
                                       return (


                                           <div class="card mt-3 mx-2">
                                               <div onClick={() => getSingleItem(obj.idMeal)} class="card-image">
                                                   <div>
                                                       <img className=' filtered-image' src={obj.strMealThumb} alt="" />

                                                   </div>
                                               </div>
                                               <div class="heading mt-3">{obj.strMeal}
                                               </div>
                                           </div>

                                       )
                                   }
                               }) 
                           }

                       </div>




                        <div className="footers mt-4">
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

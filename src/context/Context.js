import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../Axios';



const ApiContext = createContext()
export default ApiContext;


export const ApiProvider = ({ children }) => {
    let [category, setCategory] = useState()
    let [filteredData, setFilteredData] = useState()
    let [singleItemData, setSigleItemData] = useState()
    let [currentCategory, setCurrentCategory] = useState()
    let [areaDishes, setAreaDishes] = useState()
    let [area,setArea]=useState()

    let navigate = useNavigate()



   let areaL=''

    // get all categories
    const catList = () => {
        axios.get('api/json/v1/1/categories.php').then((res) => {
            setCategory(res.data.categories)
        })
    }



    // get item filterd by category
    let filteredItem = (cat) => {
        setCurrentCategory(cat)
        axios.get(`api/json/v1/1/filter.php?c=${cat !== undefined ? cat : 'beef'}`).then((res) => {
            console.log('items', res.data.meals);
            setFilteredData(res.data.meals)
        })
    }


    // get single item by id
    let getSingleItem = (itemId) => {
        axios.get(`api/json/v1/1/lookup.php?i=${itemId}`).then((res) => {
            console.log("singel", res.data.meals);
            setSigleItemData(res.data.meals)

            navigate('single')
        })
    }


    // get single item by name
    let getSingleItemByName = (itemName) => {
        axios.get(`api/json/v1/1/search.php?s=${itemName}`).then((res) => {
            setSigleItemData(res.data.meals)
            console.log('resss', res.data);

            navigate('single')
        })
    }

   


    //    filterd by area
    let filterdByArea = () => {

        axios.get(`api/json/v1/1/filter.php?a=canadian`).then((res) => {
            console.log("area", res.data.meals);
            setAreaDishes(res.data.meals)
        })
    }


    let contextData = {
        category: category,
        filteredData: filteredData,
        filteredItem: filteredItem,
        getSingleItem: getSingleItem,
        singleItemData: singleItemData,
        getSingleItemByName: getSingleItemByName,
        currentCategory: currentCategory,
        areaDishes: areaDishes,
    }

    

    useEffect(() => {
        catList()
        filterdByArea()

    }, [])



    return (

        <ApiContext.Provider value={contextData}>
            {children}
        </ApiContext.Provider>
    )
}

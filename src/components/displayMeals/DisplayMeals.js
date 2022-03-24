import React from 'react';
import './DisplayMeals.css'
import { FaAccusoft } from "react-icons/fa";

const DisplayMeals = (props) => {
    // console.log(props);
    const {strMealThumb, strMeal, strArea } = props.meals;
    return (
        <div className='meal-container'>
            <h1>Name:{strMeal}</h1>
            <img className='meals-image' src={strMealThumb} alt="" />
            <h4>Area: {strArea}</h4>

            <button  onClick={() => props.pressOrder(props.meals)}>Order <FaAccusoft /></button>
        </div>
    );
};

export default DisplayMeals;
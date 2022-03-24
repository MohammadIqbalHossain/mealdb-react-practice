import React, { useEffect, useState } from 'react';
import AddedItems from '../AddedItems/AddedItems';
import DisplayMeals from '../displayMeals/DisplayMeals';
import './Meals.css'

const Meals = (props) => {
    const [meals, setMeals] = useState([]);
    const [item, setItems] = useState([])
    // console.log(props)
 

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    const pressOrder = (meal) => {
        console.log('Items', meal)
        const newMeal = [...item, meal];
        setItems(newMeal)
    }

    return (
        <div className='container'>

            <div className='meals-container'>
            {
                meals.map(meal => <DisplayMeals meals={meal} Key={meal.idMeal} pressOrder={pressOrder}></DisplayMeals>)
            }
            </div>
            <AddedItems meals={item}></AddedItems>
        </div>
    );
};

export default Meals;
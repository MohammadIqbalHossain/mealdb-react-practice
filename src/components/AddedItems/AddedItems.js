import React from 'react';


const AddedItems = (props) => {
 console.log(props)
    
    return (
        <div>
            <h1>Name:{props.meals.length} </h1>
            
            {
                props.meals.map(item => <h5>Items name: {item.strMeal}</h5>)
            }
        </div>
    );
};

export default AddedItems;
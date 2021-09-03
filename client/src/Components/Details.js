import React from 'react'

export const Details = (props) => {
    return (
        <ul>
            <li>Genus: {props.fruitNames.genus}</li>
            
            <li>Name: {props.fruitNames.name}</li>
            
            <li>Family: {props.fruitNames.family}</li>
            
            <li>Order: {props.fruitNames.order}</li>
            
            <li>Carbohydrates{props.fruitNames.nutritions.carbohydrates}</li>
            
            <li>Protein: {props.fruitNames.nutritions.protein}</li>
            
            <li>Fat: {props.fruitNames.nutritions.fat}</li>
            
            <li>Calories: {props.fruitNames.nutritions.calories}</li>
            
            <li>Sugar: {props.fruitNames.nutritions.sugar}</li>
            
        </ul>
    )
}

// {
//     "genus": "Malus",
//     "name": "Apple",
//     "id": 6,
//     "family": "Rosaceae",
//     "order": "Rosales",
//     "nutritions": {
//         "carbohydrates": 11.4,
//         "protein": 0.3,
//         "fat": 0.4,
//         "calories": 52,
//         "sugar": 10.3
//     }
// },
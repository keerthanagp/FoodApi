import React from 'react'
import '../App.css'

const Receipe = ({receipe})=>{
const {idMeal, strMeal, strCategory, strMealThumb, strYoutube} =receipe;
    return(
        <div className='card'>
            <img 
            src= {strMealThumb}
            alt= {strMeal}
            className='card-image'
            />
            <div className='card-body'>
                <span className='category'>{strCategory}</span>
                <h3>{strMeal}</h3>
                <a className='vedio' href= {"https://www.themealdb.com/youtube/" + strYoutube} target='_blank'>vedio</a>
                <a className='receipess' href={"https://www.themealdb.com/meal/" + idMeal} target= "_blank">Receipes</a>
            </div>

        </div>
    )
}

export default Receipe;
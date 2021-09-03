import React from 'react'
import './Cards.css'
import { FruitCards } from './FruitCards'

export const CardList=(props)=>{
 
  return (
    <div className='grid-container '>
      {props.fruits.map(result=>(
          <FruitCards key={result.id} result={result}/> 
        ))}
    </div>
  )

}
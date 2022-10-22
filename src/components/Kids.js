import React ,{useState} from 'react'
import MoviesList from './MoviesList'
import './nav.css'

export default function Kids({movies}) {
   
  return (
    <div className='Container'>
         <MoviesList data={movies}/>
     
</div>
  )
}

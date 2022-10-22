import React  from 'react'
import MoviesList from './MoviesList'
import './nav.css'

export default function Popular({movies}) {
   
  return (
    <div className='Container'>
         <MoviesList data={movies}/>
     
</div>
  )
}
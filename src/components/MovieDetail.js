import React from 'react';
import {Link, useLocation} from "react-router-dom"
import './detail.css'
export default function MovieDetail() {

    const location = useLocation() ; 
  return (
    <div >
       
        <div   className='detailllll'>
        <h1>{location.state.title}</h1>
        <iframe className='taille'  src={location.state.Trailer}></iframe>
        <p className='taille'>{location.state.detail}</p>
        </div>
    </div>
    
  )
}

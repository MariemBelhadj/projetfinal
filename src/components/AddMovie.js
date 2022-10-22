import React from 'react'
import { useState } from 'react'
import './nav.css'

export default function AddMovie({ handleAdd }) {
    const [view, setView] = useState(false)
    const [newMovie, setNewMovie] = useState({
        id: 4,
        title: '',
        image: '',
        detail: '',
        rate: 2
    })
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd(newMovie)
    };
    return (
        <div>
            <div style={{display:view?'none':'flex'}} className='bouton'>
            <button className='addMovie btn-3'   onClick={()=>setView((prev)=>!prev)}>AddMovie</button>
            </div>
            <div style={{ display: view ? 'inline' : 'none' }} >
            <h1 className='addMoviee'>Add Movie</h1>
                <div className='inputMovie'>
                    <input type="text" name="title" onChange={(e) => handleChange(e)} placeholder="title" />
                    <input type="text" name="detail" onChange={(e) => handleChange(e)} placeholder="detail" />
                    <input type="text" name="image" onChange={(e) => handleChange(e)} placeholder="image URL" />
                    <input type="number" name="rate" onChange={(e) => handleChange(e)} placeholder="rate" />
                    <input type="text" name="category" onChange={(e) => handleChange(e)} placeholder="category" />
                </div>
                <div className="buttonMovie" >
                    <button  onClick={(e) => {setView((prev)=>!prev); handleSubmit(e)}}>Add </button>
                </div>
            </div>
        </div>
    )
}

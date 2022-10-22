import React from "react";
import Rate from './Rate';
import { TbSearch } from 'react-icons/tb';
import { Link } from "react-router-dom";
import './nav.css'

function Search({ handleSearch, setRatingSearch, ratingSearch }) {
    return (
        <div>

            <div className='nave' >
                <div className="right">
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/Popular" className="nav">Popular</Link>
                    <Link to="/Kids" className="nav">Kids</Link>
                    <Link to="/Drama" className="nav">Drama</Link>
                    <Link to="/Action" className="nav">Action</Link>
                </div>

                <div className="left">

                    <form>
                        <div className="navSearch">

                            <TbSearch fontSize="medium" className="" />
                            <input onChange={handleSearch} type="search" placeholder="Search Movie Name" />
                        </div>

                    </form>
                    <div style={{ marginLeft: "50px" }}>
                        <Rate ChangeRatingSearch={setRatingSearch} rate={ratingSearch} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Search;
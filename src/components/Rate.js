import React from "react";



const Rate = ({ ChangeRatingSearch = () => {}, rate }) => {
    const stars = (x) => {
      let star = [];
      for (let i = 0 ; i < 5; i++) {
        if (i < x) {
          star.push(
            <span className='rating' key={i}  onClick={() => ChangeRatingSearch(i + 1)}  style={{ cursor: 'pointer' }}>
              ★
            </span>
          );
        } else {
          star.push(
            <span
              className='rating'
              key={i}
              style={{ cursor: 'pointer' }}
              onClick={() => ChangeRatingSearch(i + 1)}
            >
              ☆
            </span>
          );
        }
      }
      return star;
    };
    return <div>{stars(rate)}</div>;
  };
  
  
  export default Rate;
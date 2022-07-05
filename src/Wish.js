import React from 'react';
import './wishes.css';

function Wish({author, msg}) {
  return (
    <div className="wish">
        <p className="wish__msg"> { msg } </p>
        <p className="wish__author"> { author } </p>
    </div>
  )
}

export default Wish
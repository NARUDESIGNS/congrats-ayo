import React from 'react';
import allWishes from './allWishes';
import Wish from './Wish';
import './wishes.css';

function Wishes() {
    let id = 0;
    return (
        <div className="wishes-container">
            {
                allWishes.map(wish => (
                    <Wish msg={wish.msg} author={wish.author} key={id++}/>
                ))
            }
        </div>
    )
}

export default Wishes
import React from 'react';
import Card from '../Card/Card';
import './card-list.style.css'

const CardList = ({monsters}) => {
    console.log(monsters)
    return (
        <div className="card-list">
        {
            monsters.map(monster=>(<Card monster={monster} key={monster.id}/>))
        }
        </div>
    );
};

export default CardList;
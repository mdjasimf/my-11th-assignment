import React from 'react';
import './Fruits.css';

const Fruits = ({ fruit }) => {
    const { name, _id, img } = fruit;
    return (
        <div className='fruits col-4'>
            <h1 className='text-center'>{name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Fruits;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruits.css';

const Fruits = ({ fruit }) => {
    const { name, _id, img } = fruit;

    const navigate = useNavigate();
    const handeleInventory = (id) => {
        navigate(`/inventory${id}`);
    }


    return (
        <div className='fruits col-4 my-2'>
            <h3 className='text-center'>{name}</h3>
            <img src={img} alt="" />
            <button onClick={() => handeleInventory(_id)} type="button" className="btn btn-info w-100">Update</button>
        </div>
    );
};

export default Fruits;
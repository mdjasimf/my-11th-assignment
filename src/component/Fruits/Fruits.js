import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruits.css';

const Fruits = ({ fruit }) => {
    const { name, _id, img, quantity, shortDescriptions, supplierName, price } = fruit;
    const navigate = useNavigate();
    const handeleInventory = (id) => {
        navigate(`/inventory${id}`);
    }


    return (
        <div className='fruits col-4 my-2'>
            <h3 className='text-center'>{name}</h3>
            <img src={img} alt="" />
            <h6>Supplier Name: {supplierName}</h6>
            <h6>Price:$ {price} Per kg</h6>
            <h6>Quantity: {quantity}kg</h6>
            <h6>{shortDescriptions.slice(0, 50)}....</h6>
            <button onClick={() => handeleInventory(_id)} type="button" className="btn btn-info w-100">Update</button>
        </div>
    );
};

export default Fruits;
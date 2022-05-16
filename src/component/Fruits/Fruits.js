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
            <h3 className='text-center text-danger fs-6'><u>{name}</u></h3>
            <img src={img} alt="" />
            <h6 className='fs-6'><b>Supplier Name:</b> {supplierName}</h6>
            <h6 className='fs-6'><b>Price:</b> ${price} Per kg</h6>
            <h6 className='fs-6'><b>Quantity:</b> {quantity}kg</h6>
            <h6 className='fs-6'>{shortDescriptions}</h6>
            <button onClick={() => handeleInventory(_id)} type="button" className="update-button btn btn-info w-100">Update</button>
        </div>
    );
};

export default Fruits;
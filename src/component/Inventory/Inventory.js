import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/allFruits/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setFruit(data));
    }, [id]);


    const handleUpdateQuantity = () => {
        const quantity = fruit.quantity - 1;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/allFruits/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Delivery successfully');
            });
    }



    return (
        <div className='d-flex justify-content-center'>
            <div className='fruits col-4 my-2 border border-dark rounded p-4'>
                <h1 className='text-center'>{fruit.name}</h1>
                <img className='border border' src={fruit.img} alt="" />
                <h3><u>Supplier Name:</u> {fruit.supplierName}</h3>
                <h3><u>Price:</u> $ {fruit.price} Per kg</h3>
                <h4><u>Quantity:</u> {fruit.quantity}kg</h4>
                <h6>{fruit.shortDescriptions}</h6>
                <div className='d-flex justify-content-center'>
                    <div className='mx-3'>
                        <button type="button" className="btn btn-info w-100" onClick={handleUpdateQuantity}>Deliver</button>
                    </div>
                    <div className='mx-3'>
                        <button type="button" className="btn btn-info w-100">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
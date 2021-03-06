import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    useEffect(() => {
        const url = `https://young-earth-40481.herokuapp.com/allFruits/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setFruit(data));
    }, [id]);

    const { quantity } = fruit;
    const handleReduceQuantity = () => {
        if (quantity === 0) {
            return alert('Sold out')
        }
        const newQuantity = quantity - 1;
        const newFruit = { ...fruit, quantity: newQuantity }
        setFruit(newFruit);
        const url = `https://young-earth-40481.herokuapp.com/allFruits/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFruit)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Delivery successfully');
            });
    }

    const handleAddQuantity = (event) => {
        event.preventDefault();
        const newAddQuantity = event.target.name.value;
        const Addquantity = parseInt(quantity) + parseInt(newAddQuantity);
        const updateQuantity = { ...fruit, quantity: Addquantity };
        setFruit(updateQuantity);
        const url = `https://young-earth-40481.herokuapp.com/allFruits/${id}`;
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
                alert('Restock successfully');
                event.target.reset();
            });
    }



    return (
        <div className='d-flex justify-content-center'>
            <div className='fruits col-6 mx-auto border border-dark rounded p-2'>
                <h1 className='text-center'>{fruit.name}</h1>
                <img className='border border img' src={fruit.img} alt="" />
                <h3><u>Supplier Name:</u> {fruit.supplierName}</h3>
                <h3><u>Price:</u> $ {fruit.price} Per kg</h3>
                <h4><u>Quantity:</u> {fruit.quantity}kg</h4>
                <h6>Id: {fruit._id}</h6>
                <h6>{fruit.shortDescriptions}</h6>

                <div className='d-flex justify-content-center'>
                    <div className='mx-3'>
                        <button type="button" className="btn btn-info w-100" onClick={handleReduceQuantity}>Delivered</button>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center mx-auto'>
                <Form onSubmit={handleAddQuantity}>
                    <input className='w-75' type="text" name='name' placeholder='Restock' />
                    <Button variant="primary" type="submit">
                        Add Product Quantity
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Inventory;
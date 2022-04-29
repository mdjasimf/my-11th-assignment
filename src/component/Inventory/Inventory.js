import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const { id } = useParams();
    const [fruit, setFruit] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/allFruits/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setFruit(data));
    }, [])

    return (
        <div className='fruits col-4 my-2'>
            <h1>inventory:{fruit.name}</h1>
        </div>
    );
};

export default Inventory;
import React from 'react';
import useAllFruits from '../../hooks/useAllFruits';

const AllInventory = () => {
    const [allFruits] = useAllFruits();

    const handleFruitsDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `http://localhost:5000/allFruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert('Delete confirm');
                })
        }
    }




    return (
        <div>
            <h1>All Inventory</h1>
            {
                allFruits.map(fruit => <div key={fruit._id}>
                    <h1>{fruit.name}<button onClick={() => handleFruitsDelete(fruit._id)}>X</button></h1>
                </div>)
            }
        </div>
    );
};

export default AllInventory;
import React, { useEffect, useState } from 'react';

const BestDeliver = () => {
    const handleAddNewItem = event => {
        event.preventDefault();
        const addItem = {
            name: event.target.name.value,
            totalDeliver: event.target.deliver.value,
        }
        const url = 'https://young-earth-40481.herokuapp.com/bestDeliverFruits';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)

        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                alert('successfully item added');
                event.target.reset();
            })

    }
    const [bestDelivers, setBestDelivers] = useState([]);
    useEffect(() => {
        fetch('https://young-earth-40481.herokuapp.com/bestDeliverFruits')
            .then(Response => Response.json())
            .then(data => setBestDelivers(data))
    }, [])

    return (
        <div className='my-5'>
            <h1 className='text-center text-success'>Best Deliver Of The Month</h1>
            <div className='w-50 mx-auto  my-2'>
                <div className=' border-bottom border-success'></div>
            </div>
            {
                bestDelivers.map(bestDeliver => <div className='d-flex justify-content-center'>
                    <div key={bestDeliver._id}>
                        <h2>{bestDeliver.name} <span className='text-danger border border-success rounded-circle'>{bestDeliver.totalDeliver}</span>kg</h2>
                    </div>
                </div>)
            }
            <div>
                <form onSubmit={handleAddNewItem} className='text-center'>
                    <input className='w-50 m-2' type="text" name="name" placeholder='Product name' required />
                    <br />
                    <input className='w-50 m-2' type="text" name="deliver" placeholder='total deliver' required /><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BestDeliver;
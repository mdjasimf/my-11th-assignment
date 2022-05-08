import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const AddNewItem = () => {

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const handleAddNewItem = event => {
        event.preventDefault();
        const addItem = {
            name: event.target.name.value,
            img: event.target.photo.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            email: user.email,
            shortDescription: event.target.descriptions.value,

        }
        const url = 'https://young-earth-40481.herokuapp.com/allFruits';
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

    // const handlemyItems = () => {
    //     navigate('/userItems');
    // }

    return (
        <div>
            <h1 className='text-center'>add item</h1>
            <form onSubmit={handleAddNewItem} className='text-center'>
                <input className='w-50 m-2' type="text" name="name" placeholder='name' required />
                <br />
                <input className='w-50 m-2' type="text" name="photo" placeholder='photo url' required />
                <br />
                <input className='w-50 m-2' type="text" name="price" placeholder='price' required />
                <br />
                <input className='w-50 m-2' type="text" name="quantity" placeholder='quantity' required />
                <br />
                <input className='w-50 m-2' type="email" value={user.email} name="email" placeholder='email' required />
                <br />
                <input className='w-50 m-2' type="text" name="descriptions" placeholder='shortDescriptions' required />
                <br />
                <button>add item</button>
            </form>
        </div>
    );
};

export default AddNewItem;
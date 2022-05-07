import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const UserItems = () => {
    const [myItems, setmyItems] = useState([]);
    const [user, loading] = useAuthState(auth);
    console.log(user.email)
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://young-earth-40481.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setmyItems(data);

        }
        getItems();
    }, [user])
    const handleMyItemDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `https://young-earth-40481.herokuapp.com/allFruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItems.filter(myItem => myItem._id !== id)
                    setmyItems(remaining);
                })
        }
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                myItems.map(myItem => <div>
                    <h1>{myItem.name}<button onClick={() => handleMyItemDelete(myItem._id)}>Delete</button></h1>
                </div>
                )
            }
        </div>
    );
};

export default UserItems;
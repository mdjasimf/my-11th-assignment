import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const UserItems = () => {
    const [user, loading] = useAuthState(auth);
    const [myItems, setmyItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
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
            const url = `http://localhost:5000/allFruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
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
import React, { useEffect, useState } from 'react';
import BannerCarosel from '../BannerCarosel/BannerCarosel';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    const [allFruits, setAllfruits] = useState([]);
    console.log(allFruits);
    useEffect(() => {
        const url = 'http://localhost:5000/allFruits';
        fetch(url)
            .then(response => response.json())
            .then(data => setAllfruits(data));
    }, [])
    return (
        <div>
            <BannerCarosel></BannerCarosel>
            <div className='container mx-auto my-5 d-flex justify-content-center row'>
                {
                    allFruits.slice(0, 6).map(fruit => <Fruits
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruits>)
                }
            </div>
        </div>
    );
};

export default Home;
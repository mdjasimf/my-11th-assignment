import { useNavigate } from 'react-router-dom';
import useAllFruits from '../../hooks/useAllFruits';
import BannerCarosel from '../BannerCarosel/BannerCarosel';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    const [allFruits] = useAllFruits();

    const navigate = useNavigate();
    const handleAllInventory = () => {
        navigate('/manageInventory')
    }
    return (
        <div>
            <BannerCarosel></BannerCarosel>
            <h1 className='text-center text-success'>Inventory items</h1>
            <div className='container mx-auto my-5 d-flex justify-content-center row'>
                {
                    allFruits.slice(0, 6).map(fruit => <Fruits
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruits>)
                }
            </div>
            <div className='text-center my-5'>
                <button onClick={() => handleAllInventory()} type="button" className="btn btn-success ">Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;
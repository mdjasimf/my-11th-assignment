import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAllFruits from '../../hooks/useAllFruits';
import BannerCarosel from '../BannerCarosel/BannerCarosel';
import BestDeliver from '../BestDeliver/BestDeliver';
import Footer from '../Footer/Footer';
import Fruits from '../Fruits/Fruits';
import Loading from '../Loading/Loading';
import NewComing from '../NewComing/NewComing';



const Home = () => {
    const [allFruits] = useAllFruits();

    const navigate = useNavigate();
    const handleAllInventory = () => {
        navigate('/manageInventory')
    }
    if (!allFruits) {
        return <Loading></Loading>
    }

    return (
        <div>
            <BannerCarosel></BannerCarosel>
            <h1 className='text-center text-success mt-5'>Inventory items</h1>
            <div className='container mx-auto my-5 d-flex justify-content-center row'>
                {
                    allFruits.slice(0, 6).map(fruit => <Fruits
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruits>)
                }
            </div>
            <div className='text-end my-5'>
                <button onClick={() => handleAllInventory()} type="button" className="btn btn-info ">Manage Inventories</button>
            </div>
            <NewComing></NewComing>
            <BestDeliver></BestDeliver>
            <Footer></Footer>
        </div>
    );
};

export default Home;
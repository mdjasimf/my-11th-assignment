import { useNavigate } from 'react-router-dom';
import useAllFruits from '../../hooks/useAllFruits';
import BannerCarosel from '../BannerCarosel/BannerCarosel';
import BestDeliver from '../BestDeliver/BestDeliver';
import Footer from '../Footer/Footer';
import Fruits from '../Fruits/Fruits';
import Loading from '../Loading/Loading';
import NewComing from '../NewComing/NewComing';
import './Home.css';



const Home = () => {
    const [allFruits] = useAllFruits();

    const navigate = useNavigate();
    const handleAllInventory = () => {
        navigate('/manageInventory')
    }
    if (window.location.reload === true) {
        return <Loading></Loading>
    }
    return (
        <div>
            <BannerCarosel></BannerCarosel>
            <h1 className='text-center text-success mt-5'>Inventory items</h1>
            <div className='w-25 mx-auto  my-1'>
                <div className=' border-bottom border-success'></div>
            </div>
            <div className='container mx-auto my-5 d-flex justify-content-center row'>
                {
                    allFruits.slice(0, 6).map(fruit => <Fruits
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruits>)
                }
            </div>
            <div className='text-end my-5'>
                <button onClick={() => handleAllInventory()} type="button" className="btn btn-info manage-button ">Manage Inventories</button>
            </div>
            <NewComing></NewComing>
            <BestDeliver></BestDeliver>
            <Footer></Footer>
        </div>
    );
};

export default Home;
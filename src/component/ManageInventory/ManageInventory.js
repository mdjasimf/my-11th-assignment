import { useNavigate } from 'react-router-dom';
import useAllFruits from '../../hooks/useAllFruits';

const ManageInventory = () => {
    const navigate = useNavigate();

    const [allFruits, setAllFruits] = useAllFruits();
    const handleFruitsDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `http://localhost:5000/allFruits/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = allFruits.filter(allFruit => allFruit._id !== id)
                    setAllFruits(remaining);
                })
        }
    }

    const handleAddItem = () => {
        navigate('/addnewitem');
    }


    return (
        <div>
            <h1>All Inventory</h1>
            {
                allFruits.map(fruit => <div key={fruit._id}>
                    <h1>{fruit.name}<button onClick={() => handleFruitsDelete(fruit._id)}>Delete</button></h1>
                </div>)
            }
            <button onClick={handleAddItem} type="button" class="btn btn-success">Add item</button>
        </div>
    );
};

export default ManageInventory;
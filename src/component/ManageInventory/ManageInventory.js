import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAllFruits from '../../hooks/useAllFruits';
import './ManageInventory.css'

const ManageInventory = () => {
    const navigate = useNavigate();

    const [allFruits, setAllFruits] = useAllFruits();
    const handleFruitsDelete = id => {
        const permit = window.confirm('Sure want to delete');
        if (permit) {
            const url = `https://young-earth-40481.herokuapp.com/allFruits/${id}`
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
            <Table responsive striped bordered hover variant="dark" className='w-50'>
                <thead>
                    <tr>
                        <th>Fruit Name</th>
                        <th>Fruit</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allFruits.map(fruit => <tr key={fruit._id}>
                            <td>{fruit.name}</td>
                            <td ><img className='fruit-img' src={fruit.img} alt="" /></td>
                            <td>{fruit.quantity}kg</td>
                            <td>${fruit.price}</td>
                            <td><Button variant="primary" onClick={() => handleFruitsDelete(fruit._id)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <div className='my-2'>
                <button onClick={handleAddItem} type="button" class="btn btn-primary">Add item</button>
            </div>
        </div>
    );
};

export default ManageInventory;
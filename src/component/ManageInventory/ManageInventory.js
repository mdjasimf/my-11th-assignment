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

    // const handeleInventory = (id) => {
    //     navigate(`/inventory${id}`);
    // }
    return (
        <div>
            <div className='container'>
                <Table striped bordered hover variant="dark">
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
                                {/* <td><button onClick={() => handeleInventory(allFruits._id)} type="button" className="btn btn-info w-100">Update</button></td> */}
                                <td><Button variant="primary" onClick={() => handleFruitsDelete(fruit._id)}>Delete</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>

            </div>
            <div className='text-center my-5'>
                <button onClick={handleAddItem} type="button" class="btn btn-success">Add item</button>
            </div>
        </div>
    );
};

export default ManageInventory;
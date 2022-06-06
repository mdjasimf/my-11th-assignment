import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './component/About/About';
import AddNewItem from './component/AddNewItem/AddNewItem';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import ManageInventory from './component/ManageInventory/ManageInventory';
import NoteFound from './component/NoteFound/NoteFound';
import PrivateAuth from './component/PrivateAuth/PrivateAuth';
import Registration from './component/Registration/Registration';
import MyItems from './component/MyItems/MyItems'
import Dashboard from '../../my-12th-assignment-client/src/Pages/Dashboard';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manageInventory' element={
          <PrivateAuth>
            <ManageInventory></ManageInventory>
          </PrivateAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventory:id' element={
          <PrivateAuth>
            <Inventory></Inventory>
          </PrivateAuth>
        }></Route>
        <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

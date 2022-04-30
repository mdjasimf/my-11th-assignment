import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AllInventory from './component/AllInventory/AllInventory';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NoteFound from './component/NoteFound/NoteFound';
import PrivateAuth from './component/PrivateAuth/PrivateAuth';
import Registration from './component/Registraton/Registration';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allinventory' element={<AllInventory></AllInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventory:id' element={
          <PrivateAuth>
            <Inventory></Inventory>
          </PrivateAuth>
        }></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

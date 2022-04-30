import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllInventory from './component/AllInventory/AllInventory';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import NoteFound from './component/NoteFound/NoteFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allinventory' element={<AllInventory></AllInventory>}></Route>
        <Route path='/inventory:id' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

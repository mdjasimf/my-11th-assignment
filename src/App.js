import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home';
import NoteFound from './component/Home/NoteFound/NoteFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

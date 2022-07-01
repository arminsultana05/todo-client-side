import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import UserItems from './Components/UserItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<UserItems></UserItems>}></Route>
      </Routes>
     

    </div>
  );
}

export default App;

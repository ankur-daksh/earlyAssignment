import logo from './logo.svg';
import './App.css';
import Register from './component/Register';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
    
    <Route exact path='/' element={<Register/>}/>
    <Route path='login'  element={<Login/>} />
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

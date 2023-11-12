import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Register } from './client/register';
import { Login } from './client/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Employee } from './getemployee';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/employee' element={<Employee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login'element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bookingcar' element={<BookingCar />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

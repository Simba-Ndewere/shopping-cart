import Navigation from './navigation/Navigation.jsx';
import { Outlet } from 'react-router';
import './App.css';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="container">
        <Navigation cart={cart}/>
        <Outlet context={[cart, setCart]}/>
      </div>
    </>
  )
}

export default App

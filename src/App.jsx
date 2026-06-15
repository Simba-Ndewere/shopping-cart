import Navigation from './navigation/Navigation.jsx';
import { Outlet } from 'react-router';
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </>
  )
}

export default App

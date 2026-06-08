import Footer from './footer/Footer.jsx';
import Navigation from './navigation/Navigation.jsx';
import { Outlet } from 'react-router';

function App() {

  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App

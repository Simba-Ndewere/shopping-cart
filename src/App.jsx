import Homepage from './home/homepage/Homepage.jsx';
import Middle from './home/middle/Middle.jsx';
import Biggertoys from './home/biggerToys/Biggertoys.jsx';
import Footer from './footer/Footer.jsx'
import Navigation from './navigation/Navigation.jsx'

function App() {

  return (
    <>
        <Navigation/>
        <Homepage/>
        <Middle/>
        <Biggertoys/>
        <Footer/>
    </>
  )
}

export default App

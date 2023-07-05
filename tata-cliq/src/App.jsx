import logo from './logo.svg';
import './App.css';

import{Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menswear from './components/Menswear';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/Menswear' element ={<Menswear/> }/>
      </Routes>
      <Footer/>


      
    </div>
  );
}

export default App;

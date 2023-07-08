import logo from './logo.svg';
import './App.css';


import{Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Menswear from './components/menswear/Menswear';
import MensMultiplepro from './components/Multi-product/MensMultiplepro';
import SingleProduct from './components/single-poduct/SingleProduct';


function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/Menswear' element ={<Menswear/> }/>
        <Route exact path='/MensMultiplepro' element={<MensMultiplepro/>}/>
        <Route exact path='/SingleProduct' element={<SingleProduct/>}/>
  

        
      </Routes>
      <Footer/>


      
    </div>
  );
}


export default App;

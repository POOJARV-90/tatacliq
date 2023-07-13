import logo from './logo.svg';
import './App.css';


import{Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Menswear from './components/menswear/Menswear';
import MensMultiplepro from './components/Multi-product/MensMultiplepro';
import SingleProduct from './components/single-poduct/SingleProduct';
import Profile from './components/Profile-page/Profile';
import Cart from './components/cart/Cart';
import WomensMultiplepro from './components/Multi-product/WomensMultiplepro';
import Kidswear from './components/Multi-product/Kidswear';
import HomeKit from './components/Multi-product/HomeKit';
import Beauty from './components/Multi-product/Beauty';
import Gadget from './components/Multi-product/Gadget';
import Jwellery from './components/Multi-product/Jwellery';
import Accessories from './components/Multi-product/Accessories';




function App() {
  return (
    <div>
      
      {/* <Navbar/> */}
      <Routes>
         <Route exact  element={<Navbar/>}/>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/Menswear' element ={<Menswear/> }/>
        <Route exact path='/MensMultiplepro' element={<MensMultiplepro/>}/>
        <Route exact path='/WomensMultiplepro' element={<WomensMultiplepro/>}/>
        
        <Route exact path='/SingleProduct' element={<SingleProduct/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/Kidswear' element={<Kidswear/>}/>
        <Route exact path='/HomeKit' element={<HomeKit/>}/>
        <Route exact path='/Beauty' element={<Beauty/>}/>
        <Route exact path='/Gadget' element={<Gadget/>}/>
        <Route exact path='/Jwellery' element={<Jwellery/>}/>
        <Route exact path='/Accessories' element={<Accessories/>}/>
  
  
  

        
      </Routes>
      <Footer/>


      
    </div>
  );
}


export default App;

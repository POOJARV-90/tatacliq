import logo from './logo.svg';
import './App.css';


import{Routes,Route} from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/home/Home';
import Menswear from './components/menswear/Menswear';
import MensMultiplepro from './components/Multi-product/MensMultiplepro';
import SingleProduct from './components/single-poduct/SingleProduct';
import Profile from './components/Profile-page/Profile';
import Cart from './components/cart/Cart';
import Kidswear from './components/Multi-product/Kidswear';
import HomeKit from './components/Multi-product/HomeKit';
import Beauty from './components/Multi-product/Beauty';
import Gadget from './components/Multi-product/Gadget';
import Jwellery from './components/Multi-product/Jwellery';
import Accessories from './components/Multi-product/Accessories';
import Wishlist from './components/Wishlist/Wishlist';
import Cartshipform from './components/cart/Cartshipform';
import Allproduct from './components/Multi-product/Allproduct';
import Singlepoduct from './components/Multi-product/Singlepoduct';
import Register from './components/Register';
import Navbar from './components/common/Navbar';
import AddProduct from './components/Seller/AddProduct';
import Yourproduct from './components/Seller/Yourproduct';
import WomensMultiplepro from './components/Multi-product/WomensMultiplepro';
import PageNotFound from './components/common/PageNotFound';
import Fliter from './components/Multi-product/Fliter';
import Editproduct from './components/Seller/Editproduct';





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
        <Route exact path='/Wishlist' element={<Wishlist/>}/>
        <Route exact path='/Cartshipform' element={<Cartshipform/>}/>
        <Route exact path='/AddProduct' element={<AddProduct/>}/>
        <Route exact path='/Allproduct' element={<Allproduct/>}/>
        <Route exact path='/Singleproduct/:id' element={<Singlepoduct/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/seller-your-product' element={<Yourproduct/>}/>
        <Route exact path='/filter' element={<Fliter/>}/>
       
        <Route exact path='/update-product/:id' element={<Editproduct/>}/>

        <Route path="*" element={<PageNotFound/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;

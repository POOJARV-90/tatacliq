import logo from './logo.svg';
import './App.css';

import{Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path=''/>
      </Routes>
      <Footer/>


      
    </div>
  );
}

export default App;

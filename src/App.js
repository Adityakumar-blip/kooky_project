import './App.css';
import Howto from './Component/Howto';
import About from './Component/About'
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Stock from './Component/Stock';
import Track from './Component/Track';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>  
       <Router> 
         <Navbar/>
          
         <Routes>
           <Route exact path='/' element={<Home/>}/> 
           <Route path='/about' element={<About/>}/> 
           <Route path='product' element={ <Product/> }/> 
           <Route path='stock' element={<Stock/>}/>  
           <Route path='/track' element={<Track/>}/>
           <Route path='howto' element={<Howto/>}/>
         </Routes> 
       <Footer/>
       </Router> 
    </>
  );
}

export default App;

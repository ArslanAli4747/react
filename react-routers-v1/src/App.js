
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Product from './components/product/Product';
import ProductHome from './components/producthome/ProductHome';
import Pdetail from './components/pDetail/Pdetail';
import Appbar from './components/appbar/Appbar';
function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/product' element={<Product/>}>  
          <Route path='/product/' element={<ProductHome/>}></Route>
          <Route path='/product/:PID' element={<Pdetail/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

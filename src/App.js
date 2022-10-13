import './App.css';
import Navbar from './components/navBar';
import Home from './components/Home'
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom'
import ProductId from './components/Productid';
import Cart from './components/Cart'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path= "/products/:id" element={<ProductId/>} />
        <Route path= "/cart" element={<Cart/>} />
    </Routes>
    </>
  );
}

export default App;

// import productData from './data.json';

import { CartProvider } from './CartContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import Layout from './components/Layout';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';

import ProductShop from './pages/ProductShop';
import Checkout from './pages/Checkout';





function App() {

  return (
    <BrowserRouter>

      <CartProvider>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path="headphones" element={<Headphones/>} /> 
              <Route path="/headphones/:id" element={<ProductShop/>} /> 
              <Route path="speakers" element={<Speakers/>} />
              <Route path="/speakers/:id" element={<ProductShop/>} />
              <Route path="earphones" element={<Earphones/>} />
              <Route path="/earphones/:id" element={<ProductShop/>} />
            </Route>
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
    
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
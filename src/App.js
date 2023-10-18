import './App.css';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

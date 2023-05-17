import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCartItems } from './redux/slices/cartSlice';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Home from './pages/Home/Home';
import MyOrder from './pages/MyOrder/MyOrder';
import { setSavedItems } from './redux/slices/savedSlice';

function App() {
  const { showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios('https://64465b720431e885f00fc24e.mockapi.io/Cart')
      .then((res) => dispatch(setCartItems(res.data)))
      .catch((error) => console.error('Can not get Cart Items', error.message));
    axios('https://64465b720431e885f00fc24e.mockapi.io/saved')
      .then((res) => dispatch(setSavedItems(res.data)))
      .catch((error) =>
        console.error('Can not get Saved Items', error.message)
      );
  }, []);

  return (
    <main className="main">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<MyOrder />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </BrowserRouter>
        {showCart && (
          <>
            <Cart />
            <span className="overflow"></span>
          </>
        )}
      </div>
    </main>
  );
}

export default App;

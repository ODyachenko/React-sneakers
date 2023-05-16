import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Home from './pages/Home/Home';
import MyOrder from './pages/MyOrder/MyOrder';

function App() {
  const { showCart } = useSelector((state) => state.cart);

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

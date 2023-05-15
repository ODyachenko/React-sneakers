import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Bookmarks from './pages/Home/Bookmarks';
import Home from './pages/Home/Home';
import MyOrder from './pages/Home/MyOrder';

function App() {
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
      </div>
    </main>
  );
}

export default App;

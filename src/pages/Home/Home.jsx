import { useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import Cart from '../../components/Cart/Cart';
import Sneakers from '../../components/Sneakers/Sneakers';

function Home() {
  const { showCart } = useSelector((state) => state.cart);
  return (
    <>
      <Carousel />
      <Sneakers />
      {showCart && (
        <>
          <Cart />
          <span className="overflow"></span>
        </>
      )}
    </>
  );
}

export default Home;

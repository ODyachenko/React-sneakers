import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../../redux/slices/cartSlice';
import CartOrder from './CartOrder';
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';
import './style.scss';

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="main__cart cart">
      <h2 className="cart__title title">
        <span
          onClick={() => {
            dispatch(setShowCart(false));
          }}
          className="cart__return"
        >
          {'<'}
        </span>
        Корзина
      </h2>
      {!!cartItems.length ? <FullCart /> : <EmptyCart />}

      {/* <CartOrder /> */}
    </div>
  );
}

export default Cart;

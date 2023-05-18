import { useDispatch, useSelector } from 'react-redux';
import { setShowCart } from '../../redux/slices/cartSlice';
// import CartOrder from './CartOrder';
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
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1 6L6 1"
              stroke="#C8C8C8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Кошик
      </h2>
      {!!cartItems.length ? <FullCart /> : <EmptyCart />}

      {/* <CartOrder /> */}
    </div>
  );
}

export default Cart;

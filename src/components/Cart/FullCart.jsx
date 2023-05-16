import { useDispatch, useSelector } from 'react-redux';
import { setOrderItems } from '../../redux/slices/cartSlice';
import CartItem from './CartItem';

function FullCart() {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="cart__list">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </ul>
      <div className="cart__total">
        <span className="cart__total-caption">Сума:</span>
        <span className="cart__total-sum">{total} грн.</span>
      </div>
      <button
        onClick={() => dispatch(setOrderItems())}
        className="cart__btn btn"
      >
        Оформить заказ
      </button>
    </>
  );
}

export default FullCart;

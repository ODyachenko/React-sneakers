import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function FullCart() {
  const { cartItems, total } = useSelector((state) => state.cart);

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
      <button className="cart__btn cart-btn">Оформить заказ</button>
    </>
  );
}

export default FullCart;

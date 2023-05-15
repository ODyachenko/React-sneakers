import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../redux/slices/cartSlice';

function CartItem({ id, img, name, price }) {
  const dispatch = useDispatch();

  return (
    <li className="cart__list-item">
      <img className="cart__list-img" src={img} alt="Sneakers" />
      <div className="cart__list-info">
        <h3 className="cart__list-caption">{name}</h3>
        <span className="cart__list-price">{price} грн.</span>
      </div>
      <span
        onClick={() => dispatch(removeCartItem(id))}
        className="cart__list-remove"
      >
        x
      </span>
    </li>
  );
}

export default CartItem;

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../redux/slices/cartSlice';

function CartItem({ id, img, name, price }) {
  const dispatch = useDispatch();

  function onCLickRemove() {
    axios.delete(`https://64465b720431e885f00fc24e.mockapi.io/Cart/${id}`);
    dispatch(removeCartItem(id));
  }

  return (
    <li className="cart__list-item">
      <img className="cart__list-img" src={img} alt="Sneakers" />
      <div className="cart__list-info">
        <h3 className="cart__list-caption">{name}</h3>
        <span className="cart__list-price">{price} грн.</span>
      </div>
      <span onClick={onCLickRemove} className="cart__list-remove">
        x
      </span>
    </li>
  );
}

export default CartItem;

import { useDispatch } from 'react-redux';
import empty from '../../assets/img/empty.png';
import { setShowCart } from '../../redux/slices/cartSlice';
import Btn from '../Btn/Btn';

function EmptyCart() {
  const dispatch = useDispatch();

  return (
    <div className="cart__state">
      <img className="cart__state-img" src={empty} alt="Open box" />
      <h3 className="cart__state-title">Кошик порожній</h3>
      <p className="cart__state-text">
        Додайте чоча б одну пару кросівок, щоб зробити замовлення.
      </p>
      <button
        onClick={() => dispatch(setShowCart(false))}
        className="cart__state-btn btn"
      >
        Повернутись назад
      </button>
    </div>
  );
}

export default EmptyCart;

import order from '../../assets/img/order.png';

function CartOrder() {
  return (
    <div className="cart__state">
      <img className="cart__state-img" src={order} alt="Order successed" />
      <h3 className="cart__state-title">Замовлення оформлено!</h3>
      <p className="cart__state-text">
        Ваше замовлення #18 скоро буде передано кур'єрській службі
      </p>
      <button className="cart__state-btn cart-btn">Повернутись назад</button>
    </div>
  );
}

export default CartOrder;

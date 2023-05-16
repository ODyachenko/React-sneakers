import { useSelector } from 'react-redux';
import SneakersCard from '../../components/SneakersList/SneakersCard';
import Empty from '../Empty/Empty';
import emoji from '../../assets/img/order-emoji.png';

function MyOrder() {
  const { orderItems } = useSelector((state) => state.cart);

  return (
    <div className="order block">
      <h2 className="order__title title">Мої покупки</h2>
      {!!orderItems.length ? (
        <ul className="order__list card-list">
          {orderItems.map((item) => {
            return <SneakersCard key={item.id} {...item} />;
          })}
        </ul>
      ) : (
        <Empty
          img={emoji}
          title="У вас немає замовлень"
          text="Оформіть хоча б одне замовлення"
        />
      )}
    </div>
  );
}

export default MyOrder;

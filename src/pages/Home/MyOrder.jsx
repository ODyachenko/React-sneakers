import SneakersCard from '../../components/SneakersList/SneakersCard';

function MyOrder() {
  return (
    <div className="order block">
      <h2 className="order__title title">Мої покупки</h2>
      <ul className="order__list">
        <SneakersCard />
      </ul>
    </div>
  );
}

export default MyOrder;

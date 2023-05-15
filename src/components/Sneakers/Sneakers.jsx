import SneakersList from '../SneakersList/SneakersList';
import Search from './Search';

function Sneakers() {
  return (
    <div className="main__sneakers sneakers">
      <div className="sneakers__inner">
        <h2 className="sneakers__title title">Усі кросівки</h2>
        <Search />
      </div>
      <SneakersList />
    </div>
  );
}
export default Sneakers;

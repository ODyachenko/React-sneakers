import { useSelector } from 'react-redux';
import SneakersCard from '../../components/SneakersList/SneakersCard';

function Bookmarks({ id, img, name, price }) {
  const { savedItems } = useSelector((state) => state.saved);

  return (
    <div className="bookmarks block">
      <h2 className="bookmarks__title title">Мої закладки</h2>
      <ul className="bookmarks__list">
        {savedItems.map((item) => {
          return <SneakersCard key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default Bookmarks;

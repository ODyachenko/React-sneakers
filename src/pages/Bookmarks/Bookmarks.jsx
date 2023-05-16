import { useSelector } from 'react-redux';
import SneakersCard from '../../components/SneakersList/SneakersCard';
import Empty from '../Empty/Empty';
import emoji from '../../assets/img/bookmarks-emoji.png';

function Bookmarks() {
  const { savedItems } = useSelector((state) => state.saved);

  return (
    <div className="bookmarks block">
      <h2 className="bookmarks__title title">Мої закладки</h2>
      {!!savedItems.length ? (
        <ul className="bookmarks__list card-list">
          {savedItems.map((item) => {
            return <SneakersCard key={item.id} {...item} />;
          })}
        </ul>
      ) : (
        <Empty
          img={emoji}
          title="Закладок немає :("
          text="Ви нічого не додавали до закладок"
        />
      )}
    </div>
  );
}

export default Bookmarks;

import './style.scss';

function Search() {
  return (
    <label className="sneakers__search">
      <input
        className="sneakers__search--field"
        type="text"
        placeholder="Пошук..."
      />
    </label>
  );
}

export default Search;

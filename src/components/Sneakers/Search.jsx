import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'ahooks';
import {
  setDebounceValue,
  setSearchValue,
} from '../../redux/slices/sneakersList';
import './style.scss';
import { useEffect } from 'react';

function Search() {
  const { searchValue } = useSelector((state) => state.sneakers);
  const dispatch = useDispatch();
  const debounce = useDebounce(searchValue, { wait: 500 });

  useEffect(() => {
    dispatch(setDebounceValue(debounce));
  }, [debounce]);

  return (
    <label className="sneakers__search">
      <input
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        className="sneakers__search--field"
        type="text"
        placeholder="Пошук..."
      />
      {searchValue && (
        <span
          onClick={() => dispatch(setSearchValue(''))}
          className="sneakers__search--clear"
        >
          x
        </span>
      )}
    </label>
  );
}

export default Search;

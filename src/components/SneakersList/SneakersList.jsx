import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SneakersCard from './SneakersCard';
import Skeleton from './Skeleton';
import { fetchSneakers } from '../../redux/slices/sneakersList';
import './style.scss';

function SneakersList() {
  const { sneakersList, status, debouncedValue } = useSelector(
    (state) => state.sneakers
  );
  const dispatch = useDispatch();

  async function fetchData() {
    dispatch(fetchSneakers(debouncedValue));
  }

  useEffect(() => {
    fetchData();
  }, [debouncedValue]);

  return (
    <div className="sneakers__list">
      {/* {status === 'pending'
        ? [...new Array(8)].map((_, index) => {
            return <Skeleton key={index} />;
          })
        : sneakersList.map((sneakers) => {
            return <SneakersCard key={sneakers.id} {...sneakers} />;
          })} */}
      {[...new Array(8)].map((_, index) => {
        return <Skeleton key={index} />;
      })}
    </div>
  );
}

export default SneakersList;

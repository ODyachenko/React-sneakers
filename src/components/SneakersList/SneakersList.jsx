import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SneakersCard from './SneakersCard';
import Skeleton from './Skeleton';
import { fetchSneakers } from '../../redux/slices/sneakersList';
import './style.scss';
import axios from 'axios';
import { setCartItems } from '../../redux/slices/cartSlice';

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

  // Get cart items
  useEffect(() => {
    axios('https://64465b720431e885f00fc24e.mockapi.io/Cart')
      .then((res) => dispatch(setCartItems(res.data)))
      .catch((error) => console.error('Can not get CartItems', error.message));
  }, []);

  return (
    <div className="sneakers__list">
      {status === 'pending'
        ? [...new Array(8)].map((_, index) => {
            return <Skeleton key={index} />;
          })
        : sneakersList.map((sneakers) => {
            return <SneakersCard key={sneakers.id} {...sneakers} />;
          })}
    </div>
  );
}

export default SneakersList;

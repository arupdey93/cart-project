import { useCallback } from 'react';
import { DATA } from '../utils/constants';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import ProductList from '../components/ProductList';
import MyList from '../components/MyList';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(item => {
    dispatch(addToCart(item));
  },[dispatch]);

  const handleRemoveFromCart = useCallback(item => {
    dispatch(removeFromCart(item));
  },[dispatch]);

  const memoizedData = useCallback(
    () =>
      DATA.map(item => (
        <ProductCard
          key={item.id}
          {...item}
          onAdd={() => handleAddToCart(item)}
          onRemove={() => handleRemoveFromCart(item)}
        />
      )),
    [handleAddToCart, handleRemoveFromCart],
  );


  return (
    <div className="bg-gray-50 min-h-screen font-bold">
      <Header />
      <article className="grid grid-cols-3 gap-3 p-3">
        <ProductList list={memoizedData()} />
        <MyList />
      </article>
    </div>
  );
};

export default HomePage;

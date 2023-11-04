import { useCallback } from 'react';
import { DATA } from '../utils/constants';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import store from '../app/store';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import ProductList from '../components/ProductList';
import MyList from '../components/MyList';

const HomePage = () => {
  store.subscribe(() => console.log(store.getState()));

  const handleAddToCart = item => {
    store.dispatch(addToCart(item));
  };

  const handleRemoveFromCart = itemId => {
    store.dispatch(removeFromCart(itemId));
  };

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
    [],
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

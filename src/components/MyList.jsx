import { useSelector } from 'react-redux';
import toIndianCurrency from '../utils/currencyFormat';
import MyCard from './MyCard';

const MyList = () => {
  const myCartList = useSelector(state => state.cart.cart) || [];
  const totalAmount = useSelector(state =>
    state.cart.cart.map(item => item.price).reduce((a, b) => a + b, 0),
  );

  return (
    <section className="px-3">
      {!myCartList.length ? (
        <p className="font-medium text-center mt-16">No items added to cart</p>
      ) : (
        <div>
          <p className="font-medium my-2 text-center">Your added Items in cart</p>
          <div className="flex flex-col gap-3 mb-3 max-h-[500px] overflow-y-auto">
            {myCartList.map(item => (
              <MyCard key={item?.id} {...item} />
            ))}
          </div>
          <p className="text-right text-blue-600">Total: {toIndianCurrency(totalAmount || 0)}</p>
        </div>
      )}
    </section>
  );
};

export default MyList;

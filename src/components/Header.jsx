import { ShoppingCart } from 'react-feather';
import { useSelector } from 'react-redux';

const Header = () => {
  const numberOfItems = useSelector(state => state.cart.cart.map(item => item.quantity).reduce((a, b) => a + b, 0));

  return (
    <header className="bg-blue-500 px-5 h-16 flex items-center sticky top-0">
      <p className="text-2xl text-white font-medium">Cart Page Functionality</p>
      <div className="ml-auto flex">
        <p className="mr-2 text-white">Cart</p>
        <div className='relative'>
          {numberOfItems ? <div className='absolute bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-sm -right-2 -top-2'>{numberOfItems}</div> :null}
        <ShoppingCart color="white" size={28}/>
        </div>
      </div>
    </header>
  )
}

export default Header;
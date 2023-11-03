import { ShoppingCart } from 'react-feather';

const Header = () => {
  return (
    <header className="bg-blue-500 px-5 h-16 flex items-center sticky top-0">
      <p className="text-2xl text-white font-medium">Cart Page Functionality</p>
      <div className="ml-auto flex">
        <p className="mr-2 text-white">Cart</p>
        <ShoppingCart color="white" />
      </div>
    </header>
  )
}

export default Header;
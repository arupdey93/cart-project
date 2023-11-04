import { useState } from 'react';
import { Plus, Minus } from 'react-feather';
import toIndianCurrency from '../utils/currencyFormat';
import classNames from 'classnames';

const Card = ({ imageSrc, title, price, onAdd, onRemove }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    onAdd();
    setCount(count + 1);
  }

  const handleRemove = () => {
    if (count <= 0) {
      setCount(0);
      return
    }

    onRemove();
    setCount(count - 1);
    
  }

  return (
    <div className="bg-white shadow-md rounded-md hover:shadow-lg">
      <div className=" bg-blue-300 w-full rounded-t-md">
        <img src={imageSrc} alt={title} className="w-full rounded-t-md" />
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <p className="font-semibold">{title}</p>
          <p className={classNames(count > 0 ? "text-yellow-500" : "font-light")}>x {count}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <button
              className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 hover:shadow-md"
              onClick={handleAdd}
            >
              <Plus size={20} />
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 hover:shadow-md"
              onClick={handleRemove}       
            >
              <Minus size={20} />
            </button>
          </div>
          <p className="font-medium text-lg text-right text-green-700">{toIndianCurrency(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
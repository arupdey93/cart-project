import { useState } from 'react';
import { Plus, Minus } from 'react-feather';

const Card = ({ imageSrc, title, price }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="bg-white shadow-md rounded-md hover:shadow-lg">
      <div className=" bg-blue-300 w-full rounded-t-md">
        <img src={imageSrc} alt={title} className="w-full rounded-t-md" />
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <p className="font-semibold">{title}</p>
          <p className="font-light">x {count}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <button
              className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 hover:shadow-md"
              onClick={() => setCount(count + 1)}
            >
              <Plus size={20} />
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 hover:shadow-md"
              onClick={() => {
                setCount(count - 1);
                if (count <= 1) {
                  setCount(1);
                }
              }}
            >
              <Minus size={20} />
            </button>
          </div>
          <p className="font-medium text-lg text-right text-green-700">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
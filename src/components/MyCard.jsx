const MyCard = ({ title, quantity, imageSrc, price }) => (
    <div className="bg-gray-200 rounded-lg shadow-md p-3 flex flex-row mb-2">
      <div className=" bg-blue-300 w-[100px] rounded-md mr-3">
        <img src={imageSrc} alt={title} className="w-full rounded-md" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <p>Name:</p>
          <p>{title}</p>
        </div>
        <div className="flex justify-between">
          <p >Quantity:</p>
          <p className="text-yellow-500">{quantity}</p>
        </div>
        <div className="flex justify-between">
          <p>Price:</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
  
  export default MyCard;
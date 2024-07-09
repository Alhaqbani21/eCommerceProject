import React from 'react';

function CartItem({
  id,
  title,
  price,
  image,
  qty,
  onDelete,
  onQuantityChange,
}) {
  return (
    <div className="bg-white max-sm:w-[90vw] max-sm:mx-5 max-sm:p-0 h-max p-5 flex flex-col w-full border-b-[1px]">
      <div className="h-52 items-center overflow-hidden flex justify-around">
        <img className="w-32 h-32 rounded-xl" src={image} alt={title} />

        <div>
          <h1 className="font-bold">{title}</h1>
          <label className="text-blue-700">
            Qty:
            <select
              className="p-3"
              name="quantity"
              value={qty}
              onChange={(e) => onQuantityChange(id, parseInt(e.target.value))}
            >
              {[...Array(9).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
        </div>

        <strong>${price}</strong>

        <button
          onClick={() => onDelete(id)}
          className="ml-4  text-white px-2 py-1 rounded"
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:fill-red-500 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <span className="flex gap-2 mx-3">
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
        your package will be delivered in <strong>2-4 days</strong>
      </span>
    </div>
  );
}

export default CartItem;

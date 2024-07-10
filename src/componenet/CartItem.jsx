import React from "react";

function CartItem({
  id,
  title,
  price,
  image,
  qty,
  onDelete,
  onQuantityChange,
  checkout,
}) {
  return (
    <div className="bg-white max-sm:w-[90vw] max-sm:mx-5 max-sm:p-0 h-max p-5 flex flex-col w-full border-b-[1px]">
      <div className="h-52 items-center overflow-hidden max-sm:w-[80vw] flex justify-around">
        <img className="w-32 h-32 rounded-xl" src={image} alt={title} />

        <div>
          <h1 className="font-bold">{title}</h1>
          <label className="">
            Qty:
            {checkout !== true ? (
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
            ) : (
              <span>{` ${qty}`}</span>
            )}
          </label>
        </div>

        <strong>${qty * price}</strong>
        {onDelete && (
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
        )}
      </div>
    </div>
  );
}

export default CartItem;

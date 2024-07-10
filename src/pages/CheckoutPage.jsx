import Nav from '../componenet/Nav';
import img from '../assets/card.png';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CartItem from '../componenet/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

// Define validation schema with Yup
const validationSchema = Yup.object().shape({
  nameCard: Yup.string().required('Name on card is required'),
  cardNumber: Yup.string().required('Card number is required'),
  dateCard: Yup.string().required('Date is required'),
  cvvCard: Yup.string().required('CVV is required'),
});

function CheckoutPage() {
  const [itemsData, setItemsData] = useState([]);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const userId = localStorage.getItem('userId');
  const urlUser = `https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`;
  const totalAmount = localStorage.getItem('totalAmount');

  useEffect(() => {
    if (userId && totalAmount) {
      handleFetchUserData(userId);
    } else {
      throw new Error('Access denied');
    }
  }, [userId]);

  const handleFetchUserData = (userId) => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${userId}`)
      .then((response) => {
        const userData = response.data;
        setUserData(userData);
        return axios.get(
          'https://668a90262c68eaf3211d2977.mockapi.io/products'
        );
      })
      .then((productResponse) => {
        setUserData((prevUserData) => {
          const itemsData = productResponse.data
            .filter((item) =>
              prevUserData.cart.some((cartItem) => cartItem.id === item.id)
            )
            .map((item) => {
              const cartItem = prevUserData.cart.find(
                (cartItem) => cartItem.id === item.id
              );
              return { ...item, qty: cartItem.quantity };
            });
          setItemsData(itemsData);
          return prevUserData;
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  function handleCheckout(values) {
    console.log('Form Values:', values);
    setShowPaymentModal(true);
  }

  const handlePayNow = () => {
    axios.get(urlUser).then((response) => {
      const userData = response.data;
      const purchasedHistory = userData.purchasedHistory || [];

      // date today
      const currentDate = new Date();
      const formattedDate = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

      // include date
      const newPurchasedHistory = [
        ...purchasedHistory,
        {
          date: formattedDate,
          orderNumber: Math.floor(100000 + Math.random() * 900000),
          total: localStorage.getItem('totalAmount'),
          items: userData.cart.map((item) => ({
            ...item,
          })),
        },
      ];
      // console.log(newPurchasedHistory);
      axios
        .put(urlUser, { cart: [], purchasedHistory: newPurchasedHistory })
        .then((response) => {
          setIsLoadingPayment(true);
          setTimeout(() => {
            setIsLoadingPayment(false);
            navigate('../');
            localStorage.removeItem('totalAmount');
            console.log(response.data);
          }, 3000);
        })
        .catch((error) => {
          console.error('Error updating purchased history:', error);
          toast.error('Failed to complete order');
        });
    });
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <div>
      <Nav />
      <br />
      <h1 className="m-3 mx-9 text-xl font-bold">Checkout</h1>
      <br />
      <ToastContainer autoClose={2000} />

      <section className="mx-3  max-sm:flex-col  flex justify-around gap-2">
        {/* product */}
        <section className="bg-white max-sm:w-[80vw] max-sm:mx-5 max-sm:p-0 h-max p-5 shadow-2xl flex flex-col rounded-lg w-[60vw]">
          <div className="flex-col w-full">
            {itemsData.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.images[0]}
                qty={item.qty}
                checkout={true}
              />
            ))}
          </div>
        </section>

        {/* cart */}
        <Formik
          initialValues={{
            nameCard: '',
            cardNumber: '',
            dateCard: '',
            cvvCard: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleCheckout}
        >
          {({ errors, touched }) => (
            <Form className="bg-white p-4 max-sm:mt-5 shadow-2xl max-sm:mx-7 rounded-lg">
              <h1 className="m-3 font-bold">Checkout</h1>
              <img className="w-40" src={img} alt="" />
              <div>
                <span>Name On card</span>
                <label className="input input-bordered bg-white flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Field
                    type="text"
                    name="nameCard"
                    className="grow"
                    placeholder="e.g Luke Duke"
                  />
                </label>
                {errors.nameCard && touched.nameCard ? (
                  <div className="text-red-500 text-sm">{errors.nameCard}</div>
                ) : null}

                <br />
                <span>Card Number</span>
                <label className="input input-bordered bg-white flex items-center gap-2">
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
                      d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                    />
                  </svg>

                  <Field
                    type="text"
                    name="cardNumber"
                    className="grow"
                    placeholder="---- ---- ----"
                  />
                </label>
                {errors.cardNumber && touched.cardNumber ? (
                  <div className="text-red-500 text-sm">
                    {errors.cardNumber}
                  </div>
                ) : null}

                <br />
                <div className="flex gap-3 max-sm:w-full">
                  <div>
                    <label className="input input-bordered bg-white flex items-center gap-2">
                      <Field
                        type="text"
                        name="dateCard"
                        className="max-sm:w-40"
                        placeholder="MM/YY"
                      />
                    </label>
                    {errors.dateCard && touched.dateCard ? (
                      <div className="text-red-500 text-sm">
                        {errors.dateCard}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label className="input input-bordered bg-white flex items-center gap-2">
                      <Field
                        type="text"
                        name="cvvCard"
                        maxLength="3"
                        className="max-sm:w-20"
                        placeholder="cvv - - -"
                      />
                    </label>
                    {errors.cvvCard && touched.cvvCard ? (
                      <div className="text-red-500 text-sm">
                        {errors.cvvCard}
                      </div>
                    ) : null}
                  </div>
                </div>

                <span>No delivery fee on your order</span>
                <br />
                <br />
                <strong>
                  Total Payable {localStorage.getItem('totalAmount')}$
                </strong>
              </div>
              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-300 w-full"
                disabled={isLoadingPayment}
              >
                Pay Now
              </button>
            </Form>
          )}
        </Formik>
      </section>
      <br />

      <dialog open={showPaymentModal} id="my_modal_1" className="modal">
        <div className="modal-box">
          {!isLoadingPayment && (
            <h3 className="font-bold text-lg">
              Are you sure you want to purchase?
            </h3>
          )}
          {!isLoadingPayment && (
            <div className="py-4">
              {}
              Amount is {localStorage.getItem('totalAmount')}$
            </div>
          )}
          {isLoadingPayment && (
            <div className="flex justify-center items-center w-full flex-col">
              {' '}
              <span className="text-3xl tracking-wide">Order Completed</span>
              <iframe
                className=""
                src="https://lottie.host/embed/00c3e094-1572-4f1e-8b85-833a90e7069c/USdtsjKz0v.json"
              ></iframe>
            </div>
          )}
          <div className="modal-action">
            <button
              disabled={isLoadingPayment}
              className="btn bg-green-500 hover:bg-green-300"
              onClick={() => handlePayNow()}
            >
              Pay Now
            </button>
            <button
              disabled={isLoadingPayment}
              className="btn"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CheckoutPage;

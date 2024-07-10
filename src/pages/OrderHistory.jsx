import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiLogout } from "react-icons/ci";
import { array } from "yup";
import Nav from "../componenet/Nav";

function OrderHistory() {
  const [prodect, setProdect] = useState([]);
  const id = localStorage.getItem("userId");
  // const [isLoading, setIsLoding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`)
      .then(function (res) {
        let array = [];
        // res.data.filter((item) => {
        // if (user.purchasedHistory.find((e) => e.id == item.id)) {
        // total=item.price
        // console.log(response.data.purchasedHistory);
        // response.data.purchasedHistory.filter((e) => {
        // console.log(e.items.findIndex((i) => i.id == item.id));
        // let index = e.items.findIndex((i) => i.id == item.id);
        // if (index !== -1) {
        // console.log(res.data.purchasedHistory);

        // array.push({
        //   date: e.date,
        //   order: e.orderNumber,
        //   total: item.price * e.items[index].quantity,
        //   img: item.images,
        //   title: item.title,
        //   Qut: e.items[index].quantity,
        // });

        // array.push();
        // console.log(e);
        // }
        // });
        // });
        // setIsLoding(true);
        setProdect(res.data.purchasedHistory);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      {/* {isLoading ? ( */}
      <Nav />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
            <div className="grid grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="col-span-3">
                <nav className="flex flex-col space-y-2">
                  <Link
                    to={"/Profile"}
                    className="p-2 rounded font-semibold hover:bg-gray-200 "
                  >
                    My Profile
                  </Link>
                  <Link
                    to={"/OrderHistory"}
                    href="#"
                    className="p-2 rounded  bg-blue-100 text-[#E47732]"
                  >
                    Order History
                  </Link>
                  <Link
                    onClick={() => {
                      localStorage.clear();
                      navigate("../");
                    }}
                    className="p-2 rounded hover:bg-gray-200 flex gap-2 items-center"
                  >
                    Logout <CiLogout className="text-red-500" />
                  </Link>
                </nav>
              </div>

              {/* Main Content */}
              <div className="col-span-9">
                <div className="bg-gray-50 p-[4em] rounded-lg shadow">
                  {/* Personal Information Section */}
                  {prodect.length == 0 ? (
                    <>
                      <h1 className="text-center">
                        There are no previous requests
                      </h1>
                    </>
                  ) : (
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                      <div className="flex flex-col justify-between items-center mb-4">
                        {/* {prodect[0].date} */}
                        {prodect.map((item, index) => (
                          <details key={index} className="collapse  ">
                            <summary className="collapse-title text-xl font-medium">
                              <div
                                //   className="card card-side bg-base-100   flex  mx-auto  max-sm:flex-col max-sm:w-[16rem]  max-sm:mx-auto "
                                // >
                                key={index}
                                className="w-full text-lg border-gray-500 border-[1px] justify-between bg-base-100  p-8 rounded-md mt-8 flex "
                              >
                                <div className="flex-col flex">
                                  <span>Order number</span>

                                  <span>{item.orderNumber}</span>
                                </div>

                                <div className="flex-col flex">
                                  <span>Date placed</span>

                                  <span>{item.date}</span>
                                </div>

                                <div className="flex-col flex">
                                  <span>Total amount</span>

                                  <span>${item.total}</span>
                                </div>

                                <span className="btn">view order</span>
                              </div>
                            </summary>
                            <div className="collapse-content">
                              {console.log(item.items)}
                              <div>
                                {item.items.map((e) => (
                                  <div className="flex w-96 justify-between border-b items-center">
                                    <img
                                      className="w-20"
                                      src={e.images}
                                      alt=""
                                    />

                                    <h1>{e.title}</h1>
                                    <span>Qut: {e.quantity}</span>
                                    <span>${e.price * e.quantity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;

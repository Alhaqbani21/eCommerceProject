import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderHistory() {
  const [user, setUser] = useState({});
  const [prodect, setProdect] = useState([]);
  const id = localStorage.getItem("userId");
  const [isLoading, setIsLoding] = useState(false);
  useEffect(() => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`)
      .then(function (response) {
        // handle success
        setUser(response.data);

        console.log(response.data.purchasedHistory);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    axios
      .get("https://668a90262c68eaf3211d2977.mockapi.io/products")
      .then((res) => {
        let array = [];
        res.data.filter((item) => {
          if (user.purchasedHistory.find((e) => e.id == item.id)) {
            // total=item.price
            console.log(item.price);
            console.log();
            array.push(item);
          }
        });
        setIsLoding(true);
        setProdect(array);
      });
  }, []);

  return (
    <>
      {isLoading ? (
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
                  </nav>
                </div>
                {console.log(prodect)}
                {console.log(user)}
                {/* Main Content */}
                <div className="col-span-9">
                  <div className="bg-gray-50 p-[4em] rounded-lg shadow">
                    {/* Personal Information Section */}
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                      <div className="flex flex-col justify-between items-center mb-4">
                        {prodect.map((item) => (
                          <div className="card card-side bg-base-100 shadow-xl mb-8  flex  mx-auto  max-sm:flex-col max-sm:w-[16rem]  max-sm:mx-auto ">
                            <figure className="w-1/4  max-sm:w-full">
                              <img
                                className="w-full h-full object-cover rounded-md "
                                src={item.images}
                                // src="https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990_640.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="card-body  ">
                              <h2 className="card-title">{item.title}</h2>
                              <p>{/* {item.description} */}</p>
                              <p className="text-[#e18c58]">
                                ${}
                                {item.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>OOO</>
      )}
    </>
  );
}

export default OrderHistory;

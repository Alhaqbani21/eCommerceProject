import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    imge: "",
  });

  const id = localStorage.getItem("userId");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setForm({
          FirstName: response.data.FirstName || "",
          lastName: response.data.lastName || "",
          email: response.data.email || "",
          phone: response.data.phone || "",
          country: response.data.country || "",
          city: response.data.city || "",
          imge: response.data.city || "",
        });
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = () => {
    axios
      .put(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`, form)
      .then((response) => {
        setUser(response.data);
        alert("Profile updated successfully!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3">
                <nav className="flex flex-col space-y-2">
                  <a
                    href="#"
                    className="p-2 rounded bg-blue-100 text-[#E47732] font-semibold"
                  >
                    My Profile
                  </a>
                  <Link
                    to={"/OrderHistory"}
                    href="#"
                    className="p-2 rounded hover:bg-gray-200"
                  >
                    Order History
                  </Link>
                </nav>
              </div>
              {/* Main Content */}
              <div className="col-span-9">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                      value={form.imge}
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    />
                    <div>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}

                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">image</h3>
                          <input
                            type="text"
                            name="FirstName"
                            value={form.imge}
                            onChange={(e) => {
                              setForm(e.target.value);
                            }}
                            className="w-full p-2 border border-gray-300 rounded"
                          />
                          <button
                            onClick={handleUpdate}
                            className="ml-auto bg-[#E47732] text-white p-2 rounded-lg grid col-end-7 col-span-2 mt-5 w-[29em]"
                          >
                            update
                          </button>
                        </div>
                      </dialog>
                      <h2 className="text-xl font-semibold">{user.userName}</h2>
                    </div>
                  </div>
                  {/* Personal Information Section */}
                  <div className="bg-white p-4 rounded-lg shadow mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        Personal Information
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="FirstName"
                          value={form.FirstName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Address Section */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Address</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600">
                          City/State
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleUpdate}
                    className="ml-auto bg-[#E47732] text-white p-2 rounded-lg grid col-end-7 col-span-2 mt-5 w-[12em]"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

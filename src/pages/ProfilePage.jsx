import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../componenet/Nav';
import { CiLogout } from 'react-icons/ci';

function ProfilePage() {
  const imagePlaceHolder =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQMEBgECB//EAC8QAQACAQIEBAQFBQAAAAAAAAABAgMEEQUSITFBUWFxEyJSsTJigZHBIzRCofD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/SQAAAAAAAB7ETadqxMz6Qy10motG8Yb7ewMIzW0uevfDf32YZiY79J9QAAAAAAAAAAAAAI7xEb/AKA9rWbWitYmZntEKml4ZG0W1Hf6Y/ln0GjjT05r9csx1ny9IbgPnHjpjry0pWseURs+gAY8uHFlj+pSLe8dWQBI1XDLUib6ed4+me6d47eLqE7iWj56zmxRtePxRHjAJAAAAAAAAAADf4RgjJlnLaPlp0j3aC9w3HyaTH+aOb9wbQAAAAAAAIPEcHwdRPLHyW6x6ebVWOMY+bTxfxrb7o4AAAAAAAADpNPG2DHH5I+zm3Q6K/PpcU/kgGcAAAAAAAGrxL+yy/p94QVvituXR2jxtMQiAAAAAAAAAKvB829LYZnrXrHslPvBlthyVvTvHh5g6UY9PlpnxRek9J8PJkAAAAABr6zU102Kbd7f4185BP4xm581cVZ6U6z7ynvb2m9ptad7TO8vAAAAAAAAAAe1ra9orSs2me0QDLpdTfTX3p1ifxR4SuabUU1GPnx7+sT4NLScMiNrajrP0R/KlWsViIrEREdogHoAAANfV6ummpvaJm09oQ8+a+e83vO8/Z0WSlb1mt6xaJ8JS9XwyaxN9P1j6J/gE0J6TtMbT5T4AAAAAAAAPvDitmyRjpHWf9eoPcGC+oyRTHHvPhELmk0tNNXaI3vPe095fWm09NPjilI9585ZgAAAAAAAAamt0VNRG8bVyfVt390TJjvivNMkbWju6Zra3S11OPbtePwyCAPq9bUvat42tE7TD5AAAAAXOG6aMGHmtH9S/WfT0S9Bh+NqqV2+WPml0AAAAAAAAAAAAAJ3FtNz0+NSPmpHX1hIdPaItWYmOkuc1GL4Oa+PwrPQGMAAAFXgtPkyZPOeX/v3U2pw2vLo8frvLbAAAAAAAAAAAAAR+M4+XNTJ9UbfssNDjFN9NW302BGAAePQHR6WIjTYoj6I+zKAAAAAAAAAAAAADV4nG+hyem33AEEAH//Z';
  const navigate = useNavigate();
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    FirstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    imge: '',
  });

  const [initialForm, setInitialForm] = useState({
    FirstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    imge: '',
  });

  const id = localStorage.getItem('userId');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`)
      .then((response) => {
        setUser(response.data);
        const userData = {
          FirstName: response.data.FirstName || '',
          lastName: response.data.lastName || '',
          email: response.data.email || '',
          phone: response.data.phone || '',
          country: response.data.country || '',
          city: response.data.city || '',
          imge: response.data.imge || '',
        };
        setForm(userData);
        setInitialForm(userData);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = () => {
    // Check if the form has changed
    if (JSON.stringify(form) === JSON.stringify(initialForm)) {
      toast.info('No changes to save');
      return;
    }

    axios
      .put(`https://668a90262c68eaf3211d2977.mockapi.io/users/${id}`, form)
      .then((response) => {
        setUser(response.data);
        setInitialForm(form); // Update initial form to the new saved state
        toast.success('Profile updated successfully');
        setShowAvatarModal(false); // Hide modal on update
      })
      .catch((error) => console.log(error));
  };

  const getImageSrc = () => {
    return form.imge.trim() === '' ? imagePlaceHolder : form.imge;
  };

  return (
    <>
      <Nav />
      <div className="bg-gray-100 min-h-screen p-4">
        <ToastContainer />
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 ">
            <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
            <div className="grid grid-cols-12 max-sm:flex max-sm:flex-col gap-4">
              {/* Sidebar */}
              <div className="col-span-3 max-sm:w-full">
                <nav className="flex flex-col max-sm:justify-between  max-sm:flex-row space-y-2 ">
                  <Link
                    to={'../profile'}
                    className="p-2 rounded  bg-blue-100 text-[#E47732] font-semibold"
                  >
                    My Profile
                  </Link>
                  <Link
                    to={'/OrderHistory'}
                    className="p-2 rounded max-sm:mt-1 hover:bg-gray-200"
                  >
                    Order History
                  </Link>
                  <Link
                    onClick={() => {
                      localStorage.clear();
                      navigate('../');
                    }}
                    className="p-2 rounded hover:bg-gray-200 flex gap-2 items-center"
                  >
                    Logout <CiLogout className="text-red-500" />
                  </Link>
                </nav>
              </div>
              {/* Main Content */}
              <div className="col-span-9 max-sm:p-0">
                <div className="bg-gray-50 p-4 rounded-lg shadow  max-sm:mt-[5em] ">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-6 ">
                    <img
                      className="w-16 h-16 rounded-full hover:opacity-50 cursor-pointer"
                      src={getImageSrc()}
                      alt="Profile"
                      onClick={() => setShowAvatarModal(true)}
                    />
                    <div>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      {showAvatarModal && (
                        <dialog
                          id="my_modal_3"
                          open={showAvatarModal}
                          className="modal"
                        >
                          <div className="modal-box">
                            <button
                              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                              onClick={() => setShowAvatarModal(false)}
                            >
                              ✕
                            </button>
                            <h3 className="font-bold text-lg">Update Image</h3>
                            <input
                              type="text"
                              name="imge"
                              value={form.imge}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                            <button
                              onClick={handleUpdate}
                              className="ml-auto bg-[#E47732] text-white p-2 rounded-lg grid col-end-7 col-span-2 mt-5 w-[29em]"
                            >
                              Update
                            </button>
                          </div>
                        </dialog>
                      )}
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

import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Reg() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nin, setNIN] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/register`, {
          email: Email,
          password: password,
          phone: phone,
          nin: nin,
        })
        .then((result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data);
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          } else {
            setError(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccess(false);
            setError(false);
          }, 10000);

          console.log(result);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen  flex justify-center items-center">
      <div className="bg-white p-6 md:px-12 rounded-xl">
        <div className="text-4xl text-center text-black">Reg</div>
        <div className="mt-0">
          <div className="flex justify-center ">
            {error && (
              <span className="text-center text-red-600 bold">{status}</span>
            )}
            {success && (
              <span className="text-center text-xl text-green-600 bold">
                {status}
              </span>
            )}
          </div>
          <div id="OffIt">
            <form
              onSubmit={handleReg}
              className="px-8  bg-white rounded"
            >
              <div className="mb-4 md:flex md:justify-between"></div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email Here"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="username"
                >
                  NIN
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setNIN(e.target.value)}
                  type="text"
                  placeholder="NIN Here"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="Phone"
                >
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Pnone Number Here"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="******************"
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-xl hover:bg-black focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Go to dashboard
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <span className="inline-block text-sm  align-baseline text-black">
                  The best car automated Rental service.
                </span>
              </div>

              <div className="text-center pt-4">
                <Link to="/login">
                  <span className="inline-block cursor-pointer text-base  align-baseline text-black">
                    Login.
                  </span>
                </Link>
              </div>
            </form>
          </div>

          <hr className="mb-6 border-t" />

          <div className="text-center mt-4">
            <span className="font-extrabold inline-block text-sm text-blue-900 align-baseline  ">
              Precious LTD.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;

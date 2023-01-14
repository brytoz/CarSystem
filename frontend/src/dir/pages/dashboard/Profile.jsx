import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";

function Profile() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [phone, setPhone] = useState("");
  const [BVN, setBVN] = useState("");

  const resetBVN = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full"></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />

          <div className=" flex-wrap  justify-around">
            <div className="flex  justify-around">

            <span className="text-2xl">
              Fullname:
              <span className="text-2xl font-bold">Precious A. H</span>
            </span>
            <span className="text-2xl">
            Last Lease:
              <span className="text-2xl font-bold"> 10days ago</span>
            </span>
            </div>
            <div className="mt-12 w-3/5">

            <form onSubmit={resetBVN} className="pt-8 md:pt-3">
              <div className="text-3xl font-bold w-full pb-4">
                Update BVN
              </div>
             
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="BVN"
                  className="inline-block mb-1 font-medium"
                >
                  Enter new BVN
                </label>
                <input
                  placeholder="********"
                  required
                  onChange={(e) => setBVN(e.target.value)}
                  type="BVN"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="BVN"
                  name="BVN"
                />
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
                >
                  Update my BVN
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

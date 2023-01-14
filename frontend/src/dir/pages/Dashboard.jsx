import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import Top from "../components/Top";

function Dashboard() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full"></div>
        <div className="flex-1 flex-wrap px-4">
          <Top />

          <div className=" flex-wrap  md:flex  justify-around">
            <span className="text-2xl">
              Fullname:
              <span className="text-2xl font-bold">Precious A. H</span>
            </span>
            <span className="text-2xl">
            Last Lease:
              <span className="text-2xl font-bold"> 10days ago</span>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;

import React from "react";
import { FaUser } from "react-icons/fa";

function Top() {
  return (
    <div className="w-full p-4  flex justify-end items-center  space-x-4 shadow-lg">
      <div>Hello {'Precious'}</div>
      <div>
        <FaUser />
      </div>
    </div>
  );
}

export default Top;

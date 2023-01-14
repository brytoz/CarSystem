import React from "react";

function Cards({img, name, tag, tag2, tag3, text}) {
  return (
    <div class="flex-1 max-w-sm rounded overflow-hidden shadow-lg mt-24">
      <img
        class=" transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110  w-full h-1/4 text-center flex justify-center items-center rounded-xl"
        src={img}
        alt="Precious cars"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">
         {text}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag2}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
             {tag3}
        </span>
      </div>
      <div  onClick={() => alert('You cannot get any car on lease until you update your profile!')} className=" transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg mx-3 p-3 text-white text-center text-xl cursor-pointer ">Click here to deal</div>
    </div>
  );
}

export default Cards;

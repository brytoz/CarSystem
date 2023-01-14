import React from "react";
import SideNav from "../../components/SideNav";
import Top from "../../components/Top";

function Cars() {
  return (
    <div className="w-full">
    <SideNav />
    <div className="w-full flex flex-wrap md:flex-nowrap">
      <div className="hidden md:block w-60 h-full"></div>
      <div className="flex-1 flex-wrap px-4">
        <Top />

        <div className=" flex-wrap  md:flex  justify-around">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="py-3 px-6">
       Car Brand
      </th>
      <th scope="col" class="py-3 px-6">
        Collected on
      </th>
      <th scope="col" class="py-3 px-6">
        Category
      </th>
      <th scope="col" class="py-3 px-6">
        Balance
      </th>
      <th scope="col" class="py-3 px-6">
        Return Date
      </th>
    </tr>
  </thead>
  <tbody>
    
      <tr
        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      >
        <th
          scope="row"
          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Hyundai 345N
        </th>
        <td class="py-4 px-6">12/09/2022</td>
        <td class="py-4 px-6">Car</td>
        <td class="py-4 px-6">Cleared</td>
        <td class="py-4 px-6">
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
           30/09/2022
          </a>
        </td>
      </tr>
  </tbody>
</table>
</div>
        </div>
      </div>
    </div>
  </div>);
}

export default Cars;


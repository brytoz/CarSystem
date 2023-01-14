import React from "react";
import * as Img from "./Images";
import { motion } from "framer-motion";
import   {data} from '../../data'

function Hero() { 

  
  return (
    <section class="bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:bg-gray-900">
      <div class="grid py-16 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          class="place-self-center mr-auto lg:col-span-7"
        >
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            YOU DO THE DREAMING,
          </h1>
          <p class="mb-6 max-w-2xl font-light text-white/75 lg:mb-8 md:text-lg lg:text-xl  ">
            WE'LL DO THE LEASING! Find the perfect lease deal.
          </p>
          

          <div className="mt-3"> 
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Car Name"
                />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
 
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    {data.map((datas) => (
                        <option key={datas.id}>{datas.branch}</option>
                    ))}
                    
                    
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

             
          <div onClick={() => alert('You cannot get any car on lease until you update your profile!')}
            class="w-full cursor-pointer mx-3 md:mx-0 md:w-auto md:inline-flex justify-center items-center py-3 px-5  text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-black"
          >
            Search Car
          </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ x: 1 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          class="hidden lg:mt-0 lg:col-span-5 lg:flex"
        >
          <img src={Img.Dodg} alt="cars" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

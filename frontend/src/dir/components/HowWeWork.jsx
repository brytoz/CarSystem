import React from "react";
import { FaCar, FaKey } from "react-icons/fa";
import { GoSettings} from "react-icons/go";
import { HiChatBubbleLeftRight, HiDocumentText } from "react-icons/hi2";
import {motion} from 'framer-motion'

const Tag = ({topic, icon, text}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} >
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              {icon}
            </div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">{topic}</h3>
            <p class="text-gray-600 dark:text-gray-400">
            
{text}
            </p>
          </motion.div>
  )
}
function HowWeWork() {
  return (
    <section class="bg-gray-60 dark:bg-gray-800">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mb-8 max-w-screen-md lg:mb-16">
          <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          HOW IT WORKS
          </h2>
          <p class="text-gray-600 sm:text-xl dark:text-gray-400">
          Our Mission: Make auto leasing as easy & painless as possible and save customers thousands of dollars in the process.
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          
          <Tag topic={'BROWSE NEW CARS'} icon={<FaCar size={60} />} text='View our wide selection of unbeatable lease deals and offers.' />
          <Tag topic={'CUSTOMIZE OUR LEASE'} icon={<GoSettings size={60} />} text='Once you pick out the car you’re looking for, adjust the lease parameters to suit your driving habits, preferred deal structure, colors, and registration zip code.' />
          <Tag topic={' CHAT WITH AN EXPERT'} icon={<HiChatBubbleLeftRight size={60} />} text=' An expert auto leasing ninja will guide you through the process and help answer any remaining questions you have!' />

          <Tag topic={'SUBMIT REQUIRED DOCUMENTS'} icon={<HiDocumentText size={60} />} text='After locking in your deal, we will send you instructions on the final steps as well as the necessary paperwork to complete your lease. The good news is that all of this can be done from the comfort of your home.' />


          <Tag topic={'SCHEDULE DELIVERY OR PICK UP'} icon={<FaKey size={60} />} text='Once the paperwork is approved, ALN will schedule a delivery right to your door. If you prefer, we can also arrange for you to pick up your new car at the dealership itself.' />

  
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;

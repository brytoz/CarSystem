import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Fragment>

<div
          id="error"
          className="flex-wrap  h-screen flex justify-center items-center  "
        >
          <div className="  justify-center font-extrabold text-center   text-7xl bold">
            404 Error
            <div className="block text-xl">You are trying to access a page that does not exist.</div>
            {/* <div className="mt-24 block text-xl border cursor-pointer rounde-lg"> */}
              <span
                class="mt-24  inline-flex items-center justify-center px-6 py-2 mb-4 border border-transparent text-2xl font-medium rounded-full text-white bg-red-600 hover:bg-red-500 shadow-xl cursor-pointer focus:outline-none focus:shadow-outline shadow-md shadow-red-900/50  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 bold"
              >
                <Link to="/">GoBack</Link>
              </span>
            {/* </div> */}
          </div>
        </div>
    </Fragment>
  )
}
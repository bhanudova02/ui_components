import React from 'react'
import { FaRegCircle, FaStar } from 'react-icons/fa'

const One_UI_Component_Seven = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className=" py-8 lg:py-4 px-0 lg:px-6 text-white bg-gradient-to-tr  from-[#000000] via-[#000000] to-gray-50/10 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
          <div className="flex flex-col md:flex-row items-center lg:justify-normal justify-center gap-8">
            <div className='flex items-center gap-2'>
              <div className="flex">
                <FaRegCircle className="text-3xl -me-3" />
                <FaRegCircle className="text-3xl -me-3" />
                <FaRegCircle className="text-3xl" />
              </div>
              <div>
                <h4 className="font-bold">100k +</h4>
                <p className="text-xs">App Downloads</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <div className="flex">
                <FaRegCircle className="text-3xl -me-3" />
                <FaRegCircle className="text-3xl -me-3" />
                <FaRegCircle className="text-3xl" />
              </div>
              <div>
                <h4 className="font-bold">105k +</h4>
                <p className="text-xs">Daily App Users</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <FaStar className="text-yellow-500 text-3xl" />
              <div>
                <h4 className="font-bold">10k +</h4>
                <p className="text-xs">Daily App Users</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-end">
            <h4>Download App For</h4>
            <img src="/apple_store.png" alt="" className="w-8 h-8 rounded-xl" />
            <img src="/play_store.png" alt="" className="w-8 h-8 rounded-xl bg-white p-1" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default One_UI_Component_Seven
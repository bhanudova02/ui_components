import React from 'react'
import { AiOutlineSafety } from 'react-icons/ai'
import { HiDevicePhoneMobile } from 'react-icons/hi2'
import { IoWarningOutline } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'

const One_UI_Component_Eight = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className=" mx-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1   ">
          <div className="p-2">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-3xl font-bold w-full md:w-[90%] lg:w-[86%]">Enhance Productivity and Efficiency with Our Task Management App</h2>
              <p className="text-sm w-full md:w-[90%] lg:w-[90%] leading-6">
                Discover the future of task management with our innovative app, designed to help teams and individuals organize their projects effortlessly. With powerful tools for tracking tasks, deadlines, and priorities, our app is your go-to solution for staying productive.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero! Ea placeat ad sapiente ab autem tenetur officia nostrum? Consequuntur pariatur amet neque, praesentium reiciendis tempore? Esse error nesciunt iste.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 ">
              <div className="shadow-white/70 py-4 px-4 shadow rounded-sm">
                <MdOutlineLocationOn className="text-2xl mb-1" />
                <h4 className="font-semibold text-lg">Task Tracking</h4>
                <p className="text-sm w-[95%]">Monitor the progress of individual tasks and team goals with real-time updates and notifications.</p>
              </div>
              <div className="shadow-white/70 py-4 px-4 shadow rounded-sm">
                <IoWarningOutline className="text-2xl mb-1" />
                <h4 className="font-semibold text-lg">Deadline Alerts</h4>
                <p className="text-sm w-[95%]">Stay ahead of deadlines with instant alerts when tasks are approaching or overdue.</p>
              </div>
              <div className="shadow-white/70 py-4 px-4 shadow rounded-sm">
                <AiOutlineSafety className="text-2xl mb-1" />
                <h4 className="font-semibold text-lg">Data Security</h4>
                <p className="text-sm w-[95%]">Your data is always safe with advanced encryption and secure cloud storage to protect your projects.</p>
              </div>
              <div className="shadow-white/70 py-4 px-4 shadow rounded-sm">
                <HiDevicePhoneMobile className="text-2xl mb-1" />
                <h4 className="font-semibold text-lg">Mobile Accessibility</h4>
                <p className="text-sm w-[95%]">Manage your tasks on the go with our app, designed to work seamlessly across all devices.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/iphone.jpg" alt="task management" className="lg:absolute top-0 left-0 p-2 h-[350px] md:h-[650px] lg:h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default One_UI_Component_Eight

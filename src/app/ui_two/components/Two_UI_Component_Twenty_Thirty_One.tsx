"use client"
import { DialogBox } from '@/components/DialogBox'
import React from 'react'

const Two_UI_Component_Twenty_Thirty_One = () => {

  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  RenderCode:
  -----------
  import React from 'react'

const Two_UI_Component_Twenty_Thirty_One = () => {
  return (
    <div className='container mx-auto'>

      <div className="bg-[#333333] shadow-lg m-4 md:m-10 rounded-md p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
          <div className="flex justify-center items-center">
            <iframe className="w-full h-full rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.2259383567!2d78.0783569505099!3d17.412077860436995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713524588349!5m2!1sen!2sin" id="responsive-iframe" ></iframe>
          </div>
          <div className="px-4 py-2 ">
            <h2 className="text-green-500 text-center font-bold text-xl md:text-3xl mb-2">Contact Us </h2>
            <form >
              <input type="text" placeholder="Enter your name" className="text-accent-content font-semibold w-full border-2 border-white p-1.5 rounded-md placeholder:font-semibold outline-none" required />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input type="email" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your email" />
                <input type="number" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your Mobile No" />
              </div>
              <select className=" border-2 border-white w-full mt-4 p-1.5 rounded-md outline-none font-semibold text-accent-content">
                <option value="" >Service</option>
                <option value="1" >Wed Developmer</option>
                <option value="2" >SEO</option>
                <option value="3" >UI/UX</option>
                <option value="3" >Other</option>
              </select>
              <textarea className="text-accent-content font-semibold border-2 border-white w-full mt-4 p-5 rounded-md outline-none placeholder:font-medium" placeholder="Enter your message" />
              <button className="flex w-full justify-center rounded-lg bg-green-600 py-2 mt-2 text-center font-semibold text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Two_UI_Component_Twenty_Thirty_One

  `;
    navigator.clipboard.writeText(codeToCopy)
  }


  return (
    <div className='container mx-auto'>

      <div className="bg-[#333333] shadow-lg m-4 md:m-10 rounded-md p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
          <div className="flex justify-center items-center">
            <iframe className="w-full h-full rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.2259383567!2d78.0783569505099!3d17.412077860436995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713524588349!5m2!1sen!2sin" id="responsive-iframe" ></iframe>
          </div>
          <div className="px-4 py-2 ">
            <h2 className="text-green-500 text-center font-bold text-xl md:text-3xl mb-2">Contact Us </h2>
            <form >
              <input type="text" placeholder="Enter your name" className="text-accent-content font-semibold w-full border-2 border-white p-1.5 rounded-md placeholder:font-semibold outline-none" required />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input type="email" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your email" />
                <input type="number" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your Mobile No" />
              </div>
              <select className=" border-2 border-white w-full mt-4 p-1.5 rounded-md outline-none font-semibold text-accent-content">
                <option value="" >Service</option>
                <option value="1" >Wed Developmer</option>
                <option value="2" >SEO</option>
                <option value="3" >UI/UX</option>
                <option value="3" >Other</option>
              </select>
              <textarea className="text-accent-content font-semibold border-2 border-white w-full mt-4 p-5 rounded-md outline-none placeholder:font-medium" placeholder="Enter your message" />
              <button className="flex w-full justify-center rounded-lg bg-green-600 py-2 mt-2 text-center font-semibold text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>



      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Two_UI_Component_Twenty_Thirty_One
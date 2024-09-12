"use client"
import { DialogBox } from '@/components/DialogBox'
import React from 'react'

const Four_UI_Component_One = () => {

  function handelCodeCopy() {
    const codeToCopy = `
  Image Source Link: 
  ------------------
  https://www.mediafire.com/folder/tatwoecdmiw2b/Component+Images

  RenderCode:
  -----------
    <div className='space-y-4'>
        {/* Layout One-1 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='bg-purple-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>

        {/* Layout One-2 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='bg-teal-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>

        {/* Layout One-3 */}
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className='bg-rose-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>

        {/* Layout One-4 */}
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className='bg-sky-400 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>

        {/* Layout One-5 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='bg-lime-600 text-white p-10 text-center'>
            Content goes here box-1
            <div className="mx-auto max-w-3xl">
              <div className='bg-green-400 text-white p-4 text-center'>
                Content goes here box-2
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
    navigator.clipboard.writeText(codeToCopy)
  }

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-lg text-center font-semibold mb-3'>Layout Container</h2>
      <div className='space-y-4'>
        {/* Layout One-1 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='bg-purple-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>
        {/* Layout One-2 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='bg-teal-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>
        {/* Layout One-3 */}
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className='bg-yellow-600 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>

        {/* Layout One-4 */}
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className='bg-sky-400 text-white p-10 text-center'>
            Content goes here
          </div>
        </div>
        {/* Layout One-5 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='bg-lime-600 text-white p-10 text-center'>
            Content goes here box-1
            <div className="mx-auto max-w-3xl">
              <div className='bg-green-400 text-white p-4 text-center'>
                Content goes here box-2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handelCodeCopy} className="mt-4 opacity-60 hover:opacity-80 w-fit font-medium text-white rounded-md">
        <DialogBox />
      </div>
    </div>
  )
}

export default Four_UI_Component_One
import React from 'react'
import image from "../assets/bride entry.jpeg"

const Home = () => {
  return (
    <div className='h-screen w-full flex'>
        <div className="Left w-6/12 bg-[#0f172a]">
        <h1 className='text-9xl font-black mx-10'>S.kumar</h1>
        <h1 className='text-8xl font-medium ml-30 '>Bride Entry</h1>
        <h1 className='text-8xl  ml-50 '>Book portal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quam magnam consequuntur sequi officia esse quia, libero sunt itaque deleniti, mollitia ullam possimus. Accusantium, hic sint consequatur veritatis doloribus voluptate?</p>


        <div className="flex gap-20 mx-10"><button class="rounded-full bg-sky-500/90">Save Changes</button>
        <button class="rounded-full bg-sky-500/90">Save Changes</button></div>
        </div>
        <div className="Right w-6/12 bg-amber-50">
        <img className='w-full h-screen' src={image} alt="" />
        </div>
        
    </div>
  )
}

export default Home
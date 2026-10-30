import React from 'react'
import image from "../assets/bride entry.jpeg"

const Home = () => {
  return (
    <div className='h-screen w-full flex'>
        <div className="Left w-6/12 bg-[#0f172a]">
        <h1 className=''>S.kumar</h1>
        </div>
        <div className="Right w-6/12 bg-amber-50">
        <img className='w-full h-screen' src={image} alt="" />
        </div>

    </div>
  )
}

export default Home
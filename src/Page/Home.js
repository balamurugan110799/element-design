import React from 'react'
import Leaf from "../components/Assets/Images/leaf.webp"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-1'>
              <div className='border p-4'>
              <img src={Leaf} alt="leaf"/>
              <p className='text-text-color pt-2 text-ash-blue heading text-[20px]'>Green leaf </p>

              <div className='grid grid-cols-2 pt-2'>
                <div className='flex justify-start'>
                    <button className='bg-primary hover:bg-ash-blue duration-300 px-10 py-2 rounded-lg text-white'>Code</button>
                </div>
                <div className='flex justify-end'>
                  <Link to="/leaf">
                  
                    <button className='bg-primary px-10 py-2 rounded-lg text-white'>View</button></Link>
                </div>

              </div>
              </div>

            </div>

        </div>
      </div>
        
    </div>
  )
}

export default Home
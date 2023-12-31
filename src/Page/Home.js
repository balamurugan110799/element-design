import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from '../components/JS/Header';

import { data } from './CardData/data';
import PopUp from '../components/JS/PopUp';
import Login from './Admin/Login';
function Home() {
  const [popUp, setPopUp] = useState(false)
  const [login, setLogin] = useState(false)

  const [code, setCode] = useState()

  const handlePopUp = () => {
    setPopUp(!popUp)
  }
  const tokenCheck = (v) => {
    var token = localStorage.auth;
    console.log(token)
    if (token === undefined || token === null) {
      setLogin(!login)
    } else {
      setPopUp(!popUp)
      setCode(v)
    }
  }

  const loginHandle = () => {
    setLogin(!login)
  }

  const authView = () => {
    localStorage.setItem("auth", "Bala")
  }

  return (
    <div>
      <Header />
      <div className='container mx-auto py-10'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2  sm:grid-cols-1 gap-4'>

          {data?.map((v, i) => {
            console.log(v.html)
            return (
              <div key={i} className='col-span-1'>
                <div className='border group p-4'>
                  <div className='overflow-hidden'>
                    <Link to={v.url}>
                      <img src={v.img} alt={v.alt} className='group-hover:scale-125 duration-700 cursor-pointer' />
                    </Link>
                  </div>
                  <p className='text-text-color py-2 pb-1 text-primary group-hover:text-primary heading text-[24px]'>{v.title} </p>
                  
                  <div className='grid grid-cols-2 pt-1'>
                    <div className='flex justify-start'>
                      <button onClick={() => tokenCheck(v)} className='bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white'>Code</button>
                    </div>
                    <div className='flex justify-end'>
                      <Link to={v.url}>
                        <button className='bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white'>View</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='col-span-1'>

            {login ? <Login loginHandleClose={loginHandle} /> : null}

            {popUp ? <PopUp handleClose={handlePopUp}  code={code} /> : null}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
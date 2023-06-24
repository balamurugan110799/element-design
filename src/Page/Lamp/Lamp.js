import React, { useState } from 'react'
import "./Lamp.css"


function Lamp() {
    const [switchState,setSwitchState]=useState(false)
  return (
    <div>
<div class={`${switchState===true ? "lamp-on-background" :"" } background-lamp`}>
  <div class="lamp-head">
    <div class="lamp-overall">
  <div class={`${switchState===true ? "lamp-on" :"lamp-off" }  lamp`}>
  </div>
  <div class={`${switchState===true ? "stick-on" :"stick-off"} stick`}>
  </div>
    </div>
  </div>
</div>
<div className='grid w-[100%] absolute bottom-0 grid-cols-1 py-4 px-6'>
<div className='flex  justify-end'>
<button className={`${switchState===true ? "bg-[#f7bd00]":"bg-[#969595]" } duration-700 text-[#222] px-4 mx-2 py-2 border-design`} onClick={()=>setSwitchState(true)}>ON</button>
<button  className={`${switchState===false ? "bg-[#f7bd00] ":" bg-[#969595] " }  duration-700 text-[#222] px-4 py-2 border-design`} onClick={()=>setSwitchState(false)}>OFF</button>
</div>
  
</div>

    </div>
  )
}

export default Lamp
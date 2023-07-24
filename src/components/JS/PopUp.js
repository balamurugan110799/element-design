import React, { useState } from 'react'
import "../CSS/popUp.css"
import { data } from "../../Page/CardData/data";
function PopUp(props) {
    console.log(props)
    const [html, setHtml] = useState(true)
    const [css, setCss] = useState(false)
    const [dataValue, setDataValue] = useState(`<!DOCTYPE html>
    <html lang="en">
    `)

    const handleHtml = () => {
        setHtml(true)
        setCss(false)
    }
    const handleCss = () => {
        setHtml(false)
        setCss(true)
    }
    let text = document?.getElementById('myText')?.innerHTML
    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    
    return (
        <div>
            <div className="popup-box">
                <div className="box">
                    <div className='flex bg-secondary'>
                        <div onClick={() => handleHtml()} className={` ${html ? "bg-ash-blue text-white " : "bg-primary text-grey"} px-6   duration-300 hover:text-white py-2 cursor-pointer hover:bg-ash-blue `}>
                            Html
                        </div>
                        <div onClick={() => handleCss()} className={` ${css ? "bg-ash-blue text-white " : "bg-primary text-grey"} px-6   duration-300 hover:text-white py-2 cursor-pointer hover:bg-ash-blue `}>
                            CSS
                        </div>

                    </div>
                    <p id="myText">Bala World</p>
                    <button class="btn" onClick={() => copyContent(props)}>Copy!</button>

                    {html ? <div className='bg-grey h-[65vh] overflow-auto'>
                        <p  className='text-ash-blue'>
                            {props.code.html}
                        </p>
                    </div> : null}

                    {css ? <div className='bg-grey h-[65vh] overflow-auto'>
                        <p className='text-ash-blue'>
                            {props.code.css}
                        </p>
                    </div> : null}



                    <div className='flex justify-end mt-2'>

                        <button onClick={props.handleClose} className='bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white' >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopUp
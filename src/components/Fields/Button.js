import react from "react"

function Buttons({buttonName}){
    return(
        <div>
            <button className='bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white'>
                {buttonName}
            </button>
        </div>
    )
}

export default Buttons
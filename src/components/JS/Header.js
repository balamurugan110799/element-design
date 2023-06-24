import React from "react";
import logo from "../Assets/Images/logo.webp"

function Header(){
    return(
        <div className="bg-primary py-2">
            <div className="container mx-auto ">
                <div className="grid grid-cols-4">
                    <div className="col col-span-1">
                        <img src={logo} alt="logo" className="h-[60px]"/>
                    </div>
                    <div className="col-span-3">
                        <div>Element Design Vibes</div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Header
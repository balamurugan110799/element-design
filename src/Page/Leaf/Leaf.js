import React, { useEffect, useState } from "react";
import "./Leaf.css"

function Leaf() {
    const [sessions, setSessions] = useState({ sessions: "summer" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSessions({
            ...sessions,
            [name]: value,
        })
    }
    console.log(sessions)
    useEffect(() => {
        document.getElementById("summer").checked = true;
        console.log(sessions)
    }, [])



    return (
        <div className={`${sessions.sessions === "summer" ? "background-green" : sessions.sessions === "winter" ? "backround-winter" : sessions.sessions === "spring" ? "background-spring" : sessions.sessions === "autumn" ? "background-autumn" : " "} background-leaf relative`}>
            <div className="leaf-head">
                <div className={`${sessions.sessions === "summer" ? "summer-left-leaf" : sessions.sessions === "winter" ? "winter-left-leaf" : sessions.sessions === "winter" ? "winter-left-leaf" : sessions.sessions === "spring" ? "spring-left-leaf" : sessions.sessions === "autumn" ? "autumn-left-leaf" : ""} left-leaf`}></div>
                <div className={`${sessions.sessions === "summer" ? "summer-leaves" : sessions.sessions === "winter" ? "winter-leaves" : sessions.sessions === "spring" ? "spring-leaves" : sessions.sessions === "autumn" ? "autumn-leaves" : ""} leaves`}>
                    <div className={`${sessions.sessions === "summer" ? "summer-right-leaf" : sessions.sessions === "winter" ? "winter-right-leaf" : sessions.sessions === "spring" ? "spring-right-leaf" : sessions.sessions === "autumn" ? "autumn-right-leaf" : ""} right-leaf`}></div>
                </div>
            </div>

            <div className="absolute bottom-0 w-[100%] px-4">
                <div className="grid py-4 lg:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
                    <div>

                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div>
                            <label className=" cursor-pointer">
                                <div className="bg-primary hover:bg-ash-blue duration-300 px-4 py-2 border-design text-white">
                                    <input id="summer" type="radio" value="summer" onChange={(e) => handleChange(e)} name="sessions" className="mr-2 transition" />Summer
                                </div>
                            </label>
                        </div>

                        <div>
                            <label className=" cursor-pointer">
                                <div className="bg-primary hover:bg-ash-blue duration-300 px-4 py-2 border-design text-white">
                                    <input  type="radio" value="winter" onChange={(e) => handleChange(e)} name="sessions" className="mr-2 transition" />Winter
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className=" cursor-pointer">
                                <div className="bg-primary hover:bg-ash-blue duration-300 px-4 py-2 border-design text-white">
                                    <input  type="radio" value="spring" onChange={(e) => handleChange(e)} name="sessions" className="mr-2 transition" />Spring
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className=" cursor-pointer">
                                <div className="bg-primary hover:bg-ash-blue duration-300 px-4 py-2 border-design text-white">
                                    <input  type="radio" value="autumn" onChange={(e) => handleChange(e)} name="sessions" className="mr-2 transition" />Autumn
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Leaf
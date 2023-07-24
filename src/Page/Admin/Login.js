import React, { useState } from "react";
import "../../components/CSS/popUp.css"
import Input from "../../components/Fields/Input";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import axios from "axios";
function Login(props) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const [loginErrors, setLoginErrors] = useState({
        email: "",
        password: ""
    })

    const [loginSuccess, setloginSuccess] = useState("")

    const [loginEMailErrorsAxios, setLoginEMailErrorsAxios] = useState("")
    const [loginPasswordErrorsAxios, setLoginPasswordErrorsAxios] = useState("")


    const [signUpData, setsignUpData] = useState({
        username: "",
        signemail: "",
        signpassword: "",
        signconfrompassword: "",
    })

    const [signUpError, setsignUpError] = useState({
        username: "",
        signemail: "",
        signpassword: "",
        signconfrompassword: "",
    })
    const [loginState, setLoginState] = useState(true)
    const [signState, setSignUpState] = useState(false)
    const [LoginErrorState, setLoginErrorState] = useState(true)
    const [loginErrorHandle, setLoginErrorHandle] = useState(false)


    const [signUpErrorState, setSignUpErrorState] = useState(false)
    const LoginState = () => {
        setLoginState(true)
        setSignUpState(false)
    }
    const signUpState = () => {
        setSignUpState(true)
        setLoginState(false)
    }
    const handleChange = (e) => {

        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })

        setsignUpData({
            ...signUpData,
            [name]: value,
        })
        setLoginEMailErrorsAxios("")
        setLoginPasswordErrorsAxios("")

    }


    if (LoginErrorState === true) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (loginData.email === "") {
            loginErrors.email = "Email is required"
        } else if (!regex.test(loginData.email)) {
            loginErrors.email = "Vaild Email is required"
        } else {
            loginErrors.email = true
        }

        if (loginData.password === "") {
            loginErrors.password = "Password is required"
            //  LoginErrorsAxios=""
        } else {
            loginErrors.password = true
        }
    }








    if (signUpErrorState === true) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (signUpData.signemail === "") {
            signUpError.signemail = "Email is required"
        } else if (!regex.test(signUpData.signemail)) {
            signUpError.signemail = "Vaild Email is required"
        } else {
            signUpError.signemail = true
        }
        if (signUpData.username === "") {
            signUpError.username = "User Name is required"
        } else {
            signUpError.username = true
        }

        if (signUpData.signpassword === "") {
            signUpError.signpassword = "Password is required"
        } else {
            signUpError.signpassword = true
        }
        console.log(signUpData.signconfrompassword, signUpData.signpassword)

        console.log(signUpData.signconfrompassword === signUpData.signpassword)
        if (signUpData.signconfrompassword === "") {
            signUpError.signconfrompassword = "Confrom Password Required"
        } else if (signUpData.signconfrompassword === signUpData.signpassword) {
            signUpError.signconfrompassword = true
        } else if (signUpData.signconfrompassword !== signUpData.signpassword) {
            signUpError.signconfrompassword = "password not Match"

        }
    }


    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        setSignUpErrorState(true)
        if (signUpError.username === true && signUpError.signemail === true && signUpError.signpassword === true && signUpError.signconfrompassword === true) {
            alert("Success")
        }
        handleChange(e)
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        // alert("Hello")
        setLoginErrorState(true)
        setLoginErrorHandle(true)
        console.log(loginErrors)
        console.log(loginData)

        console.log(loginErrors.password === true, loginErrors.email === true)
        if (loginErrors.password === true && loginErrors.email === true) {

            axios.post("http://localhost:8000/api/login", loginData)
                .then((data) => {
                    localStorage.setItem("auth", data.data)
                    if (data.status === 200) {
                        setloginSuccess("Login Successfully")

                        setInterval(() => {
                            setloginSuccess("")
                            window.location.reload()
                        }, 5000)
                    }
                    console.log(data)
                    // window.location.reload();
                })
                .catch((err) => {
                    console.log(err)
                    setLoginEMailErrorsAxios(err.response.data.email)
                    setLoginPasswordErrorsAxios(err.response.data.password)
                })
        }
        handleChange(e)
    }

    return (
        <div className="center">
            <div className="popup-box center">
                <div className="login-box">
                    <div className=" relative grid grid-cols-2">

                        <div onClick={() => LoginState()} className={`${loginState ? "bg-ash-blue" : "bg-grey text-ash-blue "}  heading text-h2  cursor-pointer tracking-widest	 text-center text-white py-2  `}>
                            Login
                        </div>
                        <div onClick={() => signUpState()} className={`${signState ? "bg-ash-blue" : "bg-grey text-ash-blue "}  heading text-h2 cursor-pointer  tracking-widest	 text-center text-white py-2  `}>
                            Sign Up
                        </div>
                    </div>

                    {loginState ? <div>

                        <div className="p-6">
                            <form>


                                <div className="pb-2">
                                    <Input
                                        label="Email"
                                        name="email"
                                        type="text"
                                        placeHolder="Enter the Email"
                                        handleChange={handleChange}
                                    />
                                    {/* {JSON.stringify(loginErrors)} */}
                                    {loginErrorHandle ?
                                        <div>
                                            {loginErrors.email.length >= 0 ? <span className="text-error text-[12px]">{loginErrors.email}</span> : null}
                                            <span className="text-error text-[12px]"> {loginEMailErrorsAxios} </span>
                                        </div> : null}
                                    {/* {loginErrorHandle ? <span className="text-error text-[12px]">{loginErrors.email}</span> : null} */}

                                </div>
                                <div className="pb-4">

                                    <Input
                                        label="Password"
                                        name="password"
                                        type="password"
                                        text="password"
                                        placeHolder="Enter the Password"
                                        handleChange={handleChange}
                                    />
                                    {loginErrorHandle ?
                                        <div>
                                            {loginErrors.password.length >= 0 ? <span className="text-error text-[12px]">{loginErrors.password}</span> : null}
                                            <span className="text-error text-[12px]"> {loginPasswordErrorsAxios} </span>
                                        </div> : null}



                                </div>
                              

                                <div className=" grid grid-cols-2">
                                    <div className=" flex justify-start">
                                        <div onClick={props.loginHandleClose} className="group bg-ash-blue cursor-pointer center text-white hover:bg-grey-logo rounded h-[30px] w-[30px]">
                                            <HiOutlineArrowSmLeft className="text-h4 group-hover:text-ash-blue" />
                                        </div>
                                    </div>


                                    <div className=" flex justify-end">
                                        <button className="bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white" onClick={(e) => handleSubmitLogin(e)}>Login</button>


                                    </div>

                                </div>
                                {loginSuccess.length === 0 ? null : <div className=" grid flex justify-center  pb-2 pt-4">
                                <span className="text-[#003c00] text-center text-sm w-[100%]">
                                    {loginSuccess}
                                </span>
                                </div>}
                               
                              

                            </form>
                            {/* {JSON.stringify(loginData)}
                            {JSON.stringify(loginErrors)} */}

                        </div>


                    </div> : null}

                    {signState ? <div>
                        <div className="p-6">
                            <div className="pb-2">

                                <Input
                                    label="User Name"
                                    name="username"
                                    type="text"
                                    placeHolder="Enter the user Name"
                                    handleChange={handleChange}
                                />
                                <span className="text-error text-[12px]">{signUpError.username}</span>

                            </div>
                            <div className="pb-2">

                                <Input
                                    label="Email"
                                    name="signemail"
                                    type="text"
                                    placeHolder="Enter the Email"
                                    handleChange={handleChange}
                                />
                                <span className="text-error text-[12px]">{signUpError.signemail}</span>

                            </div>
                            <div className="pb-2">

                                <Input
                                    label="Password"
                                    name="signpassword"
                                    type="password"
                                    text="password"
                                    placeHolder="Enter the Password"
                                    handleChange={handleChange}
                                />
                                <span className="text-error text-[12px]">  {signUpError.signpassword}</span>

                            </div>
                            <div className="pb-4">

                                <Input
                                    label="Confrom Password"
                                    name="signconfrompassword"
                                    type="password"
                                    text="password"
                                    placeHolder="Enter the Confrom Password"
                                    handleChange={handleChange}
                                />

                                <span className="text-error text-[12px]">   {signUpError.signconfrompassword}</span>

                            </div>

                            <div className=" grid grid-cols-2">
                                <div className=" flex justify-start">
                                    <div onClick={props.loginHandleClose} className="group bg-ash-blue cursor-pointer center text-white hover:bg-grey-logo rounded h-[30px] w-[30px]">
                                        <HiOutlineArrowSmLeft className="text-h4 group-hover:text-ash-blue" />
                                    </div>
                                </div>
                                <div className=" flex justify-end">
                                    <button className="bg-primary hover:bg-ash-blue duration-300 px-10 py-2 border-design text-white" onClick={(e) => handleSubmitSignUp(e)}>Sign Up</button>

                                </div>

                            </div>


                        </div>

                    </div> : null}




                    <div >

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login 
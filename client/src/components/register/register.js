import React, { useState } from 'react'
import Axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        userbiokey: 200,
        Threshold: null,
    })

    const handleChange = (key, e) => {
        var value = e
        if (key !== "userbiokey" && key !== "Threshold") {
            value = e.target.value
        }
        setUser({
            ...user,//spread operator
            [key]: value,
        })
    }

    const onCreateUser = async() => {
        const isDataAvailable = !!(user.name && user.username && user.password && user.userbiokey && user.Threshold)
        if (isDataAvailable) {
            Axios.post("http://localhost:3001/register", user)
                .then(res => alert("successful create"))
            window.href = "/login"
        }
        else {
            alert("invalid input")
        };
    }

    //register function 
    const handleRegister = (e) => {
        e.preventDefault()

        if (user.password.length > 7 && user.password.length < 11){ //8-10
            user.Threshold = 20
        } else if (user.password.length > 10 && user.password.length < 21){ //11-20
            console.log("here");
            user.Threshold = 30
        } else if (user.password.length > 20 && user.password.length < 31){ //21-30
            user.Threshold = 40
        }
        console.log(user.Threshold); 
        onCreateUser()
    }

    return (
        <div class="flex flex-col max-w-md px-4 py-8 rounded-lg shadow bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center mb-2 text-xl font-light sm:text-2xl text-white">
                Create a new account
            </div>
            <span class="justify-center text-sm text-center flex-items-center text-gray-400">
                Already have an account ?
                <a href="/" class="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </a>
            </span>
            <div class="p-6 mt-8">
                <form action="#" onSubmit={handleRegister}>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={e => handleChange("name", e)} placeholder="name" />
                        </div>
                    </div>
                    <div class="flex gap-4 mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-username" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" value={user.username} onChange={e => handleChange("username", e)} placeholder="username" />
                        </div>

                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input id="create-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={e => handleChange("password", e)} placeholder="password" />
                        </div>
                    </div>
                    <br />
                    <span class="justify-center text-sm text-center flex-items-center text-gray-400">
                        Confirm Password*
                    </span>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input id="create-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={e => handleChange("password", e)} placeholder="password" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input id="create-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={e => handleChange("password", e)} placeholder="password" />
                        </div>
                    </div>
                    <div class="flex w-full my-4">
                        <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register
import React from 'react'

const Homepage = ({...prop}) => {
    const {name, username, password, userbiokey} = prop
    
    return (
        <>
            <h1>Welcome to Homepage which is only visible when you are logged in ${name}</h1>
            <h6>${username}</h6>
            <h6>${password}</h6>
            <h6>${userbiokey}</h6>
        </>
    )
}

export default Homepage
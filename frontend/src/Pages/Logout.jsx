import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate();

    const logOut = () => {
        fetch('http://localhost:80/api/logout', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'content-type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            
            navigate('/');
            window.location.reload();
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        logOut()

    },[])



    return (
        <h1>Logged Out</h1>

    )
}

export default Logout
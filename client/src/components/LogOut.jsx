import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogOut = ({stateLoged,setStateLoged}) => {
    const navigate = useNavigate();
  
    const logOutFunc = ()=>{
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
        .then(res =>  {localStorage.removeItem('isLogedIn'); setStateLoged(false); navigate('/')})
        .catch(err=> console.log(err))
    }
    return (
      <input type="button" value={"logout"} onClick={logOutFunc} />
    )
}
export default LogOut;
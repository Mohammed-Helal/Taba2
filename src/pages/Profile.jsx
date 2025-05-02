import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Store/Slices/authSlice'
import { logout_1 } from '../API/authApi'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout_1();
    } catch (err) {
      console.error("Logout API error:", err);
    }
    dispatch(logout());
    Cookies.remove("token");
    navigate("/Taba2");
    window.location.reload();
  };
  
  return (
    <>
      <button onClick={handleLogout}>
        logout
      </button>
    </>
  )
}

export default Profile
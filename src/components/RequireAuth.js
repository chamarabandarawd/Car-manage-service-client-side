
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import { Navigate, useLocation,Outlet } from 'react-router-dom'

const RequireAuth = () => {
const token=useSelector(selectCurrentToken)
const location =useLocation()

  return (
    
        token ? <Outlet/>:<Navigate to ='login' state={{from:location}} replace/>
    
  )
}

export default RequireAuth
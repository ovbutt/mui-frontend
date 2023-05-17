import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../components'

const PrivateRoute = () => {
  const location = useLocation()
  const user = localStorage.getItem('user')
  console.log('user: ', user)
  return user !== null ? (
    <React.Fragment>
      <Header>
        <Outlet />
      </Header>
    </React.Fragment>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute

import * as React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import { AuthContext } from '../contexts/AuthContext'
import Profile from '../pages/dashboard/Profile'
import Cars from '../pages/dashboard/Cars'
import Reg from '../pages/Reg'

const Stack = () => {
  const { currentUser } = React.useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/Profile" element={<Profile />} />
          <Route index   element={<Home />} />

          <Route
           path="/dashboard" 
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
           <Route
           path="/cars" 
            element={
              <RequireAuth>
                <Cars />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Stack

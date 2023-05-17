import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '../layouts'
import { Login, Signup } from '../views'

const Home = lazy(() => import('../views/Home'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes

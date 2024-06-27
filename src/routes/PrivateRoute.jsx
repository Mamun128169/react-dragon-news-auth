import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars h-[100px] w-[100px]"></span>
        {/* <h2 className="text-7xl">loading.....</h2> */}
      </div>
    )
  }

  if (user) {
    return <>{children}</>
  }

  return <Navigate state={location.pathname} to="/logIn" />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute

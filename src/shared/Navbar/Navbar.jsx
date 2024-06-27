import { Link, NavLink } from 'react-router-dom'
import defaultImage from '../../assets/user.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext)
  // console.log(user.photoURL)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars h-[100px] w-[100px]"></span>
        {/* <h2 className="text-7xl">loading.....</h2> */}
      </div>
    )
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/career'}>Career</NavLink>
      </li>
      <li>
        <NavLink to={'/logIn'}>LogIn</NavLink>
      </li>
      <li>
        <NavLink to={'/register'}>Register</NavLink>
      </li>
    </>
  )

  //handle sign out
  const handleSignOut = () => {
    signOutUser()
  }

  return (
    <div className="navbar bg-base-100 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-500"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div className="w-10 rounded-full">
          <img
            className="rounded-full"
            alt="User Avatar"
            // src={user?.photoURL || defaultImage}
            src={user && user.photoURL ? user.photoURL : defaultImage}
            // src={defaultImage}
          />
        </div>
        {user ? (
          <div onClick={handleSignOut}>
            <button className="font-medium bg-gray-800 hover:bg-gray-950 text-white px-7 rounded-none py-2">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to={'/logIn'}>
            <button className="font-medium bg-gray-800 hover:bg-gray-950 text-white px-7 rounded-none py-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar

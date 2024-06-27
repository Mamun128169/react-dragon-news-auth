import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar/Navbar'
import { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '../context/AuthProvider'

const LogIn = () => {
  const [showPass, setShowPass] = useState(false)
  const { signInUser } = useContext(AuthContext)
  const location = useLocation()
  // console.log(location)

  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

    //sign in a user
    signInUser(email, password)
      .then((result) => {
        console.log(result)

        //navigate user
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="my-8">
        <div className="hero my-14">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="text-xl text-center font-semibold my-8">
                Login your account
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative items-center">
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-4 cursor-pointer"
                  >
                    {showPass ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gray-800 rounded-none border-none">
                  Login
                </button>
              </div>
            </form>
            {/* already have an account */}
            <div className="text-sm flex justify-center pb-5 gap-1">
              <p>If you have not register wet?</p>
              <button className="text-blue-600 font-semibold underline">
                <Link to={'/register'}>Register here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn

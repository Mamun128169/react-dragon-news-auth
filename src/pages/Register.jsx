import Navbar from '../shared/Navbar/Navbar'
import { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const { createUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    console.log(name, photo, email, password)

    // create user with email & password
    createUser(email, password)
      .then((result) => {
        console.log(result)

        // update user's profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: 'https://i.postimg.cc/657csZwR/1691212264.png',
        })

        navigate('/')
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
            <form onSubmit={handleRegister} className="card-body">
              <div className="text-xl text-center font-semibold my-8">
                Register your account
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered"
                  required
                />
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
                <label className="label flex items-center gap-1 text-sm font-medium mt-2 cursor-pointer">
                  <input type="checkbox" required />
                  <p>accept all terms and conditions.</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gray-800 rounded-none border-none">
                  Register
                </button>
              </div>
            </form>
            {/* already have an account */}
            {/* <div className="text-sm flex justify-center pb-5 gap-1">
              <p>If you have not register wet?</p>
              <button className="text-blue-600 font-semibold underline">
                <Link to={'/register'}>Register here</Link>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

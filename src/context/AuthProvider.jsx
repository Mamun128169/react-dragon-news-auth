import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //get currently singed user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })

    //clean up function
    return () => {
      unsubscribe()
    }
  }, [])

  //sign in with email and password
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //sign out the current user
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  const contextValue = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider

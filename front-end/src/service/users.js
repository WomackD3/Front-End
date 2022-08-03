import api from './apiConfig.js'
import jwtDecode from 'jwt-decode'

export const signUp = async (userData) => {
  try { 
    const res = await api.post('/register', userData)
    localStorage.setItem('token', res.data.token)
    const user = jwtDecode(res.data.token)
    console.log(user)
    return user.id
  } catch (error) {
    throw error
  }
}

export const login = async (userData) => {
  try {
    const res = await api.post('/login', userData)
    localStorage.setItem('token', res.data.token)
    const user = jwtDecode(res.data.token)
    return user.id
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem('token')
    return true
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      return user.id
    }
    return false
  } catch (error) {
    throw error
  }
}
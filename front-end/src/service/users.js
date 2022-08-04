import api from './apiConfig.js'

export const signUp = async (userData) => {
  try { 
    const res = await api.post('/register', userData)
    localStorage.setItem('token', res.data.token)
    return false
  } catch (error) {
    throw error
  }
}

export const login = async (userData) => {
  try {
    const res = await api.post('/login', userData)
    localStorage.setItem('token', res.data.token)
    console.log(res.data)
    return false
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
      return false
    }
    return false
  } catch (error) {
    throw error
  }
}
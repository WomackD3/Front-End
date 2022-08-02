import api from './apiConfig.js'
import jwtDecode from 'jwt-decode'

export const signUp = async (userData) => {
  try { 
    const res = await api.post('/register', userData)
    localStorage.setItem('token', res.data.token)
    const user = jwtDecode(res.data.token)
    console.log(user)
    return user
  } catch (error) {
    throw error
  }
}


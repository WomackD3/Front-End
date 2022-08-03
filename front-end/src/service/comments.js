import api from "./apiConfig.js"

export const createComment = async (id, commentData) => {
  try {
    const res = await api.post(`/posts/${id}/comments`, commentData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (id) => {
  try {
    const res = await api.delete(`/comments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}


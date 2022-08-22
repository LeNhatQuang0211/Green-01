import axios from "axios"

export const getUsers = () => {
   return axios.get('https://62ff83d59350a1e548e07505.mockapi.io/users')
}

export const getUser = (id) => {
    return axios.get(`https://62ff83d59350a1e548e07505.mockapi.io/users/${id}`)
 }

 export const createUser = (data) => {
    return axios.post(`https://62ff83d59350a1e548e07505.mockapi.io/users/`, data)
 }

 export const editUser = (id, data) => {
    return axios.put(`https://62ff83d59350a1e548e07505.mockapi.io/users/${id}`, data)
 }

 export const deleteUser = (id) => {
    return axios.delete(`https://62ff83d59350a1e548e07505.mockapi.io/users/${id}`)
 }
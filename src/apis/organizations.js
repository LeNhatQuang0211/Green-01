import axios from "axios"

export const getOrganizations = () => {
   return axios.get('https://62ff83d59350a1e548e07505.mockapi.io/Organization')
}

export const getOrganization = (id) => {
    return axios.get(`https://62ff83d59350a1e548e07505.mockapi.io/Organization/${id}`)
 }

 export const createOrganization = (data) => {
    return axios.post(`https://62ff83d59350a1e548e07505.mockapi.io/Organization/`, data)
 }

 export const editOrganization = (id, data) => {
    return axios.put(`https://62ff83d59350a1e548e07505.mockapi.io/Organization/${id}`, data)
 }

 export const deleteOrganization = (id) => {
    return axios.delete(`https://62ff83d59350a1e548e07505.mockapi.io/Organization/${id}`)
 }
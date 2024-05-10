import axios from 'axios'


const baseUrl = `https://api.vschool.io/workshop/thing`


export const getRequest = () => {
    return axios.get(baseUrl)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const createRequest = (thing) => {
    return axios.post(baseUrl, thing)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const editRequest = (id, thing) => {
    return axios.put(`${baseUrl}/${id}`, thing)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const deleteRequest = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(res => res.data)
        .catch(err => console.log(err))
}
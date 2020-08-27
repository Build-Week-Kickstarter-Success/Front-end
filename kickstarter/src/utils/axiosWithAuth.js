import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('authToken');
    return axios.create({
        baseURL: 'https://bw1kickstartersuccess.herokuapp.com/api/',
        headers: {
            Authorization: token
        }
    })
}
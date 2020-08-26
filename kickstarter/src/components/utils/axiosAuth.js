import axios from "axios"

export const axiosAuth = () => {
    const token = localStorage.getItem("token");
console.log(token)
    return axios.create({
        baseURL: "https://bw1kickstartersuccess.herokuapp.com/api/",
        headers: {authorization: "Bearer " + token},
    })
}
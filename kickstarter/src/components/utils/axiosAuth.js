import axios from "axios"

export const axiosAuth = () => {
    const token = window.localStorage.getItem("token");

    return axios.create({
        baseURL: "https://bw1kickstartersuccess.herokuapp.com/api/",
        headers: {Authorization: token}
    })
}
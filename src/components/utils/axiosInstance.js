import axios from 'axios';
import * as fs from 'node:fs';

const base_url = "http://localhost:3000"

export const loginUser = async (req) => {
    return axios.post(`${base_url}/common/login`, req).then((res) => res)
}

export const registerUser = async (req) => {
    return axios.post(`${base_url}/common/register`, req).then((res) => res);
}

export const getUserDetails = async () => {
    return axios.get(`${base_url}/common/getUserDetails/${localStorage.getItem("email")}`);
}

export const updateUserDetails = async (reqBody) => {
    return axios.put(`${base_url}/common/updateProfile`, reqBody);
}

export const uploadAndScanFiles = async (file, filePath) => {
    const myHeaders = new Headers();

    const formdata = new FormData();
    formdata.append("myFile", file, filePath);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };

    return fetch(`${base_url}/scan/uploadFile`, requestOptions)
        .then((response) => response.text())
}
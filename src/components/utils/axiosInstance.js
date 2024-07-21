import axios from "axios";
import * as fs from "node:fs";

const base_url = "http://localhost:3000";

export const loginUser = async (req) => {
  return axios.post(`${base_url}/common/login`, req).then((res) => res);
};

export const registerUser = async (req) => {
  // if(!req.body.userRole){req.body.userRole = "USER"}
  return axios.post(`${base_url}/common/register`, req).then((res) => res);
};

export const getUserDetails = async () => {
  return axios.get(
    `${base_url}/common/getUserDetails/${localStorage.getItem("email")}`
  );
};

export const updateUserDetails = async (reqBody) => {
  return axios.put(`${base_url}/common/updateProfile`, reqBody);
};

export const generateKpiKeys = async (reqBody) => {
  return axios.post(`${base_url}/pki/generateKeys`, reqBody);
};

export const saveKpiKeys = async (reqBody) => {
  return axios.post(`${base_url}/pki/saveKeys`, reqBody);
};

export const getSavedKpiKeys = async (userId) => {
  return axios(`${base_url}/pki/getKeysByUser/${userId}`);
};

export const deleteKpiKey = async (pkiId) => {
  return axios.delete(`${base_url}/pki/deleteKeysByKeyId/${pkiId}`);
};
export const uploadAndScanFiles = async (file, filePath) => {
  const myHeaders = new Headers();
  const formdata = new FormData();
  formdata.append("myFile", file, filePath);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${base_url}/scan/uploadFile`, requestOptions).then((response) =>
    response.text()
  );
};

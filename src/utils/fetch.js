import axios from "axios";

const url = `https://776f-102-88-63-203.ngrok-free.app`;
export async function login(payload) {
  console.log(payload);
  const response = await axios.post(
    `${url}/api/V1/skyshowNG/Admin/login`,
    payload
  );
  return response.data;
}

export async function analysis() {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.get(
    `${url}/api/V1/skyshowNG/Admin/UsersAnalysis`,
    { headers }
  );
  return response.data;
}

export async function userAnalysis() {
  const response = await axios.get(`${url}/api/skyshowNG/Admin/UsersAnalysis`);
  return response.data;
}

export async function getAllTransaction() {
  const response = await axios.get(`${url}/api/V1/skyshowNG/allTransactions`);
  return response.data;
}

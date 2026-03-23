import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// DOCTORS
export const getDoctors = () => axios.get(`${BASE_URL}/doctors`);
export const addDoctor = (data) => axios.post(`${BASE_URL}/doctors`, data);

// SPECIALIZATION
export const getSpecializations = () =>
  axios.get(`${BASE_URL}/specializations`);

export const assignSpecialization = (data) =>
  axios.post(`${BASE_URL}/doctor-specialization`, data);

export const getDoctorsBySpecialization = (code) => {
  return axios.get(`http://localhost:8080/api/doctor-specialization/${code}`);
};

// SURGERY
export const getTodaySurgeries = () =>
  axios.get(`${BASE_URL}/today`);

export const updateSurgery = (id, data) =>
  axios.put(`${BASE_URL}/surgeries/${id}`, data);
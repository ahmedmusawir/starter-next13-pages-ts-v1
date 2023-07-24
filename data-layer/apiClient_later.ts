import axios, { CanceledError } from "axios";

// const apiKey = process.env.REACT_APP_GHL_API_KEY;

const apiBaseURL = "http://localhost:1337";

const apiClient = axios.create({
  baseURL: apiBaseURL,
  // headers: { Authorization: `Bearer ${apiKey}` },
});

export default apiClient;
export { CanceledError };

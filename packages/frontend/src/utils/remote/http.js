import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

http.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    throw err;
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000", // FastAPI Base URL
//   headers: { "Content-Type": "application/json" },
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://127.0.0.1:8000/api";
  // baseURL = "https://kodinyumba.app/api";
} else {
  baseURL = "https://kodinyumba.app/api";
}

export const serverUrl = axios.create({
  baseURL: baseURL,
});

export const endpointUrl = baseURL;

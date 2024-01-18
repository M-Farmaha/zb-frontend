import axios from "axios";

const BASE_URL = "https://zb-backend-0o5p.onrender.com";

export const preLoadingQuery = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response;
  } catch (error) {}
};

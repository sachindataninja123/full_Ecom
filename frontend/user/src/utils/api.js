import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const res = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return { status: res.status, data };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putData = async (url, formData) => {
  try {
    const res = await fetch(apiUrl + url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw { status: res.status, ...data };

    return data; // ✅ return the parsed body directly, not wrapped
  } catch (error) {
    if (error?.status) throw error;
    throw new Error(`Network error: ${error.message}`);
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(apiUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error.response?.data;
  }
};

export const uploadImage = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.log("Error in editData:", error);
    return error;
  }
};

export const editData = async (url, updatedData) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.log("Error in editData:", error);
    return error;
  }
};

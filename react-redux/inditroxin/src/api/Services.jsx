import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProductsByCategory = async (slug) => {
  const response = await api.get(`/products/category/${slug}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

// MOCK API
// create(POST), Read(GET), Update(PUT/PATCH), Delete(DELETE)

const mockApi = axios.create({
  baseURL: "https://68b46fb645c9016787705d8c.mockapi.io",

});
export const registerUser = async (data) => {
  const response = await mockApi.post("/users",data);
  return response;
}
export const authUser = async (data) => {
  const response = await mockApi.get("/users?email="+ data.email);
  return response;
}
export const getUserByID = async (id) => {
  const response = await mockApi.get(`/users/${id}`);
  return response;
}
export const updateUser = async (id, data) => {
  const response = await mockApi.put(`/users/${id}`, data);
  return response;
};

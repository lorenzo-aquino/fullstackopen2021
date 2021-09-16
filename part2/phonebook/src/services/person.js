import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const deleteUrl = `${baseUrl}/${id}`;
  const request = axios.delete(deleteUrl);
  return request;
};

const updatePerson = (id, updatedObject) => {
  const updateUrl = `${baseUrl}/${id}`;
  const request = axios.put(updateUrl, updatedObject);
  return request.then((response) => response.data);
};

const person = {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,
};

export default person;

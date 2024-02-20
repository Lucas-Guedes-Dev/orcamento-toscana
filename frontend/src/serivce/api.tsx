// api.js

import axios from 'axios';

const baseURL = 'http://192.168.0.24:9000';

const api = axios.create({
    baseURL,
});

export const getData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição GET:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição POST:', error);
    throw error;
  }
};

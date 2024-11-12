"use client";
import axios from 'axios';
import BASE_URL from '../../config';
import { toast } from 'react-toastify';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getProducts`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

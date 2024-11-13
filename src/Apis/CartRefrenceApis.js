"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { toast } from "react-toastify";

export const setCartDataApi = async (cartId) => {
  try {
    const response = await axios.get(`${BASE_URL}/getCartData?id=${cartId}`);
    return response.data[0];
  } catch (error) {
    return error;
  }
};

export const addCartDataApi = async (productId, quantity , cartId) => {
  try {
    let url = `${BASE_URL}/addCart?productId=${productId}`;
    if (cartId && cartId !== 'undefined') {
        url += `&id=${cartId}`;
    }
    const response = await axios.post(url, { quantity });
    localStorage.setItem("cartId", response.data.cartId);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCartDataApi = async (cartId, productId) => {
  try {
    console.log(cartId);
    
    let url = `${BASE_URL}/deleteCartProduct?id=${cartId}`;

    if (productId) {
      url += `&&productId=${productId}`;
    }
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

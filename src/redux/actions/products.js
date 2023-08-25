const { GET_ALL_PRODUCT, NOT_FOUND, LOADING } = require("./type");
import axios from "axios";
import { API_URL } from "@/utils/config";

export const manageProductList = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    dispatch({
      type: LOADING,
    });
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${API_URL}/api/v1/productus?page=1&limit=20`,
      config
    );
    if (res?.data?.status === "success" && res?.data?.products?.length === 0) {
      dispatch({
        type: NOT_FOUND,
        payload: res?.data,
      });
      return;
    }
    if (res?.data?.status === "success") {
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: res?.data,
      });
    }
  } catch (error) {
    if (error) {
      console.log(error, "error===>");
    }
  }
};

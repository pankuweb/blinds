import axios from "axios";
import { LOGIN, REGISTER_AUTH } from "./type";
import { API_URL } from "@/utils/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const loginAuth = (payload, callBack) => async (dispatch) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: payload.email,
      password: payload.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}/api/v1/users/userLogin`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          localStorage.setItem("token", result.token);
          dispatch({
            type: LOGIN,
            payload: result,
          });
          callBack("success", result);
          return;
        }
        callBack("error", result);
      });
  } catch (error) {
    if (error) {
      callBack("error", result);
    }
  }
};

export const registerAuth = (value) => async (dispatch) => {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let data = new FormData();
  data.append("first_name", value?.first_name);
  data.append("middle_name", value?.middle_name);
  data.append("last_name", value?.last_name);
  data.append("mobile", value?.mobile);
  data.append("email", value?.email);
  data.append("password", value?.password);
  data.append("confirm_password", value?.confirm_password);
  data.append("position", "Customer");

  try {
    const res = await axios.post(
      `${API_URL}/api/v1/users/signup`,
      data,
      config
    );
    dispatch({ type: REGISTER_AUTH, payload: res?.data?.data });
    toast.success("user created succesfully!");
    setTimeout(() => {
      return (window.location.href = "/");
    }, 1000);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

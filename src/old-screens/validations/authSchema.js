import * as Yup from "yup";
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, "Email is not valid!")
    .required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const SignupSchema = Yup.object({
  first_name: Yup.string().required("First Name is required!"),
  last_name: Yup.string().required("Last Name is required!"),
  email: Yup.string()
    .email("Please enter a valid email address!")
    .required("Email address is required!"),
  password: Yup.string().required("Password is required!"),
  confirm_password: Yup.string()
    .required("Confirm password is required!")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm password does not match!"
    ),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required!"),
});

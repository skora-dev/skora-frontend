import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().trim().required("First Name is required"),

  lastName: yup.string().trim().required("Last Name is required"),

  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phoneNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

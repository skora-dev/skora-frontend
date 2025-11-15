import { FieldError, UseFormRegister } from "react-hook-form";

export type LoginFormInputs = {
  email: string;
  password: string;
};
export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>; // properly typed
  error?: FieldError;
}

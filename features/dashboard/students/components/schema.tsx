import * as yup from "yup";

export const studentSchema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    className: yup.string().required("Class is required"),
    subjectsCount: yup
      .number()
      .typeError("Must be a number")
      .required()
      .min(1, "Must offer at least 1 subject")
      .max(12, "Maximum 12 subjects allowed"),
    age: yup
      .number()
      .typeError("Must be a number")
      .required()
      .min(4, "Minimum age is 4")
      .max(100, "Maximum age is 100"),
  })
  .required();

export type StudentFormData = yup.InferType<typeof studentSchema>;
export const classes = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
];

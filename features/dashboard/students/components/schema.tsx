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
export const editSubjectSchema = yup.object({
  subject: yup.string().required("Subject is required"),
  caScore: yup
    .number()
    .typeError("CA must be a number")
    .min(0)
    .max(40, "CA cannot exceed 40")
    .required("CA score is required"),
  examScore: yup
    .number()
    .typeError("Exam must be a number")
    .min(0)
    .max(60, "Exam cannot exceed 60")
    .required("Exam score is required"),
});

export type EditSubjectFormValues = yup.InferType<typeof editSubjectSchema>;
export interface EditSubjectProps {
  defaultValues?: EditSubjectFormValues;
  onClose: () => void;
  onSubmitData: (data: EditSubjectFormValues) => void;
}

// types/student.ts
export interface Student {
  id: number;
  name: string;
  className: string;
  subjectsCount: number;
  age: number;
}
export interface CreateStudentPageProps {
  cancel: () => void;
}

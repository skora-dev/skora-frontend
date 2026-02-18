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
export interface StudentDetailsCardProps {
  label: string;
  value: string | number;
  className?: string;
}
export type SubjectResult = {
  subject: string;
  caScore: number; // Continuous Assessment (out of 40)
  examScore: number; // Exam (out of 60)
  overall: number; // caScore + examScore
  passMark: number; // usually 50
  status: "Pass" | "Fail";
};

export type StudentResult = {
  id: number;
  name: string;
  class: string;
  age: number;

  subjects: SubjectResult[];
};
export interface ReportTableProps {
  data: SubjectResult[];
}

export interface Class {
  id: string;
  name: string;
  academicYear: string;
  teacherId?: string;
  teacherName?: string;
  studentCount: number;
  subjects: number;
}

export interface Teacher {
  id: string;
  name: string;

  email: string;
  classes: string[];
  status: string;
  invitedAt: string;
}
export interface CLassType {
  id: string;
  name: string;
  academicYear: string;
  teacherId?: string;
  teacherName?: string;
  studentCount: number;
  subjects: number;
}

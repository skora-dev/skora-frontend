"use client";
import StudentDetails from "@/features/dashboard/students/StudentDetails";
import { useParams } from "next/navigation";

const StudentDetailsPage = () => {
  const { id } = useParams();
  return <StudentDetails id={id as string} />;
};

export default StudentDetailsPage;

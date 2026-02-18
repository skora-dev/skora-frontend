"use client";
import { ArrowLeft } from "lucide-react";
import StudentDetailsCard from "./components/StudentDetailsCard";
import ReportTable from "./components/ReportTable";
import { mockStudents } from "./components/data";
import { useRouter } from "next/navigation";

const StudentDetails = ({ id }: { id: string }) => {
  const student = mockStudents[Number(id) - 1];
  console.log(student);
  const router = useRouter();

  return (
    <section className="p-6 h-[90vh] overflow-y-auto no-scrollbar">
      <div className="flex items-center gap-6">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h1 className="text-2xl text-primary font-semibold">Student Details</h1>
      </div>
      <article className="mt-6 grid grid-cols-2 gap-6 border p-4 border-gray-100 shadow rounded-xl">
        <StudentDetailsCard label="Name" value={student.name} />
        <StudentDetailsCard label="Age" value={student.age} />
        <StudentDetailsCard label="Class" value={student.class} />
        <StudentDetailsCard
          label="Subjects Offered"
          value={student.subjects.length}
        />
      </article>
      <article className="mt-6 border p-4 border-gray-100 shadow rounded-xl overflow-x-scroll no-scrollbar">
        <h2 className="text-primary font-medium">Grades Obtained</h2>
        <section className="mt-6">
          <ReportTable data={student.subjects} />
        </section>
      </article>
    </section>
  );
};

export default StudentDetails;

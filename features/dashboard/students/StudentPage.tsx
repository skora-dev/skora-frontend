"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Student } from "./types/studentTypes";
import CreateStudentPage from "./CreateStudentPage";

const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    name: "Alex Rivera",
    className: "Grade 1",
    subjectsCount: 6,
    age: 15,
  },
  { id: 2, name: "Sam Smith", className: "Grade 2", subjectsCount: 5, age: 17 },
  {
    id: 3,
    name: "Jordan Lee",
    className: "Grade 3",
    subjectsCount: 7,
    age: 16,
  },
  { id: 4, name: "Taylor Wong", className: "11C", subjectsCount: 6, age: 16 },
];

export default function StudentsPage() {
  const [filterClass, setFilterClass] = useState<string>("All");
  const [showAddStudent, setShowAddStudent] = useState(false);
  const filteredStudents =
    filterClass === "All"
      ? MOCK_STUDENTS
      : MOCK_STUDENTS.filter((s) => s.className === filterClass);

  // Get unique classes for the dropdown
  const classes = ["All", "Grade 1", "Grade 2", "Grade 3"];

  return (
    <div className="p-6  mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Student Directory</h1>
        <button
          onClick={() => setShowAddStudent(true)}
          className="bg-primary cursor-pointer text-white px-4 py-3 rounded-2xl hover:bg-primary/80"
        >
          + Add New Student
        </button>
      </div>

      {/* Filter Section */}
      <div className="mb-6 flex items-center gap-4">
        <label htmlFor="classFilter" className="font-medium text-gray-700">
          Filter by Class:
        </label>
        <select
          id="classFilter"
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
        >
          {classes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 font-semibold text-gray-600">Name</th>
              <th className="p-4 font-semibold text-gray-600">Class</th>
              <th className="p-4 font-semibold text-gray-600 text-center">
                Subjects
              </th>
              <th className="p-4 font-semibold text-gray-600 text-center">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(
              ({ name, className, subjectsCount, age, id }, index) => (
                <tr
                  key={id}
                  className={`hover:bg-gray-50  transition ${index + 1 == filteredStudents.length ? "border-none" : "border-b border-gray-100"}`}
                >
                  <td className="p-4 font-medium">
                    <Link
                      href={`students/${id}`}
                      className="text-primary/60 hover:underline"
                    >
                      {name}
                    </Link>
                  </td>
                  <td className="p-4">{className}</td>
                  <td className="p-4 text-center">{subjectsCount}</td>
                  <td className="p-4 text-center">{age}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No students found for this class.
          </div>
        )}
      </div>
      {showAddStudent && (
        <CreateStudentPage cancel={() => setShowAddStudent(false)} />
      )}
    </div>
  );
}

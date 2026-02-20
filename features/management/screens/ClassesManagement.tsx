"use client";
import { teachers, varClass } from "../components/data";
import CustomButton from "@/components/button/CustomButton";
import { useState } from "react";
import { Class } from "../types";
import BoardCards from "../components/BoardCards";
import { Plus } from "lucide-react";
import ClassGridCard from "../components/ClassGridCard";

const ClassesManagement = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [assignLoading, setAssignLoading] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    className: "",
    academicYear: "2024/2025",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateCreateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.className.trim()) {
      newErrors.className = "Class name is required";
    }
    if (!formData.academicYear.trim()) {
      newErrors.academicYear = "Academic year is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateClass = async () => {
    if (!validateCreateForm()) return;

    setCreateLoading(true);

    // Simulate API call
    setTimeout(() => {
      const newClass: Class = {
        id: String(varClass.length + 1),
        name: formData.className,
        academicYear: formData.academicYear,
        studentCount: 0,
        subjects: 0,
      };

      //   setClasses([...classes, newClass]);
      setCreateLoading(false);
      resetCreateModal();
    }, 1000);
  };

  const handleAssignTeacher = async () => {
    if (!selectedTeacherId) {
      setErrors({ teacher: "Please select a teacher" });
      return;
    }

    setAssignLoading(true);

    // Simulate API call
    //     setTimeout(() => {
    //       if (selectedClass) {
    //         const teacher = teachers.find((t) => t.id === selectedTeacherId);
    //         setClasses(
    //           classes.map((c) =>
    //             c.id === selectedClass.id
    //               ? {
    //                   ...c,
    //                   teacherId: selectedTeacherId,
    //                   teacherName: teacher?.name,
    //                 }
    //               : c,
    //           ),
    //         );
    //       }

    //       setAssignLoading(false);
    //       resetAssignModal();
    //     }, 1000);
    //   };
  };
  const openAssignModal = (classItem: Class) => {
    setSelectedClass(classItem);
    setSelectedTeacherId(classItem.teacherId || "");
    setIsAssignModalOpen(true);
  };

  const resetCreateModal = () => {
    setFormData({ className: "", academicYear: "2024/2025" });
    setErrors({});
    setIsCreateModalOpen(false);
  };

  const resetAssignModal = () => {
    setSelectedClass(null);
    setSelectedTeacherId("");
    setErrors({});
    setIsAssignModalOpen(false);
  };
  const assignedClasses = varClass.filter((c) => c.teacherId).length;
  const unassignedClasses = varClass.filter((c) => !c.teacherId).length;

  return (
    <main className="space-y-6 p-6 bg-gray-100 mb-10">
      <h1 className="text-3xl font-bold text-neutral-900 font-display">
        Classes Management
      </h1>
      <div className="space-y-6">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BoardCards
            label="Total Classes"
            value={varClass.length}
            icon={<span className="text-2xl">📚</span>}
          />
          <BoardCards
            label="Assigned Teachers"
            value={assignedClasses}
            icon={<span className="text-2xl">✅</span>}
          />

          <BoardCards
            label="Unassigned"
            value={unassignedClasses}
            icon={<span className="text-2xl">⏳</span>}
          />
        </article>

        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">All Classes</h2>
            <p className="text-sm text-neutral-600 mt-1">
              Manage classes and assign teachers
            </p>
          </div>
          <CustomButton
            onClick={() => setIsCreateModalOpen(true)}
            leftIcon={<Plus />}
            title="Create New Class"
            className="w-full py-6 max-w-50"
          />
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {varClass.map((classItem, idx) => (
            <ClassGridCard key={idx} {...classItem} />
          ))}
        </div>
      </div>

      {/* Create Class Modal */}
      {/* <CreateClassModal /> */}

      {/* Assign Teacher Modal */}
      {/* <AssignTeacherModal /> */}
    </main>
  );
};

export default ClassesManagement;

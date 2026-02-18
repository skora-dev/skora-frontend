// app/students/create/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentSchema, StudentFormData, classes } from "./components/schema"; // Assuming schema is in a separate file
import CustomInput from "@/components/input/CustomInput";
import { CreateStudentPageProps } from "./types/studentTypes";

export default function CreateStudentPage({ cancel }: CreateStudentPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: yupResolver(studentSchema),
    defaultValues: {
      subjectsCount: 1,
      age: 15,
    },
  });

  const onSubmit = async (data: StudentFormData) => {
    // Simulate API Call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Student created successfully!");
    cancel();
  };

  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40">
      <div className="p-8 w-[95%] max-w-lg max-h-[95vh] mx-auto bg-white shadow rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">Add New Student</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  ">
          <CustomInput
            label="Full Name"
            name="name"
            register={register}
            error={errors.name}
          />

          {/* Class Name Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <select
              {...register("className")}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="">Select a class</option>
              {classes.map((clas, index) => (
                <option key={index} value={clas}>
                  {clas}
                </option>
              ))}
            </select>
            {errors.className && (
              <p className="text-red-500 text-xs mt-1">
                {errors.className.message}
              </p>
            )}
          </div>
          <CustomInput
            label="Age"
            name="age"
            register={register}
            error={errors.age}
          />
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300 transition"
            >
              {isSubmitting ? "Saving..." : "Register Student"}
            </button>
            <button
              type="button"
              onClick={cancel}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

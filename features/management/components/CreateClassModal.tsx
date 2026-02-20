// const CreateClassModal = () => {
//   return (
//     <Modal open={isCreateModalOpen} title="Create New Class">
//       <div className="space-y-4">
//         <p className="text-sm text-neutral-600">
//           Add a new class to your school. You can assign teachers and students
//           later.
//         </p>

//         <CustomInput
//           label="Class Name"
//           name="className"
//           placeholder="e.g., JSS 1A, SS 2 Science"
//           // value={formData.className}
//           // onChange={handleInputChange}
//           // error={errors.className}
//           // icon={<span>📚</span>}
//         />

//         <div>
//           <label className="block text-sm font-semibold text-neutral-700 mb-2">
//             Academic Year
//           </label>
//           <select
//             name="academicYear"
//             //   value={formData.academicYear}
//             //   onChange={handleInputChange}
//             className="input-field"
//           >
//             <option value="2024/2025">2024/2025</option>
//             <option value="2025/2026">2025/2026</option>
//             <option value="2026/2027">2026/2027</option>
//           </select>
//           {/* {errors.academicYear && (
//               <p className="mt-1.5 text-sm text-accent-600">
//                 {errors.academicYear}
//               </p>
//             )} */}
//         </div>

//         <div className="bg-neutral-50 p-4 rounded-lg">
//           <p className="text-xs font-semibold text-neutral-700 mb-2">
//             ℹ️ After creating:
//           </p>
//           <ul className="text-xs text-neutral-600 space-y-1">
//             <li>• Assign a teacher to manage this class</li>
//             <li>• Add students and subjects</li>
//             <li>• Begin entering scores for the term</li>
//           </ul>
//         </div>

//         <div className="flex gap-3 pt-4">
//           <CustomButton
//             onClick={resetCreateModal}
//             className="flex-1"
//             title="Cancel"
//           />

//           <CustomButton
//             onClick={handleCreateClass}
//             isLoading={createLoading}
//             className="flex-1"
//             title="Create Class"
//           />
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default CreateClassModal;
import React from "react";

const CreateClassModal = () => {
  return <div>CreateClassModal</div>;
};

export default CreateClassModal;

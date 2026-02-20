// const AssignTeacherModal = () => {
//   return (
//     <Modal
//       open={isAssignModalOpen}
//       // onClose={resetAssignModal}
//       title={`Assign Teacher to ${selectedClass?.name}`}
//       // size="md"
//     >
//       <div className="space-y-4">
//         <p className="text-sm text-neutral-600">
//           Select a teacher to manage this class. They'll be able to add
//           students, enter scores, and submit results.
//         </p>

//         <div>
//           <label className="block text-sm font-semibold text-neutral-700 mb-2">
//             Select Teacher
//           </label>
//           <select
//             //   value={selectedTeacherId}
//             //   onChange={(e) => {
//             //     setSelectedTeacherId(e.target.value);
//             //     if (errors.teacher) {
//             //       setErrors((prev) => ({ ...prev, teacher: "" }));
//             //     }
//             //   }}
//             className="input-field"
//           >
//             <option value="">-- Choose a teacher --</option>
//             {teachers.map((teacher) => (
//               <option key={teacher.id} value={teacher.id}>
//                 {teacher.name}
//               </option>
//             ))}
//           </select>
//           {errors.teacher && (
//             <p className="mt-1.5 text-sm text-accent-600">{errors.teacher}</p>
//           )}
//         </div>

//         {selectedTeacherId && (
//           <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
//             <p className="text-sm text-green-700">
//               ✅{" "}
//               <strong>
//                 {teachers.find((t) => t.id === selectedTeacherId)?.name}
//               </strong>{" "}
//               will be assigned to {selectedClass?.name}
//             </p>
//           </div>
//         )}

//         <div className="flex gap-3 pt-4">
//           <Button
//             variant="outline"
//             onClick={resetAssignModal}
//             className="flex-1"
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleAssignTeacher}
//             loading={assignLoading}
//             disabled={!selectedTeacherId}
//             className="flex-1"
//           >
//             Assign Teacher
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default AssignTeacherModal;
import React from "react";

export const AssignTeacherModal = () => {
  return <div>AssignTeacherModal</div>;
};

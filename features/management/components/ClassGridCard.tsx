import { CLassType } from "../types";

type Props = CLassType & {
  //   openAssignModal: (classItem: CLassType) => void;
};

const ClassGridCard = ({
  id,
  academicYear,
  name,
  subjects,
  teacherId,
  teacherName,
  studentCount,
}: Props) => {
  return (
    <div key={id} className="card card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
          <p className="text-sm text-neutral-500">{academicYear}</p>
        </div>
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <span className="text-xl">📚</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Students:</span>
          <span className="font-semibold text-neutral-900">{studentCount}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Subjects:</span>
          <span className="font-semibold text-neutral-900">{subjects}</span>
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-4">
        {teacherName ? (
          <div className="mb-3">
            <p className="text-xs text-neutral-500 mb-1">Assigned Teacher:</p>
            <p className="text-sm font-medium text-neutral-900">
              👨‍🏫 {teacherName}
            </p>
          </div>
        ) : (
          <div className="mb-3">
            <p className="text-sm text-neutral-400">No teacher assigned</p>
          </div>
        )}

        <div className="flex gap-2">
          <button
            // onClick={() => openAssignModal(classItem)}
            className="flex-1 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
          >
            {teacherName ? "Reassign" : "Assign Teacher"}
          </button>
          <button className="px-3 py-2 bg-neutral-100 text-neutral-600 rounded-lg hover:bg-neutral-200 transition-colors text-sm font-medium">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassGridCard;

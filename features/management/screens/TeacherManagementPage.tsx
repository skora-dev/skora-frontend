import { useMemo } from "react";
import { teachers } from "../components/data";
import CustomButton from "@/components/button/CustomButton";
import { getStatusBadge } from "../components/helpers";
import BoardCards from "../components/BoardCards";
import { Plus } from "lucide-react";

const TeacherManagementPage = () => {
  const activeTeachers = useMemo(() => {
    return teachers.filter((t) => t.status === "active").length;
  }, []);

  const pendingInvites = useMemo(() => {
    return teachers.filter((t) => t.status === "pending").length;
  }, []);

  return (
    <main className="space-y-6 p-6 bg-gray-100 mb-10">
      <h1 className="text-3xl font-bold text-neutral-900 font-display">
        Teachers Management
      </h1>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BoardCards
            label="Total Teachers"
            value={teachers.length}
            icon={<span className="text-2xl">👨‍🏫</span>}
          />
          <BoardCards
            label="Active Teachers"
            value={activeTeachers}
            icon={<span className="text-2xl">✅</span>}
          />
          <BoardCards
            label="Pending Invites"
            value={pendingInvites}
            icon={<span className="text-2xl">⏳</span>}
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">All Teachers</h2>
            <p className="text-sm text-neutral-600 mt-1">
              Manage your school teaching staff
            </p>
          </div>

          <CustomButton
            className="w-full py-6 max-w-50"
            // onClick={() => setIsInviteModalOpen(true)}
            title="Invite Teacher"
            leftIcon={<Plus />}
          />
        </div>

        {/* Teachers Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                    Teacher
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                    Classes Assigned
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                    Invited On
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-neutral-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <td className="py-3 px-4 font-medium text-neutral-900">
                      {teacher.name}
                    </td>
                    <td className="py-3 px-4 text-neutral-600">
                      {teacher.email}
                    </td>
                    <td className="py-3 px-4">
                      {teacher.classes.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {teacher.classes.map((cls, idx) => (
                            <span
                              key={idx}
                              className="badge badge-info text-xs"
                            >
                              {cls}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-neutral-400 text-xs">
                          No classes assigned
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span className={getStatusBadge(teacher.status)}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-500 text-xs">
                      {new Date(teacher.invitedAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-xs mr-3">
                        Edit
                      </button>
                      <button className="text-accent-600 hover:text-accent-700 font-medium text-xs">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeacherManagementPage;

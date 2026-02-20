import BoardCards from "../components/BoardCards";
import {
  managementStats,
  pendingApprovals,
  recentActivity,
} from "../components/data";
import QuickActions from "../components/QuickActions";

const ManagementDashboard = () => {
  return (
    <main className="space-y-6 p-6 bg-gray-100 mb-10">
      {/* Stats Grid */}
      <section className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {managementStats.map((stat, idx) => (
          <BoardCards {...stat} delay={`${idx * 100}ms`} key={idx} />
        ))}
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Approvals - Takes 2 columns */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
              <span>⏳</span>
              Pending Result Approvals
            </h2>
            <span className="badge badge-warning">
              {pendingApprovals.length} Pending
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-3 px-2 font-semibold text-neutral-700">
                    Teacher
                  </th>
                  <th className="text-left py-3 px-2 font-semibold text-neutral-700">
                    Class
                  </th>
                  <th className="text-center py-3 px-2 font-semibold text-neutral-700">
                    Students
                  </th>
                  <th className="text-left py-3 px-2 font-semibold text-neutral-700">
                    Submitted
                  </th>
                  <th className="text-right py-3 px-2 font-semibold text-neutral-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingApprovals.map((approval, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <td className="py-3 px-2 font-medium text-neutral-900">
                      {approval.teacher}
                    </td>
                    <td className="py-3 px-2 text-neutral-600">
                      {approval.class}
                    </td>
                    <td className="py-3 px-2 text-center text-neutral-600">
                      {approval.students}
                    </td>
                    <td className="py-3 px-2 text-neutral-500 text-xs">
                      {approval.submitted}
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-xs">
                        Review →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <span>🕒</span>
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span>{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-900">{item.action}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />
      {/* School Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Term Progress */}
        <div className="bg-linear-to-r from-primary-600 to-primary-700 text-white p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Term Progress</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Results Submitted</span>
                <span>13/18 Classes</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: "72%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Results Approved</span>
                <span>8/18 Classes</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary-400 rounded-full"
                  style={{ width: "44%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Current Term Info */}
        <div className="card bg-linear-to-br from-neutral-900 to-neutral-800 text-white">
          <h3 className="text-lg font-semibold mb-3">Current Academic Term</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-300">Term:</span>
              <span className="font-semibold">First Term</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-300">Session:</span>
              <span className="font-semibold">2024/2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-300">Approval Deadline:</span>
              <span className="font-semibold text-secondary-400">
                Dec 20, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManagementDashboard;

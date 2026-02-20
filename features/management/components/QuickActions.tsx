const QuickActions = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-bold text-neutral-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="p-6 bg-linear-to-br from-primary-500 to-primary-600 text-white rounded-lg hover:shadow-lg transition-all text-left">
          <div className="text-3xl text-secondary mb-2">👨‍🏫</div>
          <div className="font-semibold mb-1 text-secondary">
            Invite Teacher
          </div>
          <div className="text-sm opacity-90 text-secondary">
            Send email invite
          </div>
        </button>

        <button className="p-6  bg-linear-to-br from-secondary-400 to-secondary-600 text-neutral-900 rounded-lg hover:shadow-lg transition-all text-left">
          <div className="text-3xl mb-2">📚</div>
          <div className="font-semibold mb-1">Create Class</div>
          <div className="text-sm opacity-90">Add new class</div>
        </button>

        <button className="p-6 bg-linear-to-br from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all text-left">
          <div className="text-3xl mb-2">✅</div>
          <div className="font-semibold mb-1">Review Results</div>
          <div className="text-sm opacity-90">Approve submissions</div>
        </button>

        <button className="p-6 bg-linear-to-br from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-left">
          <div className="text-3xl mb-2">📥</div>
          <div className="font-semibold mb-1">Download PDFs</div>
          <div className="text-sm opacity-90">Bulk downloads</div>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;

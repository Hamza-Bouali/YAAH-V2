import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Dr. Smith</h1>
        <p className="text-gray-600">Here's what's happening today</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Stats */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', patient: 'John Doe', type: 'Check-up' },
              { time: '10:30 AM', patient: 'Jane Smith', type: 'Follow-up' },
              { time: '02:00 PM', patient: 'Mike Johnson', type: 'Consultation' },
            ].map((appt, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{appt.time}</p>
                  <p className="text-sm text-gray-600">{appt.patient}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                  {appt.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Stats */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Patients</span>
              <span className="font-semibold text-gray-800">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">New This Week</span>
              <span className="font-semibold text-gray-800">28</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Appointments Today</span>
              <span className="font-semibold text-gray-800">12</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Prescription sent', patient: 'Sarah Wilson', time: '2h ago' },
              { action: 'Lab results received', patient: 'Tom Brown', time: '4h ago' },
              { action: 'Appointment rescheduled', patient: 'Emma Davis', time: '5h ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.patient}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
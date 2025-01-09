import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

function Appointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startOfCurrentWeek = startOfWeek(currentDate);

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

  const appointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '09:00 AM',
      type: 'Check-up',
      date: format(addDays(startOfCurrentWeek, 1), 'yyyy-MM-dd'),
    },
    {
      id: 2,
      patient: 'Jane Smith',
      time: '10:30 AM',
      type: 'Follow-up',
      date: format(addDays(startOfCurrentWeek, 2), 'yyyy-MM-dd'),
    },
    // Add more appointments as needed
  ];

  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9; // Start from 9 AM
    return format(new Date().setHours(hour, 0), 'h:mm a');
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {/* Calendar Navigation */}
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={() => setCurrentDate(addDays(currentDate, -7))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold">
            {format(startOfCurrentWeek, 'MMMM d')} - {format(addDays(startOfCurrentWeek, 6), 'MMMM d, yyyy')}
          </h2>
          <button
            onClick={() => setCurrentDate(addDays(currentDate, 7))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-8 border-b">
          {/* Time column */}
          <div className="border-r">
            <div className="h-12 border-b"></div>
            {timeSlots.map((time) => (
              <div key={time} className="h-20 border-b p-2 text-sm text-gray-500">
                {time}
              </div>
            ))}
          </div>

          {/* Days columns */}
          {weekDays.map((day) => (
            <div key={format(day, 'yyyy-MM-dd')} className="border-r last:border-r-0">
              <div className="h-12 border-b p-2 text-center">
                <div className="font-medium">{format(day, 'EEE')}</div>
                <div className="text-sm text-gray-500">{format(day, 'd')}</div>
              </div>
              {timeSlots.map((time) => (
                <div key={time} className="h-20 border-b relative">
                  {appointments
                    .filter(
                      (apt) =>
                        apt.date === format(day, 'yyyy-MM-dd') &&
                        apt.time === time
                    )
                    .map((apt) => (
                      <div
                        key={apt.id}
                        className="absolute inset-1 bg-blue-50 text-blue-700 rounded p-2 text-sm"
                      >
                        <div className="font-medium">{apt.patient}</div>
                        <div className="text-xs">{apt.type}</div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
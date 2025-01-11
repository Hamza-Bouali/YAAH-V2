import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';
import ClientModal from '../components/ClientModal';

// Mock clients data
const mockClients = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

interface Appointment {
  id: number;
  patient: string;
  time: string;
  type: string;
  date: string;
}

// Mock initial appointments data
const mockAppointments = [
  {
    id: 1,
    patient: 'John Doe',
    time: '09:00 AM',
    type: 'Check-up',
    date: "2025-01-11", // Tomorrow's date
  },
  {
    id: 2,
    patient: 'Jane Smith',
    time: '10:30 AM',
    type: 'Follow-up',
    date: "2025-01-11", // Day after tomorrow
  },
];

function Appointments() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState('');

  const startOfCurrentWeek = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9; // Start from 9 AM
    return format(new Date().setHours(hour, 0), 'h:mm a');
  });

  // Function to add a new appointment
  const addAppointment = (newAppointment: {
    patient: string;
    date: string;
    time: string;
    type: string;
  }) => {
    const appointment = {
      id: appointments.length + 1, // Generate a unique ID
      ...newAppointment,
    };
    setAppointments([...appointments, appointment]);
    console.log('New Appointment:', newAppointment);
  };

  // Function to delete an appointment
  const deleteAppointment = (id: number) => {
    confirm("you want to delete this Appointement ?") && setAppointments(appointments.filter((apt) => apt.id !== id));
  };


  // Function to handle client selection
  const handleSelectClient = (clientName: string) => {
    setSelectedClient(clientName);
    setIsClientModalOpen(false); // Close the client modal
  };

  useEffect(() => {
    console.log('Appointments:', appointments);
  }, [appointments]);

  return (
    <div className="p-8">
      {/* Modal for adding appointments */}
      <AppointmentModal
        open={isAppointmentModalOpen}
        setOpen={setIsAppointmentModalOpen}
        addAppointment={addAppointment}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
        openClientModal={() => setIsClientModalOpen(true)}
      />

      {/* Modal for selecting clients */}
      <ClientModal
        open={isClientModalOpen}
        setOpen={setIsClientModalOpen}
        clients={mockClients}
        onSelectClient={handleSelectClient}
      />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <button
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setIsAppointmentModalOpen(true)}
        >
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
            {format(startOfCurrentWeek, 'MMMM d')} -{' '}
            {format(addDays(startOfCurrentWeek, 6), 'MMMM d, yyyy')}
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
                <div>{time}</div>
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
              {timeSlots.map((time) => {
                const appointment = appointments.find(
                  (apt) =>
                    apt.date == format(day, 'yyyy-MM-dd') && apt.time === time
                );
                return (
                  <div key={time} className="h-20 border-b relative">
                    {appointment && (
                      <div
                        className="absolute inset-1 bg-blue-50 text-blue-700 rounded p-2 text-sm cursor-pointer hover:bg-blue-100"
                        onClick={() => deleteAppointment(appointment.id)}
                      >
                        <div className="font-medium">{appointment.patient}</div>
                        <div className="text-xs">{appointment.type}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
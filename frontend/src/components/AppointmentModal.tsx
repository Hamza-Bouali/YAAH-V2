import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { format } from 'date-fns';

interface AppointmentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  addAppointment: (appointment: {
    patient: string;
    date: string;
    time: string;
    type: string;
  }) => void;
  selectedClient: string;
  setSelectedClient: (client: string) => void;
  openClientModal: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  open,
  setOpen,
  addAppointment,
  selectedClient,
  openClientModal,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient || !date || !time || !type) {
      alert('Please fill in all fields');
      return;
    }

    // Convert 24h time to 12h format
    const timeDate = new Date(`2000-01-01T${time}`);
    const formattedTime = format(timeDate, 'h:mm a');

    addAppointment({
      patient: selectedClient,
      date,
      time: formattedTime,
      type,
    });

    setOpen(false);
    // Reset form
    setDate('');
    setTime('');
    setType('');
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-20">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
      />

      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900 mb-4">
                New Appointment
              </DialogTitle>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client</label>
                  <div className="mt-1 flex">
                    <input
                      type="text"
                      value={selectedClient}
                      readOnly
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Select a client"
                    />
                    <button
                      type="button"
                      onClick={openClientModal}
                      className="ml-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Select
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="e.g., Check-up, Follow-up"
                  />
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:col-start-2"
                  >
                    Add Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AppointmentModal;
import React from 'react';
import { Video, Phone, Mic, MicOff, VideoOff, PhoneOff } from 'lucide-react';

function Telemedicine() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Telemedicine</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start New Session
          </button>
        </div>
      </div>

      {/* Active Session */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-gray-900 rounded-xl aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="w-16 h-16 text-gray-500" />
            </div>
            {/* Patient Video Feed would go here */}
            <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg p-2">
              <div className="w-48 aspect-video bg-gray-700 rounded">
                {/* Doctor's Video Feed would go here */}
              </div>
            </div>
            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                <Mic className="w-6 h-6 text-white" />
              </button>
              <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                <Video className="w-6 h-6 text-white" />
              </button>
              <button className="p-3 bg-red-600 rounded-full hover:bg-red-700">
                <PhoneOff className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient Info & Chat */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Patient Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Age</label>
                <p className="font-medium">45</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Reason for Visit</label>
                <p className="font-medium">Follow-up consultation</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 h-[calc(100vh-500px)] flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Session Chat</h2>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              <div className="flex gap-2">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello Dr. Smith, thank you for seeing me today.</p>
                  <span className="text-xs text-gray-500">10:30 AM</span>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello John, how are you feeling today?</p>
                  <span className="text-xs text-gray-500">10:31 AM</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Telemedicine;
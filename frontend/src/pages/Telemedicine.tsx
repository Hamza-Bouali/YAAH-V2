import React from "react";
import VideoCall from "../components/VideoCall";
import { Video, PhoneOff, Mic, MicOff, VideoOff } from "lucide-react";

function Telemedicine() {
  const [isMicMuted, setIsMicMuted] = React.useState(false);
  const [isVideoOff, setIsVideoOff] = React.useState(false);
  const [isCallActive, setIsCallActive] = React.useState(true);

  const handleEndCall = () => {
    setIsCallActive(false); // Signal to stop the call
  };

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
              {isCallActive ? (
                <VideoCall isMicMuted={isMicMuted} isVideoOff={isVideoOff} onEndCall={handleEndCall} />
              ) : (
                <div className="text-white">Call Ended</div>
              )}
            </div>
            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={() => setIsMicMuted(!isMicMuted)}
              >
                {isMicMuted ? <MicOff className="w-6 h-6 text-gray-500" /> : <Mic className="w-6 h-6 text-white" />}
              </button>
              <button
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={() => setIsVideoOff(!isVideoOff)}
              >
                {isVideoOff ? <VideoOff className="w-6 h-6 text-gray-500" /> : <Video className="w-6 h-6 text-white" />}
              </button>
              <button className="p-3 bg-red-600 rounded-full hover:bg-red-700" onClick={handleEndCall}>
                <PhoneOff className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient Info & Chat */}
        {/* Omitted for brevity */}
      </div>
    </div>
  );
}

export default Telemedicine;

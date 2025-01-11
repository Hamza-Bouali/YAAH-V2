import React, { useEffect, useRef } from "react";

interface VideoCallProps {
  isMicMuted: boolean;
  isVideoOff: boolean;
  onEndCall: () => void;
}

const VideoCall: React.FC<VideoCallProps> = ({ isMicMuted, isVideoOff, onEndCall }) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const setupStream = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    };

    setupStream();

    return () => {
      // Cleanup when component unmounts
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (streamRef.current) {
      // Toggle microphone
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) audioTrack.enabled = !isMicMuted;

      // Toggle video
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) videoTrack.enabled = !isVideoOff;
    }
  }, [isMicMuted, isVideoOff]);

  useEffect(() => {
    if (!streamRef.current) return;
    return () => {
      // Stop all tracks if call ends
      streamRef.current.getTracks().forEach((track) => track.stop());
    };
  }, [onEndCall]);

  const handleEndCall = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    onEndCall(); // Notify parent component
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full rounded-xl"></video>
    </div>
  );
};

export default VideoCall;

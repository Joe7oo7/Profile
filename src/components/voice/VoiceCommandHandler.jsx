import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./VoiceCommandHandler.css";

const VoiceCommandHandler = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to detect if the user is on a mobile device
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Speech recognition commands
  const commands = [
    {
      command: ["open home", "home", "goto home", "navigate to home"],
      callback: () => navigate("/home"),
    },
    {
      command: ["open about", "about", "goto about", "navigate to about"],
      callback: () => navigate("/about"),
    },
    {
      command: [
        "open contact",
        "contact",
        "goto contact",
        "navigate to contact",
      ],
      callback: () => navigate("/contact"),
    },
    {
      command: ["open skills", "skills", "goto skills", "navigate to skills"],
      callback: () => navigate("/skills"),
    },
    {
      command: [
        "open education",
        "education",
        "goto education",
        "navigate to education",
      ],
      callback: () => navigate("/education"),
    },
    {
      command: [
        "open projects",
        "projects",
        "project",
        "goto projects",
        "navigate to projects",
      ],
      callback: () => navigate("/projects"),
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition.");
    }
  }, []);

  // Reset transcript when location changes
  useEffect(() => {
    resetTranscript();
  }, [location, resetTranscript]);

  // Handle button click for starting and stopping listening
  const handleButtonClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      try {
        SpeechRecognition.startListening({ continuous: !isMobileDevice() });
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    }
    setIsListening(!isListening);
  };

  // Restart listening automatically on mobile devices when speech ends
  useEffect(() => {
    if (isMobileDevice()) {
      const handleSpeechEnd = () => {
        if (isListening) {
          SpeechRecognition.startListening({ continuous: false });
        }
      };

      window.addEventListener("speechend", handleSpeechEnd);

      return () => {
        window.removeEventListener("speechend", handleSpeechEnd);
      };
    }
  }, [isListening]);

  return (
    <div className="voice-container">
      <button className="voice-btn" onClick={handleButtonClick}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <h5 className="mt-2 ml-5">{transcript}</h5>
    </div>
  );
};

export default VoiceCommandHandler;

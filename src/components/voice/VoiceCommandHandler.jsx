import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./VoiceCommandHandler.css";
import { useState } from "react";

const VoiceCommandHandler = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // commands starts

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
  // commands ends

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition.");
    }
  }, []);
  // transcript reset section starts

  useEffect(() => {
    resetTranscript();
  }, [location, resetTranscript]);

  // transcript reset section ends
  // start and  stop button logic starts
  const handleButtonClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else
      try {
        SpeechRecognition.startListening({ continuous: true });
      } catch (error) {
        console.error("Error starting speech recognition:", error);
      }
    setIsListening(!isListening);
  };
  // start and  stop button logic ends

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

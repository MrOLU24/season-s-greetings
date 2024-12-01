import React, { useState, useEffect } from 'react';
import './App.css'; // Import custom styles
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showKnockout, setShowKnockout] = useState(false);

  const messages = [
    "Hi There,  Today is the First Day of December 🎉",
    "Happy New Month guys! 🥳",
    "May this month bring you peace, joy, and success! 💖",
    "Wishing you a Merry Christmas and a Happy New Year in advance! 🎄✨",
    "you here, Nice 🥳",
    "Send funds to my opay, so i go fet chop, thanks🎉",
    "OLATUNJI OLUWASHOLA💖"
  ];

  useEffect(() => {
    if (currentStep < messages.length) {
      const timer = setInterval(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 3000);

      return () => clearInterval(timer);
    } else {
      const timeout = setTimeout(() => {
        setShowKnockout(true);
      }, 1000); // Delay before showing the knockout effect
      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  return (
    <div className="container">
      <div id="name">MrOLU <i className="fas fa-robot"></i></div> {/* Font Awesome Icon */}
      {currentStep < messages.length ? (
        <h1>{messages[currentStep]}</h1>
      ) : (
        showKnockout && (
          <h2 className="knockout">
            <span className="light">Happy</span> New Year 🎆
            <i className="fas fa-gift"></i> {/* Font Awesome Icon */}
          </h2>
        )
      )}
    </div>
  );
};

export default App;

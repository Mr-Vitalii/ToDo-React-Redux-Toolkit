import React, { useState } from "react";
import { useEffect } from "react";
import { formatDate } from "../../utils/formatDate";

const CurrentTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(
    formatDate(new Date())
  );

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentDateTime(formatDate(new Date()));
  };

  return (
    <div>
      <span>{currentDateTime.toLocaleString()}</span>
    </div>
  );
};

export  {CurrentTime};

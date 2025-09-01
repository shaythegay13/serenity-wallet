'use client'; // ensures this component only runs in the browser

import { useEffect, useState } from 'react';
import Clock from './Clock'; // make sure the relative path is correct


export default function ContentLibrary() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Browser-only code goes inside useEffect
    const clock = new Clock();

    // Update time every second
    const interval = setInterval(() => {
      setTime(clock.getTime()); // or whatever method Clock provides
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="library-container">
      <h2>Library</h2>
      <p>Current Time: {time}</p>
      {/* other library content goes here */}
    </div>
  );
}

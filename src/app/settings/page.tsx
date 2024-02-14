"use client";

import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect
import FetchData from "./FetchData"; // Import FetchData component

export default function Settings() {
  const [counter, setCounter] = useState(1); // Declare state variable counter with initial value 1
  const [data, setData] = useState(null); // Declare state variable data with initial value null

  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1); // Increment counter using functional update
  };

  useEffect(() => {
    // Define content function to fetch data
    const content = async (number) => {
      try {
        const response = await FetchData(number); // Call FetchData asynchronously with the current counter value
        setData(response); // Update data state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    content(counter); // Call content function when counter changes
  }, [counter]); // Run this effect whenever counter changes

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleClick} className="bg-sky-400 p-6 text-white">
        TEST BUTTON
      </button>
      <div>Counter: {counter}</div>
      <div>Data: {data}</div>
    </div>
  );
}

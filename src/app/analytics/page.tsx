"use client";

import React, { useState } from "react"; // Import React, useState, and useEffect
// import FetchData from "../settings/FetchData"; // Import FetchData component

export default function Settings() {
  const [counter, setCounter] = useState(1); // Declare state variable counter with initial value 1
  const [data, setData] = useState(null); // Declare state variable data with initial value null

  async function FetchData(number: number) {
    let res = await fetch("https://api.sampleapis.com/beers/ale");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    let data = await res.json();
    return data[number].name;
  }
  const handleClick = () => {
    setCounter((prevCount) => prevCount + 1); // Increment counter using functional update
    FetchData(counter).then((data) => setData(data));
  };

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

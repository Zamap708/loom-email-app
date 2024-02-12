import React from "react";
import ComposeEmail from "./ComposeEmail";

export default function Emails() {
  return (
    <section className="px-2 w-full h-full flex justify-between gap-4">
      <div className="w-1/6 shadow bg-white/50 rounded overflow-hidden">
        <div className="flex flex-col gap-2 p-2">
          <span className="w-full p-1 flex justify-start items-center">
            <h1>Emails</h1>
          </span>
          <ul className="w-full flex flex-col gap-2">
            <li className="w-full p-2 bg-white rounded shadow"> Compose Email</li>
            <li className="w-full p-2 bg-white rounded shadow"> Templates</li>
            <li className="w-full p-2 bg-white rounded shadow"> Sent </li>
            <li className="w-full p-2 bg-white rounded shadow"> Deleted </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 shadow p-6 h-full bg-white/50 rounded">
        <ComposeEmail />
      </div>
    </section>
  );
}

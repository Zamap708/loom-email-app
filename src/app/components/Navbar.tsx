import React from "react";

export default function Navbar() {
  return (
    <nav className="h-20 w-full m-0 p-6 flex justify-between items-center bg-sky-400">
      <div className="text-white">TidalMail</div>
      <div className="flex items-center">
        <button className="m-2 p-3 bg-white rounded-full text-black shadow">
          Sign In
        </button>
        <button className="m-2 p-3 bg-white rounded-full text-black shadow">
          Register
        </button>
      </div>
    </nav>
  );
}

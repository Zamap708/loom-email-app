import React from "react";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col gap-8 ">
      <div className="w-full h-10 px-2 py-8 flex items-center justify-between bg-white/50 rounded overflow-hidden">
        <h1>Compose Email</h1>
      </div>
      <form
        action=""
        method="post"
        className="w-full h-full p-2 flex flex-col items-start justify-start gap-2 bg-white/50"
      >
        <input
          type="text"
          name=""
          className="w-full rounded shadow p-2"
          id=""
          placeholder="From"
        />
        <input
          type="text"
          name=""
          className="w-full rounded shadow p-2"
          id=""
          placeholder="Add Clients"
        />
        <textarea
          name=""
          className="w-full rounded shadow p-2"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter message here"
        ></textarea>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 px-4 rounded bg-white shadow hover:scale-105">
            Save Template
          </button>
          <button className="p-2 px-4 rounded bg-sky-400 text-white shadow hover:scale-105">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

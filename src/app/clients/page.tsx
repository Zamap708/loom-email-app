import React from "react";

export default function Clients() {
  return (
    <section className="px-6 w-full h-full flex flex-col gap-8">
      <div className="w-full h-10 flex items-center justify-between">
        <div className="w-1/6 flex items-center justify-between">
          <h1>Clients</h1>
        </div>
        <div className="w-1/6 flex items-center justify-between">
          <button className="p-4 px-5 shadow bg-sky-400 text-white rounded">
            Add Client
          </button>
          <button className="p-4 px-5 shadow bg-white rounded">Filter</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full flex items-center justify-start">
          <span className="h-full flex justify-start items-center gap-2 px-2">
            <input
              type="checkbox"
              name="ClientselectAll"
              id="ClientselectAll"
              className="h-full"
            />
            {/* <label htmlFor="ClientselectAll">Select All</label> */}
          </span>
          <div className="w-full text-gray-500 grid grid-cols-8">
            <span className="px-2">ID</span>
            <span className="px-2">First Name</span>
            <span className="px-2">Second Name</span>
            <span className="px-2">LinkedIn Profile</span>
            <span className="px-2">Personal Client</span>
            <span className="px-2">Work Client</span>
            <span className="px-2">Personal Number</span>
            <span className="px-2">Work Number</span>
          </div>
        </div>
        <div className="w-full bg-white">
          {/*Clients will be fetched from server */}
          <div className="w-full flex items-center justify-start">
            <span className="h-full flex justify-start items-center gap-2 px-2">
              <input
                type="checkbox"
                name="ClientselectAll"
                id="ClientselectAll"
                className="h-full"
              />
              <label htmlFor="ClientselectAll"></label>
            </span>
            <div className="w-full grid grid-cols-8">
              {/* all truncated values must have a tooltip on hover for full value */}
              <span className="truncate px-2">1</span>
              <span className="truncate px-2">Zama</span>
              <span className="truncate px-2">Phungula</span>
              <span className="truncate px-2">
                <a href="">www.Linkedin.com/Zamaphungula</a>
              </span>
              <span className="truncate px-2">zamap708@gmail.com</span>
              <span className="truncate px-2">zamafphungula@gmail.com</span>
              <span className="truncate px-2">0670112811</span>
              <span className="truncate px-2">0670112811</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

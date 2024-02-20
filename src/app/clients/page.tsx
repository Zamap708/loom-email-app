// "use client";

import React, { useState } from "react";
import AddClient from "./AddClient";
import ClientComponent from "./ClientComponent";
import { getClients } from "../actions";

export default function Clients() {
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const handleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <section className="p-6 w-full h-full flex flex-col gap-8 bg-white/50">
      {/* {showModal ? <AddClient handleModal={handleModal} /> : ""} */}
      <div className="w-full h-10 px-2 py-8 flex items-center justify-between bg-white/50 rounded">
        <div className="flex items-center justify-between">
          <h1>Clients</h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <button
            className="p-2 px-4 shadow bg-sky-400 text-white rounded"
            // onClick={handleModal}
          >
            Add Client
          </button>
          <button className="p-2 px-4 shadow bg-white rounded">Filter</button>
        </div>
      </div>

      <div className=" h-full p-2 flex flex-col justify-start items-center gap-4 bg-white/50 rounded overflow-y-auto">
        <div className="w-full flex items-center justify-start p-1">
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
            <span className="px-2">Personal Email</span>
            <span className="px-2">Work Email</span>
            <span className="px-2">Personal Number</span>
            <span className="px-2">Work Number</span>
          </div>
        </div>
        <div className="w-full p-1 bg-white rounded">
          {/*Clients will be fetched from server */}
          <ClientComponent />
        </div>
      </div>
    </section>
  );
}

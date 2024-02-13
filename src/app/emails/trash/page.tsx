import React from "react";

export default function Trash() {
  return (
    <section className=" w-full h-full flex flex-col gap-8">
      <div className="w-full h-10 px-2 py-8 flex items-center justify-between bg-white/50 rounded">
        <div className="w-1/6 flex items-center justify-between ">
          <h1>Trash</h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <button className="p-2 px-4 shadow bg-white rounded">Filter</button>
        </div>
      </div>

      <div className=" h-full p-2 flex flex-col justify-start items-center gap-4  bg-white/50 rounded">
        <div className="w-full flex items-center justify-start p-1">
          <span className="h-full flex justify-start items-center gap-2 px-2">
            <input
              type="checkbox"
              name="TrashselectAll"
              id="TrashselectAll"
              className="h-full"
            />
            {/* <label htmlFor="TrashselectAll">Select All</label> */}
          </span>
          <div className="w-full text-gray-500 grid grid-flow-col auto-cols-auto">
            <span className="px-2 w-1/2">ID</span>
            <span className="px-2">Title</span>
            <span className="px-2">Subject</span>
            <span className="px-2">Last Sent</span>
            <span className="px-2">Last Modified</span>
            <span className="px-2">Created At</span>
          </div>
        </div>
        <div className="w-full bg-white rounded shadow">
          {/*Trashs will be fetched from server */}
          <div className="w-full flex items-center justify-start p-1">
            <span className="h-full flex justify-start items-center gap-2 px-2">
              <input
                type="checkbox"
                name="Trashselect"
                id="Trashselect"
                className="h-full"
              />
              {/* <label htmlFor="TrashselectAll">Select All</label> */}
            </span>
            <div className="w-full text-gray-500 grid grid-flow-col auto-cols-auto">
              <span className="px-2 truncate w-1/2">ID</span>
              <span className="px-2 truncate">Title</span>
              <span className="px-2 truncate">Subject</span>
              <span className="px-2 truncate">Last Sent</span>
              <span className="px-2 truncate">Last Modified</span>
              <span className="px-2 truncate">Created At</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function Template() {
  return (
    <section className=" w-full h-full flex flex-col gap-8">
      <div className="w-full h-10 px-2 py-8 flex items-center justify-between  bg-white/50 rounded">
        <div className="flex items-center justify-between">
          <h1>Templates</h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link href="/emails">
            <button className="p-2 px-4 shadow bg-sky-400 text-white rounded">
              Add Template
            </button>
          </Link>
          <button className="p-2 px-4 shadow bg-white rounded">Filter</button>
        </div>
      </div>

      <div className=" h-full p-2 flex flex-col justify-start items-center gap-4  bg-white/50 rounded">
        <div className="w-full flex items-center justify-start p-1">
          <span className="h-full flex justify-start items-center gap-2 px-2">
            <input
              type="checkbox"
              name="TemplateselectAll"
              id="TemplateselectAll"
              className="h-full"
            />
            {/* <label htmlFor="TemplateselectAll">Select All</label> */}
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
          {/*Templates will be fetched from server */}
          <div className="w-full flex items-center justify-start p-1">
            <span className="h-full flex justify-start items-center gap-2 px-2">
              <input
                type="checkbox"
                name="Templateselect"
                id="Templateselect"
                className="h-full"
              />
              {/* <label htmlFor="TemplateselectAll">Select All</label> */}
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

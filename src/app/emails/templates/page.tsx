import React from "react";

export default function Templates() {
  return (
    <section className="p-6 w-full h-full flex flex-col gap-8">
      <div className="w-full h-10 px-2 py-8 flex items-center justify-between  bg-white/50 rounded">
        <div className="w-1/6 flex items-center justify-between">
          <h1>Templates</h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <button className="p-2 px-4 shadow bg-sky-400 text-white rounded">
            Add Template
          </button>
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
          <div className="w-full text-gray-500 grid grid-cols-4">
            <span className="px-2">ID</span>
            <span className="px-2">Title</span>
            <span className="px-2">Subject</span>
            <span className="px-2">Message</span>
          </div>
        </div>
        <div className="w-full p-1 bg-white rounded shadow">
          {/*Templates will be fetched from server */}
          <div className="w-full flex items-center justify-start">
            <span className="h-full flex justify-start items-center gap-2 px-2">
              <input
                type="checkbox"
                name="TemplateselectAll"
                id="TemplateselectAll"
                className="h-full"
              />
              <label htmlFor="TemplateselectAll"></label>
            </span>
            <div className="w-full grid grid-cols-4">
              {/* all truncated values must have a tooltip on hover for full value */}
              <span className="truncate px-2">1</span>
              <span className="truncate px-2">First Email</span>
              <span className="truncate px-2">Your Loom Link is Ready!</span>
              <span className="truncate px-2">
                <a href="">www.Linkedin.com/Zamaphungula</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

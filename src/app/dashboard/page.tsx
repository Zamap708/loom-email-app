import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="p-6 w-full h-full flex flex-col gap-8 bg-white/50">
      <div className="w-full h-10 flex items-center justify-between">
        <div className="w-1/6 flex items-center justify-between">
          <h1>Dashboard</h1>
        </div>
      </div>

      <div className="">
        <h1>Welcome, User!</h1>
      </div>

      <div className="w-full grid grid-flow-col auto-cols-auto gap-4 overflow-y-auto">
        <Link href="/emails">
          <div className="w-full h-full p-2 flex justify-center items-center aspect-square rounded bg-white">
            Emails
          </div>
        </Link>
        <Link href="/clients">
          <div className="w-full h-full p-2 flex justify-center items-center aspect-square rounded bg-white">
            Clients
          </div>
        </Link>
        <Link href="/analytics">
          <div className="w-full h-full p-2 flex justify-center items-center aspect-square rounded bg-white">
            Analytics
          </div>
        </Link>
        <Link href="/settings">
          <div className="w-full h-full p-2 flex justify-center items-center aspect-square rounded bg-white">
            Settings
          </div>
        </Link>
        <Link href="/">
          <div className="w-full h-full p-2 flex justify-center items-center aspect-square rounded bg-white">
            Log out
          </div>
        </Link>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <section className="h-full w-1/12 box-border bg-sky-400/80 flex flex-col justify-between shadow">
      <ul>
        <Link href={"/dashboard"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Dashboard
          </li>
        </Link>
        <Link href={"/emails"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Emails
          </li>
        </Link>
        <Link href={"/clients"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Clients
          </li>
        </Link>
        <Link href={"/analytics"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Analytics
          </li>
        </Link>
        <Link href={"/settings"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Settings
          </li>
        </Link>
      </ul>
      <Link href={"/"}>
        <div className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
          Log out
        </div>
      </Link>
    </section>
  );
}

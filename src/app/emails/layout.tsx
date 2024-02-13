import React, { ReactNode } from "react";
import Link from "next/link";
import ComposeEmail from "./page";

interface LayoutProps {
  children: ReactNode;
  showComponent: boolean;
}

export default function layout({
  children,
  showComponent,
}: LayoutProps): JSX.Element {
  return (
    <section className="px-2 w-full h-full flex justify-between gap-4">
      <div className="w-1/6 shadow bg-white/50 rounded overflow-hidden">
        <div className="flex flex-col justify-between gap-8 p-6 px-4">
          <span className="w-full flex justify-start items-center">
            <h1>Emails</h1>
          </span>
          <ul className="w-full flex flex-col gap-2">
            <Link href="/emails" className="">
              <li className="w-full p-2 bg-white rounded shadow flex justify-start items-center">
                Compose Email
              </li>
            </Link>
            <Link href="/emails/templates" className="">
              <li className="w-full p-2 bg-white rounded shadow flex justify-start items-center">
                Templates
              </li>
            </Link>
            <Link href="/emails/history" className="">
              <li className="w-full p-2 bg-white rounded shadow flex justify-start items-center">
                History
              </li>
            </Link>
            <Link href="/emails/trash" className="">
              <li className="w-full p-2 bg-white rounded shadow flex justify-start items-center">
                Trash
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-5/6 shadow p-6 h-full bg-white/50 rounded">
        {children}
      </div>
    </section>
  );
}

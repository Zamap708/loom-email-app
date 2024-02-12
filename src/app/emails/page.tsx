import React from "react";
import ComposeEmail from "./ComposeEmail";

export default function Emails() {
  return (
    <section className="px-6 w-full h-full flex justify-between gap-8">
      <div className="w-1/6 shadow bg-white/50 rounded"></div>
      <div className="w-5/6 shadow p-6 h-full bg-white/50 rounded">
        <ComposeEmail />
      </div>
    </section>
  );
}

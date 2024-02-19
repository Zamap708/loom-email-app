import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full bg-cover flex justify-center items-center">
        <Link href={'/dashboard/'}>
      <button className=" w-28 m-0 p-4 bg-white flex justify-center items-center rounded-full text-black shadow">
        Sign In
      </button>
        </Link>
    </div>
  );
}

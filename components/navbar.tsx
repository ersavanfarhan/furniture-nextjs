import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-green-200 flex items-center justify-between p-3 text-white">
      <Link
        href="/"
        className="flex gap-1 text-black no-underline items-center"
      >
        <label className="mb-0 font-bold xs:text-xs hover:cursor-pointer">FURNITURE</label>
        <img src="../next.svg" className="w-14 xs:w-10" />
      </Link>
      <div className="flex gap-5 font-thin text-black">
        <Link href="/carts"><span className="material-symbols-outlined">local_mall</span></Link>
      </div>
    </nav>
  );
}

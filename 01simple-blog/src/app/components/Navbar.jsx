import Link from "next/link";

export default function Navbar() {
    return (
        <nav className=" flex flex-row justify-center items-center py-5 gap-4 text-xl bg-slate-300 text-black">
            <Link className="hover:text-blue-600" href="/">Home</Link>
            <Link className="hover:text-blue-600" href="/about">About</Link>
            <Link className="hover:text-blue-600" href="/blog">Blog</Link>
        </nav>
    );
}
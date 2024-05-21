import Image from "next/image";
import Link from "next/link";
import AppBgImg from "./image/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-red w-100 h-100">
        <h1 className="text-black text-2xl font-bold text-center">Jangan marah Sayangku....!</h1>
        <Image
          className="animate-pulse delay-1000 w-100 h-100"
          alt="love image"
          src="love.svg"
          width={400}
          height={400}
        />


      </div>
      <Link href="/image" className="text-black font-bold text-center bg-red-300 px-10 py-5 rounded-sm hover:decoration-sky-200">Click Me</Link>
    </main>
  );
}

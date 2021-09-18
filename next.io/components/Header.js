import Image from "next/image";
import Link from "next/link";
import headerPng from "../public/header.png";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full h-20 bg-white border-2 border-b-gray-400 shadow-lg mb-8">
      <div className="flex h-full justify-between items-center text-center max-w-[1360px] mx-auto">
        {/* -------------logo--------------- */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => router.push("/")}
        >
          <div>
            <Image
              src={headerPng}
              width={"80px"}
              hieght={"10px"}
              alt="Logo Image"
              className="object-contain"
            />
          </div>
          <h1 className="font-roboto font-bold text-lg sm:text-xl text-blue-500 group-hover:text-blue-600 tracking-wider leading-snug">
            CODE.IO
          </h1>
        </div>
        {/* ----------------nav items--------------- */}
        <div>
          <ul className="flex space-x-4 sm:space-x-6 mr-2 md:mr-0 leading-snug tracking-wide font-roboto font-medium text-gray-600 text-base sm:text-lg">
            <li className="hover:scale-110 duration-500 ease-in-out">
              <Link href="/blog">
                <a className="hover:text-gray-900 ">Blog.Io</a>
              </Link>
            </li>
            <li className="hover:scale-110 duration-500 ease-in-out">
              <Link href="#">
                <a className="hover:text-gray-900 ">Dashboard.Io</a>
              </Link>
            </li>
            <li className="hover:scale-110 duration-500 ease-in-out">
              <Link href="/about">
                <a className="hover:text-gray-900 ">About.Io</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import headerPng from "../public/header.png";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full h-20 bg-white border border-b-gray-800 shadow-lg mb-8">
      <div className="flex h-full justify-between items-center text-center max-w-[1360px] mx-auto">
        {/* -------------logo--------------- */}
        <div
          className="flex items-center cursor-pointer"
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
          <h1 className="font-roboto font-bold text-lg sm:text-xl text-blue-400 tracking-wider leading-snug">
            CODE.IO
          </h1>
        </div>
        {/* ----------------nav items--------------- */}
        <div>
          <ul className="flex space-x-4 mr-2 md:mr-0 leading-snug tracking-wide font-roboto font-medium text-gray-600 text-base sm:text-lg">
            <li>
              <Link href="/blog">
                <a className="hover:text-gray-900 transition transform hover:scale-x-150 duration-100 ease-in">
                  Blog.Io
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                  Dashboard.Io
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                  About.Io
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

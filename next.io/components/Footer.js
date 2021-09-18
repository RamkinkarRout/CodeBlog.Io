import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
export default function Footer() {
  return (
    <>
      <div className="items-center max-w-[1360px] mx-auto border-b-2 border-b-gray-700 my-8 py-8 ">
        <div className="flex flex-col sm:flex-row justify-between px-4 items-center space-y-4 sm:space-y-0">
          {/* --------------page routes--------- */}
          <div>
            <ul className="flex space-x-4 mr-2 md:mr-0 leading-snug tracking-wide font-roboto font-medium text-gray-600 text-base md:text-lg">
              <li>
                <Link href="#">
                  <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                    Blog.Io
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                    About.Io
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* -------------social media routes------------- */}
          <div>
            <ul className="flex space-x-6 mr-2 md:mr-0 leading-snug tracking-wide font-roboto text-gray-600 text-base md:text-lg">
              <li>
                <a
                  href="https://www.facebook.com/ramkinkar.rout"
                  className="hover:text-blue-900 text-blue-500 transition transform hover:scale-150 duration-100 ease-in"
                >
                  <IoLogoFacebook fontSize="25px" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RamkinkarRout?tab=repositories"
                  className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in"
                >
                  <IoLogoGithub fontSize="25px" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iamramkinkarrout/"
                  className="hover:text-red-700  text-red-500 transition transform hover:scale-150 duration-100 ease-in"
                >
                  <IoLogoInstagram fontSize="25px" />
                </a>
              </li>
            </ul>
          </div>
          {/* ----------------------contact me routes------------- */}
          <div>
            <ul className="flex space-x-4 mr-2 md:mr-0 leading-snug tracking-wide font-roboto font-medium text-gray-600 text-base md:text-lg">
              <li>
                <Link href="#">
                  <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                    Contact.Io
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in">
                    Subscribe.Io
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center tracking-wider leading-snug font-roboto font-light text-md text-gray-500">
        @Copyright Code.Io 2021 PVT LTD
      </p>
    </>
  );
}

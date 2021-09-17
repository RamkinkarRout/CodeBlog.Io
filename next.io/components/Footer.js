import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosGitBranch,
} from "react-icons/io";
export default function Footer() {
  return (
    <>
      <div className="items-center max-w-[1360px] mx-auto border border-b-gray-700 shadow-lg my-8 py-8 ">
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
            <ul className="flex space-x-4 mr-2 md:mr-0 leading-snug tracking-wide font-roboto text-gray-600 text-base md:text-lg">
              <li>
                <a
                  href="www.facebook.com"
                  className="hover:text-blue-900 text-blue-500 transition transform hover:scale-150 duration-100 ease-in"
                >
                  <IoLogoFacebook fontSize="25px" />
                </a>
              </li>
              <li>
                <a
                  href="www.github.com"
                  className="hover:text-gray-900 transition transform hover:scale-150 duration-100 ease-in"
                >
                  <IoIosGitBranch fontSize="25px" />
                </a>
              </li>
              <li>
                <a
                  href="www.instagram.com"
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

import Layout from "../components/Layout";
import Link from "next/link";
import { IoExitOutline, IoArrowUndoCircleSharp, IoSad } from "react-icons/io5";
export default function Error() {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 mx-auto items-center font-roboto">
        <div className="flex items-center space-x-1">
          <IoExitOutline fontSize="40px" className="text-gray-800" />
          <h1 className="text-4xl tracking-wider text-gray-800 font-bold">
            Page Not Found
          </h1>
        </div>

        <div className="flex items-center space-x-1">
          <p className="tracking-wider font-semibold text-2xl text-gray-600">
            The Page You are trying to access is out of our Hand
          </p>
          <IoSad fontSize="30px" className="text-gray-600" />
        </div>
        <div className="items-center flex space-x-1">
          <IoArrowUndoCircleSharp fontSize="30px" className="text-blue-500" />
          <Link href={"/"}>
            <a className="underline text-blue-500 font-lg tracking-wide hover:text-blue-800">
              I'll Take You Back To HomePage
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

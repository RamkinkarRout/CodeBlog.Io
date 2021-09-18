import Image from "next/image";
import Link from "next/link";
import Truncate from "react-truncate";
import { IoTelescope } from "react-icons/io5";
export default function Recent_Code({ name, slug, date, time, detail, image }) {
  // console.log(slug);
  return (
    <div className="flex justify-between space-y-4 w-full items-center border-b border-gray-500 mb-4 px-3 py-1 shadow-lg ">
      <div className="flex flex-col space-y-1 justify-items-center w-3/4 ">
        <h1 className="text-lg tracking-wider font-semibold text-gray-700">
          {name}
        </h1>
        <Truncate
          lines={3}
          className="text-md text-gray-500 font-normal leading-sung tracking-wide"
        >
          {detail}
        </Truncate>
        <Link href={`/code/${slug}`}>
          <a className="text-blue-400 hover:text-blue-600 hover:underline text-base flex items-center ">
            <IoTelescope className="mr-2" fontSize="15px" />
            Read More
          </a>
        </Link>
      </div>
      <div>
        <Image src={image} width={120} height={80} className="object-contain" />
      </div>
    </div>
  );
}

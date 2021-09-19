import Image from "next/image";
import Link from "next/link";
import { IoCodeSlashSharp } from "react-icons/io5";
export default function Recent_Code({ name, slug, date, time, detail, image }) {
  return (
    <div className="flex flex-col justify-start items-center space-y-4 border-b border-gray-500  px-4 py-4 shadow-lg hover:bg-white duration-300">
      <Image
        src={image}
        alt="Post Image"
        width="700px"
        height="506px"
        className="object-cover bg-no-repeat"
      />
      <div className="flex flex-col justify-between  w-full ">
        <h1 className="text-2xl tracking-wider font-semibold text-gray-700">
          {name}
        </h1>
        <p className="text-lg tracking-wide font-light text-gray-700">
          {date} : {time}
        </p>
      </div>
      <p className="text-md h-[168px] overflow-hidden text-gray-500 font-normal leading-sung tracking-wide">
        {detail}
      </p>
      <Link href="/blog">
        <a className="text-blue-400 hover:text-blue-600 hover:underline text-base flex items-center ">
          View All Posts
          <IoCodeSlashSharp className="ml-2" fontSize="16px" />
        </a>
      </Link>
    </div>
  );
}

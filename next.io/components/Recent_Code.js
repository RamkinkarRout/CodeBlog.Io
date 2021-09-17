import Image from "next/image";
import Truncate from "react-truncate";
export default function Recent_Code({ name, slug, date, time, detail, image }) {
  return (
    <div className="flex justify-between space-y-5 w-full items-center border-b border-gray-500 mb-3 ">
      <div className="flex flex-col space-y-1 justify-items-center w-3/4">
        <h1 className="text-lg tracking-wider font-bold text-gray-700">
          {name}
        </h1>
        <Truncate
          lines={3}
          className="text-md text-gray-500 font-normal leading-sung tracking-wide"
        >
          {detail}
        </Truncate>
      </div>
      <div>
        <Image src={image} width={120} height={80} className="object-contain" />
      </div>
    </div>
  );
}

import marked from "marked";
import Image from "next/image";
import router from "next/router";
import Truncate from "react-truncate";

export default function NewestArticle({ image, name, date, detail, slug }) {
  return (
    <div
      className="flex flex-col space-y-4 shadow-lg cursor-pointer hover:scale-[1.00] sm:hover:scale-[1.05] duration-500 hover:bg-white
    
    "
      onClick={() => router.push(`/code/${[slug]}`)}
    >
      <Image
        src={image}
        width={"281px"}
        height={"160px"}
        className="object-contain"
      />
      <div className="p-4">
        <h1 className="text-lg leading-snug tracking snug font-semibold text-gray-700 mb-2 ">
          {name}
        </h1>
        <p className="font-light mt-2 text-gray-500 ">{date}</p>
        <Truncate
          lines={3}
          className="py-2 text-md text-gray-500 font-normal leading-sung tracking-normal"
        >
          <div dangerouslySetInnerHTML={{ __html: marked(detail) }}></div>
        </Truncate>
      </div>
    </div>
  );
}

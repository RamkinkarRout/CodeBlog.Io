import Layout from "../components/Layout";
import Truncate from "react-truncate";
import Link from "next/link";
import Image from "next/image";
import { IoTelescope } from "react-icons/io5";
export default function blog({ res }) {
  // console.log(res);
  return (
    <div>
      <Layout title={"Code.Io | Blog"}>
        {res &&
          res.map((item) => (
            <div className="flex justify-between space-y-5 w-full items-center border-b border-gray-500 mb-2 shadow-md p-4 ">
              <div>
                <Image
                  src={item.image}
                  width={300}
                  height={168}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col space-y-4 justify-items-center w-3/4 ">
                <div className="flex flex-col justify-between">
                  <h1 className="text-lg tracking-wider font-bold text-gray-700">
                    {item.name}
                  </h1>
                  <h2 className="text-base tracking-wider font-light text-gray-700">
                    {item.date} : {item.time}
                  </h2>
                </div>
                <Truncate
                  lines={3}
                  className="text-md text-gray-500 tracking-normal leading-normal"
                >
                  {item.detail}
                </Truncate>
                <Link href={`/code/${item.slug}`}>
                  <a className="text-blue-400 hover:text-blue-600 hover:underline text-base flex items-center ">
                    <IoTelescope className="mr-2" fontSize="15px" />
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          ))}
      </Layout>
    </div>
  );
}
export async function getStaticProps(context) {
  const data = await fetch(`${process.env.API_URL}/api/code`);
  const res = await data.json();
  return {
    props: {
      res,
    },
    revalidate: 1,
  };
}

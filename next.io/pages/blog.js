import Layout from "../components/Layout";
import NewestArticle from "../components/NewestArticle";
import Truncate from "react-truncate";
import Link from "next/link";
import bg1 from "../public/bg1.jpg";
import Image from "next/image";
import marked from "marked";
import moment from "moment";
import { IoTelescope } from "react-icons/io5";
export default function blog({ res, recent }) {
  // console.log(res);
  return (
    <div>
      <Layout title={"Code.Io | Blog"}>
        {/* ------------------top 5 flex---------------- */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
          {recent &&
            recent.map((item) => (
              <NewestArticle
                key={item.id}
                name={item.title}
                slug={item.slug}
                date={moment(item.date).format("yyyy-MM-DD")}
                time={item.time}
                image={item.image ? item.image.formats.thumbnail.url : bg1}
                detail={item.detail}
              />
            ))}
        </div>

        {/* -------------end of top 5 flex----------- */}
        {res &&
          res.map((item) => (
            <div
              key={item.id}
              className="flex justify-between space-y-5 w-full items-center mb-2 shadow-md p-4 hover:bg-white duration-300"
            >
              <div>
                <Image
                  src={item.image ? item.image.formats.thumbnail.url : bg1}
                  width={300}
                  height={168}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col space-y-4 justify-items-center w-3/4 ">
                <div className="flex flex-col justify-between">
                  <h1 className="text-lg tracking-wider font-bold text-gray-700">
                    {item.title}
                  </h1>
                  <h2 className="text-base tracking-wider font-light text-gray-700">
                    {moment(item.date).format("yyyy-MM-DD")} : {item.time}
                  </h2>
                </div>
                <Truncate
                  lines={3}
                  className="text-md text-gray-500 tracking-normal leading-normal"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(item.detail) }}
                  ></div>
                </Truncate>
                <Link href={"/code/[slug]"} as={`/code/${item.slug}`}>
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
export async function getStaticProps() {
  const data = await fetch(`${process.env.API_URL}/codes`);
  const res = await data.json();
  return {
    props: {
      res,
      recent: res.slice(0, 5),
    },
    revalidate: 1,
  };
}

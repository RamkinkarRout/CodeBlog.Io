import Layout from "../../components/Layout";
import Image from "next/image";
export default function Detail({ res }) {
  // console.log(res);
  return (
    <Layout title={`Code.Io | ${res.slug}`}>
      <div className="flex flex-col p-4 items-start space-y-4 ">
        <h1 className="text-3xl font-semibold tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
          {res.title}
        </h1>
        <p className="text-md tracking-wider text-gray-500 font-medium mb-1">
          {res.subTitle}
        </p>
        <p className="text-md tracking-wider text-gray-500 font-light">
          {res.date} : {res.time}
        </p>
        <Image
          src={res.image.formats.medium.url}
          width={"1100px"}
          height={"750px"}
          className="object-contain"
        ></Image>
        <h2 className="text-2xl font-light tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
          Read Full Article :
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-normal">
          {res.detail}
        </p>
      </div>
    </Layout>
  );
}
// export async function getStaticPaths() {
//   const data = await fetch(`${process.env.API_URL}/api/code`);
//   const res = await data.json();
//   const paths = res.map((item) => ({
//     params: { slug: item.slug },
//   }));
//   return {
//     props: {
//       paths,
//       fallback: true,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const { slug } = context.query || null;
  const data = await fetch(`${process.env.API_URL}/code-blogs?=${slug}`);
  const res = await data.json();
  console.log(res);
  return {
    props: {
      res: res[0],
    },
  };
}

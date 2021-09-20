import Layout from "../../components/Layout";
import Image from "next/image";
import marked from "marked";
export default function Detail({ res }) {
  // console.log(res);
  return (
    <Layout title={`Code.Io | ${res.slug}`}>
      <div className="flex flex-col p-4 items-start space-y-4 ">
        <h1 className="text-3xl font-semibold tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
          {res.title}
        </h1>
        <p className="text-md tracking-wider text-gray-500 font-medium mb-1">
          {res.subtitle}
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
        <div
          dangerouslySetInnerHTML={{ __html: marked(res.detail) }}
          className="text-gray-700 text-lg leading-relaxed tracking-normal"
        ></div>
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
  console.log(slug);
  const data = await fetch(`${process.env.API_URL}/codes/${slug}`);
  const res = await data.json();
  // console.log(res);
  // console.log(res.image.formats.large.url);
  return {
    props: {
      res,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.API_URL}/codes`);
//   const code = await res.json();
//   const paths = code.map((item) => ({
//     params: { slug: item.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const data = await fetch(`${process.env.API_URL}/codes/${slug}`);
//   const res = await data.json();
//   return {
//     props: {
//       res,
//     },
//     revalidate: 1,
//   };
// }

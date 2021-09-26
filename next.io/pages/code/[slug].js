import Layout from "../../components/Layout";
import Image from "next/image";
import marked from "marked";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Button } from "@material-ui/core";
import router from "next/router";
import bg1 from "../../public/bg1.jpg";

export default function Detail({ res }) {
  // console.log(res);

  const handelDelete = async (e) => {
    if (window.confirm("Are you Sure you want to Delete the Article")) {
      const response = await fetch(`http://localhost:1337/codes/${res.id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
      } else {
        router.push("/blog");
      }
    }
  };
  return (
    <Layout title={`Code.Io | ${res.slug}`}>
      <div className="flex flex-col p-4 items-start space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-x-0 md:space-x-16 space-y-8 md:space-y-0">
          <h1 className="text-3xl font-semibold tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
            {res.title}
          </h1>
          <div className="items-center space-x-2">
            <ToastContainer />
            <Link href={"/edit/[slug]"} as={`/edit/${res.slug}`}>
              <Button
                variant="contained"
                style={{
                  color: "#F3F4F6",
                  backgroundColor: "#95B9C7",
                  width: "150px",
                  height: "40px",
                }}
              >
                Edit
              </Button>
            </Link>
            {/* <Link href={"/edit/[id]"} as={`/edit/${res.id}`}> */}

            <Button
              variant="contained"
              style={{
                color: "#F3F4F6",
                backgroundColor: "#E41B17",
                width: "150px",
                height: "40px",
              }}
              onClick={handelDelete}
            >
              Delete
            </Button>
            {/* </Link> */}
          </div>
        </div>
        <p className="text-md tracking-wider text-gray-500 font-medium mb-1">
          {res.subtitle}
        </p>
        <p className="text-md tracking-wider text-gray-500 font-light">
          {moment(res.date).format("yyyy-MM-DD")} : {res.time}
        </p>
        <Image
          src={res.image ? res.image.formats.medium.url : bg1}
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

// export async function getServerSideProps(context) {
//   const { slug } = context.query || null;
//   console.log(slug);
//   const data = await fetch(`${process.env.API_URL}/codes/${slug}`);
//   const res = await data.json();
//   // console.log(res);
//   // console.log(res.image.formats.large.url);
//   return {
//     props: {
//       res,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/codes`);
  const code = await res.json();
  const paths = code.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const data = await fetch(`${process.env.API_URL}/codes/${slug}`);
  const res = await data.json();
  return {
    props: {
      res,
    },
    revalidate: 1,
  };
}

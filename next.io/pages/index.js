import { Button } from "@material-ui/core";
import Layout from "../components/Layout";
import NewestArticle from "../components/NewestArticle";
import Random_Code from "../components/Random_Code";
import Recent_Code from "../components/Recent_Code";
import router from "next/router";
import moment from "moment";
export default function Home({ res, random, recent }) {
  // console.log(random);
  return (
    <div>
      <Layout title={"Code.Io | Home"}>
        <div className="flex my-5 flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 space-x-0 md:space-x-6">
          {/* -------------random code left-------------- */}
          <div className="max-w-3xl">
            <h1 className="mb-2 font-light tracking-wide text-lg text-gray-500 p-4 border-l-4 border-l-gray-600 border border-b-gray-400">
              Featured Article of the Day
            </h1>
            <Random_Code
              key={random.id}
              name={random.title}
              slug={random.slug}
              date={moment(random.date).format("yyyy-MM-DD")}
              time={random.time}
              image={random.image.formats.medium.url}
              detail={random.detail}
            />
          </div>
          {/* ------------recent code right-------- */}
          <div className="flex flex-col justify-items-start w-full h-full">
            <h1 className="mb-2 font-light tracking-wide text-lg text-gray-500 p-4 border-l-4 border-l-gray-600 border border-b-gray-400">
              Recent Posts
            </h1>
            {res &&
              res.map((item) => (
                <Recent_Code
                  key={item.id}
                  name={item.title}
                  slug={item.slug}
                  date={moment(item.date).format("yyyy-MM-DD")}
                  time={item.time}
                  image={item.image.formats.thumbnail.url}
                  detail={item.detail}
                />
              ))}
          </div>
        </div>
        {/* ----------To Render Slice from 5-10 articles----------- */}
        <div className="flex flex-col  justify-between space-y-6">
          <h1 className="text-2xl leading-relaxed tracking-wider font-light  text-gray-700 p-4 shadow-lg border-l-4 border-l-gray-700 border border-b-gray-400">
            Read Our Newest Articles:
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
            {recent &&
              recent.map((item) => (
                <NewestArticle
                  key={item.id}
                  name={item.title}
                  slug={item.slug}
                  date={moment(item.date).format("yyyy-MM-DD")}
                  time={item.time}
                  image={item.image.formats.thumbnail.url}
                  detail={item.detail}
                />
              ))}
          </div>
          <Button
            onClick={() => router.push("/blog")}
            variant="contained"
            style={{
              color: "#F3F4F6",
              backgroundColor: "#3B82F6",
              width: "250px",
            }}
          >
            Read All Articles
          </Button>
        </div>
      </Layout>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const data = await fetch(`${process.env.API_URL}/code-blogs`);
//   const res = await data.json();
//   console.log(res);
//   return {
//     props: {
//       // slicing to get exact 5 news
//       res: res.slice(0, 5),
//       recent: res.slice(0, 5),
//       random: res[0],
//     },
//     revalidate: 1,
//   };
// }
export async function getStaticProps(context) {
  const data = await fetch(
    `${process.env.API_URL}/codes?_sort=date:ASC&_limit=10`
  );
  const res = await data.json();
  // console.log(res);
  return {
    props: {
      // slicing to get exact 5 news
      res: res.slice(0, 5),
      random: res[0],
      recent: res.slice(0, 5),
    },
    revalidate: 1,
  };
}

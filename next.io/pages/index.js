import Layout from "../components/Layout";
import Random_Code from "../components/Random_Code";
import Recent_Code from "../components/Recent_Code";
export default function Home({ res, random }) {
  // console.log(random);
  return (
    <div>
      <Layout title={"Code.Io | Home"}>
        <div className="flex my-5 flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 space-x-0 md:space-x-6">
          {/* -------------random code left-------------- */}
          <div className="max-w-3xl">
            <Random_Code
              key={random.id}
              name={random.name}
              slug={random.slug}
              date={random.date}
              time={random.time}
              image={random.image}
              detail={random.detail}
            />
          </div>
          {/* ------------recent code right-------- */}
          <div className="flex flex-col justify-items-start w-full h-full">
            {res &&
              res.map((item) => (
                <Recent_Code
                  key={item.id}
                  name={item.name}
                  slug={item.slug}
                  date={item.date}
                  time={item.time}
                  image={item.image}
                  detail={item.detail}
                />
              ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(`${process.env.API_URL}/api/code`);
  const res = await data.json();
  return {
    props: {
      // slicing to get exact 5 news
      res: res.slice(0, 5),
      random: res[0],
    },
    revalidate: 1,
  };
}

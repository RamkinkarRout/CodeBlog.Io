import Layout from "../components/Layout";
export default function Detail({ res }) {
  console.log(res);
  return (
    <Layout title={res.slug}>
      <div>{res.slug}</div>
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
  const { slug } = context.query;
  const data = await fetch(`${process.env.API_URL}/api/${slug}`);
  const res = await data.json();

  return {
    props: {
      res: res[0],
    },
  };
}

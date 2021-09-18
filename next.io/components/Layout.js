import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import DisplayBar from "./DisplayBar";
import { useRouter } from "next/router";
import DisplayBarFlex from "./DisplayBarFlex";

export default function Layout({ title, descriptions, keywords, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/coding.ico" />
        <title>{title}</title>
        <meta name="descriptions" content={descriptions} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Hero />}
      <div className="max-w-[1360px] mx-auto py-4">{children}</div>
      {router.pathname === "/" && <DisplayBarFlex />}
      {router.pathname === "/" && <DisplayBar />}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Code.Io | Blog",
  descriptions:
    "A blog that ll get you most coding related post for all the coders ",
  keywords: "java, python, javascript, nextjs, tailwind, react, strapi",
};

import { Button } from "@material-ui/core";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
// import Link from "next/link";
import right from "../public/right.png";
import { useRouter } from "next/router";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="flex flex-col py-5 sm:flex-row justify-between max-w-[1360px] mx-auto items-center p-4 font-roboto">
      {/* --------leftside---------- */}
      <div className="flex flex-col justify-between space-y-6">
        <h1 className="text-2xl sm:text-4xl text-left font-semibold text-gray-800 tracking-wider leading-snug">
          Welcome To {/* --------------type writer----------- */}
          <span style={{ color: "#3B82F6", fontWeight: "bold" }}>
            <Typewriter
              words={["My Code.IO...", "Your Code.IO...", "Our Code.IO..."]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </span>
          {/* ----------end of type writer------------- */}
        </h1>
        <div className="flex justify-items-start items-center space-x-2">
          <img
            loading="lazy"
            src={"header.png"}
            alt="profile Image"
            className="inline object-cover w-12 h-12 border-2 border-gray-700 rounded-full"
          />
          <p className="text-xl font-medium text-gray-600 tracking-wide">
            Userof Code.Io
          </p>
        </div>
        <Button
          onClick={() => router.push("/blog")}
          variant="contained"
          color={"primary"}
          style={{
            color: "#F3F4F6",
            backgroundColor: "#3B82F6",
            width: "100px",
          }}
        >
          Sign In
        </Button>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl tracking-wider font-bold text-gray-700">
            It all started in 2021…
          </h2>
          <p className="text-md text-gray-500 font-normal leading-sung tracking-wide max-w-3xl">
            Hey, I’m Ramkinkar Rout. I Thought of to Start this site a decade
            ago simply to reflect Coding Ideas and Guide. welcome all the
            visitors to my site. Wanna help me to Spread out our community drop
            a Mail to me.{" "}
          </p>
          <h3 className=" text-lg font-semibold italic max-w-3xl tracking-wider leading-snug text-gray-800">
            Carefully written, extensively researched, simply understandable.A
            lifetime of knowledge at your fingertips.
          </h3>
        </div>
      </div>

      {/* -----------rightside----------- */}
      <div>
        <Image
          src={right}
          height={"400px"}
          width={"400px"}
          className="object-contain"
          alt="hero Image"
        />
      </div>
    </div>
  );
}
// w-24 text-center px-1 py-1 bg-gray-400 hover:bg-gray-900 text-blue-600 border border-black

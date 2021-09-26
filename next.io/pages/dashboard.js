import Layout from "../components/Layout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

import {
  RiFileTextFill,
  RiHomeWifiFill,
  RiCalendarTodoFill,
} from "react-icons/ri";

import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
export default function dashboard() {
  const [values, setvalues] = useState({
    title: "",
    subtitle: "",
    date: "",
    time: "",
    detail: "",
  });

  const { title, subtitle, date, time, detail } = values;

  const handelSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some((item) => item === "");
    if (emptyFieldCheck) {
      toast.error("Please Fill all Input Fields");
    }
    // ----making call to Strapi------------
    const response = await fetch(`http://localhost:1337/codes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      toast.error("Something Went Wrong");
    } else {
      const code = await response.json();
      console.log(code.slug);
      router.push(`/code/${code.slug}`);
    }
  };
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setvalues({ ...values, [name]: value });
  };

  return (
    <Layout title={"Code.Io | Edit"}>
      <div className="flex flex-col justify-between space-y-8 p-4">
        <div className="space-y-5 ">
          <h1 className="text-3xl font-semibold tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
            Welcome To your Dashboard
          </h1>
          <p className="text-base tracking-wider text-gray-500 font-medium">
            Here you can create your own blog post in no time
          </p>
        </div>
        {/* --------------------add form-------------- */}
        <div className="space-y-6 bg-gray-100 shadow-lg ">
          <ToastContainer />
          <h1 className="px-8 flex items-center py-4 text-center text-2xl font-semibold border-b-2 border-b-gray-400 tracking-wide leading-snug text-gray-600">
            Add Post
            <RiFileTextFill className="ml-1 pt-[2px]" />
          </h1>
          <form
            onSubmit={handelSubmit}
            method="POST"
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={handelInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subtitle"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                SubTitle
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="subtitle"
                id="subtitle"
                type="text"
                value={subtitle}
                onChange={handelInputChange}
              />
            </div>
            <div className="flex justify-between space-x-4">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="date"
                  className="items-center text-gray-700 flex text-sm font-bold mb-2"
                >
                  <RiCalendarTodoFill className="mr-1" />
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="date"
                  id="date"
                  type="date"
                  value={date}
                  onChange={handelInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="time"
                  id="time"
                  type="text"
                  value={time}
                  onChange={handelInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="detail"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Detail
              </label>
              <textarea
                className="shadow appearance-none border rounded h-[250px] w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue="Hello world!"
                name="detail"
                id="detail"
                type="text"
                value={detail}
                onChange={handelInputChange}
              />
            </div>

            <div className="my-4 flex items-center space-x-4 justify-center">
              <input
                type="submit"
                value="Add Article"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-11 rounded-md focus:outline-none focus:shadow-outline cursor-pointer"
              />
              <Link href={"/"}>
                <a className="flex items-center underline text-gray-600 font-lg tracking-wide hover:text-blue-600">
                  Back To Home
                  <RiHomeWifiFill className="ml-1" fontSize="18px" />
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

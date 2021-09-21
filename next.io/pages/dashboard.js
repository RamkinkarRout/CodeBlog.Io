import Layout from "../components/Layout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
      router.push(`/code/${code.slug}`);
    }
  };

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setvalues({ ...values, [name]: value });
  };
  return (
    <Layout title={"Code.Io | Dashboard"}>
      <div className="flex flex-col justify-between space-y-8 p-4">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-wider leading-relaxed text-gray-600 p-4 border-l-4 border-l-gray-700 shadow-lg">
            Welcome To your Dashboard
          </h1>
          <p className="text-base tracking-wider text-gray-500 font-medium">
            Here you can create your own blog post in no time
          </p>
        </div>
        {/* --------------------add form-------------- */}
        <div className="space-y-6">
          <ToastContainer />
          <h1 className="text-center text-2xl font-semibold tracking-wide leading-snug text-gray-600">
            Add Post
          </h1>
          <form onSubmit={handelSubmit} method="POST" className="space-y-4">
            <div>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={handelInputChange}
              />
            </div>
            <div>
              <label htmlFor="subtitle">SubTitle</label>
              <input
                name="subtitle"
                id="subtitle"
                type="text"
                value={subtitle}
                onChange={handelInputChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                name="date"
                id="date"
                type="date"
                value={date}
                onChange={handelInputChange}
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input
                name="time"
                id="time"
                type="text"
                value={time}
                onChange={handelInputChange}
              />
            </div>
            <div>
              <label htmlFor="detail">Detail</label>
              <input
                name="detail"
                id="detail"
                type="text"
                value={detail}
                onChange={handelInputChange}
              />
            </div>
            <input type="submit" value="Add News" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

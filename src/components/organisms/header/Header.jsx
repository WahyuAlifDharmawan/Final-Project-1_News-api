import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchNews } from "../../../features/news/newsSlice";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // console.log(query);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchNews(query));

    if (query <= 0) {
      navigate("/");
    } else {
      navigate(`/search/?q=${query}`, { replace: true });
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"> */}
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              News-API
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </Link>
            {/* </a> */}
            <button
              className="text-white cursor-pointer text-xl i-3 leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars font-underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none align-middle lg:ml-auto">
              <li className="nav-item">
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> */}
                {/* <i className=" text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">
                  <Link
                    to="/"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Indonesia
                  </Link>
                </span>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> */}
                {/* <i className=" text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">
                  <Link
                    to="/programming"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Programming
                  </Link>
                </span>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> */}
                {/* <i className=" text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">
                  <Link
                    to="/covid"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    COVID-19
                  </Link>
                </span>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> */}
                {/* <i className=" text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">
                  <Link
                    to="/saved"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Saved
                  </Link>
                </span>
                {/* </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"> */}
                {/* <i className=" text-lg leading-lg text-white opacity-75"></i> */}
                <span className="ml-2">
                  <Link
                    to="/about"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    About
                  </Link>
                </span>
                {/* </a> */}
              </li>
              <div className="flex flex-col my-3 lg:flex-row ml-2 items-center">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    placeholder="search here.."
                    className="p-1 bg-gray-200 w-60"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className=" bg-[#566FA5] px-4 py-1 text-white text-white-800 hover:text-gray-400 duration-500 ">
                    search
                  </button>
                </form>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

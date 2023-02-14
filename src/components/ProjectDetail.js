import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Header from "./Header";

const ProjectDetail = () => {
  const { betch, id } = useParams();

  const [data, setdata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    let projectdata = async () => {
      await fetch(
        `https://department-website.onrender.com/Project_${betch}/${id}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonres) => {
          setdata(jsonres);
        });
    };
    projectdata();
  }, [betch, id]);

  return (
    <>
      <Header />
      <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            {/* Right Side */}
            <div className="lg:col-span-8 md:col-span-6">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <img
                  src={data.Preview_URL}
                  className="rounded-md"
                  alt={data.Project_name}
                />

                <div className="text-center mt-12">
                  <span className="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">
                    Technology
                  </span>
                  <h3 className="my-3 text-[26px] font-semibold">
                    My Very Minimal <br /> Interior Design Ideas
                  </h3>

                  <ul className="list-none mt-6">
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Client :
                      </span>{" "}
                      <span className="block">Calvin Carlo</span>
                    </li>
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Date :
                      </span>{" "}
                      <span className="block">23th May, 2022</span>
                    </li>
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Time :
                      </span>{" "}
                      <span className="block">8 Min Read</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-slate-400">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script.
                  </p>
                  <p className="text-slate-400 italic border-x-4 border-indigo-600 ltr:rounded-tl-xl rtl:rounded-tr-xl ltr:rounded-br-xl rtl:rounded-bl-xl mt-3 p-3">
                    " There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. "
                  </p>
                  <p className="text-slate-400 mt-3">
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout.
                  </p>
                </div>
              </div>
            </div>

            {/* Left side */}

            <div className="lg:col-span-4 md:col-span-6">
              <div class="lg:col-span-4 md:col-span-5">
                <div class="sticky top-20">
                  <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                    Project Info :
                  </h5>
                  <dl class="grid grid-cols-12 mb-0 mt-4">
                    <dt class="md:col-span-4 col-span-5 mt-2">Client :</dt>
                    <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      Calvin Carlo
                    </dd>

                    <dt class="md:col-span-4 col-span-5 mt-2">Category :</dt>
                    <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      Web Design
                    </dd>

                    <dt class="md:col-span-4 col-span-5 mt-2">Date :</dt>
                    <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      23rd Sep, 2021
                    </dd>

                    <dt class="md:col-span-4 col-span-5 mt-2">Website :</dt>
                    <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      www.yourdomain.com
                    </dd>

                    <dt class="md:col-span-4 col-span-5 mt-2">Location :</dt>
                    <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      3/2/64 Mongus Street, UK
                    </dd>
                  </dl>

                  <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                    Tagscloud :
                  </h5>
                  <ul class="list-none text-center mt-6">
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Business
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Finance
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Marketing
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Fashion
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Bride
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Lifestyle
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Travel
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Beauty
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Video
                      </a>
                    </li>
                    <li class="inline-block m-2">
                      <a
                        href=""
                        class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out"
                      >
                        Audio
                      </a>
                    </li>
                  </ul>

                  <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                    Download :
                  </h5>
                  <div class="flex p-4 justify-around">
                    <div>
                      <a class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Poster
                      </a>
                    </div>
                    <div>
                      <a class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Report
                      </a>
                    </div>
                    <div>
                      <a class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;

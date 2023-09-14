'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "../utils/routes";
import BlogWriter from "../blog-writer/page";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { Clock4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Categories from "@/components/ui/custom/blogspage/Categories";
import PopularBlogs from "@/components/ui/custom/blogspage/PopularBlogs";
import Pagination from "@/components/ui/custom/blogspage/Pagination";



export default  function Blogs(){
  const [blogs, setBlogs] = useState<Array<any>>([]);
  const [blog, setBlog] = useState<any>({});

  const [homepageBlog, setHomepageBlog] = useState({
    image: "/assets/images/blog-4.png",
    createdOn: "2 hours ago",
    title: " 👨‍💻Tailwind Overkill with ruturaj",
    name: "ruturaj",
    metaDescription:
      "Tailwind has been energy consuming to learn with some much to understand this has been an absolute learning period, I for myself believe tailwind has been the best tech for building custom ui/ux elements in web development",
    readingTime: 1,
    creationTime: "12:21:21",
  });
  const [edit, setEdit] = useState(false);


  const deleteBlog = async (id: string) => {
    const response = await routes.BLOG_MS.APIS.DELETE_BLOG(id);
  };
  const GetBlogs = async () => {
    const response = await routes.BLOG_MS.APIS.GET_ALL_BLOGS();
    console.log(response)
    setBlogs(response.blogs);
  };
  useEffect(() => {
    GetBlogs();
  }, []);
  return (
    <>
      {" "}
      <div className=" max-w-6xl py-32 md:py-48 px-12 mx-auto">
        <div className="">
          <h1>
            <span className="text-2xl md:text-5xl  md:leading-normal font-bold">
              {"Hey Dev's, This is "}
              <span className=" text-blue-500 underline"> {"Bizmorphic!"}</span>
            </span>
            <h2 className=" font-light  leading-normal text-2xl md:text-5xl">
              {" Discover stories, creative ideas & add your's too"}
            </h2>
          </h1>
        </div>
        <div>
          <div className=" w-full py-10 md:py-16  blog-card grid  grid-cols-1 md:grid-cols-2 group ">
            <div className="  w-full mx-auto ">
              <div className="overflow-hidden w-xl h-44 md:w-96 md:h-80  relative group mx-auto">
                <Image
                  src="/assets/images/blog-4.png"
                  fill
                  loading="lazy"
                  alt="How to gain pro experience ar figma update version"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-200"
                />
              </div>{" "}
            </div>{" "}
            <div className="wrapper pt-4 md:pt-12  my-auto pr-12 ">
              <a
                href="#"
                className="px-2 text-xs flex justify-between publish-date"
              >
                <span className="flex">
                  {" "}
                  <Clock4 className="w-3 my-auto"></Clock4>
                  <p className="span my-auto pl-2">
                    {" "}
                    {homepageBlog.creationTime}
                  </p>
                </span>
                <span className="span my-auto pl-2 "> {homepageBlog.name}</span>
              </a>
              <div className="flex">
                <Link
                  href={`blogs/${homepageBlog.title}`}
                  className=" group-hover:text-blue-600  text-lg font-semibold md:text-4xl tag"
                >
                  {homepageBlog.title}
                </Link>
              </div>
              <div>
                <div className="h3 overflow-hidden py-4">
                  <p className="card-title text-sm line-clamp-3 overflow-hidden whitespace-pre-wrap ">
                    {homepageBlog.metaDescription}
                  </p>
                </div>
                <Button
                  variant={"outline"}
                  className="bg-gray-50 dark:bg-gray-800 hover:opacity-90"
                >
                  {" "}
                  <Link href={`blogs/${homepageBlog.title}`}>
                    {"Read More"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section id="categories" className="py-12">
          <div>
            <h1 className="text-3xl font-semibold md:px-12">
              {"Popular Categories"}
            </h1>
          </div>
          <Categories />
        </section>

        <section id="blogs">  
            <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className=" md:col-span-2 ">
          <div>
              <h1 className="text-3xl font-semibold pb-4">{"Recent Posts"}</h1>
            </div>
            {blogs &&
              blogs?.map((item:any, index:number) => {
                return (
                  <Container className="pb-4" key={item._id}>
                    <div>
                      <div className=" w-full blog-card  grid grid-cols-2 group ">
                        <div className=" w-full  mx-auto">
                          <div className="overflow-hidden w-5/6 h-32  md:h-52  relative group mx-auto">
                            <Image
                              src="/assets/images/blog-4.png"
                              fill
                              loading="lazy"
                              alt="How to gain pro experience ar figma update version"
                              className=" object-cover group-hover:scale-110 rounded-lg transition duration-200"
                            />
                          </div>{" "}
                        </div>{" "}
                        <div className="wrapper my-auto">
                          <a
                            href="#"
                            className="px-2 text-xs flex justify-between publish-date"
                          >
                            <span className="flex">
                              {" "}
                              <Clock4 className="w-3 my-auto"></Clock4>
                              <p className=" span my-auto pl-2">
                                {" "}
                                {item.creationTime}
                              </p>
                            </span>
                            <span className="span my-auto pl-2 ">
                              {" "}
                              {item.name}
                            </span>
                          </a>
                          <div className="flex">
                            <Link
                              href={`blogs/${item.title}`}
                              className=" group-hover:text-blue-600   font-semibold tex-md md:text-xl tag"
                            >
                              {item.title}
                            </Link>
                          </div>
                          <div>
                            <div className="h3 overflow-hidden py-2">
                              <p className="card-title text-sm line-clamp-2 overflow-hidden whitespace-pre-wrap ">
                                {item.metaDescription}
                              </p>
                            </div>
                            <Button
                              variant={"outline"}
                              className=" hidden md:block dark:bg-gray-800 my-2 hover:opacity-90"
                            >
                              {" "}
                              <Link href={`blogs/${item.title}`}>
                                {"Read More"}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                );
              })}
          </div>
          <div className="px-8 col-span-1">
              <div>
                <p className="text-sm">{"What's Hot!"}</p> 
                <h1 className="font-semibold text-lg">Most Popular</h1>
              </div>
              <div className="">
                <PopularBlogs/>
              </div>
          </div>
         </div>
              <div>
                <Pagination/>
              </div>
        </section>
      </div>
    </>
    )
};



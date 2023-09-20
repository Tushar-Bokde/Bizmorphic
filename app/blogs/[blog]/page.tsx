"use client";
import React, { useEffect, useState } from "react";
import classes from "../../preview/ViewBlog.module.css";
import Image from "next/image";
import routes from "../../utils/routes";
import PopularBlogs from "@/components/ui/custom/blogspage/PopularBlogs";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Blog {
  _id: string;
  title: string;
  metaDescription: string;
  category: Array<any>;
  contents: Array<any>;
  userid: string;
  name: string;
  createdOn: string;
  blogAuthentication: {
    approved: false;
    rejected: false;
    waiting: true;
  };
  readingTime: number;
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const [blog, setBlog] = useState<Blog>({
    _id: "",
    title: "",
    metaDescription: "",
    category: [],
    contents: [],
    userid: "",
    name: "",
    createdOn: "",
    blogAuthentication: {
      approved: false,
      rejected: false,
      waiting: true,
    },
    readingTime: 1,
    createdAt: "2023-09-08T09:19:56.752Z",
    updatedAt: "2023-09-08T09:19:56.752Z",
  });
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<Array<any>>([]);
  const [category, setCategory] = useState<Array<any>>([]);
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    const GetBlogs = async () => {
      const loc = window.location.pathname;
      const title = loc.split("/").pop()?.replaceAll("%20", " ");
      const response = await routes.BLOG_MS.APIS.GET_BLOG_BY_TITLE(title);
      setBlog(response);
      setItems(response.contents);
      setTitle(response.title);
      setCategory(response.category);
    };
    GetBlogs();

    return () => {};
  }, []);
  return (
    <div className="max-w-6xl  mx-auto pt-12 p-12 md:pt-24 md:px-6 md:p-24">
      <div
        className={`${classes.blogMainContainerMeta} grid grid-cols-1  `}
      >
        <div className="my-auto pt-12  ">
          {title && (
            <div className="w-full">
              <h2 className=" text-xl md:text-4xl font-semibold">{title}</h2>
            </div>
          )}
           <div className="flex p-4">
            <div className="w-10 p-1 h-10 dark:bg-gray-900 rounded-3xl">
              <Avatar>
                <AvatarImage src={"/favicon-32x32.png"} />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col px-2 o">
              <div>
                <p className="text-xs"> {blog.name ?? "Anonymous"}</p>
              </div>
              <div>
                <p className=" text-[.6rem] my-auto">{blog.createdOn}</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="bg-black aspect-video relative  md:mx-24 ">
          <Image fill alt="Blog Thumnail" src="/assets/images/blog-4.png" />
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className={`${classes.blogContents} p-4 col-span-3 `}>
          {items &&
            items.map((item, index) => {
              return item.type === "HEADING" ? (
                <div className={`${classes.blogContentsItem} py-4`}>
                  <h2 className="text-2xl font-semibold text-orange-400 ">{item.value}</h2>
                </div>
              ) : item.type === "SUB_HEADING" ? (
                <div className={` py-4`}>
                  <h3 >{item.value}</h3>
                </div>
              ) : item.type === "IMAGE" ? (
                <div className={`p-4  w-full `}>
                  <div className=" flex  justify-center" >
                  <Image
                    width={500}
                    height={300}
                    src={item.value}
                    alt="blog-image"
                    // style={{ width: "90%", height: "100%" }}
                  />
                  </div>
                </div>
              ) : item.type === "PARAGRAPH" ? (
                <div className="p-4 mx-auto w-full">
                  <p className=" max-w-3xl mx-auto break-words">{item.value}</p>
                </div>
              ) : item.type === "DOCUMENT" ? (
                <div>
                  <h2>Work In Progress For Document Showing</h2>
                </div>
              ) : (
                <div></div>
              );
            })}
        </div>
       <PopularBlogs/>
      </div>
    </div>
  );
};

export default Blog;

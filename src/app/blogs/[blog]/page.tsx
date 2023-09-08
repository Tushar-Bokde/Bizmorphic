"use client";
import React, { useEffect, useState } from "react";
import classes from "../../preview/ViewBlog.module.css"
import Image from "next/image";
import routes from "@/app/utils/routes";



interface Blog {
  _id: string;
  title: string;
  metaDescription: string;
  category: Array<any>;
  contents: Array<any>;
  userid: string;
  username: string;
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
    username: "",
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
      const title= loc.split("/").pop()?.replaceAll('%20', ' ')
      const response = await routes.BLOG_MS.APIS.GET_BLOG_BY_TITLE(title);
      setItems(response.contents);
      setTitle(response.title);
      setCategory(response.category);
    };
    GetBlogs();

    return () => {};
  }, []);
  return (
    <div className={classes.blogMainContainer}>
      <div className={classes.blogMainContainerMeta}>
        {title && <h2 className={classes.blogTitle}>{title}</h2>}
        <div className={classes.blogInfo}>
          <p className={classes.blogAuthor}></p>
          <p className={classes.blogDate}></p>
        </div>
      </div>
      <div className={classes.blogContents}>
        {items &&
          items.map((item, index) => {
            return item.type === "HEADING" ? (
              <div className={classes.blogContentsItem}>
                <h2 className={classes.blogHeading}>{item.value}</h2>
              </div>
            ) : item.type === "SUB_HEADING" ? (
              <div className={classes.blogContentsItem}>
                <h3 className={classes.blogSubHeading}>{item.value}</h3>
              </div>
            ) : item.type === "IMAGE" ? (
              <div className={classes.blogContentsItem}>
                {/* <div className={classes.blogImage}> */}
                <Image
                  width={500}
                  height={300}
                  className={classes.blogImage}
                  src={item.value}
                  alt="blog-image"
                  // style={{ width: "90%", height: "100%" }}
                />
                {/* </div> */}
              </div>
            ) : item.type === "PARAGRAPH" ? (
              <div className={classes.blogContentsItem}>
                <p className={classes.blogParagraph}>{item.value}</p>
              </div>
            ) : item.type === "DOCUMENT" ? (
              <div className={classes.blogContentsItem}>
                <h2 className={classes.blogDocument}>
                  Work In Progress For Document Showing
                </h2>
              </div>
            ) : (
              <div></div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;

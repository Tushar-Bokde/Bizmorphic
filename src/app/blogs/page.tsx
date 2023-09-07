"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "../utils/routes";
import classes from "./index.module.css";


const Blogs = () => {
  const [blogs, setBlogs] = useState<Array<any>>([]);

  const GetBlogs = async () => {
    const response = await routes.BLOG_MS.APIS.GET_ALL_BLOGS();
    setBlogs(response.blogs);
  };

  const deleteBlog = async (id:string) => {
    const response = await routes.BLOG_MS.APIS.DELETE_BLOG(id);
  };

  useEffect(() => {
    GetBlogs();
  }, []);
  return (
    <div className={classes.blogList}>
      {blogs &&
        blogs.map((item, index) => {
          return (
            <div className={classes.blogItem} key={item._id}>
              <h3 className={classes.blogItemTitle}>{item.title}</h3>
              <div className={classes.blogItemAction}>
                <Link
                  href={{
                    pathname: `/blogs/${item._id}`,
                  }}
                  className={classes.blogItemActionBtnEdit}
                >
                  Edit
                </Link>
                <button
                  className={classes.blogItemActionBtnDelete}
                  onClick={() => deleteBlog(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Blogs;

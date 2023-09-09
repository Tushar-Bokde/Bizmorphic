"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import routes from "../utils/routes";
import classes from "./index.module.css";
import BlogWriter from "../blog-writer/page";
import { Container } from "@radix-ui/themes";
import Image from "next/image";


const Blogs = () => {
  const [blogs, setBlogs] = useState<Array<any>>([]);
  const [blog, setBlog] = useState<any>({})
  const [edit, setEdit] = useState(false)
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
    edit ? <>
      <BlogWriter type={'UPDATE'} blogData={blog}/>
      </>:
  <> <div className={classes.blogList}>
      {blogs &&
        blogs.map((item, index) => {
          return (
            
            <Container key={item._id}>
            <div className={classes.blogItem} >
              
                  <Link
                  href={{
                    pathname: `/blogs/${item.title}`,
                  }}
                  className={classes.blogItemActionBtnEdit}
                >
                <h3 className={classes.blogItemTitle}>{item.title}</h3>
                </Link>
              <div className={classes.blogItemAction}>
             
                  {/* <button 
                     className={classes.blogItemActionBtnDelete}
                     onClick={()=>{
                      setEdit(true);
                      setBlog(item);
                     }}
                  >Edit</button> */}

                {/* <button
                  className={classes.blogItemActionBtnDelete}
                  onClick={() => deleteBlog(item._id)}
                >
                  Delete
                </button>  */}
              </div>
            </div>
            </Container>
          );
        })}
    </div> 
    </> 
  
  );
};

export default Blogs;

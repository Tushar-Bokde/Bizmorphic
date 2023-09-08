"use client"
import React, { useEffect, useState } from "react";
import classes from "./ViewBlog.module.css";
import Image from "next/image";
const ViewBlogBy = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<Array<any>>([]);
  const [category, setCategory] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const items_ = localStorage.getItem("items");
      const title_ = localStorage.getItem("title");
      const category_ = localStorage.getItem("category");
      if (items_)
        setItems(JSON.parse(items_));
      if(title_)
        setTitle(title_);
        if(category_)
        setCategory(category_);
    }
    return () => {}
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

export default ViewBlogBy;

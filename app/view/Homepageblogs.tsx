import { Clock4 } from "lucide-react";
import React from "react";
import Image from "next/image";

const HomepageBlogs = ({ blogs }: any) => {
  console.log("from homepafe",blogs)
  return (
    <div>
    <ul className="grid grid-cols-1 lg:grid-cols-2">
  {blogs &&
    blogs.map((item: any, i: number) => {
      return (
        <li className="p-4" key={i}>
          <div className="blog-card flex p-4">
            <div className="overflow-hidden rounded-2xl group mx-4">
              <Image
                src="/assets/images/blog-4.png"
                width={200}
                height={100}
                loading="lazy"
                alt="How to gain pro experience ar figma update version"
                className="w-full h-48 object-cover group-hover:scale-125 rounded-2xl transition duration-200"
              />
            </div>
            <div className="p-4 card-content">
              <div className="wrapper flex">
                <a href="#" className="tag">
                  {item.title}
                </a>
                <a href="#" className="px-2 flex publish-date">
                  <Clock4 />
                  <span className="span">{ 'time'}</span>
                </a>
              </div>
              <h3 className="h3 py-4">
                <a href="#" className="card-title">
                  {item.metaDescription}
                </a>
              </h3>
            </div>
          </div>
        </li>
      );
    })}
</ul>

    </div>
  );
};

export default HomepageBlogs;

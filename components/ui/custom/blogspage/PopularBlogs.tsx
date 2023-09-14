import React, { useState } from "react";

const PopularBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: 'Tech'
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: 'Tech'
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: 'Tech'
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: 'Tech'
    },
  ]);
  return (
    <section>
      <ul>
        {blogs &&
          blogs.map((e, i) => {
            return (
              <li key={i}>
                <div className="py-2">
                    <div className="flex py-2 " >
                        <p className=" px-2 text-xs text-white bg-purple-900 rounded-3xl"> {e.category}</p>
                    </div>
                  <h2 className=" text-sm">{e.title}</h2>
                  <span className="flex justify-between py-2">
                    <h3 className="text-xs">{e.name} </h3>
                    <p className="text-xs"> {e.createOn}</p>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default PopularBlogs;

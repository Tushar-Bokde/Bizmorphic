import React, { useState } from "react";
import { Skeleton } from "../../skeleton";

const PopularBlogs = () => {
  const [loading, setLoeading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState([
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: "Tech",
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: "Tech",
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: "Tech",
    },
    {
      title: "Spring boot RoadMap : Something",
      name: " raj ghodekar",
      createOn: "01.09.2023",
      category: "Tech",
    },
  ]);
  return (
    <section>
      <ul>
        {loading ?  <>
        
        <div className="flex p-6 items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
        </div>
        <div className="flex p-6 items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
        </div>
        <div className="flex p-6 items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
        </div>
        <div className="flex p-6 items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
        </div>
        </> :
         (
          blogs.map((e, i) => {
            return (
              <li key={i}>
                <div className="py-2">
                  <div className="flex py-2 ">
                    <p className=" px-2 text-xs text-white bg-purple-900 rounded-3xl">
                      {" "}
                      {e.category}
                    </p>
                  </div>
                  <h2 className=" text-sm">{e.title}</h2>
                  <span className="flex justify-between py-2">
                    <h3 className="text-xs">{e.name} </h3>
                    <p className="text-xs"> {e.createOn}</p>
                  </span>
                </div>
              </li>
            );
          })
        )
        }
      </ul>
    </section>
  );
};

export default PopularBlogs;

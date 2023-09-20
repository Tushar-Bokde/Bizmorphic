"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Card, Container } from "@radix-ui/themes";
import { Avatar } from "@radix-ui/react-avatar";
import Image from 'next/image'
import BlogWriter from "../blog-writer/page";
import routes from "@/app/utils/routes";
import { useRouter } from "next/navigation";
import { Clock4 } from "lucide-react";

const Profile = () => {
  const { data: session } = useSession();
  const [blogs, setBlogs] = useState<Array<any>>([]);
  const [ edit, setEdit ] = useState(false)
  const [editblog , setEditblog ]= useState({})


  useEffect(() => {
    getD();
  }, []);

  async function getD() {

    const data = await routes.BLOG_MS.APIS.GET_BLOGS_BY_USERNAME({
      name: session?.user?.email,
    });
    setBlogs(data);
  }

  const deleteBlog = async (id: string) => {
    const response = await routes.BLOG_MS.APIS.DELETE_BLOG(id);
    getD()
  };

  return (

    <>
   
{ edit? <>
  <div><Button variant={'ghost'} className="absolute text-3xl top-1/2" onClick={()=>{setEdit(false)}}><p>{"<-"}</p></Button></div>
<BlogWriter type="UPDATE" blogData={editblog}/>
</> :
    <div className="pt-24">
      <div className="flex justify-between mx-12 my-4">
        <h1 className="text-center  my-auto">
  
        {session?.user?.name}
        </h1>
      <Button variant="outline" className="">
        <Link href="/blog-writer">Create Blog</Link>
      </Button>
      </div>
      <div>
        {" "}
        <h1 className="text-center text-2xl">My Blogs</h1>
      </div>
      <div className="p-12">
      <Container className="flex justify-center ">
        {blogs ? (blogs.map((e, i) => {
          return (
            <div key={i} className="p-2" >
            <div  className="md:p-4 border rounded-lg group grid grid-cols-1 md:grid-cols-5  max-w-4xl  m-auto justify-between">
              <div className="relative md:aspect-square  h-24 md:w-full md:h-full md:rounded-2xl overflow-hidden col-span-1">
                <Image
                        src="/assets/images/blog-4.png"
                        fill
                        loading="lazy"
                        alt="How to gain pro experience ar figma update version"
                        className="object-cover group-hover:scale-110 transition duration-200"
                      />
              </div>
              <div className="flex flex-col overflow-hidden md:col-span-3 p-4 justify-around ">
                 <p className="text-xs">{new Date(e.createdOn).toDateString()} </p>
                 <h1 className="text-lg md:text-3xl p-2 group-hover:text-blue-500 font-semibold"> {e.title}</h1>
                <p className="text-sm line-clamp-2 overflow-hidden whitespace-pre-wrap ">{(e.metaDescription)}</p>
                
                <h1 className="pt-1 flex"><Clock4 className="px-1"/>{e.readingTime} mins</h1>
               
              </div>
              <div className="flex md:flex-col  col-span-1 px-12 mx-auto md:my-auto items-center">
                <Button variant="outline" className="m-2"
                  onClick={()=>{
                    setEdit(true);
                    setEditblog(e);
                   }}>
                  Edit
                </Button>

                <Button
                  variant="outline"
                  className="bg-red-500 m-2 text-white  hover:bg-red-600"
                  onClick={() => deleteBlog(e._id)}
                >
                  Delete
                </Button>
              </div>
            </div></div>
          );
        })): <h1 className="h2"> Looks like you have no blogs yet!</h1>}
      </Container>
      </div></div>
}
      </>
   
  );
};

export default Profile;

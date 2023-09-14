"use client";
import {
  ArrowRight,
  Clock4,
  Container,
  Facebook,
  Headphones,
  Instagram,
  Play,
  Rocket,
  Users2,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import MainPageCard from "../../components/ui/custom/MainPageCard";
import { TextField } from "@radix-ui/themes";
import HomepageBlogs from "./Homepageblogs";
import routes from "@/app/utils/routes";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface serviceCard {
  cardTitle: string;
  href: string;
  ImageHref: string;
  color: string;
}
interface WorkCard {
  product: string;
  description: string;
  href: string;
  imageHref: string;
}
interface Blog {
  creationTime: string;
  metaDescription: string;
  readingTime: number;
  title: string;
  name: string;
}
const Home = () => {
  const services: serviceCard[] = [
    {
      cardTitle: "Artificial Intelligence",
      href: "#",
      ImageHref: "/assets/images/service-icon-1.png",
      color: "green",
    },
    {
      cardTitle: "Software as a Service",
      href: "#",
      ImageHref: "/assets/images/service-icon-2.png",
      color: "purple",
    },
    {
      cardTitle: "Software Development",
      href: "#",
      ImageHref: "/assets/images/service-icon-3.png",
      color: "orange",
    },
    {
      cardTitle: "Machine Learning",
      href: "#",
      ImageHref: "/assets/images/service-icon-4.png",
      color: "pink",
    },
    {
      cardTitle: "Cloud Services",
      href: "#",
      ImageHref: "/assets/images/service-icon-5.png",
      color: "blue",
    },
    {
      cardTitle: "Business Intelligence",
      href: "#",
      ImageHref: "/assets/images/service-icon-6.png",
      color: "green",
    },
    {
      cardTitle: "Business ChatBots",
      href: "#",
      ImageHref: "/assets/images/service-icon-7.png",
      color: "yellow",
    },
    {
      cardTitle: "04 More Services",
      href: "#",
      ImageHref: "/assets/images/service-icon-7.png",
      color: "yellow",
    },
  ];
  const projects: WorkCard[] = [
    {
      product: "DOCDEDO",
      description: "AI based legal draft generation and review",
      href: "https://docdedo.com",
      imageHref: "/assets/images/project-1.jpg",
    },
    {
      product: "V500 SYSTEMS",
      description: "Large Scale Document insights and comparison tool",
      href: "https://v500.com",
      imageHref: "/assets/images/project-2.jpg",
    },
    {
      product: "BIZBOT",
      description: "AI Channel ChatBots",
      href: "https://bizbot.bizmorphic.com/",
      imageHref: "/assets/images/project-3.jpg",
    },
    {
      product: "FABZEN TECH",
      description: "www.fabzentech.com",
      href: "https://fabzentech.com/",
      imageHref: "/assets/images/project-4.jpg",
    },
    {
      product: "LINK.ME",
      description: "www.link.me",
      href: "https://link.me/",
      imageHref: "/assets/images/project-5.jpg",
    },
  ];

  const [product, setProduct] = useState<WorkCard>({
    product: "DOCDEDO",
    description: "AI based legal draft generation and review",
    href: "https://docdedo.com",
    imageHref: "/assets/images/project-1.jpg",
  });
  useEffect(() => {
    getBlogs();
  }, []);
  const [blogs, setBlogs] = useState([
    {
      creationTime: "5 hours ago",
      metaDescription:
        "WeollowWeollo asdlkfw is based on some greatads jasdlkfdsklfjads lkjsldkfja",
      name: "Raj Ghodekar",
      readingTime: 1,
      title: "Hellow sure",
      updatedAt: "2023-09-09T06:32:57.647Z",
    },
    {
      creationTime: "5 hours ago",
      metaDescription:
        "Weollow is based on some greatads jasdlkfdsklfjads lkjsldkfja",
      name: "Raj Ghodekar",
      readingTime: 1,
      title: "Hellow sure",
      updatedAt: "2023-09-09T06:32:57.647Z",
    },
    {
      creationTime: "5 hours ago",
      metaDescription:
        "WeollowWeollo asdlkfw is based on some greatads jasdlkfdsklfjads lkjsldkfja",
      name: "Raj Ghodekar",
      readingTime: 1,
      title: "Hellow sure",
      updatedAt: "2023-09-09T06:32:57.647Z",
    },
    {
      creationTime: "5 hours ago",
      metaDescription:
        "WeollowWeollo asdlkfw is based on some greatads jasdlkfdsklfjads lkjsldkfja",
      name: "Raj Ghodekar",
      readingTime: 1,
      title: "Hellow sure",
      updatedAt: "2023-09-09T06:32:57.647Z",
    },
  ]);

  async function getBlogs() {
    try {
      const allblogs = await routes.BLOG_MS.APIS.GET_ALL_BLOGS();
      const filteredBlogz = allblogs.blogs.filter((e:any, i:number)=>{
        if (i<3) return e
      })
      setBlogs(filteredBlogz);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <article>
        <section
          className="section hero pt-24  mx-auto max-w-6xl md:pt-32"
          id="home"
          aria-label="hero"
        >
          <div className="container grid grid-cols-1  md:grid-cols-2 ">
            <div className="hero-content px-6  mx-w-[1024]">
              <h1 className="h1 pt-14 text-4xl font-semibold fon hero-title">
                Metamorphosing Your{" "}
                <span className=" underline decoration-yellow-500">
                  Business
                </span>
                , For The Digital Future
              </h1>

              <p className="hero-text text-md text-gray-500 pt-10 leading-loose">
                At Bizmorphic, business meets intelligence. We stand at the
                horizon of bringing academic AI research to enterprises, keeping
                them at the forefront of the AI race.
              </p>

              <div className="flex py-6">
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className=" bg-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900 mr-6 cursor-pointer hover:bg-blue-500 text-white"
                >
                  <a
                    href="https://calendly.com/mayur_tikundi/30min"
                    className=""
                  >
                    Schedule a Demo
                  </a>
                </Button>
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="cursor-pointer  "
                >
                  <Play />
                  <span className=""> Video</span>
                </Button>
              </div>

              <ul className="social-list flex py-3 ">
                <li className="p-2 flex bg-gray-100 dark:bg-gray-800 rounded-lg mr-2">
                  <a
                    href="https://www.facebook.com/home.php"
                    className="social-link pr-2"
                    style={{ color: "hsl(241, 77%, 63%)" }}
                  >
                    <Facebook />
                  </a>
                  <h2 className="hidden md:inline-block">FACEBOOK</h2>
                </li>
                <li className="p-2 flex bg-gray-100 dark:bg-gray-800  rounded-lg mx-2">
                  <a
                    href="#"
                    className="social-link  pr-2"
                    style={{ color: " hsl(0, 100%, 50%)" }}
                  >
                    <Youtube />
                  </a>
                  <h2 className="hidden md:inline-block">YOUTUBE</h2>
                </li>
                <li className="p-2 flex bg-gray-100 dark:bg-gray-800  rounded-lg mx-2">
                  <a
                    href="https://www.instagram.com/bizmorphic/"
                    className="social-link  pr-2"
                    style={{ color: "hsl(324, 88%, 52%)" }}
                  >
                    <Instagram />
                  </a>
                  <h2 className="hidden md:inline-block">INSTAGRAM</h2>
                </li>
              </ul>
            </div>

            <div className="hero-banner py-12 relative">
              <Image
                src="/assets/images/hero-banner.png"
                width={500}
                height={300}
                alt="hero banner"
                className="m-auto "
              />
            </div>
          </div>
        </section>

        <section
          className="section service py-14   mx-auto max-w-6xl "
          id="service"
          aria-label="service"
        >
          <div className="container">
            <p className="text-lg flex py-2 items-center justify-center section-subtitle has-before ">
              <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Why
              Our Services
            </p>
            <p className="section-subtitle has-before  font-semibold text-center"></p>

            <h2 className="h2 font-bold text-4xl section-title text-center">
              State of the Art AI Fuelling your{" "}
              <span className="has-befor underline decoration-yellow-300  -outline-offset-2">
                {" "}
                Business
              </span>
            </h2>

            <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((e: serviceCard, i: number) => {
                return (
                  <li key={i}>
                    <MainPageCard props={e} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          className="section py-14  mx-auto max-w-6xl feature"
          id="feature"
          aria-label="feature"
        >
          <div className="container  grid  grid-cols-1 md:grid-cols-2">
            <div className="feature-banner md:flex items-center justify-center ">
              <Image
                src="/assets/images/feature-banner.png"
                width="582"
                height="585"
                loading="lazy"
                alt="feature banner"
                className=""
              />
            </div>

            <div className="feature-content">
              <p className="text-lg flex items-center section-subtitle has-before ">
                <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Why
                Choose us
              </p>

              <h2 className="h2 section-title font-bold text-2xl">
                Innovate with Confidence Our AI Expertise,
                <span className="has-befor underline decoration-yellow-300 -outline-offset-2 ">
                  Your Success.
                </span>
              </h2>

              <ul className="feature-list">
                <li>
                  <div className="feature-card flex py-12">
                    <div
                      className="card-icon m-auto p-4 mr-4 bg-green-300 hover:bg-green-400 hover:duration-300 rounded-3xl "
                      style={{ color: "174, 77%, 50%" }}
                    >
                      <Rocket />
                    </div>
                    <div>
                      <h3 className="h3 card-title font-medium text-2xl">
                        Focused Research & Development
                      </h3>
                      <p className="card-text leading-6">
                        Unleashing continuous AI research, we pioneer
                        groundbreaking innovations and cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feature-card flex py-4">
                    <div
                      className="card-icon m-auto p-4 mr-4 bg-purple-300 hover:bg-purple-400  rounded-3xl "
                      style={{ color: "174, 77%, 50%" }}
                    >
                      <Users2 />
                    </div>

                    <div>
                      <h3 className="h3 card-title font-medium text-2xl">
                        Accelerate Innovation & Time-to-Market
                      </h3>

                      <p className="card-text">
                        {"Unlock rapid innovation with our AI expertise, swiftly implementing groundbreaking solutions, and propelling your business' growth."}
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="feature-card flex py-12">
                    <div
                      className="card-icon m-auto p-4 mr-4 bg-red-300 hover:bg-red-400  rounded-3xl "
                      style={{ color: "343, 98%, 60%" }}
                    >
                      <Headphones />
                    </div>

                    <div>
                      <h3 className="h3 card-title font-medium text-2xl">
                        Cost-Effective AI Solutions
                      </h3>

                      <p className="card-text">
                        Cost-effective AI research, expert solutions so you save
                        on development expenses
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section  mx-auto max-w-6xl project" id="project" aria-label="project">
          <div className="container ">
            <p className="text-lg flex  justify-center items-center section-subtitle has-before ">
              <li className="list-disc w-6 text-yellow-300 text-4xl "></li>
              Projects
            </p>

            <h2 className="h2 text-3xl font-bold py-4 section-title text-center">
              Trust Our{" "}
              <span className="has-before  underline decoration-yellow-300 -outline-offset-2 ">
                Experience
              </span>
            </h2>

            <ul className="filter-list flex flex-wrap py-12 justify-center">
              {projects.map((e: WorkCard, i: number) => {
                return (
                  <>
                    <li key={i} className="p-1">
                      <Button
                        variant={"outline"}
                        // onClick={() => {
                        //   setProduct(e);
                        // }}
                        className="filter-btn p-4 active"
                        data-filter-btn
                      >
                        {e.product}
                      </Button>
                    </li>
                  </>
                );
              })}
            </ul>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
              <li className="py-6 object-contain rounded-2xl  overflow-hidden sm:col-span-2 md:col-span-2 ">
                <div className="project-card relative transition-transform group">
                  <div className="card-banner ">
                    <img
                      src={projects[0].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className=" group-hover:scale-125 scale-[1.2] transition delay-75 ease-in-out duration-300 group-hover:brightness-50 "
                    />
                  </div>

                  <Button
                    variant={"ghost"}
                    className=" bg-yellow-300 dark:bg-yellow-500 hidden absolute inset-0 m-auto group-hover:transition duration-300 ease-in-out cursor-pointer w-64 h-32 group-hover:inline-block hover:bg-yellow-300 "
                  >
                    <h3 className="h3">
                      <a target="_blank" href={projects[0].href}>
                        {projects[0].product}
                      </a>
                    </h3>
                    <br />
                    <a target="_blank" href={projects[0].href}>
                      {projects[0].description}
                    </a>
                  </Button>
                </div>
              </li>

              <li className="py-6 rounded-2xl h-full">
                <div className="project-card h-full relative transition-transform rounded-2xl overflow-hidden group">
                  <div className="card-banner h-full img-holder">
                    <img
                      src={projects[1].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className="group-hover:scale-110 h-full transition delay-75 ease-in-out duration-300 group-hover:brightness-50"
                    />
                  </div>

                  {/* Apply translation to the Button */}
                  <Button
                    variant={"ghost"}
                    className="bg-yellow-300  dark:bg-yellow-500 hidden absolute opacity-0 inset-0 m-auto group-hover:transition duration-300 cursor-pointer transition-transform group-hover:ease-in-out group-hover:duration-300 w-64 h-32 group-hover:block group-hover:-translate-y-2 group-hover:opacity-100 hover:bg-yellow-300"
                  >
                    <h3 className="h3">
                      <a target="_blank" href={projects[1].href} className="">
                        {projects[1].product}
                      </a>
                    </h3>
                    <a target="_blank" href={projects[1].href}>
                      {projects[1].description}
                    </a>
                  </Button>
                </div>
              </li>
              <li className="py-6 rounded-2xl h-full">
                <div className="project-card h-full relative transition-transform   rounded-2xl  overflow-hidden   group">
                  <div className=" card-banner h-full img-holder">
                    <img
                      src={projects[2].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className="group-hover:scale-110 h-full transition delay-75 ease-in-out duration-300 group-hover:brightness-50 "
                    />
                  </div>

                  <Button
                    variant={"ghost"}
                    className=" bg-yellow-300  dark:bg-yellow-500 hidden absolute inset-0 m-auto group-hover:transition duration-300 cursor-pointer transition-transform group-hover:ease-in-out group-hover:duration-300 w-64 h-32 group-hover:block group-hover:-translate-y-2 group-hover: opacity-100 hover:bg-yellow-300"
                  >
                    <h3 className="h2 ">
                      <a href={projects[2].href}>{projects[2].product}</a>
                    </h3>
                    <a href={projects[2].href}>{projects[2].description}</a>
                  </Button>
                </div>
              </li>
              <li className="py-6 rounded-2xl h-full">
                <div className="project-card h-full relative transition  rounded-2xl  overflow-hidden   group">
                  <div className=" card-banner h-full img-holder">
                    <img
                      src={projects[3].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className="group-hover:scale-110 h-full transition ease-in-out duration-300 group-hover:brightness-50 "
                    />
                  </div>

                  <Button
                    variant={"ghost"}
                    className=" bg-yellow-300  dark:bg-yellow-500 hidden absolute inset-0 m-auto group-hover:transition duration-300 cursor-pointer transition-transform group-hover:ease-in-out group-hover:duration-300 w-64 h-32 group-hover:block group-hover:-translate-y-2 group-hover:scale-110 hover:bg-yellow-300"
                  >
                    <h3 className="h3">
                      <a target="_blank" href={projects[3].href} className="">
                        {projects[3].product}
                      </a>
                    </h3>
                    <a target="_blank" href={projects[3].href}>
                      {projects[3].description}
                    </a>
                  </Button>
                </div>
              </li>
              <li className="py-6 rounded-2xl h-full">
                <div className="project-card h-full relative transition-transform   rounded-2xl  overflow-hidden   group">
                  <div className=" card-banner h-full img-holder">
                    <img
                      src={projects[4].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className="group-hover:scale-110 h-full transition delay-75 ease-in-out duration-300 group-hover:brightness-50 "
                    />
                  </div>

                  <Button
                    variant={"ghost"}
                    className=" bg-yellow-300  dark:bg-yellow-500 hidden absolute inset-0 m-auto group-hover:transition duration-300 cursor-pointer transition-transform group-hover:ease-in-out group-hover:duration-300 w-64 h-32 group-hover:block group-hover:-translate-y-2 hover:bg-yellow-300"
                  >
                    <h3 className="h3">
                      <a target="_blank" href={projects[4].href} className="">
                        {projects[4].product}
                      </a>
                    </h3>
                    <a target="_blank" href={projects[4].href}>
                      {projects[4].description}
                    </a>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="section newsletter py-14 bg-blue-700 dark:bg-blue-950 has-bg-image"
          aria-label="newsletter"
        >
          <div className="container grid mx-auto max-w-6xl grid-cols-1 md:grid-cols-2 ">
            <div className="newsletter-banner ">
              <Image
                src="/assets/images/newsletter-banner.png"
                loading="lazy"
                width="400"
                height="300"
                alt="newsletter banner"
                className="w-100 mx-auto "
              />
            </div>

            <div className="newsletter-content m-auto p-6">
              <p className="text-lg flex items-center  dark:text-gray-100 text-gray-200 section-subtitle has-before ">
                <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Get
                every update
              </p>
              <h2 className="h2 section-title  text-white font-bold text-xl py-4">
                Subscribe newslater get latest updates and deals
              </h2>

              <form action="" className="newsletter-form">
                <TextField.Input
                  placeholder=" Enter your email"
                  type="email"
                  name="email_address"
                  required
                  className="email-field rounded-sm dark:bg-blue-900  bg-blue-600 w-full h-10 py-6"
                />

                <Button
                  type="submit"
                  variant={"secondary"}
                  className=" bg-yellow-300  dark:bg-yellow-500 my-4 hover:bg-yellow-400"
                >
                  <span className="span">Subscribe</span>
                  <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="section blogs mx-auto py-12 max-w-6xl" id="blogs" aria-label="blogs">
          <div className="container">
            <p className="text-lg flex pt-12  justify-center items-center section-subtitle has-before ">
              <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Blog
              Post
            </p>

            <h2 className="h2 section-title text-center font-bold text-2xl py-2">
              Popular{" "}
              <span className="has-before  underline decoration-yellow-300 -outline-offset-2 ">
                Blog Posts
              </span>
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2">
              <li className="p-4 lg:border-r">
                <div className="blog-card group md:p-4">
                  <div className="mx-auto h-32 w-5/6 overflow-hidden mx-auto md:h-60 relative rounded-2xl group ">
                    <Image
                      src="/assets/images/blog-4.png"
                      fill
                      loading="lazy"
                      alt="How to gain pro experience ar figma update version"
                      className="object-cover group-hover:scale-110 rounded-2xl transition duration-200"
                    />
                  </div>
                  <div className="wrapper py-2 px-6 col-span-3 ">
                      <a
                        href="#"
                        className="px-2 text-xs flex justify-between publish-date"
                      >
                        <span className="flex">
                          {" "}
                          <Clock4 className="w-3 my-auto"></Clock4>
                          <p className="span my-auto pl-2">
                            {" "}
                            {blogs[0].creationTime}
                          </p>
                        </span>

                        <span className="span my-auto pl-2">
                          {" "}
                          {blogs[0].name}
                        </span>
                      </a>
                      <div className="flex">
                        <Link
                          href={`blogs/${blogs[0].title}`}
                          className=" group-hover:text-blue-600 font-semibold text-md md:text-2xl tag"
                        >{blogs[0].title}
                        </Link>
                      </div>
                      <div>
                        <div className="h3 md:py-4 overflow-hidden">
                          <p className="card-title text-sm line-clamp-2 overflow-hidden whitespace-pre-wrap">
                            {blogs[0].metaDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
              </li>
             <li className="px-4">
        {blogs.map((e, i) => {
          return (
            <li key={i} className="" >
            <div  className="md:p-4 border group grid grid-cols-1 md:grid-cols-3  max-w-6xl  m-auto justify-between">
              <div className="relative md:rounded-2xl overflow-hidden h-24 col-span-1">
                <Image
                        src="/assets/images/blog-4.png"
                        fill
                        loading="lazy"
                        alt="How to gain pro experience ar figma update version"
                        className="object-cover group-hover:scale-110 transition duration-200"
                      />
              </div>
              <div className="flex flex-col overflow-hidden md:col-span-2 p-4 justify-around ">
                 {/* <p className="text-xs">{new Date(e.createdOn).toDateString()} </p> */}
                 <h1 className=" text-lg p-2 group-hover:text-blue-500 font-semibold"> {e.title}</h1>
                <p className="text-sm line-clamp-2 overflow-hidden whitespace-pre-wrap ">{(e.metaDescription)}</p>
                
                <h1 className="pt-1 flex"><Clock4 className="px-1"/>{e.readingTime} mins</h1>
               
              </div>
            
            </div>
            </li>
          );
        })}
             </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;

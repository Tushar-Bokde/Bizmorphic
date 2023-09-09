"use client";
import {
  ArrowRight,
  Clock4,
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
import routes from "../utils/routes";

interface serviceCard {
  cardTitle: string;
  href: string;
  ImageHref: string;
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
    },
    {
      cardTitle: "Software as a Service",
      href: "#",
      ImageHref: "/assets/images/service-icon-2.png",
    },
    {
      cardTitle: "Software Development",
      href: "#",
      ImageHref: "/assets/images/service-icon-3.png",
    },
    {
      cardTitle: "Machine Learning",
      href: "#",
      ImageHref: "/assets/images/service-icon-4.png",
    },
    {
      cardTitle: "Cloud Services",
      href: "#",
      ImageHref: "/assets/images/service-icon-5.png",
    },
    {
      cardTitle: "Business Intelligence",
      href: "#",
      ImageHref: "/assets/images/service-icon-6.png",
    },
    {
      cardTitle: "Business ChatBots",
      href: "#",
      ImageHref: "/assets/images/service-icon-7.png",
    },
    {
      cardTitle: "04 More Services",
      href: "#",
      ImageHref: "/assets/images/service-icon-7.png",
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
  const blogs: Blog[] = [
    {
            creationTime : "5 hours ago",
            metaDescription : "Weollow",
            name: "Raj Ghodekar",
            readingTime: 1,
            title: "Hellow sure",
    },
  ];
  const [product, setProduct] = useState<WorkCard>({
    product: "DOCDEDO",
    description: "AI based legal draft generation and review",
    href: "https://docdedo.com",
    imageHref: "/assets/images/project-1.jpg",
  });
  // useEffect(()=>{
  //     getBlogs()
  // },[])
  // const [blogs, setBlogs] = useState([{

  //     creationTime : "5 hours ago",
  //     metaDescription : "Weollow",
  //     name: "Raj Ghodekar",
  //     readingTime: 1,
  //     title: "Hellow sure",
  //     updatedAt: "2023-09-09T06:32:57.647Z",
  // }])

  // async function getBlogs(){
  //     try {
  //     const allblogs =  await routes.BLOG_MS.APIS.GET_ALL_BLOGS()
  //     console.log(allblogs.blogs)
  //     setBlogs(allblogs.blogs)
  //     return
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  return (
    <>
      <article>
        <section className="section hero" id="home" aria-label="hero">
          <div className="container grid grid-cols-1 md:grid-cols-2 ">
            <div className="hero-content">
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
                <li className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg mr-2">
                  <a
                    href="https://www.facebook.com/home.php"
                    className="social-link "
                    style={{ color: "hsl(241, 77%, 63%)" }}
                  >
                    <Facebook />
                  </a>
                </li>
                <li className="p-2 bg-gray-100 dark:bg-gray-800  rounded-lg mx-2">
                  <a
                    href="#"
                    className="social-link"
                    style={{ color: " hsl(0, 100%, 50%)" }}
                  >
                    <Youtube />
                  </a>
                </li>
                <li className="p-2 bg-gray-100 dark:bg-gray-800  rounded-lg mx-2">
                  <a
                    href="https://www.instagram.com/bizmorphic/"
                    className="social-link"
                    style={{ color: "hsl(324, 88%, 52%)" }}
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hero-banner py-12">
              <Image
                src="/assets/images/hero-banner.png"
                width={500}
                height={300}
                alt="hero banner"
                className="w-100"
              />
            </div>
          </div>
        </section>

        <section
          className="section service py-14 "
          id="service"
          aria-label="service"
        >
          <div className="container">
          <p className="text-lg flex py-2 items-center justify-center section-subtitle has-before ">
                <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Why
                Our Services
              </p>
            <p className="section-subtitle has-before  font-semibold text-center">
             
            </p>

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
          className="section py-14 feature"
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
                  <div className="feature-card py-12">
                    <div
                      className="card-icon"
                      style={{ color: "174, 77%, 50%" }}
                    >
                      <span className="">
                        {" "}
                        <Rocket className=" rounded-full bg-green-300 " />
                      </span>
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
                  <div className="feature-card  py-12">
                    <div
                      className="card-icon"
                      style={{ color: "241, 77%, 63%" }}
                    >
                      <Users2 />
                    </div>

                    <div>
                      <h3 className="h3 card-title font-medium text-2xl">
                        Accelerate Innovation & Time-to-Market
                      </h3>

                      <p className="card-text">
                        Unlock rapid innovation with our AI expertise, swiftly
                        implementing groundbreaking solutions, and propelling
                        your business' growth.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="feature-card  py-12">
                    <div
                      className="card-icon"
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

        <section className="section project" id="project" aria-label="project">
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
                        onClick={() => {
                          // setProduct(e);
                        }}
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
          
                <li  className="py-6 object-contain sm: col-span-2 md:col-span-2 ">
                <div className="project-card ">
                  <div className="card-banner ">
                    <img   
                      src={projects[0].imageHref}
                      loading="lazy"
                      alt="Mobile App Design"
                      className="rounded-2xl"
                    />
                  </div>

                  <Button variant={"ghost"} className="card-content">
                    <h3 className="h3">
                      <a href={projects[0].href} className="card-title">
                        {projects[0].product}
                      </a>
                    </h3><br/>
                    <a href={projects[0].href} className="card-tag">
                      {projects[0].description}
                    </a>
                  </Button>
                </div>
              </li>
            
              <li  className="py-6 rounded-2xl">
                <div className="project-card">
                  <div className=" card-banner img-holder">
                    <img
                      src={projects[1].imageHref}

                      loading="lazy"
                      alt="Mobile App Design"
                      className=" object-cover rounded-2xl"
                    />
                  </div>

                  <Button variant={"ghost"} className="card-content">
                    <h3 className="h3">
                      <a href={projects[1].href} className="card-title">
                        {projects[1].product}
                      </a>
                    </h3>
                    <a href={projects[1].href} className="card-tag">
                      {projects[1].description}
                    </a>
                  </Button>
                </div>
              </li>
              <li  className="py-6 rounded-2xl">
                <div className="project-card">
                  <div className="card-banner img-holder">
                    <img
                      src={projects[2].imageHref}

                      loading="lazy"
                      alt="Mobile App Design"
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <Button variant={"ghost"} className="card-content">
                    <h3 className="h3">
                      <a href={projects[2].href} className="card-title">
                        {projects[2].product}
                      </a>
                    </h3>
                    <a href={projects[2].href} className="card-tag">
                      {projects[2].description}
                    </a>
                  </Button>
                </div>
              </li>
              <li  className="py-6 rounded-2xl">
                <div className="project-card">
                  <div className="card-banner img-holder">
                    <img
                      src={projects[3].imageHref}
                   
                      loading="lazy"
                      alt="Mobile App Design"
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <Button variant={"ghost"} className="card-content">
                    <h3 className="h3">
                      <a href={projects[3].href} className="card-title">
                        {projects[3].product}
                      </a><br/>
                    </h3>
                    <a href={projects[3].href} className="card-tag">
                      {projects[3].description}
                    </a>
                  </Button>
                </div>
              </li>
              <li  className="py-6 rounded-2xl">
                <div className="project-card">
                  <div className="card-banner img-holder">
                    <img
                      src={projects[4].imageHref}
                  
                      loading="lazy"
                      alt="Mobile App Design"
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <Button variant={"ghost"} className="card-content">
                    <h3 className="h3">
                      <a href={projects[4].href} className="card-title">
                        {projects[4].product}
                      </a>
                    </h3><br/>
                    <a href={projects[4].href} className="card-tag">
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
          <div className="container grid grid-cols-1 md:grid-cols-2 ">
            <div className="newsletter-banner ">
              <img
                src="/assets/images/newsletter-banner.png"
                loading="lazy"
                alt="newsletter banner"
                className="w-100"
              />
            </div>

            <div className="newsletter-content">
              <p className="text-lg flex items-center  dark:text-gray-100 text-gray-200 section-subtitle has-before ">
                <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Get
                every update
              </p>
              <h2 className="h2 section-title text-white font-bold text-xl py-4">
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
                  className=" bg-yellow-300 dark:bg-yellow-500 my-4 hover:bg-yellow-400"
                >
                  <span className="span">Subscribe</span>
                  <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="section blog" id="blog" aria-label="blog">
          <div className="container">
            <p className="text-lg flex pt-12  justify-center items-center section-subtitle has-before ">
              <li className="list-disc w-6 text-yellow-300 text-4xl "></li>Blog
              Post
            </p>

            <h2 className="h2 section-title text-center font-bold text-2xl py-2">
              Popular{" "}
              <span className="has-before  underline decoration-yellow-300 -outline-offset-2 ">
                Blog Post
              </span>
            </h2>

            <ul className="blog-list">

                                        <li>
                                            <div className="blog-card large">
                                                <div className="card-banner">
                                                    <img src="./assets/images/blog-1.jpg" width="644" height="363" loading="lazy"
                                                        alt="How to reduce AWS cost ..." className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <div className="wrapper">
                                                        <a href="#" className="tag">Machine Learning INFRA</a>

                                                        <a href="#" className="publish-date">
                                                        <Clock4 />
                                                            <span className="span">July 22, 2022</span>
                                                        </a>
                                                    </div>

                                                    <h3>
                                                        <a href="#" className="card-title">How to reduce AWS cost for Falcon-40B...</a>
                                                    </h3>

                                                    <p className="card-text">
                                                        Third party paid apis for LLMs such as OpenAI and
                                                        Claude costs a ton for any practical usage, we had similar
                                                        problems with the cost with just 1 month of usage where
                                                        cost started to soar with the usage
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="blog-card">
                                                <div className="card-banner">
                                                    <img src="./assets/images/blog-2.jpg" width="202" height="162" loading="lazy"
                                                        alt="Godaddy user flow solution for every individual" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <div className="wrapper">
                                                        <a href="#" className="tag">Machine Learning</a>

                                                        <a href="#" className="publish-date">
                                                        <Clock4 />
                                                            <span className="span">July 21, 2020</span>
                                                        </a>
                                                    </div>

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Top Research papers for context length
                                                            extrapolation</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="blog-card">
                                                <div className="card-banner">
                                                    <img src="./assets/images/blog-3.png" width="202" height="162" loading="lazy"
                                                        alt="Business solution for every individual" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <div className="wrapper">
                                                        <a href="#" className="tag">Development</a>

                                                        <a href="#" className="publish-date">
                                                        <Clock4 />

                                                            <span className="span">July 21, 2020</span>
                                                        </a>
                                                    </div>

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">How Sparse Attention can help reduce LLM size</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="blog-card">
                                                <div className="card-banner">
                                                    <img src="./assets/images/blog-4.png" width="202" height="162" loading="lazy"
                                                        alt="How to gain pro experience ar figma update version" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <div className="wrapper">
                                                        <a href="#" className="tag">Development</a>

                                                        <a href="#" className="publish-date">
                                                            <Clock4 />
                                                            <span className="span">July 21, 2020</span>
                                                        </a>
                                                    </div>

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Transformers for vision (Vision Transformers) a
                                                            deep dive.</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>

                             

            </ul>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;

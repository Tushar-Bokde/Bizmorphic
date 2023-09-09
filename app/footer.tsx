import { Grid } from "@radix-ui/themes";
import { Facebook, Instagram, Twitter, YoutubeIcon } from "lucide-react";
import React from "react";
import { Separator } from "../components/ui/separator"


const Footer = () => {
  return (
    <>
      <footer className="footer bg-gray-800 ">
        <div className="container pt-8">
          <div className="footer-top grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="footer-brand">
              <p className="footer-list-title py-4 text-lg text-white pb-4 ">
                About Bizmorphic
              </p>

              <p className="footer-text">
                At Bizmorphic, business meets intelligence. We stand at the
                horizon of bringing academic AI research to enterprises, keeping
                them at the forefront of the AI race.
              </p>

              <ul className="social-list flex py-6">
                <li className="p-2 bg-gray-400   rounded-full mx-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086557179558"
                    className="social-link "
                  >
                    <Facebook />
                  </a>
                </li>
                <li className="p-2 bg-gray-400  rounded-full mx-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086557179558"
                    className="social-link "
                  >
                    <Twitter />
                  </a>
                </li>
                <li className="p-2 bg-gray-400   rounded-full mx-2">
                  <a href="#" className="social-link">
                    <YoutubeIcon />
                  </a>
                </li>
                <li className="p-2 bg-gray-400  rounded-full mx-2">
                  <a
                    href="https://www.instagram.com/bizmorphic/"
                    className="social-link "
                >
                    <Instagram />
                  </a>
                </li>
              </ul> 
            </div>
         
            <ul className="footer-list">
              <li>
                <p className="footer-list-title text-lg py-4 text-white  ">Usefull Links</p>
              </li>

              <li>
                <a href="#" className="footer- text-gray-500 py-2 ">
                  Docdedo
                </a>
              </li>

              <li>
                <a href="#" className="footer- text-gray-500 ">
                  Bizbot
                </a>
              </li>

              <li>
                <a href="#" className="footer- text-gray-500 ">
                  Fabzen Technology
                </a>
              </li>

              <li>
                <a href="#" className="footer- text-gray-500 ">
                  Link Me
                </a>
              </li>

              <li>
                <a href="#" className="footer- text-gray-500 ">
                  Terms & Services
                </a>
              </li>
           </ul>
          
            <ul className="footer-list">
              <li>
                <p className="footer-list-title  text-lg text-white py-4 ">Community</p>
              </li>

              <li>
                <a href="#" className="footer-link text-gray-500 py-2">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="footer-link text-gray-500 py-2">
                  Partners
                </a>
              </li>

              <li>
                <a href="#" className="footer-link  text-gray-500 py-2">
                  Suggestions
                </a>
              </li>

              <li>
                <a href="#" className="footer-link text-gray-500 py-2">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="footer-link text-gray-500 py-2">
                  Newsletters
                </a>
              </li>
            </ul>
           
            <ul className=" footer-list ">
              <li>
                <p className="footer-list-title text-lg text-white py-4 ">Instagram post</p>
              </li>

              <li>
                <ul className="insta-post gap-4 grid grid-cols-3 ">
                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/01.jpg"
                     
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/Cc7-u9wMLb3/?img_index=1"
                        className="card-content absolute"
                      >
                        <Instagram />
                      </a> */}
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/02.jpg"
                       
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/CeglASvtVOT/"
                        className="card-content"
                      >
                        <Instagram /> */}
                      {/* </a> */}
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/03.jpg"
                        
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/CejLjQTNire/?img_index=1"
                        className="card-content"
                      >
                        <Instagram />
                      </a> */}
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/04.jpg"
                        
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/CgJWI6DAhrz/"
                        className="card-content"
                      >
                        <Instagram /> */}
                      {/* </a> */}
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/05.jpg"
                      
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/CjiEjyAIFXv/"
                        className="card-content"
                      >
                        <Instagram /> */}
                      {/* </a> */}
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src="./assets/images/06.jpg"
                       
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover rounded-lg"
                        />
                      </figure>

                      {/* <a
                        href="https://www.instagram.com/p/CeGzdneMuLi/?img_index=1"
                        className="card-content"
                      >
                        <Instagram />
                      </a> */}
                    </div>
                  </li>
                </ul>
              </li>
          </ul>
          </div>
          <br/>
          <Separator className="bg-gray-600"/>
          <div className="footer-bottom text-sm text-white">
            <p className="copyright text-white py-4">
              &copy; 2022 Bizmorphic. All Rights Reserved by Bizmorphic Research
              Private Limited
            </p>

            <ul className="footer-bottom-list">
              <li className="pb-12 ">
                <a href="#" className="footer-bottom-link ">
                  Privacy policy Terms and conditions 
                </a>
              </li>

             
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

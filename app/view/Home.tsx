import { ArrowRight, ArrowUpRight, Clock4, Facebook, Headphones, Instagram, Play, Rocket, Users2, Youtube } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (<>
                    <article>
                            <section className="section hero" id="home" aria-label="hero">
                                <div className="container">
                                    <div className="hero-content">
                                        <h1 className="h1 hero-title">
                                            Metamorphosing Your <span className="has-before">Business</span>, For
                                            The Digital Future
                                        </h1>

                                        <p className="hero-text">
                                            At Bizmorphic, business meets intelligence.
                                            We stand at the horizon of bringing academic AI research to enterprises,
                                            keeping them at the forefront of the AI race.
                                        </p>

                                        <div className="wrapper">
                                            <a href="https://calendly.com/mayur_tikundi/30min"
                                                className="btn btn-primary has-before has-after">Schedule a Demo</a>

                                            <button className="hero-btn" aria-label="pixology promo">
                                                <Play />
                                                <span className="span">Video</span>
                                            </button>
                                        </div>

                                        <ul className="social-list">
                                            <li>
                                                <a href="https://www.facebook.com/home.php" className="social-link"
                                                    style={{color: "hsl(241, 77%, 63%)"}}>
                                                        <Facebook />
                                                    <span className="span">Facebook</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="social-link" style={{color:' hsl(0, 100%, 50%)'}}>
                                                    <Youtube/>

                                                    <span className="span">Youtube</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.instagram.com/bizmorphic/" className="social-link"
                                                    style={{color: 'hsl(324, 88%, 52%)'}}>
                                                    <Instagram/>

                                                    <span className="span">Instagram</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="hero-banner">
                                        <img src="./assets/images/hero-banner.png" width="794" height="637" alt="hero banner"
                                            className="w-100" />
                                    </div>
                                </div>
                            </section>


                            <section className="section service" id="service" aria-label="service">
                                <div className="container">
                                    <p className="section-subtitle has-before text-center">Our Services</p>

                                    <h2 className="h2 section-title text-center">
                                        State of the Art AI
                                        Fuelling your <span className="has-before"> Business</span>
                                    </h2>

                                    <ul className="grid-list">
                                        <li>
                                            <div className="service-card" style={{color: '174, 77%, 50%'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-1.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Artificial Intelligence</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '267, 76%, 57%'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-2.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Software as a Service</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '17, 100%, 68%'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-3.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Software Development</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '343, 98%, 60%'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-4.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Machine Learning</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '210, 100%, 53'}} >
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-5.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Cloud Services</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '157, 89%, 44%'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-6.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Business Intelligence</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="service-card" style={{color: '52, 98%, 50%"'}}>
                                                <div className="card-icon">
                                                    <img src="./assets/images/service-icon-7.png" width="30" height="30" loading="lazy"
                                                        alt="service icon" />
                                                </div>

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Business ChatBots</a>
                                                </h3>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="#" className="link-card" style={{color: '203, 97%, 75%'}}>
                                                <span className="span">04 More Service</span>
                                                <ArrowUpRight />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            <section className="section feature" id="feature" aria-label="feature">
                                <div className="container">
                                    <div className="feature-banner">
                                        <img src="./assets/images/feature-banner.png" width="582" height="585" loading="lazy"
                                            alt="feature banner" className="w-100" />
                                    </div>

                                    <div className="feature-content">
                                        <p className="section-subtitle has-before">Why Choose us</p>

                                        <h2 className="h2 section-title">
                                            Innovate with Confidence Our AI Expertise,
                                            <span className="has-before">Your Success.</span>
                                        </h2>

                                        <ul className="feature-list">
                                            <li>
                                                <div className="feature-card">
                                                    <div className="card-icon" style={{color: '174, 77%, 50%'}}>
                                                    <Rocket />
                                                    </div>

                                                    <div>
                                                        <h3 className="h3 card-title">Focused Research & Development</h3>

                                                        <p className="card-text">
                                                            Unleashing continuous AI research, we pioneer groundbreaking innovations and
                                                            cutting-edge solutions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="feature-card">
                                                    <div className="card-icon" style={{color: '241, 77%, 63%'}}>
                                                    <Users2/>
                                                    </div>

                                                    <div>
                                                        <h3 className="h3 card-title">Accelerate Innovation & Time-to-Market</h3>

                                                        <p className="card-text">
                                                            Unlock rapid innovation with our AI expertise, swiftly implementing
                                                            groundbreaking solutions, and propelling your business`&apos;`s growth.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="feature-card">
                                                    <div className="card-icon" style={{color: '343, 98%, 60%'}}>
                                                        <Headphones />
                                                    </div>

                                                    <div>
                                                        <h3 className="h3 card-title">Cost-Effective AI Solutions</h3>

                                                        <p className="card-text">
                                                            Cost-effective AI research, expert solutions so you save on development
                                                            expenses
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="section project" id="project" aria-label="project">
                                <div className="container">
                                    <p className="section-subtitle has-before text-center">Projects</p>

                                    <h2 className="h2 section-title text-center">
                                        Trust Our <span className="has-before">Experience</span>
                                    </h2>

                                    <ul className="filter-list">
                                        <li>
                                            <button className="filter-btn active" data-filter-btn>
                                                Docdedo
                                            </button>
                                        </li>

                                        <li>
                                            <button className="filter-btn" data-filter-btn>V500.com</button>
                                        </li>

                                        <li>
                                            <button className="filter-btn" data-filter-btn>Bizbot</button>
                                        </li>

                                        <li>
                                            <button className="filter-btn" data-filter-btn>Business</button>
                                        </li>

                                        <li>
                                            <button className="filter-btn" data-filter-btn>
                                                Branding Design
                                            </button>
                                        </li>
                                    </ul>



                                    <ul className="grid-list">

                                        <li>
                                            <div className="project-card">

                                                <div className="card-banner img-holder" style={{width: 835, height: 429}}>
                                                    <img src="./assets/images/project-1.jpg" width="835" height="429" loading="lazy"
                                                        alt="Book art design" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <h3 className="h3">
                                                        <a href="https://docdedo.com" className="card-title">DOCDEDO</a>
                                                    </h3>

                                                    <a href="https://docdedo.com" className="card-tag">AI based legal draft generation and
                                                        review</a>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="project-card">

                                                <div className="card-banner img-holder" style={{width: 416 ,height: 429}}>
                                                    <img src="./assets/images/project-2.jpg" width="416" height="429" loading="lazy"
                                                        alt="Graphic Design" className="img-cover"/>
                                                </div>

                                                <div className="card-content">
                                                    <h3 className="h3">
                                                        <a href="https://v500.com" className="card-title">V500 SYSTEMS</a>
                                                    </h3>

                                                    <a href="https://v500.com" className="card-tag">Large Scale Document insights and
                                                        comparison tool</a>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="project-card">

                                                <div className="card-banner img-holder" style={{width: 416, height: 429}}>
                                                    <img src="./assets/images/project-3.jpg" width="416" height="429" loading="lazy"
                                                        alt="3d Digital Art" className="img-cover"/>
                                                </div>

                                                <div className="card-content">
                                                    <h3 className="h3">
                                                        <a href="https://bizbot.bizmorphic.com/" className="card-title">BIZBOT</a>
                                                    </h3>

                                                    <a href="https://bizbot.bizmorphic.com/"
                                                        className="card-tag">www.bizbot.bizmorphic.com</a>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="project-card">

                                                <div className="card-banner img-holder" style={{width: 416, height: 429}}>
                                                    <img src="./assets/images/project-4.jpg" width="416" height="429" loading="lazy"
                                                        alt="Web Design" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <h3 className="h3">
                                                        <a href="https://fabzentech.com/" className="card-title">FABZEN Technology</a>
                                                    </h3>

                                                    <a href="https://fabzentech.com/" className="card-tag">www.fabzentech.com</a>
                                                </div>

                                            </div>
                                        </li>

                                        <li>
                                            <div className="project-card">

                                                <div className="card-banner img-holder" style={{width: 416, height: 429}}>
                                                    <img src="./assets/images/project-5.jpg" width="416" height="429" loading="lazy"
                                                        alt="Mobile App Design" className="img-cover" />
                                                </div>

                                                <div className="card-content">
                                                    <h3 className="h3">
                                                        <a href="https://link.me/" className="card-title">Link Me</a>
                                                    </h3>

                                                    <a href="https://link.me/" className="card-tag">www.link.me</a>
                                                </div>

                                            </div>
                                        </li>

                                    </ul>

                                    <a href="#" className="card-tag">Branding</a>
                                </div>

                            </section>

                            <section className="section newsletter has-bg-image" aria-label="newsletter">
                                <div className="container">
                                    <div className="newsletter-banner">
                                        <img src="./assets/images/newsletter-banner.png" width="355" height="356" loading="lazy"
                                            alt="newsletter banner" className="w-100" />
                                    </div>

                                    <div className="newsletter-content">
                                        <p className="section-subtitle has-before">Get every update</p>

                                        <h2 className="h2 section-title">
                                            Subscribe newslater get latest updates and deals
                                        </h2>

                                        <form action="" className="newsletter-form">
                                            <input type="email" name="email_address" placeholder="Enter your mail" required
                                                className="email-field" />

                                            <button type="submit" className="btn btn-secondary has-before has-after">
                                                <span className="span">Subscribe</span>
                                                <ArrowRight />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>

                            <section className="section blog" id="blog" aria-label="blog">
                                <div className="container">
                                    <p className="section-subtitle text-center has-before">Blog Post</p>

                                    <h2 className="h2 section-title text-center">
                                        Popular <span className="has-before">Blog Post</span>
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
                    </>)
};

export default Home
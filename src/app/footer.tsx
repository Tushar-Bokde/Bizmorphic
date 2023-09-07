import React from 'react'
import Image from 'next/image'
function footer() {
  return (
    <>
     <footer className="footer">
        <div className="container">
            <div className="footer-top section">
                <div className="footer-brand">
                    <p className="footer-list-title">About Bizmorphic</p>

                    <p className="footer-text">
                        At Bizmorphic, business meets intelligence. We stand at the horizon of bringing academic AI
                        research to enterprises, keeping them at the forefront of the AI race.
                    </p>

                    <ul className="social-list">
                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100086557179558" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/bizmorphic/" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Usefull Links</p>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Docdedo</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Bizbot</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Fabzen Technology</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Link Me</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Terms & Services</a>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Community</p>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Help Center</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Partners</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Suggestions</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Blog</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Newsletters</a>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Instagram post</p>
                    </li>

                    <li>
                        <ul className="insta-post">
                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/01.jpg" width="77" height="63" loading="lazy"
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/Cc7-u9wMLb3/?img_index=1" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/02.jpg" width="77" height="63" loading="lazy"
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/CeglASvtVOT/" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/03.jpg" width="77" height="63" loading="lazy"
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/CejLjQTNire/?img_index=1" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/04.jpg" width="77" height="63" loading="lazy"
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/CgJWI6DAhrz/" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/05.jpg" width="77" height="63" 
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/CjiEjyAIFXv/" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div className="insta-card">
                                    <figure className="post-banner">
                                        <Image  src="/assets/images/06.jpg" width="77" height="63" loading="lazy"
                                            alt="instagram post" className="img-cover" />
                                    </figure>

                                    <a href="https://www.instagram.com/p/CeGzdneMuLi/?img_index=1" className="card-content">
                                        <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p className="copyright">
                    &copy; 2022 Bizmorphic. All Rights Reserved by Bizmorphic Research
                    Private Limited
                </p>

                <ul className="footer-bottom-list">
                    <li>
                        <a href="#" className="footer-bottom-link">Terms and conditions</a>
                    </li>

                    <li>
                        <a href="#" className="footer-bottom-link">Privacy policy</a>
                    </li>

                    <li>
                        <a href="#" className="footer-bottom-link">Login / Signup</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer
import React from 'react'

function Header() {
  return (
    <>
     <header className="header" data-header>
     <script async src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <title>Bizmorphic</title>
        <link rel="shortcut icon" href="./favicon-16x16.png" type="image/x-icon" />
        <script src="./assets/js/script.js" defer></script>

        <script async  type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script async  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        <div className="container">
            <a href="#" className="logo">Bizmorphic</a>

            <nav className="navbar" data-navbar>
                <div className="wrapper">
                    <a href="#" className="logo">Bizmorphic</a>

                    <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                        {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
                    </button>
                </div>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#home" className="navbar-link" data-nav-link>Home</a>
                    </li>

                    <li className="navbar-item">
                        <a href="#service" className="navbar-link" data-nav-link>Services</a>
                    </li>

                    <li className="navbar-item">
                        <a href="#feature" className="navbar-link" data-nav-link>Features</a>
                    </li>

                    <li className="navbar-item">
                        <a href="#project" className="navbar-link" data-nav-link>Portfolio</a>
                    </li>

                    <li className="navbar-item">
                        <a href="/blogs" className="navbar-link" data-nav-link>Blog</a>
                    </li>
                </ul>
            </nav>

            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                {/* <ion-icon name="menu-outline" aria-hidden="true"></ion-icon> */}
            </button>

            <a href="https://calendly.com/mayur_tikundi/30min" className="btn btn-primary has-before has-after">Contact
                🤙</a>

            <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
    </header></>
  )
}

export default Header
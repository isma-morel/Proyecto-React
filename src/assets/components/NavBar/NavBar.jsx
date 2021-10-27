import { CartWidget } from "./cartwidget/CartWidget"
import { LoginWidget } from "./loginwidget/LoginWidget"


export const NavBar = () => {
    return (
        <>
            <header className="d-block header-custom">
                <div className="container-fluid px-4">
                    <nav className="navbar navbar-expand-lg pt-3">
                        <a className="logo-custom" href="index.html">
                            <span className="icon-watch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-watch" viewBox="0 0 16 16">
                                    <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"/>
                                    <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
                                </svg>
                            </span> 
                            <span className="watcher-custom">WATCHER</span>
                        </a>
                        <div className="collapse navbar-collapse">
                            <div className="d-flex ms-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item item-custom active">
                                        <a href="index.html"className="nav-link"><span>HOME</span></a>
                                    </li>
                                    <li className="nav-item item-custom">
                                        <a href="index.html"className="nav-link"><span>ABOUT</span></a>
                                    </li>
                                    <li className="nav-item item-custom">
                                        <a href="index.html"className="nav-link"><span>OUR WATCHES</span></a>
                                    </li>
                                    <li className="nav-item item-custom">
                                        <a href="index.html"className="nav-link"><span>CONTACT US</span></a>
                                    </li>
                                </ul>
                                <div className="widgets d-flex align-items-center">
                                    <CartWidget/>
                                    <LoginWidget/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
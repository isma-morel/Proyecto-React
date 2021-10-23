import { CartWidget } from "./cartwidget/CartWidget"
import { LoginWidget } from "./loginwidget/LoginWidget"


export const NavBar = () => {
    return (
        <>
            <header className="d-block header-custom">
                <div className="container-fluid px-4">
                    <nav className="navbar navbar-expand-lg pt-3">
                        <a className="logo-custom" href="index.html"><span>WATCHER</span></a>
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
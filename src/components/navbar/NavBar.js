import logo from './asset/log.jpg';
import '../scss/components/NavBar.scss';

export const NavBar = () => {
    return (
        <header className="position-sticky hdrContainer">
            <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <div>
                    <img src={logo} alt="Logo"></img>
                </div>
                <div>
                    <div className="px-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <div className="px-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                    </div>
                    <div className="px-2 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <nav>
                <ul className="nav navbar justify-content-center">
                    <li className="px-2"><a href="#" className="item">Inicio</a></li>
                    <li className="px-2"><a href="#" className="item">Pantalones</a></li>
                    <li className="px-2"><a href="#" className="item">Buzos</a></li>
                    <li className="px-2"><a href="#" className="item">Remeras</a></li>
                    <li className="px-2"><a href="#" className="item">Camisas</a></li>
                    <li className="px-2"><a href="#" className="item">Shorts</a></li>
                </ul>
            </nav>
        </header>
    )
}
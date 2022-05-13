import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from '../../assets/img/github-icon.svg';
import './styles.css';

function Navbar() {
    return (
        /*Menu de navegação*/
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <Link to="/">
                        <h1 className="dsmovie-titulo-logo">DSMovie</h1>
                    </Link>
                    <a href="https://github.com/natasha9999/dsmovie2" target="_blank">
                        <div className="dsmovie-contato-github-content">
                            <GithubIcon />
                            <p className="dsmovie-text-github">/natasha9999</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
        /*Menu de navegação*/
    );
}

export default Navbar;
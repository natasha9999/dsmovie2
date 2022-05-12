import { ReactComponent as GithubIcon } from '../../assets/img/github-icon.svg';

function Navbar() {
    return (
        /*Menu de navegação*/
        <header>
            <nav>
                <div>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/natasha9999/dsmovie2" target="_blank">
                        <div>
                            <GithubIcon />
                            <p>/natasha9999</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
        /*Menu de navegação*/
    );
}

export default Navbar;
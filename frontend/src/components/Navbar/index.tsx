import { ReactComponent as GithubIcon } from 'assets/img/githubsvg.svg';
import './styles.css'


function Navbar(){
    return(
        <nav className="container">
        <div className="initial-nav-content">
          <h1>Curriculo</h1>
          <span>Axel Felipe Oliveira Novais</span>
          <a href="sobremim.html" target="_blank" rel="noreferrer">
            <div className="sobre-mim">
              <p className="sobre-mim-link-contact-link">Sobre Mim</p>
            </div>
          </a>
          <a href="contato.html" target="_blank" rel="noreferrer">
            <div className="contact-container">
              <p className="contact-link">Contato</p>
            </div>
          </a>
          <a href="https://github.com/FelipeAxel" target="_blank" rel="noreferrer">
            <div className="axel-contact-container">
              <GithubIcon />
              <p className="axel-contact-link">Axel Felipe</p>
            </div>
          </a>
        </div>
      </nav>
    );
}
export default Navbar;

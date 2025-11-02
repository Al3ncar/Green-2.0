import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__logo">
            <h2>VERDE AÇÃO</h2>
            <p>Plantando o futuro, hoje.</p>
          </div>

          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer__section">
          <h3>Navegue</h3>
          <ul className="footer__links">
            <li>
              <Link to="SOBRE" smooth={true} duration={2000}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="ATIVIDADES" smooth={true} duration={2000}>
                Nossas ações
              </Link>
            </li>
            <li>
              <Link to="AÇÕES" smooth={true} duration={2000}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to="VOLUNTÁRIOS" smooth={true} duration={2000}>
                Depoimentos
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Contato</h3>
          <div className="footer__contact">
            <div className="contact__item">
              <FaEnvelope />
              <a href="#">junte-se@verdeacao.com</a>
            </div>
            <div className="contact__item">
              <FaPhone />
              <span>+55 (11) 98765-4321</span>
            </div>
          </div>
          <button className="footer__volunteer-btn">Seja Voluntário</button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2025 Verde ação. Todos os direitos reservados</p>

        <ul className="footer__links">
          <li>Política de Privacidade</li>
          <li>Termos de uso</li>
        </ul>
      </div>
    </footer>
  );
}

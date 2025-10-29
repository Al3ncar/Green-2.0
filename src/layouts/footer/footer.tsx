import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

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
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Nossas ações</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
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
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

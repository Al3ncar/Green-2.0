import { Link } from "react-scroll";
export default function Header() {
  return (
    <header>
      <section className="header__content">
        <p className="header__content--parg">JUNTOS PELO FUTURO</p>
        <h1>Verde Ação</h1>
        <div className="header__content--description">
          <p>
            Ser voluntário na Verde Ação é plantar esperança e colher
            transformação. Juntos, cuidamos do planeta e inspiramos mudanças
            reais!
          </p>
        </div>
        <Link
          className="header__content--btn"
          to="VOLUNTÁRIOS"
          smooth={true}
          duration={6000}
        >
          Quero ser voluntário
        </Link>
      </section>
    </header>
  );
}

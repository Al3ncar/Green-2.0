import { IoSunny } from "react-icons/io5";
import Tooltip from "../../components/tooltip/tooltip";

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
        <button className="header__content--btn">Quero ser voluntário</button>
        <div className="header__content--theme">
          <Tooltip description="Mudança de Tema">
            <button className="header__content--theme--btn">
              <IoSunny />
            </button>
          </Tooltip>
        </div>
      </section>
    </header>
  );
}

import React from "react";
import Title from "../../../components/title/title";

export default function Signin() {
  return (
    <section className="signin">
      <Title
        title="VOLUNTÁRIOS"
        subtitle="CADASTRE-SE COMO"
        align="center"
        orientation="bottom"
      />
      <p className="signin__parg" >
        Faça parte de ações que transformam o mundo. Com pequenas atitudes, você
        pode gerar grandes impactos na natureza e na comunidade
      </p>

      <div>
        <form action="/" method="post">
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            title="Por favor, insira o nome completo válido"
            pattern="^[A-Za-zÀ-ÿ\s]{2,}(?:\s+[A-Za-zÀ-ÿ\s]{2,})+$"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Por favor, insira um email válido"
            required
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            title="Por favor, insira sua cidade"
            required
          />

          <select name="" id="">
            <option value="">Selecionar atividade</option>
            <option value="a">Atividade A</option>
            <option value="b">Atividade B</option>
          </select>
          <button>Cadastrar</button>
        </form>
      </div>
    </section>
  );
}

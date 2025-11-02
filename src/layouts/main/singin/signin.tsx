import React, { useState } from "react";
import Title from "../../../components/title/title";
import CustomSelect from "../../../components/custom-select/customSelect";

const atividades = [
  { label: "Plantio de Mudas", value: "plantio" },
  { label: "Limpeza de Praia e Parques", value: "limpeza" },
  { label: "Educação e Oficinas de Reciclagem", value: "educacao" },
  { label: "Mapeamento de Áreas de Risco", value: "mapeamento" },
  { label: "Ajuda Administrativa / Redes Sociais", value: "administrativo" },
  { label: "Quero ajudar onde for mais necessário", value: "geral" },
];

export default function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cidade: "",
    atividade: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  return (
    <section className="signin" id="VOLUNTÁRIOS">
      <Title
        title="VOLUNTÁRIOS"
        subtitle="CADASTRE-SE COMO"
        align="center"
        orientation="bottom"
      />
      <p className="signin__parg">
        Faça parte de ações que transformam o mundo. Com pequenas atitudes, você
        pode gerar grandes impactos na natureza e na comunidade
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          title="Por favor, insira o nome completo válido"
          pattern="^[A-Za-zÀ-ÿ\s]{2,}(?:\s+[A-Za-zÀ-ÿ\s]{2,})+$"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Por favor, insira um email válido"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          title="Por favor, insira sua cidade"
          required
          value={formData.cidade}
          onChange={handleInputChange}
        />

        <CustomSelect options={atividades} />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}

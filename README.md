# Verde Ação — Frontend (React + TypeScript)

## 🌱 Sobre o Projeto

Site institucional responsivo para a organização "Verde Ação", desenvolvido com React + TypeScript e Vite. A plataforma divulga ações de voluntariado ambiental, galerias de atividades, depoimentos e inclui formulário de cadastro para novos voluntários.

### ⭐ Design Projeto

- FIGMA: <a href="https://www.figma.com/design/WUJSjO9ipnuK9UfEG7Ow9l/Green-Action-2.0?node-id=0-1&t=kx2GtWWzPl7OqwRp-1" targert="_blank"> FIGMA DO PROJETO GREEN </a>

| 💻 Desktop 💻                                                                                | 📔 Tablet 📔                                                                                | 📱 Mobile 📱                                                                                |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| <img src="./src/assets/pictures/readme/dasktop.png" alt="Imagem no modelo Desktop Inicial"/> | <img src="./src/assets/pictures/readme/tablet.png" alt="Imagem no modelo Desktop Inicial"/> | <img src="./src/assets/pictures/readme/mobile.png" alt="Imagem no modelo Desktop Inicial"/> |

## 🚀 Tecnologias e Bibliotecas

- React 18 + TypeScript - Interface e tipagem
- Vite - Build tool e dev server
- Sass/SCSS - Estilização avançada
- react-slick + slick-carousel - Carrosséis responsivos
- react-icons - Ícones SVG
- react-scroll - Navegação suave entre seções

## 📁 Estrutura do Projeto Files

```files
verde-acao-react/
├── public/
├── src/
│   ├── assets/
│   │   └── pictures/ # 🖼️ Imagens de todo o projeto
│   │       ├── about/
│   │       ├── cards/
│   │       ├── favicon/
│   │       ├── galery/
│   │       ├── people/
│   │       └── readme/
│   ├── components/   # 🧩 componentes reutilizaveis
│   │   ├── title
│   │   ├── customSelect
│   │   └── tooltip
│   ├── Layout/    # 🏙️ Estruturas iniciais
│   │   ├── header
│   │   ├── footer
│   │   └── main
│   ├── scss/      # 🖌️ Estilizações
│   │   ├── base/
│   │   ├── components/
│   │   └── layout/
│   ├── utils/
│   │   └── data/  # 📊 Dados mockados
│   ├── type/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md

```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js versão 18 ou superior
- npm ou yarn

### Passo a Passo Clone e acesse o projeto

```bash
git clone [url-do-repositorio]
cd verde-acao-react
```

### Instale as dependências

```bash
npm install
# ou
yarn install
```

### Execute em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev

```

| → O projeto estará disponível em: http://localhost:5173

### Build para produção

```bash
npm run build
# ou
yarn build

```

### Preview do build

```bash
npm run preview
# ou
yarn preview
```

### Linting (análise de código)

```bash
npm run lint
# ou
yarn lint
```

## 🎯 Componentes Principais

### 🏗️ Estruturais

- App.tsx - Composição principal das seções
- Header.tsx - Navegação com scroll suave
- Footer.tsx - Rodapé com informações de contato

### 🎨 Seções de Conteúdo

- About.tsx - Apresentação da organização
- Statistics.tsx - Métricas e impactos (com carrossel)
- Category.tsx - Categorias de voluntariado
- Comments.tsx - Depoimentos de voluntários
- Gallery.tsx - Galeria de imagens das ações
- Signin.tsx - Formulário de cadastro

### 🔧 Componentes UI

- Title.tsx - Títulos padronizados
- CustomSelect.tsx - Select personalizado
- Tooltip.tsx - Tooltips informativos

## ⚡ Funcionalidades e Validações

#### 📝 Formulário de Cadastro

- Validações nativas HTML5:
- Nome: pattern para aceitar acentos e espaços
- Email: type="email" + validação customizada
- Campos obrigatórios marcados com required

## 🖼️ Galeria de Imagens

- Alternância entre conjuntos de imagens
- Animações de slide CSS
- Layout responsivo (grid/flexbox)

## 💬 Sistema de Comentários

- Limitação dinâmica de cards baseada na largura da tela
- Botão "Mostrar Mais" com toggle
- Animações de expansão

## 🎨 Estilização e Design System

### SCSS Architecture

```scss
// Variáveis globais
$color-title: #fff;
$color-descript-form: #767676;

$bg-primary: #66bb6a;
$bg-signin: #e8f5e9;
$bg-secondary: #fff;

$bg-card-1: #a0800d67;
$bg-card-2: #50592467;
$bg-card-3: #09356367;
$bg-card-4: #45352a67;
$bg-card-5: #ffffff67;

$font-primary: "Reddit Sans", sans-serif;
$font-secondary: "Roboto Serif", serif;

$font-size-btn: clamp(1rem, 1vw, 3rem) !default;
$font-size-title: clamp(7.5rem, 3vw, 3rem) !default;
$font-size-default: clamp(1.4rem, 1vw, 3rem) !default;
$font-size-subtitle: clamp(1.6rem, 1.5vw, 3rem) !default;
$font-size-card-title: clamp(1.4rem, 1.5vw, 3rem) !default;
$font-size-statistics: clamp(3rem, 1.5vw, 3rem) !default;
$font-size-component-subtitle: clamp(2rem, 1.5vw, 3rem) !default;

$animation-tooltip: tooltip 2s ease-in-out forwards;
```

### Responsividade

```scss
// Medidas responsivas
breakpoints: 1330px (desktop), 1124px (desktop), 1030px (desktop), 800px
    (tablet), 700px (tablet), 550px (mobile), 350px (mobile);
```

- Imagens otimizadas para diferentes viewports

## 🔄 Scripts Disponíveis

```code
npm run dev	         // Servidor de desenvolvimento
npm run build        // Build de produção
npm run preview  	 // Preview do build
npm run lint	     // Análise de código ESLint
npm run type-check	 // Verificação de tipos TypeScript
```

## 📋 Checklist para Contribuições

| ❗Antes de Abrir PR:

- Executar npm run lint e corrigir erros
- Testar responsividade (desktop, tablet, mobile)
- Verificar performance das imagens
- Testar formulários e validações
- Atualizar documentação se necessário

## Padrões de Commit

```code
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação/estilo
refactor: refatoração
test: testes
```

## 🚧 Melhorias Futuras (Caso necessario)

- Integração com backend para salvar inscrições
- Melhorar acessibilidade (ARIA labels, focus management)
- Otimização de performance (lazy loading)
- Internacionalização (i18n)
- Modo escuro/claro
- Testes unitários com Jest + Testing Library
- PWA (Service Worker, offline functionality)
- Analytics integration
- Blog integrado

## 🤝 Como Contribuir

- Fork o projeto
- Crie uma branch: git checkout -b feature/nova-funcionalidade
- Commit suas mudanças: git commit -m 'feat: adiciona nova funcionalidade'
- Push para a branch: git push origin feature/nova-funcionalidade
- Abra um Pull Request

## 📞 Suporte

- Encontrou algum problema? Abra uma issue no repositório.

## 🧑‍💻 Autor

Projeto desenvolvido por <a href="https://www.linkedin.com/in/igoralencar/" target="_blank">Igor Alencar</a>.

- LinkedIn: https://www.linkedin.com/in/igoralencar/
- GitHub: https://github.com/Al3ncar

- ❗Nota sobre este projeto: "O site "Verde Ação" é um projeto fictício, desenvolvido exclusivamente para fins educacionais e de exibição de portfólio. Nenhuma organização real é representada e o projeto não possui quaisquer fins lucrativos."

| Verde Ação - Plantando esperança, colhendo transformação. 🌱

interface project {
  id: number;
  name: string;
  imgName: string;
  description: string;
  githubLink: string;
  liveLink?: string;
}

export const projects: project[] = [
  {
    id: 1,
    name: "Mavisgate",
    description:
      "Jogo RPG de navegador. Desenvolvido utilizando ReactJS - Redux - Node.js - MongoDB",
    imgName: "mavisgate",
    githubLink: "https://github.com/danielferreiradf/mavisgate",
    liveLink: "https://mavisgate.herokuapp.com",
  },
  {
    id: 2,
    name: "Monster Movies",
    imgName: "monstermovies",
    description:
      "Aplicação que lista filmes e séries de TV em destaque. Desenvolvido utilizando ReactJS - Redux e Movies database public API",
    githubLink: "https://github.com/danielferreiradf/monstermovies",
    liveLink: "https://monstermovies.herokuapp.com/",
  },
  {
    id: 3,
    name: "Barber App",
    imgName: "barberapp",
    description:
      "Aplicação de serviço para uma barbearia. Desenvolvido utilizando ReactJS - Redux - Node.js - PostgreSQL",
    githubLink: "https://github.com/danielferreiradf/baber_app_web",
  },
  {
    id: 4,
    name: "Marvel Search Heroes",
    imgName: "mavisgate",
    description:
      "Aplicação que lista personagens de quadrinhos Marvel. Desenvolvido utilizando React e Marvel Comics public API",
    githubLink: "https://github.com/danielferreiradf/marvelsearchheroes",
    liveLink: "https://marvelsearchheroes.netlify.com",
  },
  {
    id: 5,
    name: "Fox Shoes",
    imgName: "foxshoes",
    description:
      "Loja de tênis, que simula um E-commerce. Desenvolvido utilizando React - Redux",
    githubLink: "https://github.com/danielferreiradf/fox-shoes",
  },
  {
    id: 6,
    name: "Money Converter",
    imgName: "moneyconverter",
    description:
      "Conversor de moedas mundiais. Desenvolvido utilizando ReactJS e oreign exchange rates API",
    githubLink: "https://github.com/danielferreiradf/moneyconverter",
    liveLink: "https://danielferreiradf.github.io/moneyconverter",
  },
];

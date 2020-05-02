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
    githubLink: "//github.com/danielferreiradf/mavisgate",
    liveLink: "//mavisgate.herokuapp.com",
  },
  {
    id: 2,
    name: "Monster Movies",
    imgName: "monstermovies",
    description:
      "Aplicação que lista filmes e séries de TV em destaque. Desenvolvido utilizando ReactJS - Redux e Movies database public API",
    githubLink: "//github.com/danielferreiradf/monstermovies",
    liveLink: "//monstermovies.herokuapp.com/",
  },
  {
    id: 3,
    name: "Barber App",
    imgName: "barberapp",
    description:
      "Aplicação de serviço para uma barbearia. Desenvolvido utilizando ReactJS - Redux - Node.js - PostgreSQL",
    githubLink: "//github.com/danielferreiradf/baber_app_web",
  },
  {
    id: 4,
    name: "Marvel Search Heroes",
    imgName: "marvelsearchheroes",
    description:
      "Aplicação que lista personagens de quadrinhos Marvel. Desenvolvido utilizando React e Marvel Comics public API",
    githubLink: "//github.com/danielferreiradf/marvelsearchheroes",
    liveLink: "//marvelsearchheroes.netlify.com",
  },
  {
    id: 5,
    name: "Fox Shoes",
    imgName: "foxshoes",
    description:
      "Loja virtual de tênis, aplicação de um E-commerce. Desenvolvido utilizando React - Redux",
    githubLink: "//github.com/danielferreiradf/fox-shoes",
  },
  {
    id: 6,
    name: "Money Converter",
    imgName: "moneyconverter",
    description:
      "Conversor de moedas mundiais. Desenvolvido utilizando ReactJS e oreign exchange rates API",
    githubLink: "//github.com/danielferreiradf/moneyconverter",
    liveLink: "//danielferreiradf.github.io/moneyconverter",
  },
];

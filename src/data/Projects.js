import Pokedex from "../assets/img/projects/Pokedex.png";
import Pokedex1 from "../assets/img/projects/Pokedex1.png";
import Pokedex2 from "../assets/img/projects/Pokedex2.png";
import Pokedex3 from "../assets/img/projects/Pokedex3.png";
import Pokedex4 from "../assets/img/projects/Pokedex4.png";
import Pokedex5 from "../assets/img/projects/Pokedex5.png";
import Pokedex6 from "../assets/img/projects/Pokedex6.png";
import Pokedex7 from "../assets/img/projects/Pokedex7.png";
import PPTLS from "../assets/img/projects/PPTLS.png";
import PPTLS1 from "../assets/img/projects/PPTLS1.png";
import PPTLS2 from "../assets/img/projects/PPTLS2.png";
import PPTLS3 from "../assets/img/projects/PPTLS3.png";
import PPTLS4 from "../assets/img/projects/PPTLS4.png";
import PPTLS5 from "../assets/img/projects/PPTLS5.png";
import PPTLS6 from "../assets/img/projects/PPTLS6.png";
import PPTLS7 from "../assets/img/projects/PPTLS7.png";
import Rotten from "../assets/img/projects/Rotten.png";
import Rotten1 from "../assets/img/projects/rotten1.png";
import Rotten2 from "../assets/img/projects/rotten2.png";
import Rotten3 from "../assets/img/projects/rotten3.png";
import Rotten4 from "../assets/img/projects/rotten4.png";
import Rotten5 from "../assets/img/projects/rotten5.png";
import Rotten6 from "../assets/img/projects/rotten6.png";
import Rotten7 from "../assets/img/projects/rotten7.png";
import Rotten8 from "../assets/img/projects/rotten8.png";
import Rotten9 from "../assets/img/projects/rotten9.png";
import Rotten10 from "../assets/img/projects/rotten10.png";
import Calculadora from "../assets/img/projects/Calculadora.png";
import Calculadora1 from "../assets/img/projects/calculadora1.png";
import Turnero from "../assets/img/projects/Turnero.png";
import Turnero1 from "../assets/img/projects/turnero1.png";
import Turnero2 from "../assets/img/projects/turnero2.png";
import Turnero3 from "../assets/img/projects/turnero3.png";
import Turnero4 from "../assets/img/projects/turnero4.png";
import Turnero5 from "../assets/img/projects/turnero5.png";
import Turnero6 from "../assets/img/projects/turnero6.png";
import Turnero7 from "../assets/img/projects/turnero7.png";
import Turnero8 from "../assets/img/projects/turnero8.png";
import Turnero9 from "../assets/img/projects/turnero9.png";
import Turnero10 from "../assets/img/projects/turnero10.png";
import Turnero11 from "../assets/img/projects/turnero11.png";
import Turnero12 from "../assets/img/projects/turnero12.png";
import Turnero13 from "../assets/img/projects/turnero13.png";
import Turnero14 from "../assets/img/projects/turnero14.png";
import Turnero15 from "../assets/img/projects/turnero15.png";
import Turnero16 from "../assets/img/projects/turnero16.png";
import Unqfy from "../assets/img/projects/Unqfy.png"
import Unqfy1 from "../assets/img/projects/Unqfy1.png"
import Ubermen from "../assets/img/projects/Ubermen.png"
import Ubermen1 from "../assets/img/projects/ubermen1.png"

const projects = [
    {
      id: 1,
      image: Pokedex,
      images: [Pokedex1, Pokedex2, Pokedex3, Pokedex4, Pokedex5, Pokedex6, Pokedex7], 
      link1: "https://pokedex-app-web.vercel.app",
      link2: "https://github.com/fabriciomarote/Pokedex",
      title: "Pokedex",
      techs: ["Javascript","HTML", "CSS", "React", "Bootstrap"],
      text: "Fue realizado como proyecto de la página codealo.dev, luego le agregue la posibilidad de cambiar de tema y es un proyecto Responsive. Se consumen datos de una API externa para realizarlo.",
      type: "Frontend",
    },
    {
      id: 2,
      image: Calculadora,
      images: [Calculadora1], 
      link1: "https://calculadora-eight-beta.vercel.app",
      link2: "https://github.com/fabriciomarote/calculadora",
      title: "Calculadora",
      techs: ["Javascript", "HTML", "CSS"],
      text: "Calculadora basica.",
      type: "Frontend",
    },
    {
      id: 3,
      image: PPTLS,
      images: [PPTLS1, PPTLS2, PPTLS3, PPTLS4, PPTLS5, PPTLS6, PPTLS7], 
      link1: "https://piedra-papel-tijera-largarto-spock.vercel.app",
      link2: "https://github.com/fabriciomarote/Piedra-papel-tijera-largarto-spock",
      title: "Piedra, Papel, Tijera, Lagarto y Spock",
      techs: ["HTML", "CSS", "React", "Bootstrap"],
      text: "Es un juego que realicé en el marco de un proyecto en la Universidad. Es el clasico juego Piedra, Papel y Tijera con dos opciones mas agregadas, se puede jugar solo o de a dos jugadores.",
      type: "Frontend",
    },
    {
      id: 4,
      image: Rotten,
      images: [Rotten1, Rotten2, Rotten3, Rotten4, Rotten5, Rotten6, Rotten7, Rotten8, Rotten9, Rotten10], 
      link1: null,
      link2: "https://github.com/fabriciomarote/RottenTomatoes-api-web",
      title: "Rotten Tomatoes",
      techs: ["Kotlin", "Javalin", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es una pagina web donde se puede visualizar información sobre peliculas. Hay que registrarse y loguearse para poder criticarlas. Se realizó una API utilizando un dominio provisto por la catedra y posteriormente consumiamos para poder realizar el front.",
      type: "Fullstack",
    },
    {
      id: 5,
      image: Turnero,
      images: [Turnero1, Turnero2, Turnero3, Turnero4, Turnero5, Turnero6, Turnero7, Turnero8, Turnero9, Turnero10, Turnero11, Turnero12, Turnero13, Turnero14, Turnero15, Turnero16], 
      link1: null,
      link2: "https://github.com/fabriciomarote/Turnero",
      title: "Turnero",
      techs: ["Kotlin", "Spring Boot", "MySQL", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es una web con sistemas de turnos medicos donde se pueden sacar turnos para diferentes especialidades en diferentes hospitales registrados, además como funcionalidad tiene para registrarse, loguearse, edición de perfil y cancelar los turnos. Se trabajó con metodologías ágiles a través de SCRUM.",
      type: "Fullstack",
    },
    {
      id: 6,
      image: Ubermen,
      images: [Ubermen1], 
      link1: null,
      link2: "https://github.com/fabriciomarote/Ubermen",
      title: "Ubermen",
      techs: ["Kotlin", "Spring Boot", "JDBC", "Hibernate", "MySQL", "Neo4j", "MongoDB", "HTML", "CSS", "React.js", "Bootstrap"],
      text: "Es una API que simula a la aplicacion Uber, donde se puede agregar, modificar y eliminar, distintos tipos de personajes y escenarios utilizando varias bases de datos. Tiene además la funcionalidad para poder patrullar y encontrar diferentes escenarios para poder completar conflictos y superarlos cumpliendo distintos requisitos, enfrentarse contra villanos y poder mutar sus poderes.",
      type: "Backend",
    },
    {
      id: 7,
      image: Unqfy,
      images: [Unqfy1], 
      link1: null,
      link2: "https://github.com/fabriciomarote/UNQfy",
      title: "Unqfy",
      techs: ["Javascript", "Express", "Node.js"],
      text: "Es una API similar a Spotify donde se puede agregar y borrar artistas, albumes y canciones, además agregar playlist y reproducir las canciones.",
      type: "Backend",
    },
  ];
  
  export default projects;


  /* 
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Twitter",
      text: "Fue desarrollado en el marco de un proyecto de la facultad.",
      type: "FullStack",
    },
    {
      id: 3,
      image: Horney,
      link1: "https://horney-joyas.vercel.app",
      link2: "https://monteza-eventos.vercel.app/",
      title: "Horney Joyas",
      text: "Es una Website realizada con React, Javascrpit y CSS.",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Ubermen",
      text: "",
      type: "Backend",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "Unqfy",
      text: "",
      type: "Backend",
    },
    {
      id: 4,
      image: "",
      //link1: "https://github.com/Bluefox182/ultimate-weather-app",
      //link2: "https://bluefox182-weather-app.vercel.app/",
      title: "",
      text: "",
      type: "",
    },
  */
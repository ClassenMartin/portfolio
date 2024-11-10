import React, { useState } from "react";
import { Modal } from "@mui/material";
import SingleProject from "./SingleProject";

const projectsEng = [
  {
    id: 1,
    online: true,
    link: "https://clippedin.netlify.app/",
    github: "",
    imageOne: "/projectPics/clippedIn/clippedInOne.png",
    imageOneDescription:
      "overview on a map for contributors with a filter function to find certain skills",
    imageOneAlt: "overview map contributors",

    imageTwo: "/projectPics/clippedIn/clippedInTwo.png",
    imageTwoDescription: "jobmarket where avaible joboffers can be seen",
    imageTwoAlt: "jobmarket with several listed items",

    imageThree: "/projectPics/clippedIn/clippedInThree.png",
    imageThreeDescription:
      "see bouldering gyms and the availbility of joboffers in those gyms",
    imageThreeAlt: "overview map gyms",

    imageFour: "/projectPics/clippedIn/clippedInFour.png",
    imageFourDescription:
      "your account to edit your profile that later will be shown on the map",
    imageFourAlt: "your account view",

    text: "ClippedIn",
    expanded: false,
    more: "show me more",
    type: "own project",
    technology:
      "React, CSS, Javascript, HTML, Firebase, Firestore, external APIs",
    description:
      "Project I want to scale bigger one day but first I need to get better",
  },
  {
    id: 2,
    online: false,
    link: "",
    github: "",
    imageOne: "/projectPics/circles/combined.png",
    imageOneDescription: "adaptable to differnt IOS screens. intuitive design",
    imageOneAlt: "three mobile displays showing the game screen",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",

    text: "Circles",
    expanded: false,
    more: "show me more",
    type: "mobile App",
    technology: "React-Native, CSS, HTML, Javascript",
    description:
      "little memory game, where ciricles get randomly created with differnt levels of difficulty and a ranking system. Level increase in difficulty",
  },
  {
    id: 3,
    online: false,
    link: "",
    github: "",
    imageOne: "",
    imageOneDescription: "",
    imageOneAlt: "",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",

    text: "Oscar",
    expanded: false,
    more: "show me more",
    type: "homepage client",
    technology: "React, CSS, HTML, Javascript",
    description: "Oscars needs a homwpage for his clients to contact him",
  },
  {
    id: 4,
    online: false,
    link: "",
    github: "",
    imageOne: "",
    imageOneDescription: "",
    imageOneAlt: "",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",
    text: "To Do List",
    expanded: false,
    more: "show me more",
    type: "bootcamp",
    technology: "React, CSS, HTML, Javascript",
    description:
      "We had to build a small app to learn and work with React. First contact",
  },
  {
    id: 5,
    online: false,
    link: "",
    github: "",
    imageOne: "/projectPics/newYorkTimes/newYorkTimesClone.png",
    imageOneDescription:
      "basic layout of the new york times newspaper, but with fake articles",
    imageOneAlt: "picture of a new york times clone",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",

    text: "New York Times clone",
    expanded: false,
    more: "show me more",
    type: "bootcamp",
    technology: "HTML, CSS",
    description:
      "Learning styling with CSS and HTML. This project was not meant to be responsive",
  },
  {
    id: 6,
    online: false,
    link: "",
    github: "",
    imageOne: "",
    imageOneDescription: "",
    imageOneAlt: "",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",
    text: "Routeset Roulette",
    expanded: false,
    more: "show me more",
    type: "own project",
    technology: "React, HTML, CSS, Javascript",
    description:
      "Litte App I worked on for my previous work to ensure that creativity in a daily job doens't get to short and amplifies interaction within the team to keep the fun high",
  },
  {
    id: 7,
    online: false,
    link: "",
    github: "",
    imageOne: "",
    imageOneDescription: "",
    imageOneAlt: "",

    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",

    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",

    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",
    text: "world domination",
    expanded: false,
    more: "show me more",
    type: "own project",
    technology: "Pizza",
    description: "Taking over the world",
  },
  {
    id: 8,
    online: true,
    link: "https://www.8a.nu/",
    github: "",

    imageOne: "/projectPics/8a/8aOne.png",
    imageOneDescription: "welcome page with several functions a links",
    imageOneAlt: "picture of the webpage",

    imageTwo: "/projectPics/8a/8aTwo.png",
    imageTwoDescription: "user account displaying statistics",
    imageTwoAlt: "user account being displayed",

    imageThree: "/projectPics/8a/8aThree.png",
    imageThreeDescription:
      "overview map with different climbing crags that user can create",
    imageThreeAlt: "overview map from the northern part of germany",

    imageFour: "/projectPics/8a/8aFour.png",
    imageFourDescription:
      "user can upload images that will be displayed in a gallery",
    imageFourAlt: "picture showing a gallery of several pictures",
    text: "cimbing 8a.nu",
    expanded: false,
    more: "show me more",
    type: "climbing platform",
    technology: "copy paste",
    description: "smart talk about climbing",
  },
];

const projectsEsp = [
  {
    id: 1,
    online: true,
    link: "https://clippedin.netlify.app/",
    github: "",
    imageOne: "/projectPics/clippedIn/clippedInOne.png",
    imageOneDescription: "vista general en un mapa para colaboradores con una función de filtro para encontrar ciertas habilidades",
    imageOneAlt: "mapa de vista general colaboradores",
  
    imageTwo: "/projectPics/clippedIn/clippedInTwo.png",
    imageTwoDescription: "mercado laboral donde se pueden ver ofertas de trabajo disponibles",
    imageTwoAlt: "mercado laboral con varios elementos listados",
  
    imageThree: "/projectPics/clippedIn/clippedInThree.png",
    imageThreeDescription: "ver gimnasios de escalada y la disponibilidad de ofertas de trabajo en esos gimnasios",
    imageThreeAlt: "mapa de vista general gimnasios",
  
    imageFour: "/projectPics/clippedIn/clippedInFour.png",
    imageFourDescription: "tu cuenta para editar tu perfil que luego se mostrará en el mapa",
    imageFourAlt: "vista de tu cuenta",
  
    text: "ClippedIn",
    expanded: false,
    more: "muéstrame más",
    type: "proyecto propio",
    technology: "React, CSS, Javascript, HTML, Firebase, Firestore, APIs externas",
    description: "Proyecto que quiero escalar más en el futuro, pero primero necesito mejorar"
  },

];

const projectsGer = [
  {
    id: 1,
    online: true,
    link: "https://clippedin.netlify.app/",
    github: "",
    imageOne: "/projectPics/clippedIn/clippedInOne.png",
    imageOneDescription: "Übersicht auf einer Karte für Mitwirkende mit einer Filterfunktion, um bestimmte Fähigkeiten zu finden",
    imageOneAlt: "Übersichtskarte Mitwirkende",
  
    imageTwo: "/projectPics/clippedIn/clippedInTwo.png",
    imageTwoDescription: "Arbeitsmarkt, auf dem verfügbare Jobangebote zu sehen sind",
    imageTwoAlt: "Arbeitsmarkt mit mehreren aufgelisteten Angeboten",
  
    imageThree: "/projectPics/clippedIn/clippedInThree.png",
    imageThreeDescription: "Kletterhallen anzeigen und die Verfügbarkeit von Jobangeboten in diesen Hallen",
    imageThreeAlt: "Übersichtskarte Kletterhallen",
  
    imageFour: "/projectPics/clippedIn/clippedInFour.png",
    imageFourDescription: "dein Konto, um dein Profil zu bearbeiten, das später auf der Karte angezeigt wird",
    imageFourAlt: "Kontoansicht",
  
    text: "ClippedIn",
    expanded: false,
    more: "zeig mir mehr",
    type: "eigenes Projekt",
    technology: "React, CSS, Javascript, HTML, Firebase, Firestore, externe APIs",
    description: "Projekt, das ich eines Tages größer skalieren möchte, aber zuerst muss ich besser werden",
  },
  {
    id: 2,
    online: false,
    link: "",
    github: "",
    imageOne: "/projectPics/circles/combined.png",
    imageOneDescription: "anpassbar an verschiedene iOS-Bildschirme. intuitives Design",
    imageOneAlt: "drei mobile Bildschirme, die den Spielbildschirm anzeigen",
  
    imageTwo: "",
    imageTwoDescription: "",
    imageTwoAlt: "",
  
    imageThree: "",
    imageThreeDescription: "",
    imageThreeAlt: "",
  
    imageFour: "",
    imageFourDescription: "",
    imageFourAlt: "",
  
    text: "Circles",
    expanded: false,
    more: "zeig mir mehr",
    type: "mobile App",
    technology: "React-Native, CSS, HTML, Javascript",
    description: "kleines Gedächtnisspiel, bei dem Kreise zufällig erstellt werden, mit verschiedenen Schwierigkeitsgraden und einem Ranglistensystem. Der Schwierigkeitsgrad nimmt mit jedem Level zu",
  }
];

const Projects = ({ t, language }) => {
  const projectsObject = language === "eng"
  ? projectsEng
  : language === "esp"
  ? projectsEsp
  : projectsGer;
  
  const [projects, setProjects] = useState(projectsObject);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [singleProjectModal, setSingleProjectModal] = useState(false);
  const [singleProjectModalContent, setSingleProjectModalContent] =
    // useState(projects1[0]);
    useState(null);


   

  const callSingleProjectModal = (div) => {
    setSingleProjectModal(true);
    setSingleProjectModalContent(div);
    console.log(div);
  };

  const handleSingleProjectClose = () => {
    setSingleProjectModal(false);
  };

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className="modalContent">
      <div className="modalHeader">
        <h2>{t.projects}</h2>
        <h4>{t.projectsHover}</h4>
      </div>
      <div className="modalMainContent">
        <div className="projectsMapped">
          {projects.map((pro) => (
            <div
              key={pro.id}
              className={
                hoveredProject === pro.id
                  ? "singleProjectHover"
                  : "singleProject"
              }
              onClick={() => callSingleProjectModal(pro)}
              onMouseEnter={() => handleMouseEnter(pro.id)}
              onMouseLeave={handleMouseLeave}
            >
              {pro.imageOne !== "" ? (
                hoveredProject === pro.id ? (
                  <div className="singleProjectContent">
                    <h4>{pro.text}</h4>
                    <p>{pro.type}</p>
                    <p>{pro.technology}</p>
                  </div>
                ) : (
                  <div
                    className="singleProjectContent"
                    style={{
                      backgroundImage: `url(${pro.imageOne})`,
                    }}
                  ></div>
                )
              ) : hoveredProject === pro.id ? (
                <div className="singleProjectContent">
                  <p>{pro.description}</p>
                </div>
              ) : (
                <div className="singleProjectContent">
                  <h4>{pro.text}</h4>
                  <p>{pro.type}</p>
                  <p>{pro.technology}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal open={singleProjectModal}>
        <SingleProject
          singleProjectModalContent={singleProjectModalContent}
          handleSingleProjectClose={handleSingleProjectClose}
        />
      </Modal>
    </div>
  );
};
export default Projects;

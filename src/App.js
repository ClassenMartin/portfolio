import "./App.css";
import { useState } from "react";
import { Modal } from "@mui/material";
import translations from "./translationFile";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Curriculum from "./Curriculum";
import Contact from "./Contact";

const colors = [
  "rgb(217, 214, 215)",
  "rgb(255, 182, 193)",
  "rgb(135, 206, 250)",
  "rgb(144, 238, 144)",
  "rgb(255, 165, 0)",
  "rgb(221, 160, 221)",
  "rgb(255, 228, 181)",
  "rgb(240, 128, 128)",
  "rgb(176, 224, 230)",
  "rgb(255, 222, 173)",
];

function App() {
  const [language, setLanguage] = useState("eng");

  // main Modal
  const [isModal, setIsModal] = useState(false);
  const [isModalContent, setIsModalContent] = useState(null);

  const [colorTrans, setColorTrans] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const t = translations[language];

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const callModal = (content) => {
    setIsModalContent(content);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
    setColorTrans(true);
    setTimeout(() => {
      setIsModal(true);
      setColorTrans(false);
      setBackgroundColor("transparent");
    }, 1500);
  };

  const closeModal = () => {
    setIsModal(false);
    setIsModalContent(null);
  };

  return (
    <div className="App">
      <div className="buttonBox">
        <button
          className={
            language === "eng" ? "languageButtonActive" : "languageButton"
          }
          onClick={() => switchLanguage("eng")}
        >
          {t.buttonEng}
        </button>
        <button
          className={
            language === "ger" ? "languageButtonActive" : "languageButton"
          }
          onClick={() => switchLanguage("ger")}
        >
          {t.buttonGer}
        </button>
        <button
          className={
            language === "esp" ? "languageButtonActive" : "languageButton"
          }
          onClick={() => switchLanguage("esp")}
        >
          {t.buttonEsp}
        </button>
      </div>

      <div className="mainLeft">
        <div className="fotobox">
          <div>
            <h2>{t.hey}</h2>
            <h3>{t.welcome}</h3>
          </div>
        </div>
      </div>

      <div className="mainRight">
        {/* aboutme */}
        <div
          className="littleBox"
          onClick={() => callModal("aboutMe")}
          data-hover={t.aboutHover}
        >
          <h3>{t.about}</h3>
        </div>

        <div
          className={`littleBoxPicture picture1 ${
            colorTrans ? "color-transition" : ""
          }`}
          style={{ backgroundColor, transition: "background-color 3s ease" }}
        >
          {/* picture flower */}
        </div>

        {/* projects */}
        <div
          className="littleBox"
          onClick={() => callModal("projects")}
          data-hover={t.projectsHover}
        >
          <h3>{t.projects}</h3>
        </div>
        <div
          className={`littleBoxPicture picture2 ${
            colorTrans ? "color-transition" : ""
          }`}
          style={{ backgroundColor, transition: "background-color 3s ease" }}
        >
          {/* picture flower */}
        </div>
        {/* skills/experience */}
        <div
          className="littleBox"
          onClick={() => callModal("skills")}
          data-hover={t.skillsHover}
        >
          <h3>{t.skills}</h3>
        </div>
        <div
          className={`littleBoxPicture picture3 ${
            colorTrans ? "color-transition" : ""
          }`}
          style={{ backgroundColor, transition: "background-color 3s ease" }}
        >
          {/* picture flower */}
        </div>
        {/* curriculum */}
        <div
          className="littleBox"
          onClick={() => callModal("curriculum")}
          data-hover={t.curriculumHover}
        >
          <h3>{t.curriculum}</h3>
        </div>
        <div
          className={`littleBoxPicture picture4 ${
            colorTrans ? "color-transition" : ""
          }`}
          style={{ backgroundColor, transition: "background-color 3s ease" }}
        >
          {/* picture flower */}
        </div>
        {/* contactform */}
        <div
          className="littleBox"
          onClick={() => callModal("contact")}
          data-hover={t.contactHover}
        >
          <h3>{t.contact}</h3>
        </div>
      </div>

      <Modal open={isModal}>
        <div className="modal">
          <div className="modalCloseButton">
            <button onClick={closeModal}>X</button>
          </div>
          {isModalContent === "aboutMe" && <AboutMe t={t} />}
          {isModalContent === "projects" && (
            <Projects t={t} language={language} />
          )}
          {isModalContent === "skills" && <Skills t={t} />}
          {isModalContent === "curriculum" && (
            <Curriculum t={t} language={language} />
          )}
          {isModalContent === "contact" && <Contact t={t} />}
        </div>
      </Modal>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Curriculum = ({ t, language }) => {
  const pdfPaths = {
    eng: "/pdf/CVEnglish.pdf",
    esp: "/pdf/CVSpanish.pdf",
    ger:"/pdf/NIE.pdf",
  };

  return (
    <div className="modalContent">
      <div className="modalHeader">
        <h2>{t.curriculum}</h2>
        <h4>{t.curriculumHover}</h4>
      </div>
      <div className="modalMainContent">
        <div className="curriculumContent">
          <iframe
            src={pdfPaths[language]}
            width="100%"
            // height="100%"
            title="Curriculum"
          />
        </div>
        <a
          href={pdfPaths[language]}
          download={`MartinClassen.pdf`}
          className="download-button"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
export default Curriculum;

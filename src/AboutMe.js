import React, { useState } from "react";

const AboutMe = ({ t }) => {
  return (
    <div className="modalContent">
      <div className="modalHeader">
        <h2>{t.about}</h2>
        <h4>{t.aboutHover}</h4>
      </div>
      <div className="modalMainContent">
        <div className="aboutContent">
          <div>
            <p>{t.aboutExpandOne}</p>
          </div>
          <div>
            <p>{t.aboutExpandTwo}</p>
          </div>
          <div>
            <p>{t.aboutExpandThree}</p>
          </div>
          <div>
            <p>{t.aboutExpandFour}</p>
          </div>
          <div>
            <p>{t.aboutExpandFive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

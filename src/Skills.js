import React, { useState } from "react";

const Skills = ({ t }) => {
  return (
    <div className="modalContent">
      <div className="modalHeader">
        <h2>{t.skills}</h2>
        <h4>{t.skillsHover}</h4>
      </div>
      <div className="modalMainContent">
        <div className="skillContent">
          <div>
            <p>{t.skillsExpandOne}</p>
          </div>
          <div>
            <p>{t.skillsExpandTwo}</p>
          </div>
          <div className="skillContentSplit">
            <div>
              <h3>{t.skillsBootcamp}</h3>
            </div>
            <div>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Webflow</li>
                <li>React</li>
                <li>React Native</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="skillContentSplit">
            <div>
              <h3>{t.skillsTechnology}</h3>
            </div>
            <div>
              <ul>
                <li>Tailwind</li>
                <li>Firebase</li>
                <li>Firestore</li>

                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

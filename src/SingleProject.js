import React from "react";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SingleProjects = ({
  singleProjectModalContent,
  handleSingleProjectClose,
}) => {
  const [imageDescription, setImageDescription] = useState(null);

  const imageClick = (id) => {
    setImageDescription((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="projects">
      {/* project / modal */}

      <div className="projectCloseButton">
        <button onClick={handleSingleProjectClose}>X</button>
      </div>

      <div className="projectHeader">
        <h2>{singleProjectModalContent?.text}</h2>
      </div>

      <div className="projectLinksContainer">
        {/* projectLinksContainer */}
        {singleProjectModalContent?.online === true ? (
          <div className="projectLinks">
            <a href={singleProjectModalContent?.link} target="_blank">
              <ExitToAppIcon  style={{ fontSize: '40px', color:'black' }}/>
            </a>
            <a href={singleProjectModalContent?.github} target="_blank">
              <GitHubIcon style={{ fontSize: '40px', color:'black' }}/>
            </a>
          </div>
        ) : (
          <div className="projectLinks">
            <a href={singleProjectModalContent?.github} target="_blank">
              <GitHubIcon style={{ fontSize: '40px', color:'black' }}/>
            </a>
          </div>
        )}
      </div>

      <div className="projectScrollContent">
        <div className="projectInfo">
          <div>
            <h3>Description: </h3>
            <p> {singleProjectModalContent?.description}</p>
          </div>
          <div>
            <h3>Type of Project: </h3> <p> {singleProjectModalContent?.type}</p>
          </div>
          <div>
            <h3>Technology: </h3> <p>{singleProjectModalContent?.technology}</p>
          </div>
        </div>

        <div className="projectPictureContainer">
          {singleProjectModalContent?.imageOne !== "" && (
            <div className="projectPic">
              <img
                src={singleProjectModalContent?.imageOne}
                alt={singleProjectModalContent?.imageOneAlt}
                title={singleProjectModalContent?.imageOneDescription}
                onClick={() => imageClick(1)}
              />
              {imageDescription === 1 && (
                <div className="imageTitle">
                  {singleProjectModalContent?.imageOneDescription}
                </div>
              )}
            </div>
          )}

          {singleProjectModalContent?.imageTwo !== "" && (
            <div className="projectPic">
              <img
                src={singleProjectModalContent?.imageTwo}
                alt={singleProjectModalContent?.imageTwoAlt}
                title={singleProjectModalContent?.imageTwoDescription}
                onClick={() => imageClick(2)}
              />
              {imageDescription === 2 && (
                <div className="imageTitle">
                  {singleProjectModalContent?.imageTwoDescription}
                </div>
              )}
            </div>
          )}

          {singleProjectModalContent?.imageThree !== "" && (
            <div className="projectPic">
              <img
                src={singleProjectModalContent?.imageThree}
                alt={singleProjectModalContent?.imageThreeAlt}
                title={singleProjectModalContent?.imageThreeDescription}
                onClick={() => imageClick(3)}
              />
              {imageDescription === 3 && (
                <div className="imageTitle">
                  {singleProjectModalContent?.imageThreeDescription}
                </div>
              )}
            </div>
          )}

          {singleProjectModalContent?.imageFour !== "" && (
            <div className="projectPic">
              <img
                src={singleProjectModalContent?.imageFour}
                alt={singleProjectModalContent?.imageFourAlt}
                title={singleProjectModalContent?.imageFourDescription}
                onClick={() => imageClick(4)}
              />
              {imageDescription === 4 && (
                <div className="imageTitle">
                  {singleProjectModalContent?.imageFourDescription}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SingleProjects;

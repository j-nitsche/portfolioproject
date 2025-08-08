import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {

  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects I", logoSrc: "projects.svg" },
    { label: "Projects II", logoSrc: "interests.svg" },
  ];

 
  const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 100},
    {skill: "HTML" , ratingPercentage: 100},
    {skill: "CSS", ratingPercentage: 100},
    {skill: "React JS", ratingPercentage: 100},
    {skill: "C#", ratingPercentage: 100},
    {skill: "C++", ratingPercentage: 100},
    {skill: "Python", ratingPercentage: 100},
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects in one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "HCI Project: 'Overleaf' Redesign",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developing a Functional Prototype and optimized Usability by Cognitive Walkthrough and Formative and Summative Evaluation.",
      subHeading:
        "Technologies Used: HTML, CSS, PHP, Axure",
    },
    {
      title: "Master's thesis (current): Digital Twin - Flood Awareness Simulation",
      duration: { fromDate: "2022", toDate: "" },
      description:
        "Evaluation of the effectivity of various visualisation methods for the use in a flood awareness simulation.",
      subHeading:
        "Technologies Used: Unreal Engine 5, ARCore, ARKit,",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading 
          heading = {"Julius-Maximilians-Universität Würzburg, Germany"}
          subHeading = {"M.Sc. Computer Science with focus on: Human Computer Interaction"}
          fromDate = {"2019"}
          toDate = {"2025"}
      />

      <ResumeHeading
        heading = {"Julius-Maximilians-Universität Würzburg, Germany"}
        subHeading = {"Study Teaching Profession (Math/IT)"}
        fromDate = {"2018"}
        toDate = {"2019"}
      />
      <ResumeHeading
        heading = {"Hochschule Kempten, Germany"}
        subHeading = {"B.Sc. Computer Science with focus on: Game Engineering"}
        fromDate = {"2013"}
        toDate = {"2018"}
      />
    </div>,

   
      <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Robert Bosch GmbH Werk Blaichach"}
          subHeading={"Projectmanagement and IT-Support"}
          fromDate={"2016"}
          toDate={"2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Practical semester with different activities in Projectmananagement, Administration and IT-Support.
          </span>
        </div><br/>
        <ResumeHeading
          heading={"Research Center Allgäu"}
          subHeading={"Web Developer"}
          fromDate={"2015"}
          toDate={"2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Design, programming, testing and documentation of an Interactive Wiki for Casting Defects.
          </span>
        </div>
      </div>
    </div>,

   
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

   
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

  
        <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Game Engineering Project: 'Interactive Stories' "
          description="Cooperation with Hochschule Würzburg-Schweinfurt to program and animate a story driven minigame 'Visomundi'. Used: C#, Unity, Illustrator, AfterEffects "
        /><div><a href='https://drive.google.com/file/d/1wWMdUy-VdhSRcjIeD1lcko_qumEnqij3/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download</a>
        </div>

        <ResumeHeading
          heading="Modelling and Animation Project: Horror Maze Game"
          description="Modelling, Texturing and Lighting of Objects and Environment"
        /><a href='https://drive.google.com/file/d/1MpH1nGZDfS-rMLObcjXrQO4bVBpYAgN4/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download</a>

        <ResumeHeading
          heading="Blender Project: Stormy Sea"
          description="Creating a stormy ocean scene with Blender's Ocean Modifier, Texturing and Particle System. Additionaly animating the camera for a wonky view."
        /><a href='https://www.youtube.com/watch?v=ynU4UqvRv-4' target="_blank" rel="noopener noreferrer">See Video</a>
        </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

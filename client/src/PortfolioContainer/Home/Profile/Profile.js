import React from "react";
import Typewriter from "typewriter-effect";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">John</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typewriter
                  options={{
                  strings: ["Web Developer","UX Designer","Game Developer","3D Artist"],
                  autoStart: true,
                  loop: true,
                  }}                  
                />

                {/*<Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer",
                    1000,
                    "UX Designer",
                    1000,
                    "Game Developer",
                    1000,
                    "3d Artist",
                    1000,
                    "React/React Native ",
                    1000,
                  ]}
                />*/}
              </h1>
            </span>
            <span className="profile-role-tagline">
              Experienced in building applications in web and gaming area.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Contact Me </button>
            <a href="2022_05_lebenslauf.pdf" download="CV-Nitsche.pdf ">
              <button className="btn highlighted-btn">Get my CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

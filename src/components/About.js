import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio, github, linkedin, image }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>} {/* Conditionally render <p> */}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Add Links component */}
    </div>
  );
}

export default About;

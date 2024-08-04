import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  // Destructure the user object
  const { name, city, bio, github, linkedin, image } = user;

  return (
    <div>
      <NavBar />
      <Home name={name} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} image={image} />
    </div>
  );
}

export default App;


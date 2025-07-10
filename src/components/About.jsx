import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
const About = () => {
  const { loggedUser } = useContext(UserContext);
  return (
    <div>
      <h1>This is About us page</h1>
      <h3>My Name Is Avinash </h3>
      <h3 className="font-bold">{loggedUser} </h3>
    </div>
  );
};

export default About;

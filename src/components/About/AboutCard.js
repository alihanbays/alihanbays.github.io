import React from "react";
import Card from "react-bootstrap/Card";
import { ImCodepen, ImDelicious, ImGithub, ImMusic, ImPointRight, ImStopwatch, ImTrophy, ImWarning } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alihan Baysal </span>
            from <span className="purple">Corvallis, Oregon.</span>
            <br />
            I am an indie game developer and founder of Baysal Interactive.
            <br />
            I graduated with a degree in <span className="purple">Computer Science </span> and have a passion for creating engaging gaming experiences.
            <br />
            <br />
            Apart from coding, here are a few activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImTrophy /> Playing Games
            </li>
            <li className="about-activity">
              <ImStopwatch /> Working Out
            </li>
            <li className="about-activity">
              <ImCodepen /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImMusic /> Playing Guitar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

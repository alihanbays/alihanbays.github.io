import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGames, CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Conditionally render the GitHub button if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* Conditionally render the Play button if playLink is provided */}
        {props.playLink && (
          <Button
            variant="primary"
            href={props.playLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgGames /> &nbsp;
            {"Play"}
          </Button>
        )}

        {/* Conditionally render the YouTube button if youtubeLink is provided */}
        {props.youtubeLink && (
          <Button
            variant="primary"
            href={props.youtubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsYoutube /> &nbsp;
            {"YouTube"}
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

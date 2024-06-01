import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import slimeClimb from "../../Assets/Projects/slimeclimb.png";
import fastFoodNinja from "../../Assets/Projects/fastFoodNinja.png";
import dasherBlitz from "../../Assets/Projects/dasherBlitz.png";
import shapensurf from "../../Assets/Projects/shape-n-surf.png";
import buniBoards from "../../Assets/Projects/buniBoards.png";
import dotify from "../../Assets/Projects/dotify.png";
import kingOfTheHill from "../../Assets/Projects/kingOfTheHill.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slimeClimb}
              isBlog={false}
              title="Slime Climb"
              description="Slime Climb is a 2D platformer that was developed during an intense 72-hour game jam. This year's theme was 'Ascend,' and participants were tasked with creating a speedrunning game. Slime Climb challenges players to climb treacherous heights with agility and precision. It was ranked #50 out of 249 entries, showcasing its engaging gameplay and innovative design."
              ghLink="https://github.com/alihanbays/Speed-Game-Jam-5"
              playLink="https://alihanbays.itch.io/slime-climb"
              youtubeLink="https://youtu.be/CnnGDoZOOZ0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dasherBlitz}
              isBlog={false}
              title="Dasher Blitz"
              description="Dasher Blitz is a video game developed by a team of students from Oregon State University, of which I was a part. This competition-winner project was the winning entry in the game development competition for our capstone project. I handled the game's level creation, lighting, 3D modeling, and graphics."
              ghLink="https://github.com/DataDevv/CarGoesVroom"
              youtubeLink="https://youtu.be/dK3mYKnaDFQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastFoodNinja}
              isBlog={false}
              title="Fast Food Ninja"
              description="Fast Food Ninja is a game I created to deepen my understanding of mouse interactions in Unity. Inspired by my childhood favorite, Fruit Ninja, I recreated a similar experience with a unique twist. This project taught me extensive knowledge about Unity's input libraries and much about implementing visual feedback effects."
              playLink="https://alihanbays.itch.io/fast-food-ninja"   
              youtubeLink="https://youtu.be/bxTu9I56KqA"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kingOfTheHill}
              isBlog={false}
              title="King of the Hill"
              description="King of the Hill is a game I developed to learn essential character and camera controls in Unity. In this isometric view game, the player controls a ball on a cliff, dodging enemy balls and trying to push them off while collecting power-ups to repel enemies. This project gave me valuable experience in creating intuitive controls, implementing dynamic AI, and designing engaging gameplay mechanics."
              playLink="https://alihanbays.itch.io/king-of-the-hill"   
              youtubeLink="https://youtu.be/OExVcspUx2A"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shapensurf}
              isBlog={false}
              title="Shape-N-Surf"
              description="Buni Shape n' Surf is an all-in-one suite designed for surfboard builders. Users can select and save surf spots globally using the Google Maps API, view real-time surf forecasts, and access a year's surf data via the Open-Meteo Marine Weather API. The 'Shape Board' feature allows users to upload or take pictures of surfboards, which a TensorFlow Lite Machine Learning Model then recognizes. OpenCV detects the board outline, and the application generates printable PDFs for easy surfboard replication. This project showcases my skills in integrating APIs, machine learning, and computer vision for practical applications."
              ghLink="https://github.com/Buni-Surfboard-Company/shape-n-surf"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buniBoards}
              isBlog={false}
              title="Buni Surfboards"
              description="Buni Boards is the official website where you can explore and purchase high-quality surfboards, meet our dedicated team, and join our newsletter. We are committed to saving the planet by supporting eco-friendly surfboards. Visit BuniBoards.com to find your perfect surfboard and learn more about our mission to promote sustainable surfing practices. This project, developed in collaboration with Parker Conrad, reflects our passion for the ocean and our dedication to environmental responsibility."
              ghLink="https://github.com/parkercon/final-project-buni-boards"   
              demoLink="https://buniboards.com/"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dotify}
              isBlog={false}
              title="Dotify"
              description="Dotify is an app created by Parker Conrad and me as our final college project for our databases class. It is a platform where users can browse through their playlists, songs, and artists. The main objective of this app was to understand and implement the many-to-many (M : M) relationship in databases. We developed the website using Vue.js and published it on GitHub Pages. This project showcases our ability to integrate database management with modern web development frameworks."
              ghLink="https://github.com/parkercon/dotify" 
              demoLink="https://parkercon.github.io/dotify/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

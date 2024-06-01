import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    Let me <span className="purple"> introduce </span> myself
  </h1>
  <p className="home-about-body">
    I'm Alihan, a passionate game developer with a love for bringing unique and engaging gaming experiences to life. 
    <br />
    <br />I’ve dived deep into the world of
    <i>
      <b className="purple"> C#, Unity, and Python, </b>
    </i>
    constantly exploring and learning new things every day.
    <br />
    <br />
    My main interests lie in crafting new &nbsp;
    <i>
      <b className="purple">2D and 3D games</b> and
      pushing the boundaries with{" "}
      <b className="purple">
        innovative game mechanics and storytelling.
      </b>
    </i>
    <br />
    <br />
    Whenever I get the chance, I love pouring my creativity into developing immersive gameplay experiences using <b className="purple">Unity</b> and
    <i>
      <b className="purple">
        {" "}
        modern game development techniques
      </b>
    </i>
    &nbsp; such as
    <i>
      <b className="purple"> procedural generation and real-time multiplayer features.</b>
    </i>
  </p>
        </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alihanbays"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/alihanbays"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alihanbaysal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alihanbayss/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

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
              I'm Alihan, a passionate software engineer with a love for solving complex problems and creating efficient, scalable solutions.
              <br />
              <br />I’ve dived deep into the world of
              <i>
                <b className="purple"> C#, Python, JavaScript, and React, </b>
              </i>
              constantly exploring and learning new things every day.
              <br />
              <br />
              My main interests lie in developing robust &nbsp;
              <i>
                <b className="purple">web applications</b> and
                pushing the boundaries with{" "}
                <b className="purple">
                  innovative software solutions and architecture.
                </b>
              </i>
              <br />
              <br />
              Whenever I get the chance, I love pouring my creativity into building efficient systems using <b className="purple">modern development practices</b> and
              <i>
                <b className="purple">
                  {" "}
                  agile methodologies.
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> continuous integration and continuous deployment (CI/CD) pipelines.</b>
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
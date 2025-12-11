import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate and detail-oriented developer dedicated to building elegant, 
              user-friendly, and scalable digital experiences.
              I love turning ideas into functional products, solving complex problems, and continuously learning
              new technologies to improve my craft.
              <br />
              <br />
              Over the past years, I’ve worked on diverse projects — from full-stack web applications
               and modern interfaces to AI-powered tools. I enjoy both the creative and technical 
               side of development, and I’m always excited to collaborate, innovate, and bring 
               meaningful ideas to life.
               What I love working with:
               <ul>
               <li>✨ Modern web development (React, Vite, Tailwind, TypeScript)</li>
               <li>⚙️ Backend & APIs (Django, DRF, Python)</li>
               <li>🤖 AI-driven solutions & automation</li>
               <li>🛠️ Clean code, intuitive UX, and strong problem-solving</li>
               </ul>
               My goal is simple:
              <i>
                <b className="purple">
                  {" "}
                  build digital products that are fast, beautiful, and impactful.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

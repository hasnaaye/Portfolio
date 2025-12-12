import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Hasnaa Yerrou</span>{" "}
            from <span className="purple">Tetouan, Morocco</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Full Stack Developer</span> at{" "}
            <span className="purple">Hb Development</span>.
            <br />I hold Bachelor's degree in{" "}
            <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">" The Faculty of science, Abdelmalek Essaadi "</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <footer className="blockquote-footer">Hasnaa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="energy consumption dashboard"
              description="developed a web dashboard to monitor electricity, water, and gas usage with
               real-time insights, featuring interactive graphs and intelligent alerts to highlight 
               consumption patterns. The platform was built using PHP, MySQL, JavaScript, and charting
                libraries to deliver clear visualizations, with TailwindCSS and Bootstrap handling 
                the user interface design."
              ghLink="https://github.com/hasnaaye/energy_consumption"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My personal portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes 
              the content from makdown files and renders it using Next.js. Supports dark mode and 
              easy to write blogs using markdown."
              ghLink="https://github.com/hasnaaye/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI-Powered Content Management System"
              description="a full-stack AI Content Management System built with Django REST Framework 
              and React 18 that transforms uploaded PDFs into interactive lessons and quizzes. 
              It features a modern UI with Tailwind CSS and TanStack Router, secure JWT authentication, 
              and smooth content management with real-time previews and progress tracking. Powered by an 
              efficient SQLite backend, Novi provides a fast, professional, and engaging platform for 
              educators and learners."
              ghLink="https://github.com/SihamNafie24/Novi-Full-Stack-App"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Intern Management SaaS Platform"
              description="built a multi-tenant Laravel application with role-based access control for 
              Employees, HR, and Managers. It includes complete CRUD modules for employees, departments, 
              and users using Filament, along with file uploads, soft deletes, and dynamic dashboard 
              widgets that deliver real-time insights. I optimized performance through efficient Eloquent 
              relationships and query scopes. The project was developed using Laravel, Livewire, Alpine.js, 
              PHP, MySQL, Filament, TailwindCSS, and Git."
              ghLink="https://github.com/XAI-Tech/XHR-2"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

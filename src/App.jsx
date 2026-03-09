import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Clipboard,
  ExternalLink,
  Code2,
  Zap,
} from "lucide-react";
import "./App.css";

export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Smart School Bus Tracking System",
      tagline: "Public system",
      description:
        "Manage and monitor student shuttle buses in major cities, the system must support real-time operation of at least 300 vehicles simultaneously, and the application should support both mobile (Android/iOS) and web dashboard",
      year: 2025,
      tags: ["React", "Node.js", "MongoDB", "Typescript"],
      icon: "🚌",
      color: "from-amber-400 to-orange-500",
      link: "https://github.com/Chi876543/Smart_School_Sus",
    },
    {
      id: 2,
      title: "Airline Ticket Manager",
      tagline: "Object-oriented programming application",
      description:
        "Problem-solving, System Design, Documentation, Testing, Attention to Detail, Communication",
      year: 2025,
      tags: ["Java", "SQL Server"],
      icon: "✈️",
      color: "from-cyan-400 to-blue-500",
      link: "https://github.com/minhtri77hx/QuanLyBanVeMayBayOOP",
    },
    {
      id: 3,
      title: "Uni Book",
      tagline: "Book selling website",
      description:
        "Developed a full-stack web application for a bookstore’s book sales. Best Practices & Code Standards - MVC, DRY, Security, Optimization",
      year: 2023,
      tags: ["PHP", "CSS", "Javascript", "MySQL"],
      icon: "📒",
      color: "from-purple-400 to-pink-500",
      link: "https://github.com/minhtri77hx/WebBanSach",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    { category: "Tools", items: ["Docker", "Git", "AWS", "Firebase"] },
  ];

  const bio =
    "Passionate full-stack developer crafting elegant, scalable solutions that bridge design and engineering. Specializing in modern web architectures and user-centric development.";

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div
        className="background-blur"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>

      <div className="portfolio-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Avatar Section */}
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <div className="avatar-gradient"></div>
              <div className="avatar-blob">
                <img
                  src="/images/avatar.jpg"
                  alt="Avatar"
                  className="avatar-img"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="name">To Minh Tri</h1>
            <p className="title">Full Stack Developer</p>

            {/* Bio */}
            <p className="bio">{bio}</p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/minhtri77hx"
              target="_blank"
              className="social-link"
              title="GitHub"
            >
              <Github className="social-icon" />
              <span>GitHub</span>
            </a>
            <a
              href="/resume/minhtri_CV.pdf"
              className="social-link"
              title="Resume"
            >
              <Clipboard className="social-icon" />
              <span>Resume</span>
            </a>
            <a
              href="mailto:tominhtri21102005@gmail.com"
              className="social-link"
              title="Email"
            >
              <Mail className="social-icon" />
              <span>tominhtri21102005@gmail,</span>
            </a>
          </div>

          {/* Skills Grid */}
          <div className="skills-section">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group">
                <h4 className="skill-category">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <p>Available for freelance & full-time roles</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">
          {/* Header Section */}
          <section className="header-section">
            <div className="header-content">
              <div className="header-label">Welcome to my portfolio</div>
              <h2 className="header-title">Featured Works</h2>
              <p className="header-subtitle">
                Handpicked projects showcasing expertise in modern web
                development, from concept to deployment.
              </p>
            </div>
            <div className="header-decoration"></div>
          </section>

          {/* Projects Grid */}
          <section className="projects-section">
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <article
                  key={project.id}
                  className="project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <div className="project-inner">
                    {/* Color Accent */}
                    <div
                      className={`project-accent bg-gradient-to-br ${project.color}`}
                    ></div>

                    {/* Content */}
                    <div className="project-body">
                      <div className="project-icon">{project.icon}</div>

                      <div className="project-header-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-tagline">{project.tagline}</p>
                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="project-tags">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="project-footer">
                        <span className="project-year">{project.year}</span>
                        <a
                          href={project.link}
                          target="_blank"
                          className="project-link"
                        >
                          Explore <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

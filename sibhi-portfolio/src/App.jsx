import React from "react";
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, MapPin, Send, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard";
import { experience, profile, projects, skills } from "./data";
import profilePhoto from "./assets/sibhi.jpeg";

const groups = ["All", "Frontend", "Backend", "Database", "Core", "Tools"];

export default function App() {
  const [unused] = [null]; // Keeps this file simple to extend with project filters later.
  const emailSubject = encodeURIComponent("Portfolio enquiry");
  const emailBody = encodeURIComponent("Hi Sibhi,\n\nI viewed your portfolio and would like to connect.");
  return (
    <>
      <Navbar />
      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>SIBHI D</h1>
            <h2>{profile.role}<span className="cursor"></span></h2>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/sibhi18" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/sibhi-d" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div className="hero-art">
            <img className="profile-photo" src={profilePhoto} alt="Sibhi Dhayalan" fetchPriority="high" />
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span>CURIOUS MIND</span><i /> <span>PROBLEM SOLVER</span><i /> <span>CONTINUOUS LEARNER</span><i /> <span>FULL-STACK ASPIRANT</span>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionTitle eyebrow="01 / A LITTLE INTRODUCTION" title="About me." note="A little about the developer behind the screen." />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I like making the web <span>useful, clear, and intuitive.</span></p>
              <p>{profile.about}</p>
              <p>My goal is to keep improving through practical projects, clean code, and collaboration with a development team.</p>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><Code2 /></span><div><small>EDUCATION</small><strong>{profile.education}</strong></div></div>
              <div className="fact-card"><span className="fact-icon"><Sparkles /></span><div><small>TRAINING</small><strong>{profile.training}</strong></div></div>
              <div className="fact-card"><span className="fact-icon"><MapPin /></span><div><small>LOCATION</small><strong>{profile.location}</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionTitle eyebrow="02 / MY TOOLKIT" title="Skills & technologies." note="Tools and concepts I'm learning and using to build applications." />
            <div className="skills-layout">
              <div className="skills-copy"><span className="big-index">12<span>+</span></span><h3>Technologies<br/>in my toolkit</h3><p>I focus on building a strong foundation across frontend, backend, and databases.</p></div>
              <div className="skills-grid">
                {skills.map((skill, index) => <div className="skill-item" key={skill.name}><span className="skill-index">{String(index + 1).padStart(2, "0")}</span><strong>{skill.name}</strong><small>{skill.group}</small></div>)}
              </div>
            </div>
            <p className="skills-footnote">Also exploring: authentication & authorization, API testing, deployment fundamentals, and better project architecture.</p>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionTitle eyebrow="03 / SELECTED WORK" title="Projects I've built." note="A few practical projects that reflect what I'm learning." />
          <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
          <p className="project-hint">Open a project's live demo or code link to explore it.</p>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container">
            <SectionTitle eyebrow="04 / THE JOURNEY SO FAR" title="Learning by building." note="My starting point and the direction I'm working towards." />
            <div className="timeline">{experience.map((item, index) => <div className="timeline-item" key={item.label}><span className="timeline-number">0{index + 1}</span><div><small>{item.label}</small><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">05 / HAVE A ROLE OR PROJECT?</p>
              <h2>Let's build<br/><span>something good.</span></h2>
              <p className="contact-copy">I'm open to entry-level Software Developer and MERN Stack Developer opportunities in Chennai or remote. Feel free to reach out.</p>
              <a className="contact-email" href={`mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={16}/></a>
            </div>
            <div className="contact-panel">
              <span className="panel-label">CURRENT STATUS</span>
              <div className="status-large"><span className="status-dot" /> Open to opportunities</div>
              <p>Interested in junior / fresher roles where I can contribute, learn from experienced developers, and grow as a software engineer.</p>
              <div className="contact-socials">
                <a href="https://github.com/sibhi18" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
                <a href="https://www.linkedin.com/in/sibhi-d" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">S</span><span>SIBHI<span className="brand-dot">.</span></span></a><p>Designed & built by Sibhi Dhayalan · {new Date().getFullYear()}</p><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}

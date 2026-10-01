import './App.css'

import kfupmLogo from './assets/kfupm-logo.webp'

import summrahAchievement from './assets/achievement-summrah.jpeg'
import ise291Achievement from './assets/achievement-ise291.jpeg'
import successStoryAchievement from './assets/achievement-success-story.jpeg'
import consultingAchievement from './assets/achievement-consulting.jpeg'
import teamDesignAchievement from './assets/achievement-team-design.jpeg'

function App() {
  return (
    <main className="portfolio">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="navbar">
        <div className="nav-spacer" />

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="resume-nav"
          href="/Sadeem-Alotaibi-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé ↗
        </a>
      </nav>


      {/* =========================================================
          HOME
      ========================================================= */}
      <section className="home" id="home">
        <div className="home-content">
          <p className="intro">HI, I'M</p>

          <h1>
            Sadeem
            <br />
            Al-Otaibi.
          </h1>

          <h2 className="role">
            Software Engineering Graduate
          </h2>

          <p className="university">
            King Fahd University of Petroleum &amp; Minerals
          </p>

          <p className="description">
            Building interactive experiences, cloud applications,
            and user-centered software solutions.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="primary-button">
              View my work →
            </a>

            <a
              href="/Sadeem-Alotaibi-Resume.pdf"
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé ↗
            </a>
          </div>
        </div>

        <div className="home-side">
          <span>SOFTWARE ENGINEER</span>
          <span>VR / XR</span>
          <span>CLOUD</span>
          <span>UI / UX</span>
        </div>

        <a href="#about" className="scroll-indicator">
          SCROLL TO EXPLORE
          <span>↓</span>
        </a>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="about" id="about">
        <div className="section-number">
          02 / ABOUT
        </div>

        <div className="about-layout">
          <div className="about-heading">
            <p className="section-label">
              GET TO KNOW ME
            </p>

            <h2>
              A little
              <br />
              about me.
            </h2>
          </div>

          <div className="about-content">
            <p className="about-summary">
              Software Engineering graduate from KFUPM with hands-on
              experience in full-stack development, cloud computing,
              and VR development. Skilled in Python, Java, JavaScript,
              Node.js, and Unity (C#), with practical experience in
              RESTful APIs, databases, cloud deployment, and interactive
              VR applications. Strong understanding of the Software
              Development Life Cycle (SDLC).
            </p>

            <div className="education-card">
              <div className="card-top">
                <div className="card-title">
                  <span className="card-number">01</span>
                  <span className="card-label">EDUCATION</span>
                </div>

                <img
                  src={kfupmLogo}
                  alt="KFUPM logo"
                  className="kfupm-logo"
                />
              </div>

              <div className="education-info">
                <div>
                  <p className="education-small">
                    DEGREE
                  </p>

                  <h3>
                    Bachelor of
                    <br />
                    Software Engineering
                  </h3>
                </div>

                <div className="education-bottom">
                  <div>
                    <p className="education-small">
                      UNIVERSITY
                    </p>

                    <p className="education-university">
                      King Fahd University of
                      <br />
                      Petroleum and Minerals
                    </p>
                  </div>

                  <div>
                    <p className="education-small">
                      YEARS
                    </p>

                    <p className="education-years">
                      2021 — 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>SOFTWARE ENGINEERING</span><i>✦</i>
            <span>FULL-STACK</span><i>✦</i>
            <span>CLOUD</span><i>✦</i>
            <span>VR / XR</span><i>✦</i>
            <span>DATA</span><i>✦</i>

            <span>SOFTWARE ENGINEERING</span><i>✦</i>
            <span>FULL-STACK</span><i>✦</i>
            <span>CLOUD</span><i>✦</i>
            <span>VR / XR</span><i>✦</i>
            <span>DATA</span><i>✦</i>
          </div>
        </div>
      </section>


      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section className="experience" id="experience">
        <div className="section-number">
          03 / EXPERIENCE
        </div>

        <div className="section-header">
          <div>
            <p className="section-label">
              WHERE I'VE WORKED
            </p>

            <h2>Experience.</h2>
          </div>

          <p className="section-intro">
            Hands-on experience building immersive software
            and turning ideas into interactive digital experiences.
          </p>
        </div>

        <article className="experience-card">
          <div className="experience-top">
            <span className="big-index">01</span>
            <span className="micro-text">JUN — AUG 2025</span>
          </div>

          <div className="experience-main">
            <div className="experience-company">
              <p className="micro-label">COMPANY</p>

              <h3>VR House</h3>

              <p className="experience-location">
                Dhahran, Saudi Arabia
              </p>
            </div>

            <div className="experience-details">
              <p className="micro-label">ROLE</p>

              <h4>
                Software Engineering Intern
              </h4>

              <p className="body-copy">
                Developed immersive virtual reality experiences using
                Unity and Meta Quest, transforming architectural assets
                into interactive environments with realistic lighting,
                navigation, customization, and XR interactions.
              </p>

              <div className="detail-list">
                <div>
                  <span>01</span>
                  <p>
                    Built VR interactions including doors, light
                    switches, material customization, mirrors,
                    and XR user interfaces.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Implemented XR Origin navigation and interaction
                    systems using Unity, C#, and XR Interaction Toolkit.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Optimized 3D assets, materials, lighting,
                    and scene performance for Meta Quest 3.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Presented the completed VR experience to
                    Roshn Group as a VR House success story.
                  </p>
                </div>
              </div>

              <div className="tag-list">
                <span>UNITY</span>
                <span>C#</span>
                <span>VR / XR</span>
                <span>META QUEST 3</span>
                <span>XR TOOLKIT</span>
              </div>
            </div>
          </div>


          {/* =====================================================
              VR HOUSE PROJECTS
          ===================================================== */}
          <div className="experience-showcase">

            <div className="showcase-header">
              <span className="big-index">02</span>
              <span className="micro-text">
                VR HOUSE PROJECTS
              </span>
            </div>

            <div className="experience-project-grid">

              {/* PROJECT 01 */}
              <article className="experience-project">
                <div className="experience-project-top">
                  <span>INTERNSHIP PROJECT</span>
                  <span>01 / VR</span>
                </div>

                <div className="experience-project-heading">
                  <h3>
                    Interactive
                    <br />
                    VR Villa.
                  </h3>

                  <p>
                    An interactive architectural VR experience
                    developed during my internship at VR House,
                    featuring realistic lighting, navigation,
                    material customization, and XR interactions.
                  </p>
                </div>

                <div className="experience-media experience-canva">
                  <iframe
                    src="https://www.canva.com/design/DAHWognVXB8/p4ga-zKA-So5uV0jlwLnMQ/view?embed"
                    title="Interactive VR Villa Presentation"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div className="experience-feature-row">
                  <span>INTERACTIONS</span>
                  <span>LIGHTING</span>
                  <span>MATERIALS</span>
                </div>

                <div className="experience-project-footer">
                  <span>VR HOUSE — 2025</span>
                  <span>INTERNSHIP PROJECT</span>
                </div>
              </article>


              {/* PROJECT 02 */}
              <article className="experience-project experience-project-return">
                <div className="experience-project-top">
                  <span>RETURN PROJECT</span>

                  <span className="project-badge">
                    INVITED BACK
                  </span>
                </div>

                <div className="experience-project-heading">
                  <h3>
                    Multi-Villa
                    <br />
                    VR Experience.
                  </h3>

                  <p>
                    Following the internship project, I was invited
                    back by VR House to contribute to an additional
                    VR experience featuring multiple villas,
                    villa-to-villa navigation, lighting controls,
                    and object and material customization.
                  </p>
                </div>

                <div className="multi-villa-videos">

                  <div className="experience-video-card">
                    <div className="video-label">
                      <span>01</span>
                      <span>VR DEMO</span>
                    </div>

                    <video
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src="/projects/vr-house/multi-villa-1.mp4.mov"
                        type="video/quicktime"
                      />

                      Your browser does not support video playback.
                    </video>
                  </div>


                  <div className="experience-video-card">
                    <div className="video-label">
                      <span>02</span>
                      <span>VR DEMO</span>
                    </div>

                    <video
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src="/projects/vr-house/multi-villa-2-small.mov"
                        type="video/quicktime"
                      />

                      Your browser does not support video playback.
                    </video>
                  </div>

                </div>

                <div className="experience-feature-row">
                  <span>MULTI-VILLA</span>
                  <span>LIGHTING</span>
                  <span>CUSTOMIZATION</span>
                </div>

                <div className="experience-project-footer">
                  <span>VR HOUSE — 2025</span>
                  <span>POST-INTERNSHIP PROJECT</span>
                </div>
              </article>

            </div>
          </div>
        </article>
      </section>


      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section className="projects" id="projects">
        <div className="section-number">
          04 / PROJECTS
        </div>

        <div className="section-header projects-heading">
          <div>
            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>Projects.</h2>
          </div>

          <p className="section-intro">
            Selected work across immersive technology,
            cloud computing, web development, machine learning,
            requirements engineering, and project management.
          </p>
        </div>


        {/* =====================================================
            PROJECT 01 — SENIOR PROJECT
        ===================================================== */}
        <article
          className="project-card project-featured"
          id="senior-project"
        >
          <div className="project-top">
            <span className="big-index">01</span>

            <div className="project-meta">
              <span>FEATURED PROJECT</span>
              <span>2025 — 2026</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <p className="micro-label">
                SENIOR PROJECT · VR / XR
              </p>

              <h3>
                VR-Integrated
                <br />
                Flare System.
              </h3>

              <p className="project-description">
                A VR-integrated industrial system developed as a
                multidisciplinary senior project, combining immersive
                visualization, operator interaction, process scenarios,
                alarms, and data-driven dashboards.
              </p>

              <div className="project-facts">
                <div>
                  <span>01</span>
                  <p>Industrial VR visualization</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Scenario &amp; alarm interaction</p>
                </div>

                <div>
                  <span>03</span>
                  <p>KPI dashboards and process data</p>
                </div>
              </div>

              <div className="tag-list project-tags">
                <span>VR / XR</span>
                <span>UNITY</span>
                <span>C#</span>
                <span>DATA VISUALIZATION</span>
              </div>
            </div>


            <div className="project-visual senior-video-visual">
              <div className="visual-top">
                <span>PROJECT DEMO</span>
                <span>01 / VIDEO</span>
              </div>

              <div className="video-shell">
                <video
                  className="senior-project-video"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/projects/senior-project/senior-project-demo.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support video playback.
                </video>
              </div>

              <div className="visual-caption">
                <div>
                  <span>INTERACTIVE</span>
                  <strong>VR Environment</strong>
                </div>

                <div>
                  <span>SYSTEM</span>
                  <strong>Flare &amp; SRU</strong>
                </div>

                <div>
                  <span>PLATFORM</span>
                  <strong>Meta Quest</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>SENIOR PROJECT</span>
            <span>VR · INDUSTRIAL TRAINING · DATA</span>
          </div>
        </article>


        {/* =====================================================
            PROJECT 02 — CLOUD
        ===================================================== */}
        <article
          className="project-card"
          id="productivity-project"
        >
          <div className="project-top">
            <span className="big-index">02</span>

            <div className="project-meta">
              <span>CLOUD APPLICATION</span>
              <span>2026</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <p className="micro-label">
                CLOUD APPLICATIONS ENGINEERING
              </p>

              <h3>
                Smart Productivity
                <br />
                Task Manager.
              </h3>

              <p className="project-description">
                A cloud-based productivity application built
                with microservices, REST APIs, containerization,
                infrastructure as code, and automated deployment.
              </p>

              <div className="tag-list project-tags">
                <span>NODE.JS</span>
                <span>EXPRESS</span>
                <span>GOOGLE CLOUD</span>
                <span>DOCKER</span>
                <span>TERRAFORM</span>
                <span>CI/CD</span>
              </div>
            </div>


            <div className="project-visual cloud-visual">
              <div className="visual-top">
                <span>CLOUD ARCHITECTURE</span>
                <span>02 / SYSTEM</span>
              </div>

              <div className="architecture">
                <div className="architecture-row">
                  <div className="architecture-node">
                    <span>01</span>
                    <strong>CLIENT</strong>
                    <small>REST REQUESTS</small>
                  </div>
                </div>

                <div className="architecture-arrow">↓</div>

                <div className="architecture-row">
                  <div className="architecture-node architecture-wide">
                    <span>02</span>
                    <strong>API GATEWAY</strong>
                    <small>SECURE ENTRY POINT</small>
                  </div>
                </div>

                <div className="architecture-arrow">↓</div>

                <div className="architecture-services">
                  <div className="architecture-node">
                    <span>03</span>
                    <strong>TASK SERVICE</strong>
                    <small>CRUD</small>
                  </div>

                  <div className="architecture-node">
                    <span>04</span>
                    <strong>ANALYTICS</strong>
                    <small>INSIGHTS</small>
                  </div>
                </div>

                <div className="architecture-lines">
                  <span>↘</span>
                  <span>↙</span>
                </div>

                <div className="architecture-row">
                  <div className="architecture-node architecture-db">
                    <span>05</span>
                    <strong>FIRESTORE</strong>
                    <small>DATABASE</small>
                  </div>
                </div>
              </div>

              <div className="visual-caption">
                <div>
                  <span>DEPLOY</span>
                  <strong>Cloud Run</strong>
                </div>

                <div>
                  <span>CONTAINER</span>
                  <strong>Docker</strong>
                </div>

                <div>
                  <span>IaC</span>
                  <strong>Terraform</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>CLOUD · MICROSERVICES</span>

            <div className="project-actions">
              <a
                href="https://github.com/sadeemfahd/Smart-Productivity-Task-Manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ON GITHUB ↗
              </a>
            </div>
          </div>
        </article>


        {/* =====================================================
            PROJECT 03 — SUMMRAH
        ===================================================== */}
        <article
          className="project-card"
          id="summrah-project"
        >
          <div className="project-top">
            <span className="big-index">03</span>

            <div className="project-meta">
              <span>WEB DEVELOPMENT</span>
              <span>2025</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <div className="project-title-row">
                <p className="micro-label">
                  WEB DEVELOPMENT
                </p>

                <span className="project-badge">
                  3RD PLACE
                </span>
              </div>

              <h3>Summrah.</h3>

              <p className="project-description">
                A web platform centered around oral heritage
                and storytelling, featuring authentication,
                stories, feedback, and an interactive map.
              </p>

              <div className="tag-list project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>FIGMA</span>
                <span>UI / UX</span>
              </div>
            </div>


            <div className="project-visual summrah-visual">
              <div className="visual-top">
                <span>WEB EXPERIENCE</span>
                <span>03 / UI</span>
              </div>

              <div className="browser-mockup">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="browser-address">
                    summrah
                  </div>
                </div>

                <div className="browser-content">
                  <div className="summrah-nav">
                    <strong>SUMMRAH</strong>

                    <div>
                      <span>Stories</span>
                      <span>Explore</span>
                      <span>Map</span>
                    </div>
                  </div>

                  <div className="summrah-hero">
                    <p>ORAL HERITAGE PLATFORM</p>

                    <h4>
                      Stories that
                      <br />
                      stay with us.
                    </h4>

                    <div className="fake-button">
                      EXPLORE STORIES →
                    </div>
                  </div>

                  <div className="summrah-cards">
                    <div>
                      <span>01</span>
                      <strong>STORIES</strong>
                    </div>

                    <div>
                      <span>02</span>
                      <strong>COMMUNITY</strong>
                    </div>

                    <div>
                      <span>03</span>
                      <strong>MAP</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="visual-caption">
                <div>
                  <span>AWARD</span>
                  <strong>3rd Place</strong>
                </div>

                <div>
                  <span>TYPE</span>
                  <strong>Web Platform</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Heritage</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>3RD PLACE — COMPUTING PROJECTS EXPO</span>
            <span>WEB · UI/UX · STORYTELLING</span>
          </div>
        </article>


        {/* =====================================================
            PROJECT 04 — SLEEP HEALTH
        ===================================================== */}
        <article
          className="project-card"
          id="sleep-health-project"
        >
          <div className="project-top">
            <span className="big-index">04</span>

            <div className="project-meta">
              <span>DATA / MACHINE LEARNING</span>
              <span>ISE 291</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <p className="micro-label">
                DATA ANALYTICS · MACHINE LEARNING
              </p>

              <h3>
                Sleep Health &amp;
                <br />
                Lifestyle Analytics.
              </h3>

              <p className="project-description">
                A data analytics and machine learning project
                exploring lifestyle and sleep-related data through
                preprocessing, visualization, classification models,
                and model evaluation.
              </p>

              <div className="tag-list project-tags">
                <span>PYTHON</span>
                <span>DECISION TREE</span>
                <span>MACHINE LEARNING</span>
                <span>DATA ANALYTICS</span>
                <span>JUPYTER</span>
              </div>
            </div>


            <div className="project-visual ml-visual">
              <div className="visual-top">
                <span>MODEL PERFORMANCE</span>
                <span>04 / ANALYTICS</span>
              </div>

              <div className="ml-dashboard">
                <div className="accuracy-panel">
                  <span>BEST MODEL</span>

                  <strong>
                    91.15<small>%</small>
                  </strong>

                  <p>DECISION TREE ACCURACY</p>
                </div>

                <div className="ml-chart-panel">
                  <div className="chart-header">
                    <span>MODEL COMPARISON</span>
                    <span>ACCURACY</span>
                  </div>

                  <div className="bar-row">
                    <span>DT</span>
                    <div>
                      <i style={{ width: '91.15%' }} />
                    </div>
                    <strong>91.15</strong>
                  </div>

                  <div className="bar-row">
                    <span>RF</span>
                    <div>
                      <i style={{ width: '82%' }} />
                    </div>
                    <strong>—</strong>
                  </div>

                  <div className="bar-row">
                    <span>GNB</span>
                    <div>
                      <i style={{ width: '70%' }} />
                    </div>
                    <strong>—</strong>
                  </div>

                  <div className="bar-row">
                    <span>CNB</span>
                    <div>
                      <i style={{ width: '62%' }} />
                    </div>
                    <strong>—</strong>
                  </div>
                </div>

                <div className="ml-classification">
                  <div>
                    <span>CLASS 01</span>
                    <strong>NONE</strong>
                  </div>

                  <div>
                    <span>CLASS 02</span>
                    <strong>INSOMNIA</strong>
                  </div>

                  <div>
                    <span>CLASS 03</span>
                    <strong>SLEEP APNEA</strong>
                  </div>
                </div>
              </div>

              <div className="visual-caption">
                <div>
                  <span>SPLIT</span>
                  <strong>70 / 30</strong>
                </div>

                <div>
                  <span>MODEL</span>
                  <strong>Decision Tree</strong>
                </div>

                <div>
                  <span>CLASSES</span>
                  <strong>3</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>TOP FIVE ISE291 TEAM PROJECT</span>
            <span>PYTHON · ML · ANALYTICS</span>
          </div>
        </article>


        {/* =====================================================
            PROJECT 05 — CONSORTIA
        ===================================================== */}
        <article
          className="project-card"
          id="consortia-project"
        >
          <div className="project-top">
            <span className="big-index">05</span>

            <div className="project-meta">
              <span>SOFTWARE ENGINEERING</span>
              <span>SRS / SYSTEM DESIGN</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <p className="micro-label">
                REQUIREMENTS · SYSTEM DESIGN
              </p>

              <h3>
                Consortia
                <br />
                Management System.
              </h3>

              <p className="project-description">
                A software engineering project focused on
                requirements engineering, stakeholder needs,
                system specifications, user stories, UML modeling,
                traceability, and UI/UX prototyping.
              </p>

              <div className="project-scope">
                <span>PROJECT SCOPE</span>

                <p>
                  Requirements Analysis · System Design ·
                  UI/UX Validation
                </p>
              </div>

              <div className="tag-list project-tags">
                <span>SRS</span>
                <span>UML</span>
                <span>REQUIREMENTS</span>
                <span>USER STORIES</span>
                <span>UI / UX</span>
              </div>
            </div>


            <div className="project-visual consortia-visual">
              <div className="visual-top">
                <span>PROJECT DOCUMENTATION</span>
                <span>05 / SRS</span>
              </div>

              <div className="document-stage">
                <div className="document-sheet document-back">
                  <div className="doc-lines">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="doc-diagram">
                    <span />
                    <span />
                    <span />
                  </div>

                  <strong>USER STORIES</strong>
                </div>

                <div className="document-sheet document-main">
                  <div className="doc-top">
                    <span>SWE 216</span>
                    <span>SRS</span>
                  </div>

                  <div className="doc-body">
                    <small>
                      SOFTWARE REQUIREMENTS SPECIFICATION
                    </small>

                    <h4>
                      Consortia
                      <br />
                      Management
                      <br />
                      System
                    </h4>

                    <i />

                    <p>
                      Requirements
                      <br />
                      &amp; System Design
                    </p>
                  </div>

                  <div className="doc-bottom">
                    <span>KFUPM</span>
                    <span>PROJECT</span>
                  </div>
                </div>

                <div className="document-sheet document-side">
                  <span className="doc-big-number">
                    03
                  </span>

                  <div>
                    <strong>UI / UX</strong>
                    <small>PROTOTYPE</small>
                  </div>
                </div>
              </div>

              <div className="visual-caption">
                <div>
                  <span>01</span>
                  <strong>SRS</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>User Stories</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Prototype</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>SOFTWARE ENGINEERING</span>

            <div className="project-actions">
              <a
                href="/projects/consortia/Consortia-Management-System-SRS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SRS ↗
              </a>

              <a
                href="https://www.figma.com/design/XvF5f7RhoVbWzkUz1WM0MX/Untitled?node-id=0-1&p=f"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW PROTOTYPE ↗
              </a>

              <a
                href="https://github.com/sadeemfahd/Consortia-Management-System-SRS"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </article>


        {/* =====================================================
            PROJECT 06 — DENTAL
        ===================================================== */}
        <article
          className="project-card"
          id="dental-project"
        >
          <div className="project-top">
            <span className="big-index">06</span>

            <div className="project-meta">
              <span>PROJECT MANAGEMENT</span>
              <span>IEEE SPMP</span>
            </div>
          </div>

          <div className="project-layout">
            <div className="project-content">
              <p className="micro-label">
                SOFTWARE PROJECT MANAGEMENT
              </p>

              <h3>
                Dental System
                <br />
                Project Management.
              </h3>

              <p className="project-description">
                A software project management plan for a dental
                system covering project organization, scheduling,
                budgeting, risk management, quality planning,
                communication, and project monitoring.
              </p>

              <div className="project-role">
                <span>MY ROLE</span>
                <strong>Finance Manager</strong>

                <p>
                  Contributed to cost estimation, budgeting,
                  financial planning, and project documentation.
                </p>
              </div>

              <div className="tag-list project-tags">
                <span>PROJECT MANAGEMENT</span>
                <span>IEEE SPMP</span>
                <span>BUDGETING</span>
                <span>SCHEDULING</span>
                <span>RISK MANAGEMENT</span>
              </div>
            </div>


            <div className="project-visual dental-visual">
              <div className="visual-top">
                <span>PROJECT PLAN</span>
                <span>06 / SPMP</span>
              </div>

              <div className="management-dashboard">
                <div className="management-heading">
                  <div>
                    <span>PROJECT</span>
                    <strong>Dental System</strong>
                  </div>

                  <div>
                    <span>ROLE</span>
                    <strong>Finance Manager</strong>
                  </div>
                </div>

                <div className="management-metrics">
                  <div>
                    <span>01</span>
                    <strong>BUDGET</strong>
                    <small>COST PLANNING</small>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>SCHEDULE</strong>
                    <small>TIMELINE</small>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>RISKS</strong>
                    <small>MANAGEMENT</small>
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-title">
                    <span>PROJECT SCHEDULE</span>
                    <span>PLAN</span>
                  </div>

                  <div className="timeline-row">
                    <span>Planning</span>
                    <i className="timeline-bar bar-one" />
                  </div>

                  <div className="timeline-row">
                    <span>Design</span>
                    <i className="timeline-bar bar-two" />
                  </div>

                  <div className="timeline-row">
                    <span>Development</span>
                    <i className="timeline-bar bar-three" />
                  </div>

                  <div className="timeline-row">
                    <span>Testing</span>
                    <i className="timeline-bar bar-four" />
                  </div>
                </div>

                <div className="budget-row">
                  <span>COST ESTIMATION</span>
                  <span>•</span>
                  <span>BUDGETING</span>
                  <span>•</span>
                  <span>MONITORING</span>
                </div>
              </div>

              <div className="visual-caption">
                <div>
                  <span>STANDARD</span>
                  <strong>IEEE SPMP</strong>
                </div>

                <div>
                  <span>FOCUS</span>
                  <strong>Budget</strong>
                </div>

                <div>
                  <span>TYPE</span>
                  <strong>Team Project</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="project-footer">
            <span>SOFTWARE PROJECT MANAGEMENT</span>

            <div className="project-actions">
              <a
                href="/projects/dental/Dental-System-SPMP.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SPMP ↗
              </a>

              <a
                href="/projects/dental/Schedule-Cost-Budget.ods"
                download
              >
                SCHEDULE &amp; BUDGET ↓
              </a>

              <a
                href="https://github.com/sadeemfahd/Dental-System-Project-Management"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </article>

        <div className="projects-end">
          <span>SELECTED PROJECTS</span>
          <span>
            SOFTWARE · CLOUD · VR · DATA
          </span>
        </div>
      </section>


      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section className="skills" id="skills">
        <div className="section-number">
          05 / SKILLS
        </div>

        <div className="section-header">
          <div>
            <p className="section-label">
              WHAT I WORK WITH
            </p>

            <h2>
              Skills &amp;
              <br />
              Technologies.
            </h2>
          </div>

          <p className="section-intro">
            Technologies and tools I have worked with across
            software development, cloud applications, mobile
            development, and immersive VR experiences.
          </p>
        </div>

        <div className="skills-grid">

          <article className="skill-card">
            <div className="skill-top">
              <span>01</span>
              <small>CORE</small>
            </div>

            <h3>Programming</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>C#</span>
              <span>Dart</span>
            </div>
          </article>


          <article className="skill-card">
            <div className="skill-top">
              <span>02</span>
              <small>WEB</small>
            </div>

            <h3>
              Web
              <br />
              Development
            </h3>

            <div className="skill-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>REST APIs</span>
            </div>
          </article>


          <article className="skill-card">
            <div className="skill-top">
              <span>03</span>
              <small>MOBILE</small>
            </div>

            <h3>
              Mobile
              <br />
              Development
            </h3>

            <div className="skill-list">
              <span>Flutter</span>
              <span>Dart</span>
            </div>
          </article>


          <article className="skill-card">
            <div className="skill-top">
              <span>04</span>
              <small>CLOUD</small>
            </div>

            <h3>
              Cloud &amp;
              <br />
              DevOps
            </h3>

            <div className="skill-list">
              <span>Google Cloud</span>
              <span>Cloud Run</span>
              <span>API Gateway</span>
              <span>Docker</span>
              <span>Terraform</span>
              <span>CI/CD</span>
            </div>
          </article>


          <article className="skill-card">
            <div className="skill-top">
              <span>05</span>
              <small>IMMERSIVE</small>
            </div>

            <h3>VR / XR</h3>

            <div className="skill-list">
              <span>Unity</span>
              <span>XR Interaction Toolkit</span>
              <span>Meta Quest</span>
              <span>C#</span>
            </div>
          </article>


          <article className="skill-card">
            <div className="skill-top">
              <span>06</span>
              <small>TOOLS</small>
            </div>

            <h3>
              Databases
              <br />
              &amp; Tools
            </h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>Firestore</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </article>

        </div>

        <div className="marquee skills-marquee">
          <div className="marquee-track">
            <span>PYTHON</span><i>✦</i>
            <span>UNITY</span><i>✦</i>
            <span>REACT</span><i>✦</i>
            <span>FLUTTER</span><i>✦</i>
            <span>GOOGLE CLOUD</span><i>✦</i>
            <span>JAVASCRIPT</span><i>✦</i>
            <span>DOCKER</span><i>✦</i>

            <span>PYTHON</span><i>✦</i>
            <span>UNITY</span><i>✦</i>
            <span>REACT</span><i>✦</i>
            <span>FLUTTER</span><i>✦</i>
            <span>GOOGLE CLOUD</span><i>✦</i>
            <span>JAVASCRIPT</span><i>✦</i>
            <span>DOCKER</span><i>✦</i>
          </div>
        </div>
      </section>


      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}
      <section
        className="achievements"
        id="achievements"
      >
        <div className="section-number">
          06 / ACHIEVEMENTS
        </div>

        <div className="section-header">
          <div>
            <p className="section-label">
              MILESTONES &amp; RECOGNITION
            </p>

            <h2>
              Achievements
              <br />
              &amp; Recognition.
            </h2>
          </div>

          <p className="section-intro">
            Awards, recognitions, and programs reflecting
            my academic journey, project work, collaboration,
            and professional growth.
          </p>
        </div>


        <article className="achievement-card">
          <div className="achievement-content">
            <div className="achievement-meta">
              <span className="big-index">01</span>

              <div>
                <span>AWARD</span>
                <span>2025</span>
              </div>
            </div>

            <div className="achievement-text">
              <p className="micro-label">
                KFUPM COMPUTING PROJECTS EXPO
              </p>

              <h3>
                3rd Place —
                <br />
                SWE 363
              </h3>

              <p>
                Awarded 3rd place in SWE 363 at the KFUPM
                Computing Projects Expo for Summrah.
              </p>

              <div className="tag-list">
                <span>SUMMRAH</span>
                <span>WEB DEVELOPMENT</span>
                <span>3RD PLACE</span>
              </div>

              <a
                href="#summrah-project"
                className="achievement-link"
              >
                VIEW SUMMRAH PROJECT
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="achievement-image">
            <img
              src={summrahAchievement}
              alt="SWE 363 third place certificate"
            />
          </div>
        </article>


        <article className="achievement-card">
          <div className="achievement-content">
            <div className="achievement-meta">
              <span className="big-index">02</span>

              <div>
                <span>RECOGNITION</span>
              </div>
            </div>

            <div className="achievement-text">
              <p className="micro-label">
                KFUPM INDUSTRIAL &amp; SYSTEMS ENGINEERING CLUB
              </p>

              <h3>
                Top Five
                <br />
                ISE291 Project
              </h3>

              <p>
                Recognized as part of one of the top five
                ISE291 team projects for exceptional project
                performance and teamwork.
              </p>

              <div className="tag-list">
                <span>DATA ANALYTICS</span>
                <span>TEAM PROJECT</span>
                <span>TOP FIVE</span>
              </div>

              <a
                href="#sleep-health-project"
                className="achievement-link"
              >
                VIEW SLEEP HEALTH PROJECT
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="achievement-image">
            <img
              src={ise291Achievement}
              alt="Top five ISE291 project certificate"
            />
          </div>
        </article>


        <article className="achievement-card">
          <div className="achievement-content">
            <div className="achievement-meta">
              <span className="big-index">03</span>

              <div>
                <span>SUCCESS STORY</span>
                <span>2025</span>
              </div>
            </div>

            <div className="achievement-text">
              <p className="micro-label">
                VR HOUSE × IAU
              </p>

              <h3>
                Featured
                <br />
                Success Story
              </h3>

              <p>
                Featured as a Success Story during VR House&apos;s
                visit to Imam Abdulrahman Bin Faisal University,
                sharing my internship journey and VR experience.
              </p>

              <div className="tag-list">
                <span>VR HOUSE</span>
                <span>IAU</span>
                <span>VR / XR</span>
              </div>
            </div>
          </div>

          <div className="achievement-image achievement-photo">
            <img
              src={successStoryAchievement}
              alt="VR House Success Story"
            />
          </div>
        </article>


        <article className="achievement-card">
          <div className="achievement-content">
            <div className="achievement-meta">
              <span className="big-index">04</span>

              <div>
                <span>PARTICIPATION</span>
                <span>2025</span>
              </div>
            </div>

            <div className="achievement-text">
              <p className="micro-label">
                CONSULTING CHAMPIONSHIP
              </p>

              <h3>
                Consulting
                <br />
                Championship
              </h3>

              <p>
                Successfully participated in the Consulting
                Championship 2025, strengthening consulting,
                problem-solving, and teamwork skills.
              </p>

              <div className="tag-list">
                <span>CONSULTING</span>
                <span>PROBLEM SOLVING</span>
                <span>TEAMWORK</span>
              </div>
            </div>
          </div>

          <div className="achievement-image">
            <img
              src={consultingAchievement}
              alt="Consulting Championship certificate"
            />
          </div>
        </article>


        <article className="achievement-card">
          <div className="achievement-content">
            <div className="achievement-meta">
              <span className="big-index">05</span>

              <div>
                <span>PROGRAM</span>
                <span>2026</span>
              </div>
            </div>

            <div className="achievement-text">
              <p className="micro-label">
                KFUPM TEAM DESIGN PROGRAM
              </p>

              <h3>
                TEAM Design
                <br />
                Program
              </h3>

              <p>
                Participated in the KFUPM TEAM Design Program,
                completing a collaborative design experience.
              </p>

              <div className="tag-list">
                <span>TEAM DESIGN</span>
                <span>COLLABORATION</span>
                <span>KFUPM</span>
              </div>
            </div>
          </div>

          <div className="achievement-image">
            <img
              src={teamDesignAchievement}
              alt="TEAM Design Program certificate"
            />
          </div>
        </article>

        <div className="projects-end">
          <span>LEARNING · BUILDING · GROWING</span>
          <span>2025 — 2026</span>
        </div>
      </section>


      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="contact" id="contact">
        <div className="section-number">
          07 / CONTACT
        </div>

        <div className="contact-main">
          <div className="contact-heading">
            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's
              <br />
              connect.
            </h2>
          </div>

          <div className="contact-right">
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations,
              and conversations about software, technology,
              and creative digital experiences.
            </p>

            <div className="contact-links">

              <a
                href="mailto:sadeemfahd@outlook.sa"
                className="contact-link"
              >
                <div>
                  <span>01</span>
                  <small>EMAIL</small>
                </div>

                <strong>
                  sadeemfahd@outlook.sa
                </strong>

                <i>↗</i>
              </a>


              <a
                href="https://www.linkedin.com/in/sadeem-alotaibi-0b48092b5"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div>
                  <span>02</span>
                  <small>LINKEDIN</small>
                </div>

                <strong>
                  Connect on LinkedIn
                </strong>

                <i>↗</i>
              </a>


              <a
                href="https://github.com/sadeemfahd"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div>
                  <span>03</span>
                  <small>GITHUB</small>
                </div>

                <strong>
                  @sadeemfahd
                </strong>

                <i>↗</i>
              </a>

            </div>
          </div>
        </div>

        <div className="contact-big-text">
          <span>LET'S BUILD</span>
          <span>SOMETHING GREAT.</span>
        </div>

        <footer className="footer">
          <div>
            <strong>SADEEM AL-OTAIBI</strong>
            <span>SOFTWARE ENGINEER</span>
          </div>

          <a href="#home">
            BACK TO TOP ↑
          </a>

          <span>© 2026</span>
        </footer>
      </section>

    </main>
  )
}

export default App
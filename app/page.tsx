"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Download, Mail, MapPin, Moon, Sun } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const githubUrl = "https://github.com/rishinayini";
const linkedinUrl = "https://www.linkedin.com/in/rishi-nayini";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Python",
  "FastAPI",
  "SQL",
  "Computer Vision",
];

const experiences = [
  {
    period: "OCT 2026 — PRESENT",
    role: "Software Engineering Intern",
    company: "Vanna Infotech",
    detail:
      "Building enterprise software fundamentals through Java, Spring Boot, REST APIs, SQL transactions, security, automated testing, and responsive component architecture.",
    tags: ["Java", "Spring Boot", "REST", "SQL"],
  },
  {
    period: "SEP 2026 — PRESENT",
    role: "Engineer, TRENDS",
    company: "Nebula Labs",
    detail:
      "Maintaining UTD Trends and shipping features across the Nebula open-source ecosystem. Debugging production issues through Sentry and contributing through reviewed, CI-backed GitHub workflows.",
    tags: ["React", "Next.js", "Sentry", "Open Source"],
  },
  {
    period: "SEP 2026 — PRESENT",
    role: "AIM Mentee, NABU",
    company: "Artificial Intelligence Society",
    detail:
      "Built a Python handwriting-error detector using skeleton-based chamfer-distance matching, then exposed it through FastAPI with multilingual recognition powered by PaddleOCR.",
    tags: ["Python", "NumPy", "SciPy", "PaddleOCR"],
  },
];

const reveal = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function GithubMark({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinMark({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.7c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.2 1.22-3.75 2.07V8.25H9.21V21h3.25v-6.31c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.3Z" />
    </svg>
  );
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="text-comment">{"//"}</span> {index} · {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

function WindowBar({ file }: { file: string }) {
  return (
    <div className="window-bar">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <span>{file}</span>
      <span className="w-[42px]" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 25, restDelta: 0.001 });
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const activeTheme = document.documentElement.dataset.theme;
    setTheme(activeTheme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <main id="top">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <header className="site-header">
        <nav className="shell nav-shell" aria-label="Primary navigation">
          <a href="#top" className="brand" aria-label="Venkata Nayini, back to top">
            <span className="text-keyword">const</span>
            <span>venkata</span>
            <span className="text-comment">= developer;</span>
          </a>
          <div className="nav-links hidden items-center gap-7 md:flex">
            <a href="#work">work</a>
            <a href="#experience">experience</a>
            <a href="#about">about</a>
          </div>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a className="nav-cta" href="mailto:dal074854@utdallas.edu">
              <span className="status-dot" />
              <span className="hidden sm:inline">available</span>
            </a>
          </div>
        </nav>
      </header>

      <section className="hero shell">
        <motion.div
          className="hero-copy"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">
            <span className="text-keyword">class</span> SoftwareEngineer
          </p>
          <h1>
            I build software
            <span>that solves real problems.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Venkata Nayini, a computer science student focused on thoughtful full-stack
            products, developer tools, and applied AI.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              View my work <ArrowDown className="size-4" />
            </a>
            <a
              href="/files/venkata-nayini-resume.pdf"
              target="_blank"
              className="button button-secondary"
            >
              <Download className="size-4" /> Résumé
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin className="size-3.5" /> Dallas, TX
            </span>
            <span>
              <span className="status-dot" /> Open to opportunities
            </span>
          </div>
        </motion.div>

        <motion.div
          className="editor-card"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <WindowBar file="profile.ts" />
          <div className="profile-code">
            <div className="portrait-frame">
              <Image
                src="/images/venkata-nayini.webp"
                alt="Portrait of Venkata Nayini"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
            </div>
            <div className="code-block" aria-label="Developer profile">
              <p>
                <span className="line-number">01</span>
                <span className="text-keyword">const</span> developer = {"{"}
              </p>
              <p>
                <span className="line-number">02</span>
                <span className="pl-5 text-property">name</span>:{" "}
                <span className="text-string">&quot;Venkata Nayini&quot;</span>,
              </p>
              <p>
                <span className="line-number">03</span>
                <span className="pl-5 text-property">focus</span>:{" "}
                <span className="text-string">&quot;useful software&quot;</span>,
              </p>
              <p>
                <span className="line-number">04</span>
                <span className="pl-5 text-property">curious</span>:{" "}
                <span className="text-keyword">true</span>,
              </p>
              <p>
                <span className="line-number">05</span>
                {"};"}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="stack-bar">
        <div className="shell">
          <span className="text-comment">stack /</span>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <section id="work" className="section shell">
        <motion.div {...reveal}>
          <SectionHeading
            index="01"
            label="selected work"
            title="Projects built with purpose, not just polish."
          />
        </motion.div>

        <div className="project-list">
          <motion.article {...reveal} className="project-card">
            <div key="visual" className="project-visual penguin-visual">
              <WindowBar file="penguinre.app" />
              <div className="relative mx-auto h-52 w-44 md:h-60 md:w-52">
                <Image
                  src="/images/penguinre.webp"
                  alt="PenguinRE project mascot"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </div>
            <div key="content" className="project-content">
              <p className="eyebrow">
                <span className="text-number">01</span> / HackUTD
              </p>
              <h3>PenguinRE</h3>
              <p>
                A fast-moving team build taken from whiteboard to working demo under real hackathon
                constraints, with a clear product identity and focused execution.
              </p>
              <div className="tag-list">
                <span>Product design</span>
                <span>Rapid prototyping</span>
                <span>Team build</span>
              </div>
            </div>
          </motion.article>

          <motion.article {...reveal} className="project-card">
            <div key="visual" className="project-visual syntax-visual">
              <WindowBar file="engine.ts" />
              <div className="syntax-code">
                <p>
                  <span className="text-keyword">interface</span>{" "}
                  <span className="text-type">Problem</span> {"{"}
                </p>
                <p className="pl-5">
                  <span className="text-property">rating</span>:{" "}
                  <span className="text-type">number</span>;
                </p>
                <p className="pl-5">
                  <span className="text-property">runtime</span>:{" "}
                  <span className="text-string">&quot;wasm&quot;</span>;
                </p>
                <p>{"}"}</p>
                <p className="mt-4 text-comment">{"// learn. solve. improve."}</p>
              </div>
            </div>
            <div key="content" className="project-content">
              <p className="eyebrow">
                <span className="text-number">02</span> / Developer platform
              </p>
              <div className="flex items-center justify-between gap-4">
                <h3>Syntaxtopia</h3>
                <a
                  href={`${githubUrl}/syntaxtopia`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                  aria-label="View Syntaxtopia on GitHub"
                >
                  <GithubMark />
                </a>
              </div>
              <p>
                Community-ranked learning roadmaps and adaptive coding practice, powered by an
                Elo-based problem engine and in-browser Python execution with WebAssembly.
              </p>
              <div className="tag-list">
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>WebAssembly</span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="experience" className="section section-muted">
        <div className="shell">
          <motion.div {...reveal}>
            <SectionHeading
              index="02"
              label="experience"
              title="Learning quickly. Shipping carefully."
            />
          </motion.div>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <motion.article {...reveal} className="experience-row" key={item.company}>
                <div key="index" className="experience-index">
                  0{index + 1}
                </div>
                <div key="role">
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-company">@ {item.company}</p>
                </div>
                <div key="detail">
                  <p className="experience-detail">{item.detail}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section shell">
        <motion.div {...reveal} className="about-grid">
          <div>
            <SectionHeading index="03" label="about" title="Curious about the entire system." />
            <p className="about-copy">
              I&apos;m a Computer Science student at UT Dallas with a Statistics minor. I care about
              the full path from algorithm to interface: how data moves, how systems fail, and how
              good product decisions make complex technology feel simple.
            </p>
          </div>
          <div className="education-card">
            <WindowBar file="education.json" />
            <div className="code-block education-code">
              <p>{"{"}</p>
              <p>
                <span className="pl-5 text-property">&quot;school&quot;</span>:{" "}
                <span className="text-string">&quot;UT Dallas&quot;</span>,
              </p>
              <p>
                <span className="pl-5 text-property">&quot;degree&quot;</span>:{" "}
                <span className="text-string">&quot;B.S. Computer Science&quot;</span>,
              </p>
              <p>
                <span className="pl-5 text-property">&quot;minor&quot;</span>:{" "}
                <span className="text-string">&quot;Statistics&quot;</span>,
              </p>
              <p>
                <span className="pl-5 text-property">&quot;graduation&quot;</span>:{" "}
                <span className="text-string">&quot;May 2028&quot;</span>,
              </p>
              <p>
                <span className="pl-5 text-property">&quot;gpa&quot;</span>:{" "}
                <span className="text-number">3.6</span>
              </p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="footer">
        <div className="shell">
          <motion.div {...reveal} className="footer-main">
            <div>
              <p className="eyebrow">
                <span className="text-keyword">export default</span> Contact
              </p>
              <h2>Let&apos;s build something useful.</h2>
              <p>
                Have a project, opportunity, or interesting problem? I&apos;d like to hear about it.
              </p>
            </div>
            <a className="button button-primary" href="mailto:dal074854@utdallas.edu">
              Start a conversation <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
          <div className="footer-bottom">
            <p>© 2026 Venkata Nayini</p>
            <div>
              <a href="mailto:dal074854@utdallas.edu" aria-label="Email">
                <Mail className="size-4" />
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubMark />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinMark />
              </a>
              <span>
                Built with <Code2 className="size-3.5" /> Next.js
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

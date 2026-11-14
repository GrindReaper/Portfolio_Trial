
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Database,
  Monitor,
  Terminal,
  Menu,
  X,
} from "lucide-react";

const skills = [
  {
    icon: <Code2 size={22} />,
    title: "Web Development",
    description: "Building responsive and modern websites.",
    tools: "HTML · CSS · JavaScript · React · Next.js",
  },
  {
    icon: <Database size={22} />,
    title: "Database Management",
    description: "Organizing, managing, and maintaining data.",
    tools: "MySQL · SQL · Database Design",
  },
  {
    icon: <Monitor size={22} />,
    title: "IT Support",
    description: "Troubleshooting hardware and software issues.",
    tools: "Technical Support · System Maintenance",
  },
  {
    icon: <Terminal size={22} />,
    title: "System Development",
    description: "Developing practical digital solutions.",
    tools: "Programming · System Analysis · Automation",
  },
];

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio showcasing my technical skills, experience, and projects.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    number: "02",
    category: "SYSTEM DEVELOPMENT",
    title: "Management System",
    description:
      "A system concept designed to organize information and improve everyday workflows.",
    tech: ["JavaScript", "Database", "UI Design"],
    link: "#",
  },
  {
    number: "03",
    category: "DATA MANAGEMENT",
    title: "Data Reporting Dashboard",
    description:
      "A dashboard concept for presenting business data, performance, and useful insights.",
    tech: ["Excel", "Data Analysis", "Reporting"],
    link: "#",
  },
];

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.96V9.1h2.97v9.6ZM6.44 7.79a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.26 10.91h-2.96v-4.67c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H9.44V9.1h2.84v1.31h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.98 3.58 4.56v5.28Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-cyan-400 selection:text-black">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-bold tracking-tight">
            APT<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">Home</a>
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400 md:block"
          >
            Let's Talk <ArrowUpRight className="ml-1 inline" size={15} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#09090b] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-gray-300">
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 lg:px-10"
      >
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* INTRODUCTION */}
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                IT Professional
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Aaron Paul
              <br />
              <span className="text-gray-500">Tiwan.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Passionate about technology, system development, and creating
              digital solutions that make a difference. I turn ideas into
              functional and meaningful experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore My Work <ArrowUpRight className="ml-2 inline" size={17} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/GrindReaper"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/aaron-paul-tiwan-18473932b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <LinkedinIcon />
              </a>

              <a
                href="mailto:aaronpaultiwan26@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflows-hidden rounded-[2rem] border border-cyan-400/30 bg-[#111115] p-2 shadow-2xl shadow-cyan-950/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/profile.png"
                  alt="Aaron Paul Tiwan - IT Professional"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/50 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111115] px-5 py-4 shadow-xl sm:-left-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Based in
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Philippines
              </p>
            </div>

            <div className="absolute -right-3 -top-4 h-16 w-16 rounded-full border border-cyan-400/30 sm:-right-5" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
              01 / About Me
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Technology is more than a tool.
              <span className="text-gray-500"> It's how I create solutions.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-gray-400">
            <p>
              I'm Aaron Paul Tiwan, an IT Professional with an interest in
              technology, software development, data management, and
              information systems.
            </p>
            <p>
              I enjoy exploring new technologies, solving technical problems,
              and developing solutions that improve productivity and simplify
              processes.
            </p>
            <p>
              My goal is to continuously grow my technical knowledge and
              contribute to projects that create real value.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 / Expertise
          </p>

          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-bold sm:text-5xl">Skills & Expertise</h2>
            <p className="max-w-md text-sm leading-7 text-gray-500">
              A combination of technical knowledge, problem-solving, and
              continuous learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.04]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="text-cyan-400">{skill.icon}</div>
                  <span className="text-xs text-gray-600">0{index + 1}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold">{skill.title}</h3>
                <p className="mb-6 text-sm leading-7 text-gray-400">
                  {skill.description}
                </p>
                <p className="text-xs leading-6 text-gray-500">{skill.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 / Selected Work
          </p>

          <h2 className="mb-14 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.link}
                className="group grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan-400/40 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-9"
              >
                <span className="text-sm text-gray-600">{project.number}</span>

                <div>
                  <p className="mb-3 text-xs tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mb-3 text-2xl font-semibold transition group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <p className="mb-5 max-w-2xl text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  className="text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  size={24}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            04 / Contact
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="text-5xl font-bold leading-tight sm:text-7xl">
                Let's build
                <br />
                <span className="text-gray-500">something great.</span>
              </h2>

              <p className="mt-8 max-w-lg leading-8 text-gray-400">
                Have a project, opportunity, or idea in mind? I'd love to
                connect and explore how we can work together.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <a
                href="mailto:aaronpaultiwan26@gmail.com"
                className="inline-flex items-center gap-3 border-b border-cyan-400 pb-3 text-xl font-medium transition hover:text-cyan-400 sm:text-2xl"
              >
                Get in touch <ArrowUpRight size={24} />
              </a>

              <div className="mt-10 flex gap-5">
                <a
                  href="https://github.com/GrindReaper"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  <GithubIcon />
                </a>

                <a
                  href="https://www.linkedin.com/in/aaron-paul-tiwan-18473932b/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="mailto:aaronpaultiwan26@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 transition hover:text-cyan-400"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-gray-600 sm:flex-row">
          <p>© 2026 Aaron Paul Tiwan. All rights reserved.</p>
          <p>Designed & Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

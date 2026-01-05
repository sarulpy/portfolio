import React from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built to practice React, Tailwind CSS, and modern UI design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "#",
    github: "https://github.com/sarulpy",
  },
]

const Portfolio = () => {
  return (
    <div
      className="min-h-screen bg-[#030014] text-white px-[5%] sm:px-[5%] lg:px-[10%] py-20"
      id="Portofolio"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Projects I built while learning web development.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
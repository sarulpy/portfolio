import React from "react"
import { Mail, Github, Instagram } from "lucide-react"

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-[#030014] text-white px-[5%] sm:px-[5%] lg:px-[10%] py-20"
      id="Contact"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Feel free to reach out if you want to connect or discuss learning together.
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <p className="text-gray-300 text-center mb-8">
          I am a student learning web development.  
          You can contact me through email or social media below.
        </p>

        <div className="flex flex-col gap-5">
          <a
            href="mailto:sarulpy@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <Mail className="w-5 h-5 text-[#6366f1]" />
            <span className="text-gray-200">sarulpy@gmail.com</span>
          </a>

          <a
            href="https://github.com/sarulpy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <Github className="w-5 h-5 text-[#6366f1]" />
            <span className="text-gray-200">github.com/sarulpy</span>
          </a>

          <a
            href="https://www.instagram.com/sarul115566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            <Instagram className="w-5 h-5 text-[#6366f1]" />
            <span className="text-gray-200">@sarul115566</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
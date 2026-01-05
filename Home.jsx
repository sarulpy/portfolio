import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Learning Portfolio
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Sarul
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Portfolio
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm">
        {text}
        <Icon className="w-4 h-4" />
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="p-3 rounded-xl bg-black/50 border border-white/10">
      <Icon className="w-5 h-5 text-gray-300" />
    </button>
  </a>
));

const WORDS = [
  "Vocational High School Student (RPL)",
  "Web & Hardware Enthusiast"
];

const TECH_STACK = ["HTML", "CSS", "JavaScript", "React"];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/sarulpy" },
  { icon: Instagram, link: "https://www.instagram.com/sarul115566" },
  { icon: Mail, link: "mailto:sarulpy@gmail.com" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, isTyping, wordIndex])

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? 100 : 50)
    return () => clearTimeout(timeout)
  }, [handleTyping, isTyping])

  return (
    <div className="min-h-screen bg-[#030014] px-[5%]" id="Home">
      <div className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <StatusBadge />
          <MainTitle />

          <div className="h-8 flex items-center">
            <span className="text-xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              {text}
            </span>
          </div>

          <p className="text-gray-400 max-w-xl">
            I am a vocational high school student majoring in software engineering,
            passionate about learning web development and technology step by step.
          </p>

          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech, i) => <TechStack key={i} tech={tech} />)}
          </div>

          <div className="flex gap-3">
            <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
            <CTAButton href="#Contact" text="Contact" icon={Mail} />
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((s, i) => <SocialLink key={i} {...s} />)}
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[400px]">
          <DotLottieReact
            src="https://lottie.host/4953c6ff-f8b0-45cd-b667-baf472bba2ae/EHnn08K4mW.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
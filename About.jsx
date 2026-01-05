import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Learning and growing in technology
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 p-0 py-2">
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)]">
        <img
          src="/Photo.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1200}>
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className="text-3xl font-bold text-white">
          {value}
        </span>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">
        {label}
      </p>
      <p className="text-xs text-gray-400">
        {description}
      </p>
    </div>
  </div>
));

const AboutPage = () => {

  const statsData = useMemo(() => [
    {
      icon: Code,
      value: 1,
      label: "Projects",
      description: "Personal learning portfolio",
      animation: "fade-right",
    },
    {
      icon: Award,
      value: 0,
      label: "Certificates",
      description: "Still learning and improving",
      animation: "fade-up",
    },
    {
      icon: Globe,
      value: "Learning",
      label: "Status",
      description: "Focused on skill development",
      animation: "fade-left",
    },
  ], []);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-10" id="About">
      <Header />

      <div className="w-full mx-auto pt-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">
                M. Sarul Ramadan
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg text-gray-400 leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              I am a vocational high school student majoring in Software Engineering (RPL).
              I am interested in web development and basic hardware knowledge.
              This portfolio is used as a place to learn, practice, and document my progress in technology.
            </p>

            <blockquote 
              className="italic text-gray-300 border-l-4 border-[#6366f1] pl-4"
              data-aos="fade-up"
            >
              "Learning step by step is better than not starting at all."
            </blockquote>

          </div>

          <ProfileImage />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);
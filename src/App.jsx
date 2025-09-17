import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Award, BookOpenCheck, FileText } from "lucide-react";

export default function Portfolio() {
  const contact = {
    email: "er.swaraj@outlook.com",
    linkedin: "https://www.linkedin.com/in/eng-swaraj",
    github: "https://github.com/eng-swaraj",
    location: "Bangalore Rural, Karnataka, India",
    resume: process.env.PUBLIC_URL + "/Profile.pdf", // ✅ Safe for GitHub Pages
  };

  const skills = [
    "Generative AI & LLMs",
    "Python for AI",
    "Prompt Engineering & RAG",
    "IoT & Embedded Systems (Arduino)",
    "Automation & Data Pipelines",
    "Power BI & Visualization",
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "entomo",
      period: "Oct 2022 - Present",
      bullets: [
        "Worked on AI-driven automation and data pipelines.",
        "Built scraping frameworks and improved API integrations.",
      ],
    },
    {
      role: "Product Engineer",
      company: "entomo",
      period: "Oct 2021 - Sep 2022",
      bullets: [
        "Developed Python pipelines to process multi-source datasets.",
        "Built Power BI dashboards for actionable insights.",
      ],
    },
    {
      role: "IoT Trainer / Lab Lead",
      company: "Don Bosco Institute of Technology",
      period: "Nov 2020 - Aug 2021",
      bullets: [
        "Conducted IoT workshops and guided Arduino projects.",
        "Led Innovation & IoT lab as a trainer and mentor.",
      ],
    },
  ];

  const projects = [
    {
      title: "COVID-19 Tracker (OLED)",
      desc: "Final-year Arduino project displaying real-time COVID-19 stats on OLED.",
      link: "https://github.com/swaraj-kumar/VTU-Final-year-project",
      img: process.env.PUBLIC_URL + "/project1.jpg", // ✅
    },
    {
      title: "AI Automation Pipeline",
      desc: "Automation pipeline for data ingestion, cleaning, and analysis using Python and AI models.",
      link: "https://github.com/eng-swaraj/ai-automation",
      img: process.env.PUBLIC_URL + "/project2.jpg", // ✅
    },
  ];

  const achievements = [
    { title: "Best IoT Trainer Award", org: "Don Bosco Institute of Technology", year: "2021" },
    { title: "Employee of the Quarter", org: "entomo", year: "2023" },
  ];

  const certifications = [
    { title: "Machine Learning & AI Program", org: "IIIT Bangalore & upGrad", year: "2024" },
    { title: "Python for Data Science", org: "Coursera", year: "2022" },
  ];

  const education = [
    { level: "Bachelor of Engineering (BE) in Electronics & Communication", school: "Visvesvaraya Technological University", period: "2017 - 2021" },
    { level: "Senior Secondary (12th)", school: "DAV Public School", period: "2015 - 2017" },
    { level: "Secondary (10th)", school: "DAV Public School", period: "2014 - 2015" },
  ];

  const articles = [
    { title: "Bridging IoT with Generative AI", platform: "Medium", link: "https://medium.com/@eng-swaraj/bridging-iot-with-genai", date: "2024" },
    { title: "Building Scalable AI Pipelines", platform: "Hashnode", link: "https://hashnode.com/@eng-swaraj/building-scalable-ai-pipelines", date: "2023" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 text-zinc-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-md bg-white/70 shadow-sm z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-extrabold tracking-tight">Swaraj Kumar</h1>
          <nav className="flex gap-6 text-sm font-medium">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Achievements", "#achievements"],
              ["Certifications", "#certifications"],
              ["Education", "#education"],
              ["Articles & Posts", "#articles"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a key={label} href={link} className="hover:text-pink-600 transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-20">
        {/* Hero */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"} // ✅
              alt="Swaraj Kumar"
              className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-pink-200"
            />
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m Swaraj 👋 <br />
              <span className="text-pink-600">AI Engineer & IoT Trainer</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              I work with Generative AI, LLMs, and automation to build intelligent systems. With strong foundations in software engineering, I also train learners in IoT and embedded systems. My goal is to bridge cutting-edge AI with practical applications.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href={contact.resume}
                download
                className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm shadow-md transition"
              >
                Download Resume
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 border rounded-full text-sm hover:border-pink-600 transition"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 border rounded-full text-sm hover:border-pink-600 transition"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>

          <aside className="p-6 bg-white rounded-2xl shadow-lg border border-pink-100">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm mt-2">{contact.location}</p>
            <a href={`mailto:${contact.email}`} className="block mt-2 text-sm text-pink-600 flex items-center gap-2">
              <Mail size={14} /> {contact.email}
            </a>
            <p className="mt-6 text-sm font-medium text-zinc-600">Core Skills</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {skills.slice(0, 4).map((s) => (
                <li key={s} className="px-3 py-1 bg-pink-50 rounded-full shadow-sm">
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h3 className="text-2xl font-bold">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-pink-100 hover:shadow-pink-200/50 transition"
              >
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-zinc-700 mt-2">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-pink-600 hover:underline">
                  View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="mt-6 space-y-6">
            {experience.map((e) => (
              <div key={e.role} className="border-l-4 border-pink-300 pl-4 hover:bg-pink-50 rounded-sm transition">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="font-semibold text-lg">
                      {e.role} — {e.company}
                    </h4>
                    <p className="text-sm text-zinc-600">{e.period}</p>
                  </div>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm text-zinc-700 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl font-bold">Achievements</h3>
          <div className="mt-6 space-y-4">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <Award className="text-pink-600" size={20} />
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-zinc-600">
                    {a.org} — {a.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <div className="mt-6 space-y-4">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <BookOpenCheck className="text-pink-600" size={20} />
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-zinc-600">
                    {c.org} — {c.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-6 space-y-4">
            {education.map((ed, i) => (
              <div key={i} className="flex flex-col">
                <p className="font-medium">{ed.level}</p>
                <p className="text-sm text-zinc-600">
                  {ed.school} — {ed.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Articles & Posts */}
        <section id="articles" className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h3 className="text-2xl font-bold">Articles & Posts</h3>
          <div className="mt-6 space-y-4">
            {articles.map((art, i) => (
              <div key={i} className="flex items-center gap-3">
                <FileText className="text-pink-600" size={20} />
                <div>
                  <a href={art.link} target="_blank" rel="noreferrer" className="font-medium hover:underline text-pink-700">
                    {art.title}
                  </a>
                  <p className="text-sm text-zinc-600">
                    {art.platform} — {art.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">Skills & Tools</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-pink-50 hover:bg-pink-100 border border-pink-100 rounded-full text-sm transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-gradient-to-r from-pink-600 to-rose-700 text-white p-10 rounded-2xl text-center shadow-xl"
        >
          <h3 className="text-3xl font-bold">Let’s connect 🚀</h3>
          <p className="mt-4 text-base max-w-xl mx-auto">
            Working on AI-powered solutions and IoT training. If you’re looking for collaboration or training sessions, let’s connect!
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 bg-white text-pink-700 font-semibold rounded-full shadow hover:scale-105 transition"
            >
              Email me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 py-8">
          © {new Date().getFullYear()} Swaraj Kumar — AI Engineer & IoT Trainer • Bangalore Rural
        </footer>
      </main>
    </div>
  );
}

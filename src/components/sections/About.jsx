import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Html",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "React",
  ];

  const backendSkills = ["Node.js", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur space-y-8">
            <p className="text-gray-300 mb-6 text-justify leading-relaxed">
              I am a dynamic and motivated <strong>B.Tech graduate</strong> with a strong foundation in software and web development.
    Proficient in modern technologies like <strong>React</strong> and <strong>Node.js</strong>, with hands-on experience building
    responsive, user-centric applications. Passionate about solving real-world problems through clean, efficient code, and eager
    to contribute to innovative development teams in fast-paced environments.
            </p>

            {/* Skills Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Frontend Skills */}
    <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-semibold text-white mb-4">✨ Frontend</h3>
      <div className="flex flex-wrap gap-2">
        {frontendSkills.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {tech}
          </span>
        ))}
      </div>
      </div>
    </div>

    {/* Backend Skills */}
    <div className="rounded-xl p-6 bg-white/5 border border-white/10 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-semibold text-white mb-4">🔧 Backend</h3>
      <div className="flex flex-wrap gap-2">
        {backendSkills.map((tech, key) => (
          <span
            key={key}
            className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
              hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-semibold text-white mb-6"> 🏫 Education </h3>
              <div className="mb-4 text-gray-300">
      <p className="font-semibold text-white">
        B.Tech in Computer Science and Engineering
      </p>
      <p>Aligarh College of Engineering and Technology</p>
      <p className="text-sm text-gray-400">(2020 - 2024)</p>
    </div>

    <div className="mb-4 text-gray-300">
      <p className="font-semibold text-white">Intermediate</p>
      <p>Heritage International School</p>
      <p className="text-sm text-gray-400">(2018 - 2020)</p>
    </div>

    <div className="mb-4 text-gray-300">
      <p className="font-semibold text-white">Matriculation</p>
      <p>Heritage International School</p>
      <p className="text-sm text-gray-400">(2017 - 2018)</p>
    </div>

    <div className="mt-4 text-gray-300">
      <p className="font-semibold text-white">Relevant Coursework</p>
      <p>Data Structures, Web Development, Cloud Computing...</p>
    </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-semibold text-white mb-6"> 💼 Internships </h3>
              <div className="space-y-6 text-gray-300">
    {/* Bharat Intern */}
    <div>
      <h4 className="text-lg font-semibold text-white">
        Full Stack Web Developer Intern
      </h4>
      <p className="text-sm text-gray-400 mb-1">Bharat Intern &mdash; Aug 2023 - Sep 2023</p>
      <p>
        Developed end-to-end web applications using the <strong>MERN stack</strong>, combining a user-friendly
        front-end (React) with efficient back-end logic (Node.js, Express.js). Created RESTful APIs, styled responsive interfaces,
        and ensured optimal performance. This internship sharpened my full-stack development mindset with a focus on usability and clean architecture.
      </p>
    </div>

    {/* SkillVoid */}
    <div>
      <h4 className="text-lg font-semibold text-white">
        Python Developer Intern
      </h4>
      <p className="text-sm text-gray-400 mb-1">SkillVoid &mdash; Sep 2022 - Oct 2022</p>
      <p>
        Built projects using <strong>Python</strong> while applying core programming principles. Gained hands-on experience with
        libraries like <code>pandas</code>, <code>requests</code>, and <code>datetime</code> for automation and data manipulation.
        Strengthened my problem-solving abilities through real-world project challenges involving file handling and task automation.
      </p>
    </div>
  </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
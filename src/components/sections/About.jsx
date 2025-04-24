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

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
             A dynamic and motivated B.Tech graduate with a strong foundation in software and web development. Skilled 
             in modern technologies like React and Node.js with hand on experience in building responsive, user- centric applications.
             Passionate about solving real-world problems through clean, efficient code and eager to contribute to innovative 
             development teams in a fast-paced environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science and Engineering</strong> - ALigarh College of Engineering and Technology 
                  (2020-2024)
                </li>
                <li>
                  <strong> Intermediate </strong> - Heritage International School
                  (2018-2020)
                </li>
                <li>
                  <strong> Marticulation </strong> - Heritage International School
                  (2017-2018)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Internships </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Full Stack Web Developer Intern at Bharat Intern (Aug 2023-Sep 2023){" "}
                  </h4>
                  <p>
                   Worked on end-to-end web application development using the MERN stack ,combining
                   user-friendly front-end design with effective backend logic. Gained hand-on experience in building interfaces
                   with React and creating APIs using Node.js and Express.js. This internship helped me build a full-stack mindset, focusing on functionality 
                   , performance and user experience .
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                   Python Intern at SkillVoid (sep 2022-oct 2022){" "}
                  </h4>
                  <p>
                    Worked on developing projects using Python, focusing on writing clean, efficient code and applying core programming concepts. Gained experience in automating tasks, handling files, and using libraries such as pandas , requests, 
                    and datetime. This internship supported strengthened my problem-solving skills and deepened my understanding of Python development in real-world scenarios.
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
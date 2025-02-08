import Marquee from "react-fast-marquee";

const skills = [
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Postgres", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "JWT", img: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "npm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Tensorflow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Pytorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Github", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Deep Learning", img: "https://cdn-icons-png.flaticon.com/128/3314/3314090.png" },
  { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t border-[#25213b] bg-secondary w-full py-12">
      {/* Skills Heading */}
      <div className="flex justify-center py-6">
        <h1 className="text-3xl text-white border-b-4 border-white mb-5 w-fit px-4 text-center font-bold transition-transform duration-300 hover:scale-105">
          Skills
        </h1>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden">
        <Marquee gradient={false} speed={280} pauseOnHover pauseOnClick loop={0} direction="left" className="gap-x-6">
          {skills.map((skill, id) => (
            <div 
              key={id} 
              className="w-36 h-36 flex flex-col items-center justify-center mx-5 sm:mx-6 rounded-lg group relative hover:scale-110 cursor-pointer"
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-primary shadow-lg group-hover:border-violet-500 transition-all duration-500 flex flex-col items-center justify-center">
                <img src={skill.img} alt={skill.name} className="h-12 w-auto mb-3" />
                <p className="text-white text-lg sm:text-xl">{skill.name}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;

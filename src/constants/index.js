import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import etec from "../assets/etec.png"
import istad from "../assets/istad.jpg"
import kiloit from "../assets/kiloit.jpg"



export const HERO_CONTENT = `
I am a dedicated front-end developer with a strong passion for creating visually appealing and user-friendly web applications. With hands-on experience in core technologies like HTML, CSS, and JavaScript, I have mastered modern libraries and frameworks such as React.js, Tailwind CSS, and Bootstrap. I constantly strive to deliver responsive, efficient, and innovative solutions that enhance user experiences and meet business goals.`;

export const ABOUT_TEXT = `I am a Junior student at Royal University of Phnom Penh, pursuing a degree in Computer Science. Alongside my studies, I work as a Front-End developer, focusing on building responsive and intuitive web applications. I continually strive to learn new technologies and improve my skills. My goal is to contribute to impactful projects that make a difference.`;




export const EDUCATIONS = [
  {
    year: "2021 - Present",
    role: "Royal University Of Phnom Penh ",
    company: " Computer Science.",
    description: `I am currently in the fourth year, first semester, of my Bachelor's degree in Computer Science at the Royal University of Phnom Penh (RUPP). This academic journey has been more than just a series of courses it's been an evolving process of growth, discovery, and self development. Looking back at my experience, I realize that each year has shaped my understanding of the vast world of technology and my role within it, and how I can contribute meaningfully to the field.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2018 - 2021",
    role: "Preah Sihanouk ",
    company: " High school",
    description: `Before embarking on my journey at the Royal University of Phnom Penh, I completed my high school education at Preah Sihanouk High School in Kampong Cham from 2018 to 2021. During these three years, I experienced significant personal and academic growth that laid the foundation for my pursuit of a degree in Computer Science.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];



export const POSTS = [
  {
    id: 1,
    title: 'C , C++ , OOP',
    href: '#',
    description:
      'In 2022, I explored the foundational aspects of programming, focusing on C and C++. During this time, I developed an understanding of core programming concepts such as variables, data types, loops, conditionals, and functions. I also delved into object-oriented programming (OOP), learning key principles such as encapsulation, inheritance, polymorphism, and abstraction. This experience provided me with a solid base in problem-solving and programming logic, enabling me to write structured and efficient code.',
    date: 'May 16, 2022',
    datetime: '2020-03-16',
    category: { title: 'ETEC CENTER', href: '#' },
    author: {
      name: 'Education and Training Evaluation Center',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: etec,
    },
  },
  {
    id: 2,
    title: 'BASIC WEB DESIGN',
    href: '#',
    description:
      'In 2023, I completed a short course in basic web development, gaining skills in foundational technologies such as HTML, CSS, and JavaScript. I also explored front-end frameworks like Bootstrap and Tailwind, focusing on responsive and modern design principles. The course included UX/UI concepts to enhance user-centered design skills and introduced React.js for building dynamic user interfaces. Additionally, I learned about GitHub for version control, enabling collaborative and organized project management. This experience enhanced my ability to create visually appealing and functional web applications.',
    date: 'june 12, 2023',
    datetime: '2020-03-16',
    category: { title: 'ISTAD', href: '#' },
    author: {
      name: 'Institute of Science and Technology Advanced Development ',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: istad,
    },
  },
  {
    id: 3,
    title: 'WEB REACT-JS',
    href: '#',
    description:
      'During my internship at kiloIT, I worked on building the "Kilo Health" website using ReactJS. The website is designed to function like a hospital platform, featuring a directory of doctors and various healthcare-related services. My responsibilities included developing dynamic, responsive components, integrating API data for doctor profiles and services, and ensuring smooth user navigation across the platform. I focused on creating an intuitive UI/UX that made it easy for users to find healthcare professionals and access services. This hands-on experience allowed me to apply my ReactJS knowledge while working in a real-world healthcare setting.',
    date: 'JULY 26, 2024',
    datetime: '2020-03-16',
    category: { title: 'KILO IT (INTERNSHIP)', href: '#' },
    author: {
      name: 'KILO IT',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: kiloit,
    },
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "RUSSEY KEO, PHNOM PENH, CAMBODIA",
  phoneNo: "+855 99 914 022",
  telegram: "https://t.me/Polin_Ath",
  email: "athpolin2021@gmail.com",
};

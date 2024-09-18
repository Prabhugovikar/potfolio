import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dacio,
  bodsphere,
  buildngs,
  ScratchandWin,
  soulipie,
  Razzmataz,
  sheepower
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Hiyaak Systems",
    icon: buildngs,
    iconBg: "#383E56",
    date: "Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Hiyaak Systems",
    icon: buildngs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining andriod applications using Reactnative and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design .",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Hiyaak Systems",
  //   icon: buildngs,
  //   iconBg: "#383E56",
  //   date: "",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dacio.ai",
    description:
      "Dacio is a vehicle monitoring project where I integrated real-time data from installed devices that track driver behavior (DMS) and advanced driver assistance systems (ADAS). I designed and developed a frontend that visualizes this data, including metrics such as driver alerts, safety events, and vehicle status, providing actionable insights for safer driving and vehicle management.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: dacio,
    source_code_link: "https://app.dacio.ai/",
  },
  {
    name: "Bodsphere",
    description:
      "Bodsphere is a web application designed for users to access a variety of yoga videos and practice at their own pace. It features an integrated testing system where users can take assessments and earn certificates upon completion, providing an interactive and rewarding learning experience for yoga enthusiasts.",
    tags: [
      
    ],
    image: bodsphere,
    source_code_link: "https://github.com/",
    // https://bodspheretest.bodsphere.com/Bodsphere_web_app/
  },
  {
    name: "Soulipie",
    description:
      "Soulipie is a social networking Android application built with React Native, designed to support and connect the LGBTQ+ community. The app enables users to interact through chat, posts, and voice/video calls, fostering a safe and inclusive space for meaningful connections and conversations.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: soulipie,
    source_code_link: "https://github.com/",
  },
  {
    name: "ScratchandWin",
    description:
      "ScratchandWin is a web application that allows users to scan QR codes for a chance to win various gifts. The platform offers an engaging and interactive experience, making it easy for users to participate in digital scratch card promotions and claim rewards instantly.",
    tags: [
    ],
    image: ScratchandWin,
    source_code_link: "https://campaign.scratchandwin.kehc.com.kw/", 
  },
  {
    name: "Razzmataz",
    description:
      "Razzmataz is a web application for a multi-branch restaurant, allowing users to conveniently order food from any of its four locations. The platform streamlines the ordering process by enabling users to select their preferred branch and place orders for delivery or pickup.",
    tags: [
      
    ],
    image: Razzmataz,
    source_code_link: "https://github.com/",
    // https://bodspheretest.bodsphere.com/Bodsphere_web_app/
  },
  {
    name: "Sheepower",
    description:
      "Sheepower is a social media app for which I developed an admin dashboard. The dashboard allows administrators to manage user activity, take action against reported users, and analyze key metrics such as revenue and user engagement, providing full control over the app's performance and moderation.",
    tags: [
      
    ],
    image: sheepower,
    source_code_link: "https://github.com/",
    // https://bodspheretest.bodsphere.com/Bodsphere_web_app/
  },
];

export { services, technologies, experiences, testimonials, projects };

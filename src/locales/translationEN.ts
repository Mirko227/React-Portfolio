import { Translation } from "./interfaces";
import { calculateAge } from "../utils";
const dateOfBirth = "2002-10-22";
const age: number = calculateAge(dateOfBirth);

import projectsImgPaths from "../imgsExport";

const translationEN: Translation = {
  navbar: {
    home: "HOME",
    about: "ABOUT",
    projects: "PROJECTS",
    contact: "CONTACT",
    closeBtn: "Close",
  },
  hero: {
    greeting: "Hi,",
    name: "my name is Mirko",
    country: "Rome",
  },
  about: {
    title: "ABOUT ME",
    subtitle: "SOMETHING",
    info: `I am a ${age}-year-old passionate about programming and computer science. I started programming in 2016 and am currently focused primarily on the design and development of websites and web apps, ensuring they are always responsive and efficient. I constantly dedicate myself to studying and improving my skills, tackling new challenges and delving into technologies and topics to avoid compromising on initial expectations.`,
  },
  dev: {
    title: "What I use:",
    data: [
      {
        id: "toggle1",
        number: "(01)",
        title: "Front-end",
        ulList: [
          "HTML, CSS(Bootstrap, Tailwind, CSS-Modules, PostCSS)",
          "Javascript, Typescript, GSAP, React, Vite",
        ],
      },
      {
        id: "toggle2",
        number: "(02)",
        title: "Back-end",
        ulList: [
          "Node.js, Python, PHP, C, C++, Java, Socket.io",
          "SQL, MySQL, MongoDB, XAMPP, APIs, Git, Firebase",
        ],
      },
      {
        id: "toggle3",
        number: "(03)",
        title: "Other",
        ulList: ["Figma, Visual Studio Code, PyCharm, IntelliJ IDEA, Github "],
      },
    ],
  },
  projects: {
    title: "Projects",
    data: [
      {
        id: "1",
        name: "WEBCHAT",
        imgPath: `${projectsImgPaths.webChat}`,
        languages: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
        description:
          "A web chat created using Socket.io, a JavaScript library, and Node.js, executed on the server side. It enables real-time, event-driven, bidirectional communication between the server and client.",
        link: "https://webchat-gis8.onrender.com/",
      },
      {
        id: "2",
        name: "BOOTSTRAP SITE",
        imgPath: `${projectsImgPaths.bootstrapSite}`,
        languages: ["HTML", "CSS", "Bootstrap"],
        description:
          "A fully responsive mockup page developed using Bootstrap.",
        link: "https://bootstrap-mockup-site.vercel.app/",
      },
      {
        id: "3",
        name: "PHP CRUD",
        imgPath: `${projectsImgPaths.phpCrud}`,
        languages: ["HTML", "CSS", "PHP", "SQL", "XAMPP"],
        description:
          "I developed a CRUD (Create, Read, Update, Delete) web app that allows performing the four fundamental operations on a relational database. Additionally, I implemented a pagination system without using external libraries, a filter for results, comprehensive error handling, and made the interface fully responsive.",
        link: "https://github.com/Mirko227/PHP-CRUD",
      },
      {
        id: "4",
        name: "TELEGRAM BOT",
        imgPath: `${projectsImgPaths.botCircolari}`,
        languages: ["Python"],
        description:
          "I developed a Python script that performs web scraping of circulars from the website of the Enrico Fermi Institute in Rome. The script formats the description of the circulars, links to any attachments, and the text of the circulars themselves, saving them in a .txt file to keep track of the circulars that have already been sent and to avoid losing the list in case of a script restart. This script ran continuously on a Raspberry Pi and was integrated with a Telegram bot, allowing students and families to quickly read and stay updated on the new circulars published on the site.",
        link: "https://github.com/Mirko227/Bot-Circolari",
      },
      {
        id: "5",
        name: "TAILWIND SITE",
        imgPath: `${projectsImgPaths.tailwindSite}`,
        languages: ["HTML", "CSS", "Tailwind", "GSAP"],
        description:
          "A fully responsive front-end login/sign-up page developed using Tailwind CSS and GSAP.",
        link: "https://tailwind-auth-mockup.vercel.app/",
      },
      {
        id: "6",
        name: "AUTO-ACCEPT-QUEUE",
        imgPath: `${projectsImgPaths.lolAccept}`,
        languages: ["Python"],
        description:
          "I created an automation for League of Legends that interfaces with the LCU Driver APIs. This automation detects when a match is found, accepts it automatically through an HTTP request, and subsequently provides data on the players found.",
        link: "https://github.com/Mirko227/League-Auto-accept-queue",
      },
      {
        id: "7",
        name: "JAVA CALCULATOR",
        imgPath: `${projectsImgPaths.javaCalculator}`,
        languages: ["Java"],
        description:
          "A calculator developed together with two high school classmates, which allows performing all basic arithmetic operations, as well as calculations such as exponentiation, square root, sine, and cosine. The project was realized using PyCharm Community and git.",
        link: "https://github.com/Mirko227/Calcolatrice-Java",
      },
      {
        id: "8",
        name: "PORTFOLIO",
        imgPath: `${projectsImgPaths.reactPortfolio}`,
        languages: [
          "HTML, CSS, CSS Modules, PostCSS, React, Typescript, GSAP, Vite, ImageKit",
        ],
        description: "My personal portfolio.",
        link: "https://github.com/Mirko227/React-Portfolio",
      },
    ],
  },
  contact: {
    home: {
      title: "Want to work <br> together?",
    },
    contactPage: {
      title: "SEND A MESSAGE",
    },
  },
  privacyPolicy: {
    title: "Privacy Policy",
    intro:
      "This page describes the management of the website by Mirko Bellopede regarding the processing of personal data of users who visit it. This information is provided in accordance with EU Regulation 2016/679 (GDPR) and Italian laws on personal data protection.",
    dataControllerTitle: "Data Controller",
    dataControllerInfo:
      "The data controller is: Mirko Bellopede. <br> Email: mirkobellopede.dev@gmail.com",
    dataCollectedTitle: "Type of Data Collected",
    dataCollectedInfo:
      "The website does not automatically collect personal data. We do not use profiling cookies or third-party tracking tools like Google Analytics. There are no contact forms or tools for direct data collection.",
    dataInteraction:
      "The only interaction a user may have with the site includes:",
    socialLinks:
      "<strong>Links to social networks:</strong> There are links to my social profiles (e.g., Github, LinkedIn, Instagram, etc.). When a user clicks on these links, they will be redirected to the respective social network sites, which may collect personal data according to their respective privacy policies.",
    personalProjects:
      "<strong>Links to personal projects:</strong> There are links to my online projects that do not require any direct interaction from the user. These projects do not collect data, do not use profiling cookies, and do not require form filling or other actions by the user.",
    googleDrive:
      "<strong>Links to Google Drive:</strong> There is a link to a file on Google Drive. When the user clicks the link, they will be redirected to the Google Drive platform, which manages personal data according to its own privacy policy.",
    cookiePolicyTitle: "Cookie Policy",
    cookiePolicyInfo:
      "We do not use profiling cookies. The website may only use technical cookies necessary for its proper functioning, for which the user's explicit consent is not required.",
    purposeOfProcessingTitle: "Purpose of Processing",
    purposeOfProcessingInfo:
      "The website does not directly collect any personal data through contact forms or interactions. The links on the site are simple external links, and the only processing of personal data may occur if the user chooses to contact me via pre-filled email or interact with third-party platforms (e.g., social networks or Google Drive).",
    emailInteractionNote:
      "<strong>Note:</strong> If the user chooses to contact me via pre-filled email, the data will be processed through the email service used by the user, over which I have no control. The only action I can perform is to delete the messages from my email inbox. Any requests for modification or deletion of the message should be addressed to the email service provider used by the user.",
    rightsTitle: "User Rights",
    rightsInfo:
      "Users have the right to obtain confirmation of the existence or otherwise of personal data concerning them, to verify its content, origin, and to request its integration, updating, or rectification. However, as the data is transmitted through a third-party email service or through interactions with external platforms, I cannot directly modify or delete the data. Requests relating to personal data collected by third-party platforms (e.g., Google Drive or social networks) should be addressed to the respective service providers.",
    changesPolicyTitle: "Changes to Privacy Policy",
    changesPolicyInfo:
      "This Privacy Policy may be subject to changes or updates. Any changes will be published on this page. Therefore, it is recommended to consult it periodically.",
  },
};

export default translationEN;

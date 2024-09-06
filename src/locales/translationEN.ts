import { Translation } from "./interfaces";
import imagekitConfig from "../imagekitConfig";
import { calculateAge } from "../utils";
const dateOfBirth = '2002-10-22';  
const age : number = calculateAge(dateOfBirth);

const folderName = imagekitConfig.folder;

const translationEN: Translation = {
  navbar: {
    home: "HOME",
    about: "ABOUT",
    projects: "PROJECTS",
    contact: "CONTACT",
    closeBtn: "Close"
  },
  hero: {
    greeting: "Hi,",
    name: "my name is Mirko",
    country: "Rome",
  },
  about: {
    title: "ABOUT ME",
    subtitle: "SOMETHING",
    info: `I am a ${age}-year-old passionate about programming and computer science. I began programming in 2016 and currently focus primarily on designing and developing websites and web applications, ensuring they are always responsive and computationally efficient. I am consistently dedicated to studying and improving my skills, tackling new challenges, and exploring technologies and concepts to avoid limitations caused by the complexity of ideas and their initial expectations.`
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
        imgPath: `${folderName}/webchat.jpg`,
        languages: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
        description: "A web chat created using Socket.io, a JavaScript library, and Node.js, executed on the server side. It enables real-time, event-driven, bidirectional communication between the server and client.",
        link: "https://webchat-gis8.onrender.com/"
      },
      {
        id: "2",
        name: "BOOTSTRAP SITE",
        imgPath: `${folderName}/bootstrap-site.jpg`,
        languages: ["HTML", "CSS", "Bootstrap"],
        description: "A fully responsive mockup page developed using Bootstrap.",
        link: "https://bootstrap-mockup-site.vercel.app/"
      },
      {
        id: "3",
        name: "PHP CRUD",
        imgPath: `${folderName}/php-crud.jpg`,
        languages: ["HTML", "CSS", "PHP", "SQL", "XAMPP"],
        description: "I developed a CRUD (Create, Read, Update, Delete) web app that allows performing the four fundamental operations on a relational database. Additionally, I implemented a pagination system without using external libraries, a filter for results, comprehensive error handling, and made the interface fully responsive.",
        link: "https://github.com/Mirko227/PHP-CRUD"
      },
      {
        id: "4",
        name: "TELEGRAM BOT",
        imgPath: `${folderName}/itisfermi-botcircolari.jpg`,
        languages: ["Python"],
        description: "I developed a Python script that performs web scraping of circulars from the website of the Enrico Fermi Institute in Rome. The script formats the description of the circulars, links to any attachments, and the text of the circulars themselves, saving them in a .txt file to keep track of the circulars that have already been sent and to avoid losing the list in case of a script restart. This script ran continuously on a Raspberry Pi and was integrated with a Telegram bot, allowing students and families to quickly read and stay updated on the new circulars published on the site.",
        link: "https://github.com/Mirko227/Bot-Circolari"
      },
      {
        id: "5",
        name: "TAILWIND SITE",
        imgPath: `${folderName}/tailwind-auth-mockup.jpg`,
        languages: ["HTML", "CSS", "Tailwind", "GSAP"],
        description: "A fully responsive front-end login/sign-up page developed using Tailwind CSS and GSAP.",
        link: "https://tailwind-auth-mockup.vercel.app/"
      },  
      {
        id: "6",  
        name: "AUTO-ACCEPT-QUEUE",
        imgPath: `${folderName}/lol-accept-queue.jpg`,
        languages: ["Python"],
        description: "I created an automation for League of Legends that interfaces with the LCU Driver APIs. This automation detects when a match is found, accepts it automatically through an HTTP request, and subsequently provides data on the players found.",
        link: "https://github.com/Mirko227/League-Auto-accept-queue"
      },
      {
        id: "7",
        name: "JAVA CALCULATOR",
        imgPath: `${folderName}/calcolatrice-java.jpg`,
        languages: ["Java"],
        description: "A calculator developed together with two high school classmates, which allows performing all basic arithmetic operations, as well as calculations such as exponentiation, square root, sine, and cosine. The project was realized using PyCharm Community and git.",
        link: "https://github.com/Mirko227/Calcolatrice-Java"
      },
      {
        id: "8",
        name: "PORTFOLIO",
        imgPath: `${folderName}/developer-portfolio.jpg`,
        languages: ["HTML, CSS, CSS Modules, PostCSS, React, Typescript, GSAP, Vite, ImageKit"],
        description: "My personal portfolio.",
        link: "https://github.com/Mirko227/React-Portfolio"
      },
    ],
  },
  contact: {
    home: {
      title: "Want to work ",
      titlebr: "together?",
    },
    contactPage: {
      title: "SEND A MESSAGE",
    },
  }
};

export default translationEN;

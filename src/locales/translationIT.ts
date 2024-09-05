import { Translation } from "./interfaces";
import imagekitConfig from "../imagekitConfig";
import { calculateAge } from "../utils";

const dateOfBirth = '2002-10-22';  
const age : number = calculateAge(dateOfBirth);


const folderName = imagekitConfig.folder;

const translationIT: Translation = {
  navbar: {
    home: "Home",
    about: "CHI SONO",
    projects: "PROGETTI",
    contact: "CONTATTI",
    closeBtn: "Chiudi"
  },
  hero: {
    greeting: "Ciao,",
    name: "mi chiamo Mirko",
    country: "Roma",
  },
  about: {
    title: "Su di me",
    subtitle: "Qualcosa",
    info: `Sono un ragazzo di ${age} anni appassionato di programmazione e informatica. Ho iniziato a programmare nel 2016 e attualmente mi dedico principalmente alla progettazione e allo sviluppo di siti web e web app, assicurandomi che siano sempre responsivi ed efficienti in termini di costi computazionali. Mi dedico costantemente allo studio e al miglioramento delle mie competenze, affrontando nuovi problemi e approfondendo tecnologie e argomenti per evitare compromessi dovuti alla complessità delle idee e alle aspettative iniziali.`
  },
  dev: {
    title: "Cosa uso:",
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
          "Node.js, Python, PHP, C, C++, Java",
          "SQL, MySQL, MongoDB, XAMPP, APIs, Git, Firebase",
        ],
      },
      {
        id: "toggle3",
        number: "(03)",
        title: "Altro",
        ulList: ["Figma, Visual Studio Code, PyCharm, IntelliJ IDEA, Github"],
      },
    ],
  },
  projects: {
    title: "Progetti",
    data: [
      {
        id: "1",
        name: "WEBCHAT",
        imgPath: `${folderName}/webchat.jpg`,
        languages: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
        description: "Una webchat creata usando socket.io, una libreria javascript e Node.js  eseguita lato server che consente una comunicazione in tempo reale, basata sugli eventi e bidirezionale, da server a client e viceversa.",
        link: "https://webchat-gis8.onrender.com/"
      },
      {
        id: "2",
        name: "SITO BOOTSTRAP",
        imgPath: `${folderName}/bootstrap-site.jpg`,
        languages: ["HTML", "CSS", "Bootstrap"],
        description: "Una pagina mockup completamente responsive realizzata usando Bootstrap.",
        link: "https://bootstrap-mockup-site.vercel.app/"
      },
      {
        id: "3",
        name: "PHP CRUD",
        imgPath: `${folderName}/php-crud.jpg`,
        languages: ["HTML", "CSS", "PHP", "SQL", "XAMPP"],
        description: "Ho sviluppato una web app CRUD (Create, Read, Update, Delete) che permette di eseguire le quattro operazioni fondamentali su un database relazionale. Inoltre, ho implementato un sistema di paginazione senza l'uso di librerie esterne, un filtro per i risultati, una gestione completa degli errori e ho reso l'interfaccia completamente responsive.",
        link: "https://github.com/Mirko227/PHP-CRUD"
      },
      {
        id: "4",
        name: "TELEGRAM BOT",
        imgPath: `${folderName}/itisfermi-botcircolari.jpg`,
        languages: ["Python"],
        description: "Ho sviluppato uno script Python che esegue il web scraping delle circolari dal sito dell'Istituto Enrico Fermi di Roma. Lo script formatta la descrizione delle circolari, i link degli eventuali allegati e il testo delle circolari stesse, salvandoli in un file .txt per tenere traccia delle circolari già inviate e per non perdere la lista in caso di riavvio dello script. Questo script era in esecuzione continua su un Raspberry Pi ed era integrato con un bot Telegram, che consentiva a studenti e famiglie di leggere rapidamente e rimanere aggiornati sulle nuove circolari pubblicate sul sito.",
        link: "https://github.com/Mirko227/Bot-Circolari"
      },
      {
        id: "5",
        name: "SITO TAILWIND",
        imgPath: `${folderName}/tailwind-auth-mockup.jpg`,
        languages: ["HTML", "CSS", "Tailwind", "GSAP"],
        description: "Un pagina Front-end di login/signup completemante responsive realizzato usando Tailwind CSS e GSAP",
        link: "https://tailwind-auth-mockup.vercel.app/"
      },
      {
        id: "6",
        name: "AUTO-ACCEPT-QUEUE",
        imgPath: `${folderName}/lol-accept-queue.jpg`,
        languages: ["Python"],
        description:"Ho creato un'automazione per League of Legends che si interfaccia con le API LCU Driver. Questa automazione rileva quando viene trovata una partita, la accetta automaticamente tramite una richiesta HTTP e fornisce successivamente dati sui giocatori trovati.",
        link: "https://github.com/Mirko227/League-Auto-accept-queue"
      },
      {
        id: "7",
        name: "Calcolatrice Java",
        imgPath: `${folderName}/calcolatrice-java.jpg`,
        languages: ["Java"],
        description:"Una calcolatrice sviluppata insieme a due compagni delle superiori, che permette di eseguire tutte le operazioni aritmetiche di base, oltre a calcoli come elevazione a potenza, radice quadrata, seno e coseno. Il progetto è stato realizzato utilizzando PyCharm Community, Git e GitHub.",
        link: "https://github.com/Mirko227/Calcolatrice-Java"
      },
      {
        id: "8",
        name: "PORTFOLIO",
        imgPath: `${folderName}/developer-portfolio.jpg`,
        languages: ["HTML, CSS, CSS Modules, PostCSS, React, Typescript, GSAP, Vite, ImageKit"],
        description: "Il mio portfolio personale.",
        link: "https://github.com/Mirko227/React-Portfolio"
      },
    ],
  },
  contact: {
    home: {
      title: "Vuoi lavorare ",
      titlebr: "con me?",
    },
    contactPage: {
      title: "Invia un messaggio",
    },
  },
};

export default translationIT;

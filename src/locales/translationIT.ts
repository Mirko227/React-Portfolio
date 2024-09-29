import { Translation } from "./interfaces";
import { calculateAge } from "../utils";
const dateOfBirth = "2002-10-22";
const age: number = calculateAge(dateOfBirth);

import projectsImgPaths from "../imgsExport";

const translationIT: Translation = {
  navbar: {
    home: "Home",
    about: "CHI SONO",
    projects: "PROGETTI",
    contact: "CONTATTI",
    closeBtn: "Chiudi",
  },
  hero: {
    greeting: "Ciao,",
    name: "mi chiamo Mirko",
    country: "Roma",
  },
  about: {
    title: "Su di me",
    subtitle: "Qualcosa",
    info: `Sono un ragazzo di ${age} anni appassionato di programmazione e informatica. Ho iniziato a programmare nel 2016 e attualmente mi dedico principalmente alla progettazione e sviluppo di siti web e web app, assicurandomi che siano sempre responsivi ed efficienti. Mi impegno costantemente nello studio e nel miglioramento delle mie competenze, affrontando nuovi problemi e approfondendo tecnologie per evitare sempre compromessi rispetto alle aspettative iniziali.`,
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
        imgPath: `${projectsImgPaths.webChat}`,
        languages: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
        description:
          "Una webchat creata usando socket.io, una libreria javascript e Node.js  eseguita lato server che consente una comunicazione in tempo reale, basata sugli eventi e bidirezionale, da server a client e viceversa.",
        link: "https://webchat-gis8.onrender.com/",
      },
      {
        id: "2",
        name: "SITO BOOTSTRAP",
        imgPath: `${projectsImgPaths.bootstrapSite}`,
        languages: ["HTML", "CSS", "Bootstrap"],
        description:
          "Una pagina mockup completamente responsive realizzata usando Bootstrap.",
        link: "https://bootstrap-mockup-site.vercel.app/",
      },
      {
        id: "3",
        name: "PHP CRUD",
        imgPath: `${projectsImgPaths.phpCrud}`,
        languages: ["HTML", "CSS", "PHP", "SQL", "XAMPP"],
        description:
          "Ho sviluppato una web app CRUD (Create, Read, Update, Delete) che permette di eseguire le quattro operazioni fondamentali su un database relazionale. Inoltre, ho implementato un sistema di paginazione senza l'uso di librerie esterne, un filtro per i risultati, una gestione completa degli errori e ho reso l'interfaccia completamente responsive.",
        link: "https://github.com/Mirko227/PHP-CRUD",
      },
      {
        id: "4",
        name: "TELEGRAM BOT",
        imgPath: `${projectsImgPaths.botCircolari}`,
        languages: ["Python"],
        description:
          "Ho sviluppato uno script Python che esegue il web scraping delle circolari dal sito dell'Istituto Enrico Fermi di Roma. Lo script formatta la descrizione delle circolari, i link degli eventuali allegati e il testo delle circolari stesse, salvandoli in un file .txt per tenere traccia delle circolari già inviate e per non perdere la lista in caso di riavvio dello script. Questo script era in esecuzione continua su un Raspberry Pi ed era integrato con un bot Telegram, che consentiva a studenti e famiglie di leggere rapidamente e rimanere aggiornati sulle nuove circolari pubblicate sul sito.",
        link: "https://github.com/Mirko227/Bot-Circolari",
      },
      {
        id: "5",
        name: "SITO TAILWIND",
        imgPath: `${projectsImgPaths.tailwindSite}`,
        languages: ["HTML", "CSS", "Tailwind", "GSAP"],
        description:
          "Un pagina Front-end di login/signup completemante responsive realizzato usando Tailwind CSS e GSAP",
        link: "https://tailwind-auth-mockup.vercel.app/",
      },
      {
        id: "6",
        name: "AUTO-ACCEPT-QUEUE",
        imgPath: `${projectsImgPaths.lolAccept}`,
        languages: ["Python"],
        description:
          "Ho creato un'automazione per League of Legends che si interfaccia con le API LCU Driver. Questa automazione rileva quando viene trovata una partita, la accetta automaticamente tramite una richiesta HTTP e fornisce successivamente dati sui giocatori trovati.",
        link: "https://github.com/Mirko227/League-Auto-accept-queue",
      },
      {
        id: "7",
        name: "Calcolatrice Java",
        imgPath: `${projectsImgPaths.javaCalculator}`,
        languages: ["Java"],
        description:
          "Una calcolatrice sviluppata insieme a due compagni delle superiori, che permette di eseguire tutte le operazioni aritmetiche di base, oltre a calcoli come elevazione a potenza, radice quadrata, seno e coseno. Il progetto è stato realizzato utilizzando PyCharm Community, Git e GitHub.",
        link: "https://github.com/Mirko227/Calcolatrice-Java",
      },
      {
        id: "8",
        name: "PORTFOLIO",
        imgPath: `${projectsImgPaths.reactPortfolio}`,
        languages: [
          "HTML, CSS, CSS Modules, PostCSS, React, Typescript, GSAP, Vite, ImageKit",
        ],
        description: "Il mio portfolio personale.",
        link: "https://github.com/Mirko227/React-Portfolio",
      },
    ],
  },
  contact: {
    home: {
      title: "Vuoi lavorare <br> con me?",
    },
    contactPage: {
      title: "Invia un messaggio",
    },
  },
  privacyPolicy: {
    title: "Privacy Policy",
    intro:
      "Questa pagina descrive le modalità di gestione del sito web di Mirko Bellopede in riferimento al trattamento dei dati personali degli utenti che lo consultano. La presente informativa è resa ai sensi del Regolamento UE 2016/679 (GDPR) e delle leggi italiane in materia di protezione dei dati personali.",
    dataControllerTitle: "Titolare del Trattamento dei Dati",
    dataControllerInfo:
      "Il titolare del trattamento dei dati personali è: Mirko Bellopede. <br> Email: mirkobellopede.dev@gmail.com",
    dataCollectedTitle: "Tipologia di dati raccolti",
    dataCollectedInfo:
      "Il sito non raccoglie dati personali automaticamente. Non utilizziamo cookie di profilazione, né strumenti di tracciamento di terze parti come Google Analytics. Non sono presenti form di contatto, strumenti per la raccolta diretta di informazioni.",
    dataInteraction:
      "L'unica interazione che l'utente può avere con il sito riguarda:",
    socialLinks:
      "<strong>Link ai social network:</strong> Sul sito sono presenti collegamenti ai miei profili social (ad esempio Github, LinkedIn, Instagram, ecc.). Quando l'utente clicca su questi link, verrà reindirizzato verso i siti dei rispettivi social network, i quali potrebbero raccogliere dati personali secondo le loro rispettive privacy policy.",
    personalProjects:
      "<strong>Link a progetti personali:</strong> Sono presenti collegamenti a miei progetti online che non richiedono alcuna interazione diretta con l'utente. Tali progetti non raccolgono dati, non utilizzano cookie di profilazione e non richiedono la compilazione di form o altre azioni da parte dell'utente.",
    googleDrive:
      "<strong>Link a Google Drive:</strong> Sul sito è presente un collegamento a un file su Google Drive. Quando l'utente clicca sul link, verrà reindirizzato verso la piattaforma di Google Drive, che gestirà i dati personali secondo la propria privacy policy.",
    cookiePolicyTitle: "Cookie Policy",
    cookiePolicyInfo:
      "Non utilizziamo cookie di profilazione. Il sito può utilizzare solo cookie tecnici necessari per garantire il corretto funzionamento dello stesso, per i quali non è richiesto il consenso esplicito dell’utente.",
    purposeOfProcessingTitle: "Finalità del Trattamento",
    purposeOfProcessingInfo:
      "Il sito non raccoglie direttamente alcun dato personale tramite moduli di contatto o interazioni. I link presenti sul sito sono semplici collegamenti a contenuti esterni, e l'unico trattamento dei dati personali può avvenire nel caso in cui l'utente scelga di contattarmi tramite l'email precompilata o di interagire con piattaforme di terze parti (ad esempio social network o Google Drive).",
    emailInteractionNote:
      "Nota bene: Se l'utente sceglie di contattarmi via email tramite il link precompilato, i dati saranno trattati tramite il servizio di posta elettronica utilizzato dall'utente, su cui non ho alcun controllo. L'unica azione che posso eseguire è cancellare i messaggi dalla mia casella di posta elettronica. Eventuali richieste di modifica o cancellazione del messaggio devono essere indirizzate al fornitore del servizio di posta elettronica utilizzato dall'utente.",
    rightsTitle: "Diritti dell’Interessato",
    rightsInfo:
      "Gli utenti hanno il diritto di ottenere la conferma dell'esistenza o meno di dati personali che li riguardano, di verificarne il contenuto, l'origine, e di chiedere l'integrazione, l'aggiornamento, o la rettifica dei dati. Tuttavia, essendo i dati trasmessi tramite un servizio di posta elettronica di terze parti o attraverso interazioni con piattaforme esterne, non ho la possibilità di intervenire direttamente per la modifica o cancellazione degli stessi. Le richieste relative ai dati personali raccolti da piattaforme di terze parti (ad esempio Google Drive o social network) devono essere indirizzate ai rispettivi fornitori di servizio.",
    changesPolicyTitle: "Modifiche alla Privacy Policy",
    changesPolicyInfo:
      "La presente Privacy Policy potrebbe essere soggetta a modifiche o aggiornamenti. Eventuali modifiche verranno pubblicate su questa pagina. Si invita pertanto a consultarla periodicamente.",
  },
};

export default translationIT;

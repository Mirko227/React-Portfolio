import contact from "./contact.module.css";
import home from "../../pages/home.module.css";
import Footer from "../Footer";
import instagramSvg from "../../assets/svgs/instagram.svg";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import githubSvg from "../../assets/svgs/github.svg";
import { Trans, useTranslation } from "react-i18next";


function Contact() {
  const { t } = useTranslation();

  return (
    <section className={`${home.section} ${contact.contactSection}`}>
      <div className={`${contact.containerContact} container`}>
        <div className={contact.contactInfo}>
          <div className={contact.contactEmail}>
            <h2>
              <Trans i18nKey="contact.home.title">
              {t("contact.home.title")}
              </Trans>
            </h2>
            <a className="hover-trailer" href="mailto:dev@mirkobellopede.com" target="_blank" rel="noopener noreferrer">
              <span>DEV@</span>
              <span>MIRKO</span>
              <br />
              <span>BELLOPE</span>
              <span>DE.COM</span>
            </a>
          </div>

          <ul className={contact.contactSocials}>
            <li className={contact.iconItem}>
              <a href="https://www.instagram.com/mrkooo_pics/" target="_blank" rel="noopener noreferrer">
                <img src={instagramSvg} alt="" />
              </a>
            </li>
            <li className={contact.iconItem}>
              <a href="https://www.linkedin.com/in/mirko-bellopede-025954327/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinSvg} alt="" />
              </a>
            </li>
            <li className={contact.iconItem}>
              <a href="https://github.com/Mirko227" target="_blank" rel="noopener noreferrer">
                <img src={githubSvg} alt="" />
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="https://www.instagram.com/mrkooo_pics/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="https://www.linkedin.com/in/mirko-bellopede-025954327/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="https://github.com/Mirko227" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;

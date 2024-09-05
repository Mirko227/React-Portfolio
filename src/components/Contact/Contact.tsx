import contact from "./contact.module.css";
import home from "../../pages/home.module.css";
import Footer from "../Footer";
import instagramSvg from "../../assets/svgs/instagram.svg";
import linkedinSvg from "../../assets/svgs/linkedin.svg";
import githubSvg from "../../assets/svgs/github.svg";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className={`${home.section} ${contact.contactSection}`}>
      <div className={contact.containerContact}>
        <div className={contact.contactInfo}>
          <div className={contact.contactEmail}>
            <h2>
              {t("contact.home.title")} <br />
              {t("contact.home.titlebr")}
            </h2>
            <a className="hover-trailer" href="mailto:dev@mirkobellopede.com">
              <span>DEV@</span>
              <span>MIRKO</span>
              <br />
              <span>BELLOPE</span>
              <span>DE.COM</span>
            </a>
          </div>

          <ul className={contact.contactSocials}>
            <li className={contact.iconItem}>
              <a href="">
                <img src={instagramSvg} alt="" />
              </a>
            </li>
            <li className={contact.iconItem}>
              <a href="">
                <img src={linkedinSvg} alt="" />
              </a>
            </li>
            <li className={contact.iconItem}>
              <a href="">
                <img src={githubSvg} alt="" />
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="">
                Instagram
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="">
                Linkedin
              </a>
            </li>
            <li className={contact.textItem}>
              <a className="primary-hover" href="">
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

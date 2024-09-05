import contactPage from"./contact.module.css"
import Footer from "../components/Footer";
import instagramSvg from "../assets/svgs/instagram.svg";
import linkedinSvg from "../assets/svgs/linkedin.svg";
import githubSvg from "../assets/svgs/github.svg";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <div id={contactPage.mainContainer}>
        <div className={contactPage.container}>
            <p>{t("contact.contactPage.title")}</p>
            <a className="hover-trailer" href=""><span>DEV@</span>MIRKO<span></span><br /><span>BELLOPE</span>DE.COM</a>
            <ul className={contactPage.contactSocials}>
               
              <li className={contactPage.iconItem}>
                <a href=""><img src={instagramSvg} alt=""/></a>
              </li>
              <li className={contactPage.iconItem}>
                <a href=""><img src={linkedinSvg} alt=""/></a>
              </li>
              <li className={contactPage.iconItem}>
                <a href=""><img src={githubSvg} alt=""/></a>
              </li>

                <li className={contactPage.textItem}><a className={"primary-hover"} href="">Instagram</a></li>
                <li className={contactPage.textItem}><a className={"primary-hover"} href="">Linkedin</a></li>
                <li className={contactPage.textItem}><a className={"primary-hover"} href="">Github</a></li>
              </ul>
        </div>
       <Footer />
    </div>
  )
}

export default ContactPage;

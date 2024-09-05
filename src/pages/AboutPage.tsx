import about from"./about.module.css"
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import ResumeBtn from "../components/ResumeBtn";

function About() {
  const { t } = useTranslation();
  return (
    <div id={about.mainContainer}>
      <div className={about.container}>
        <h2>{t("about.title")}</h2>
        <p className={about.normalText}>{t("about.info")}</p>
        <ResumeBtn />
      </div>
      <Footer />
    </div>
  )
}

export default About;

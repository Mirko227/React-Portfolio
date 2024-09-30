import about from "./about.module.css";
import home from "../../pages/home.module.css";
import { useTranslation } from "react-i18next";
import ResumeBtn from "../ResumeBtn";

function About() {
  const { t } = useTranslation();
  return (
    <section className={`${home.section} grid-center`}>
      <div className={`${about.containerAbout} container` }>
        <h2>
            {t("about.title")}
        </h2>
        <p>{t("about.info")}</p>
        <ResumeBtn />
      </div>
    </section>
  );
}

export default About;

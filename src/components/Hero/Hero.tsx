import hero from "./hero.module.css";
import home from "../../pages/home.module.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className={home.section + " " + hero.heroSection} id="hero-section">
      <div className={hero.redSquare}></div>
      <div className={hero.blueSquare}></div>
      <div className={hero.redSquare2}></div>
      <h1 className={hero.headerTitle}>
        <span className={hero.headerTitleName}>
          <span>
            {t("hero.greeting")} <br className={hero.breakHeaderTitle} />
          </span>
          {t("hero.name")}
        </span>
        <br />
        <span className={hero.headerTitleJob}>
          Web Developer <br />
          {t("hero.country")}
        </span>
      </h1>
    </section>
  );
}

export default Hero;

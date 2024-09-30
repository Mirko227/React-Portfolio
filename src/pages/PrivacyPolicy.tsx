import { Trans, useTranslation } from "react-i18next";
import privacy from "./privacyPolicy.module.css";
import Footer from "../components/Footer";

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className={privacy.mainContainer}>
        <div className={privacy.container}>
          <h1 className={privacy.privacyH1}>{t("privacyPolicy.title")}</h1>
          <p><Trans i18nKey={"privacyPolicy.intro"}></Trans></p>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.dataControllerTitle")}</h2>
          <p><Trans i18nKey={"privacyPolicy.dataControllerInfo"}></Trans></p>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.dataCollectedTitle")}</h2>
          <p>{t("privacyPolicy.dataCollectedInfo")}</p>

          <p>{t("privacyPolicy.dataInteraction")}</p>
          <ul className={privacy.dataTypes}>
            <li><Trans i18nKey={"privacyPolicy.socialLinks"}></Trans></li>
            <li><Trans i18nKey={"privacyPolicy.personalProjects"}></Trans></li>
            <li><Trans i18nKey={"privacyPolicy.googleDrive"}></Trans></li>
          </ul>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.cookiePolicyTitle")}</h2>
          <p>{t("privacyPolicy.cookiePolicyInfo")}</p>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.purposeOfProcessingTitle")}</h2>
          <p>{t("privacyPolicy.purposeOfProcessingInfo")}</p>

          <p><Trans i18nKey={"privacyPolicy.emailInteractionNote"}></Trans></p>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.rightsTitle")}</h2>
          <p>{t("privacyPolicy.rightsInfo")}</p>

          <h2 className={privacy.privacyH2}>{t("privacyPolicy.changesPolicyTitle")}</h2>
          <p>{t("privacyPolicy.changesPolicyInfo")}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
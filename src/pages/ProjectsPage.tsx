import projects from "./projects.module.css";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { IKImage } from "imagekitio-react";
import imagekitConfig from "../imagekitConfig";
import { Project } from "../locales/interfaces";
// Define the types for project data

function ProjectsPage() {
  const { t } = useTranslation();

  // Specify the type for the projectsData array
  const projectsData: Project[] = t("projects.data", { returnObjects: true });

  return (
    <>
      <div id={projects.mainContainer}>
        <div className={projects.container}>
          <h2>{t("projects.title")}</h2>
          {projectsData.map(
            ({ id, name, imgPath, description, languages, link }) => (
              <div className={projects.projectCard} key={id}>
                <div className={projects.imgWrapper}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <IKImage
                      urlEndpoint={imagekitConfig.urlEndpoint}
                      path={imgPath}
                      alt={name}
                    />
                  </a>
                </div>
                <div className={projects.projectInfo}>
                  <a
                    className={`${projects.projectName} primary-hover`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                  <ul className={projects.devInfo}>
                    {languages.map((element: string, index: number) => (
                      <li key={`devInfoItem-${id}-${index}`}>{element}</li> // Use a combination of id and index to ensure a unique key
                    ))}
                  </ul>
                  <p>{description}</p>
                </div>
              </div>
            )
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;

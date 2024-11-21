import React, { useState, useRef, RefObject } from "react";
import projects from "./projects.module.css";
import { useTranslation } from "react-i18next";

// Definizione dell'interfaccia per gli oggetti projectsInfo
interface projectsInfoItem {
  title: string;
  description: string;
}

function Projects() {
  // Stato attivo con un numero o null
  const [active, setActive] = useState<number | null>(null);
  const { t } = useTranslation();

  // Ottieni projectsInfo come array di projectsInfoItem da t
  const projectsInfo: projectsInfoItem[] = t("projects.projectsInfo", { returnObjects: true });

  // Ref per i contenuti dell'accordion, array di RefObject HTMLDivElement
  const contentRef = useRef<Array<RefObject<HTMLDivElement>>>(
    projectsInfo.map(() => React.createRef())
  );

  // Gestione del toggle
  const handleToggle = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <section>
      <div className={`container`}>
        <div className={projects.sectionHeader}>
          <h2>{t("projects.title")}</h2>
          <h3>{t("projects.phases")}</h3>
        </div>
        <div className={projects.accContainer}>
          {projectsInfo.map((item, index) => (
            <div
              key={`projectsItem-${index}`}
              className={`${projects.accItem} ${
                active === index ? projects.active : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className={projects.itemTitle}>
                <h4>{item.title}</h4> {/* Usa item.title dalla traduzione */}
                <button className={projects.toggleIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                  >
                    <polyline points="6.53 18.86 33.16 44.12 57.42 18.86" />
                  </svg>
                </button>
              </div>
              {/* Testo che viene mostrato/nascondo nello stesso div */}
              <div
                ref={contentRef.current[index]}
                className={projects.accContent}
                style={
                  active === index
                    ? {
                        height:
                          contentRef.current[index]?.current?.scrollHeight,
                      }
                    : { height: "0px" }
                }
              >
                <div className={projects.accBody}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

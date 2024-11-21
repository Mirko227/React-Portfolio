import React, { useState, useRef, RefObject } from "react";
import work from "./work.module.css";
import { useTranslation } from "react-i18next";

// Definizione dell'interfaccia per gli oggetti workInfo
interface WorkInfoItem {
  title: string;
  description: string;
}

function Work() {
  // Stato attivo con un numero o null
  const [active, setActive] = useState<number | null>(null);
  const { t } = useTranslation();

  // Ottieni workInfo come array di WorkInfoItem da t
  const workInfo: WorkInfoItem[] = t("work.workInfo", { returnObjects: true });

  // Ref per i contenuti dell'accordion, array di RefObject HTMLDivElement
  const contentRef = useRef<Array<RefObject<HTMLDivElement>>>(
    workInfo.map(() => React.createRef())
  );

  // Gestione del toggle
  const handleToggle = (id: number) => {
    setActive(active === id ? null : id);
  };

  return (
    <section>
      <div className={`container`}>
        <div className={work.sectionHeader}>
          <h2>{t("work.title")}</h2>
          <h3>{t("work.phases")}</h3>
        </div>
        <div className={work.accContainer}>
          {workInfo.map((item, index) => (
            <div
              key={`workItem-${index}`}
              className={`${work.accItem} ${
                active === index ? work.active : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className={work.itemTitle}>
                <h4>{item.title}</h4> {/* Usa item.title dalla traduzione */}
                <button className={work.toggleIcon}>
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
                className={work.accContent}
                style={
                  active === index
                    ? {
                        height:
                          contentRef.current[index]?.current?.scrollHeight,
                      }
                    : { height: "0px" }
                }
              >
                <div className={work.accBody}>
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

export default Work;

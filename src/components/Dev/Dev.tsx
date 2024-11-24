import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ExpoScaleEase } from "gsap/EasePack";
gsap.registerPlugin(useGSAP, ExpoScaleEase);
import home from "../../pages/home.module.css";
import dev from "./dev.module.css";
import React, { useRef } from "react";
import { addToRefs, getCSSVariableValue } from "../../utils";
import { AccItem } from "../../locales/interfaces";
import { useTranslation } from "react-i18next";

function Dev() {
  const { t } = useTranslation();
  const devData: AccItem[] = t("dev.data", { returnObjects: true });
  const accItemsRefs = useRef<HTMLDivElement[]>([]);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const timelines: gsap.core.Timeline[] = [];
      const eventListeners: { target: HTMLDivElement; handler: () => void }[] =
        [];
      const responsiveHeight: string =
        getCSSVariableValue("--accToggle-height");

      accItemsRefs.current.forEach((element) => {
        const clickTarget = element;
        const collapseElement =
          element.nextElementSibling as HTMLElement | null;
        const toggleIcon = element.querySelector(`.${dev.toggleIcon}`);

        if (collapseElement) {
          const collapseElementChildren = Array.from(
            collapseElement.children
          ) as HTMLElement[];
          const tlAccordion = gsap.timeline({
            reversed: true,
            paused: true,
          });

          accItemsRefs.current.forEach((el) => {
            if (clickTarget.id !== el.id) {
              tlAccordion.set(el, { pointerEvents: "none" }, "<");
              tlAccordion.set(
                el,
                {
                  minHeight: "0",
                  ease: "Expo.easeInOut",
                },
                "<"
              );

              tlAccordion.to(
                el,
                {
                  opacity: 0,
                  ease: "Expo.easeInOut",
                  duration: 0.8,
                },
                ">"
              );

              tlAccordion.fromTo(
                el,
                {
                  height: responsiveHeight,
                },
                {
                  height: 0,
                  ease: "Expo.easeInOut",
                  duration: 1.05,
                },
                "<"
              );

              tlAccordion.to(
                toggleIcon,
                {
                  rotate: "45deg",
                  duration: 1.05,
                  ease: "Expo.easeInOut",
                },
                "<"
              );
            }
          });

          tlAccordion.from(
            collapseElement,
            {
              height: 0,
              display: "none",
              ease: "Expo.easeInOut",
              duration: 1,
            },
            "open"
          );

          tlAccordion.from(
            collapseElementChildren,
            {
              duration: 0.8,
              autoAlpha: 0,
              y: "40%",
              ease: "Expo.easeInOut",
              stagger: 0.08,
            },
            "open+=0.1"
          );

          const handleClick = () => {
            tlAccordion.reversed() ? tlAccordion.play() : tlAccordion.reverse();
          };

          clickTarget.addEventListener("click", handleClick);

          timelines.push(tlAccordion);
          eventListeners.push({ target: clickTarget, handler: handleClick });
        }
      });

      return () => {
        eventListeners.forEach(({ target, handler }) => {
          target.removeEventListener("click", handler);
        });
      };
    },
    { scope: container }
  );

  return (
    <section className={`${home.section} grid-center`}>
      <div className={`${dev.containerDev} container`}>
        <h2>{t("dev.title")}</h2>
        <div className={`${dev.wrapperDev} no-tap-highlight`} ref={container}>
          {devData.map(({ id, number, title, ulList }) => (
            <React.Fragment key={id}>
              <div
                className={dev.accToggle}
                id={id}
                ref={(el) => addToRefs(el, accItemsRefs)}
              >
                <div className={dev.accBlock}>
                  <div className={dev.accNumber}>{number}</div>
                  <div className={dev.accTitle}>{title}</div>
                  <svg
                    className={dev.toggleIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                  >
                    <line x1="32" y1="7" x2="32" y2="57" />
                    <line x1="7" y1="32" x2="57" y2="32" />
                  </svg>
                </div>
              </div>
              <ul>
                {ulList.map((ul, index) => (
                  <li key={`${id}-${index}`}>{ul}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dev;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import projects from "./projects.module.css";
import home from "../../pages/home.module.css";
import { addToRefs, getCSSVariableValue } from "../../utils";
import { useTranslation } from "react-i18next";
import { Project } from "../../locales/interfaces";

function Projects() {

  const { t } = useTranslation()
  const projectsData : Project[] = t("projects.data", { returnObjects: true });

  const projectGalleryRef = useRef<HTMLDivElement>(null);
  const itemsRefs = useRef<HTMLDivElement[]>([]);
  const itemWidth = useRef(0);
  const wrapWidth = useRef(0);
  const requestId = useRef<number | null>(null);
  const touchStart = useRef(0);
  const isDragging = useRef(false);
  const y = useRef(0);
  const scrollX = useRef(0);
  const speed = 2.5;
  const friction = 0.05; //più è alto più c'è frizione

  const paddingOffset = getCSSVariableValue("--projectItem-padding").trim();

  const lerp = (v0: number, v1: number, t: number) => {
    return v0 * (1 - t) + v1 * t;
  };

  const updateWidth = () => {
    const width = itemsRefs.current[0].clientWidth;
    itemWidth.current = width;
    wrapWidth.current = itemsRefs.current.length * width;
  };

  const dispose = (scroll: number) => {
    gsap.set(itemsRefs.current, {
      x: (i) => {
        return i * itemWidth.current + scroll;
      },
      modifiers: {
        x: (x: string) => {
          const s = gsap.utils.wrap(
            -itemWidth.current,
            wrapWidth.current - itemWidth.current,
            parseInt(x)
          );
          return `calc(${s}px - ${paddingOffset})`;
        },
      },
    });
  };

  useEffect(() => {
    if (itemsRefs.current.length > 0) {
      updateWidth();
    }
  }, []);

  useEffect(() => {
    dispose(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const startX = e.clientX || e.touches[0].clientX;
    touchStart.current = startX;
    isDragging.current = true;
    projectGalleryRef.current!.classList.add(projects.isDragging);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (isDragging.current == false) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const moveX = e.clientX || e.touches[0].clientX;
    scrollX.current += (moveX - touchStart.current) * speed;
    touchStart.current = moveX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    projectGalleryRef.current!.classList.remove(projects.isDragging);
  };

  const render = () => {
    y.current = lerp(y.current, scrollX.current, friction);
    dispose(y.current);
    requestId.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(render);
    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
    };
  });

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section className={`${home.section} ${projects.projectsSection}`}>
      <div className={projects.containerProjects}>
        <h2>
            {t("projects.title")}
        </h2>
        <div
          id={projects.projectsGallery}
          ref={projectGalleryRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseLeave={handleTouchEnd}
          onMouseUp={handleTouchEnd}
        >
          {projectsData.map(({ id, name, imgPath, link }) => (
            <div
              className={projects.projectItem}
              key={id}
              ref={(el) => addToRefs(el, itemsRefs)}
            >
              <figure>
                <a className={projects.projectName} href={link} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
                <img src={imgPath} alt={name} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import "./navbar.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {  useRef } from "react";
import { ExpoScaleEase } from "gsap/EasePack";
import { Link, useLocation} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";
gsap.registerPlugin(useGSAP, ExpoScaleEase);

const Navbar = function Navbar()
{
  const { t } = useTranslation();
  const navContainer = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const getActiveClass = (path : string) => {
    return location.pathname === path ? "active" : "";
  };
  
  const { contextSafe } = useGSAP({ scope: navContainer });

  const openNav = contextSafe(() => {
    const duration: number = 1;

    if (navContainer.current) {
      gsap.set(navContainer.current, {
        display: "flex",
      });
      
      gsap.set(navContainer.current, {
        opacity: 1,
      });

      gsap.to(navContainer.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "Expo.easeInOut",
        duration: duration,
      });
    }
  });

  const closeNav = contextSafe(() => {
    const duration: number = 0.4;

    if (navContainer.current) {
     
      gsap.to(navContainer.current, {
        opacity: 0,
        duration: duration,
      });

      gsap.set(navContainer.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        delay: duration,
      });

      gsap.set(navContainer.current, {
        display: "none",
        delay: duration,
      });
    }
  });

  return (
    <>
    <div className="nav-header-wrapper">
      <LanguageSelector />
      <button className="nav-btn" id="open-nav-btn" onClick={openNav}>
        Menu
      </button>
      </div>
      <div id="nav-container" ref={navContainer}>
        <button className="nav-btn" id="close-nav-btn" onClick={closeNav}>
          {t("navbar.closeBtn")}
        </button>
        <div className="nav-wrapper">
          <nav>
            <ul className="nav-pages">
              <li><Link to="/" className={getActiveClass("/")} onClick={closeNav}>{t('navbar.home')}</Link></li>
              <li><Link to="/about" className={getActiveClass("/about")} onClick={closeNav}>{t('navbar.about')}</Link></li>
              <li><Link to="/contact" className={getActiveClass("/contact")} onClick={closeNav}>{t('navbar.contact')}</Link></li>
              <li><Link to="/projects" className={getActiveClass("/projects")} onClick={closeNav}>{t('navbar.projects')}</Link></li>
            </ul>
            <hr />
            <ul className="nav-socials">
              <li><a className="primary-hover" href="">Instagram</a></li>
              <li><a className="primary-hover" href="">Linkedin</a></li>
              <li><a className="primary-hover" href="">Github</a></li>
            </ul>
          </nav>
          <p>
            Mirko Bellopede <br /> Full stack web developer Portfolio 2024 ©
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

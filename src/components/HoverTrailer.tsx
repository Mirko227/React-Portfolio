import React, { useEffect, useRef } from "react";
import "./hoverTrailer.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const HoverTrailer: React.FC = () => {
  const trailerRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<boolean>(false);
  const firstHover = useRef<boolean>(true);
  const duration = 0.8;

  const { contextSafe } = useGSAP({ scope: trailerRef });

  const listenersAddedRef = useRef<boolean>(false); // Ref per tracciare se i listener sono stati aggiunti
  const cursorTypeRef = useRef<MediaQueryList | null>(null); // Ref per matchMedia

  // Gestione del movimento del mouse
  const handleMousemove = contextSafe((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.closest(".hover-trailer")) {
      if (!activeRef.current) {
        gsap.to(trailerRef.current, {
          duration: duration,
          opacity: 1,
          ease: "power2.out",
        });
      }
      activeRef.current = true;

      if (firstHover.current) {
        if (trailerRef.current) {
          trailerRef.current.textContent = "Click to copy"; // Testo originale
        }
        firstHover.current = false;
      }

      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      }
    } else if (activeRef.current) {
      gsap.to(trailerRef.current, {
        duration: duration,
        opacity: 0,
        ease: "power2.out",
      });
      activeRef.current = false;
      firstHover.current = true;
    }
  });

  // Gestione del click per copiare il testo
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const hoverTrailerElement = target.closest(".hover-trailer");

    if (hoverTrailerElement) {
      const textToCopy = hoverTrailerElement.textContent || "";
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (trailerRef.current) {
          trailerRef.current.textContent = "Done!"; // Testo dopo il click
        }
      });
    }
  };

  const addListeners = () => {
    if (!listenersAddedRef.current) {
      document.addEventListener("mousemove", handleMousemove);
      document.addEventListener("click", handleClick);
      listenersAddedRef.current = true;
    }
  };

  const removeListeners = () => {
    if (listenersAddedRef.current) {
      document.removeEventListener("mousemove", handleMousemove);
      document.removeEventListener("click", handleClick);
      listenersAddedRef.current = false;
    }
  };

  useEffect(() => {
    // Crea un'istanza di matchMedia e salvala in useRef
    cursorTypeRef.current = window.matchMedia("(pointer: fine)");

    const cursorType = cursorTypeRef.current;

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        addListeners();
      } else {
        removeListeners();
      }
    };

    // Controlla inizialmente e aggiungi l'event listener per i cambiamenti
    if (cursorType.matches) {
      addListeners();
    } else {
      removeListeners();
    }
    cursorType.addEventListener("change", (handleMediaQueryChange));

    // Cleanup del listener di change e altri listener quando il componente viene smontato
    return () => {
      if (cursorTypeRef.current) {
        cursorTypeRef.current.removeEventListener("change", handleMediaQueryChange);
      }
      removeListeners(); // Rimuove i listener mouse e click
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-center" id="custom-cursor" ref={trailerRef}>
      Click to copy
    </div>
  );
};
  
export default HoverTrailer;

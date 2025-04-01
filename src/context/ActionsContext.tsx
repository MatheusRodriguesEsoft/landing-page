"use client";
import {
  createContext,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface ActionsContextData {
  sectionRefs: RefObject<HTMLElement | null>[];
  visibleSectionIndex: number;
}

interface ActionsProviderProps {
  children: ReactNode;
}

export const ActionsContext = createContext({} as ActionsContextData);

export function ActionsProvider({ children }: ActionsProviderProps) {
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
  
  // Lista de seções
  const sections = ["home", "features", "courses", "benefits"];
  
  // Criar refs ANTES do map
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) {
            setVisibleSectionIndex(index);
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ActionsContext.Provider value={{ sectionRefs, visibleSectionIndex }}>
      {children}
    </ActionsContext.Provider>
  );
}

import { createContext, useEffect, useState } from "react";

interface iResizeProviderProps {
  children: React.ReactNode;
}

interface iResizeProvider {
  showSearch: boolean;
  isMobile: boolean;
  changeSearch: () => void;
}

export const ResizeContext = createContext({} as iResizeProvider);

export const ResizeProvider = ({ children }: iResizeProviderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function observeResize() {
      if (window.innerWidth >= 650) {
        setShowSearch(true);
        setIsMobile(false);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth < 650) {
          setShowSearch(false);
          setIsMobile(true);
        } else {
          setShowSearch(true);
          setIsMobile(false);
        }
      });
    }
    observeResize();
  }, []);

  function changeSearch() {
    if (isMobile) {
      setShowSearch(!showSearch);
    }
  }

  return (
    <ResizeContext.Provider value={{ showSearch, isMobile, changeSearch }}>
      {children}
    </ResizeContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "rafacard-visible";

const RafaCardContext = createContext({ visible: true, toggle: () => {}, hide: () => {} });

export const useRafaCard = () => useContext(RafaCardContext);

export const RafaCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(visible));
  }, [visible]);

  const toggle = () => setVisible((v) => !v);
  const hide = () => setVisible(false);

  return (
    <RafaCardContext.Provider value={{ visible, toggle, hide }}>
      {children}
    </RafaCardContext.Provider>
  );
};

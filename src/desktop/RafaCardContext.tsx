import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "rafacard-visible";

const RafaCardContext = createContext({
  visible: true,
  toggle: () => {},
  hide: () => {},
  reviveKey: 0,
  anyDismissed: false,
  reportDismiss: () => {},
  reviveAll: () => {},
});

export const useRafaCard = () => useContext(RafaCardContext);

export const RafaCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === null ? true : stored === "true";
  });
  const [dismissedCount, setDismissedCount] = useState(0);
  const [reviveKey, setReviveKey] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(visible));
  }, [visible]);

  const toggle = () => setVisible((v) => !v);
  const hide = () => setVisible(false);
  const reportDismiss = () => setDismissedCount((c) => c + 1);
  const reviveAll = () => {
    setDismissedCount(0);
    setReviveKey((k) => k + 1);
  };

  return (
    <RafaCardContext.Provider value={{ visible, toggle, hide, reviveKey, anyDismissed: dismissedCount > 0, reportDismiss, reviveAll }}>
      {children}
    </RafaCardContext.Provider>
  );
};

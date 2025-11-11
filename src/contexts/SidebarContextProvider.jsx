// sidebar/SidebarProvider.jsx
import { useState, useCallback, useMemo } from 'react';
import { SidebarContext } from './SidebarContext';

export default function SidebarContextProvider({ children }) {
  const [sidebarElement, setSidebarElement] = useState(null);

  const registerSidebarElement = useCallback((node) => {
    setSidebarElement((prev) => (node && node !== prev ? node : prev));
  }, []);

  const value = useMemo(() => ({
    sidebarElement,
    registerSidebarElement,
  }), [sidebarElement, registerSidebarElement]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

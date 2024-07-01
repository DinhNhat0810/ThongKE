"use client";

import { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const inititalSidebarContext: SidebarContextType = {
  isOpen: false,
  setIsOpen: () => null,
};

export const SidebarContext = createContext<SidebarContextType>(
  inititalSidebarContext
);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(inititalSidebarContext.isOpen);
  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

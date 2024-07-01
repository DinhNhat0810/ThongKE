"use client";

import { createContext, useState } from "react";
import { TITLE } from "../../utils/constant";

type TitleHeaderContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const inititalTitleHeaderContext: TitleHeaderContextType = {
  title: TITLE.THONG_KE,
  setTitle: () => null,
};

export const TitleHeaderContext = createContext<TitleHeaderContextType>(
  inititalTitleHeaderContext
);

export const TitleHeaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState<string>(inititalTitleHeaderContext.title);
  return (
    <TitleHeaderContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </TitleHeaderContext.Provider>
  );
};

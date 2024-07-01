"use client";

import { SidebarContext } from "@/contexts/sidebar.context";
import { TitleHeaderContext } from "@/contexts/title-header.context";
import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AppBarWrap } from "./AppBar.styles";
import AppBarProfile from "./AppBarProfile";

const AppBar = () => {
  const [showInputControl, setShowInputControl] = useState(false);
  const inputControlRef = useRef<HTMLInputElement | null>(null);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { title } = useContext(TitleHeaderContext);

  const handleInputControlVisibility = () =>
    setShowInputControl(!showInputControl);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        inputControlRef.current &&
        !inputControlRef.current.contains(event.target) &&
        event.target.className !== "input-icon" &&
        event.target.className !== "input-icon-img"
      ) {
        setShowInputControl(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <AppBarWrap>
      <div className="appbar-content">
        <div className="appbar-left">
          <button type="button" className="sidebar-open-btn">
            <MdOutlineMenu
              size={24}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </button>
          <h3 className="appbar-title">{title}</h3>
        </div>
        <div className="appbar-right">
          <AppBarProfile />
        </div>
      </div>
    </AppBarWrap>
  );
};

export default AppBar;

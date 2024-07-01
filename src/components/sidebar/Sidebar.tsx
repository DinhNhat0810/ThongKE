"use client";

import { MdOutlineClose } from "react-icons/md";
import { memo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ROUTE, ROUTES } from "../../../utils/constant";
import { SidebarContext } from "@/contexts/sidebar.context";
import { TitleHeaderContext } from "@/contexts/title-header.context";
import { Icons } from "@/assets/icons";
import { Images } from "@/assets/images";
import { SidebarWrap } from "./Sidebar.styles";

import { usePathname, useRouter } from "next/navigation";
import { authApiRequests } from "@/apiRequests/auth";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [active, setActive] = useState(ROUTE.HOME);
  const { setTitle } = useContext(TitleHeaderContext);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const curr = ROUTES.find((item) => item.path === pathname);

    if (curr) {
      setActive(curr.path);
      setTitle(curr.name);
    }
  }, [pathname, setTitle]);

  const dataSidebar = [
    {
      path: ROUTE.HOME,
      icon: Icons.Chart,
      label: "Thống kê",
    },
    {
      path: ROUTE.CAP_MOI,
      icon: Icons.AddAccount,
      label: "Cấp mới tài khoản",
    },
    {
      path: ROUTE.DONG_BO,
      icon: Icons.Sync,
      label: "Đồng bộ tài khoản",
    },
    {
      path: ROUTE.LOGOUT,
      icon: Icons.SignOut,
      label: "Đăng xuất",
    },
  ];

  const handleLogout = async () => {
    await authApiRequests.logoutFromNextClientToNextServer();
    localStorage.removeItem("user");
    router.push(`/login`);
  };

  return (
    <SidebarWrap className={`${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <Image
            src={Images.Logo}
            alt="site brand logo"
            width={180}
            height={40}
            priority={true}
          />
        </div>
        <button className="sidebar-close-btn">
          <MdOutlineClose
            size={24}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            {dataSidebar.map((item, index) => {
              return (
                <li className="menu-item" key={index}>
                  <Link
                    href={item.path}
                    className={`menu-link ${
                      active === item?.path ? "active" : ""
                    }`}
                    scroll={false}
                    onClick={(e) => {
                      if (item.path === ROUTE.LOGOUT) {
                        e.preventDefault();
                        handleLogout();
                      }
                    }}
                  >
                    <span className="menu-link-icon">
                      <Image
                        src={item?.icon}
                        alt=""
                        width={40}
                        height={40}
                        priority={true}
                      />
                    </span>
                    <span className="menu-link-text">{item?.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SidebarWrap>
  );
};

export default memo(Sidebar);

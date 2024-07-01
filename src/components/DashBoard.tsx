"use client";
import { Tabs, TabsProps } from "antd";
import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import { DashBoardWrap } from "./Dashboard.styles";

export default function DashBoard() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thống kê tổng quan",
      children: <Tab1 />,
    },
    {
      key: "2",
      label: "Thống kê theo đơn vị",
      children: <Tab2 />,
    },
  ];

  const onChange = (key: string) => {};

  return (
    <DashBoardWrap>
      <div className="content-area">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </DashBoardWrap>
  );
}

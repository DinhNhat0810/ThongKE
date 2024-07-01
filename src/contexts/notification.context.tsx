"use client";

import { notification } from "antd";
import { createContext } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

type NotificationContextType = {
  message: string;
  description: string;
  type: NotificationType;
  handleOpenNotification: ({
    type,
    message,
    description,
  }: {
    type: NotificationType;
    message: string;
    description: string;
  }) => void;
};

const initialNotificationContext: NotificationContextType = {
  message: "",
  description: "",
  type: "info",
  handleOpenNotification: () => {},
};

export const NotificationContext = createContext<NotificationContextType>(
  initialNotificationContext
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description?: string
  ) => {
    api[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };

  const handleOpenNotification = ({
    type,
    message,
    description,
  }: {
    type: NotificationType;
    message: string;
    description?: string;
  }) => {
    openNotificationWithIcon(type, message, description);
  };

  return (
    <NotificationContext.Provider
      value={{
        message: "",
        description: "",
        type: "info",
        handleOpenNotification,
      }}
    >
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

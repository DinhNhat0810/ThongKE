"use client";

import { Button, ConfigProvider, Form, Modal } from "antd";
import React, { useState } from "react";
import { daytokhaiFields } from "./config";
import CustomInput from "@/components/CustomInput";

export default function PushInfoModal({
  isModalOpen,
  handlePushInfo,
  handleCancel,
  title,
  form,
}: {
  isModalOpen: boolean;
  handlePushInfo: (values: any) => void;
  handleCancel: () => void;
  title: string;
  form: any;
}) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={800}
    >
      <Form
        onFinish={handlePushInfo}
        form={form}
        initialValues={{
          loai_to_khai_id: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: 20,
            borderTop: "1px solid #ccc",
          }}
        >
          {daytokhaiFields?.map((field: any, index) => {
            return (
              <div
                key={index}
                style={{
                  width: field.width,
                  ...field.style,
                }}
              >
                <div>
                  <CustomInput
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    configBoderRadius={4}
                    type={field.type}
                    rules={field.rules}
                    formItemStyle={{
                      marginBottom: field?.note ? 0 : 20,
                    }}
                    options={field?.options}
                    defaultValue={field?.defaultValue}
                    gutter={field?.gutter}
                    labelCheckbox={field?.labelCheckbox}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="submit-btn"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "16px",
          }}
        >
          <Form.Item
            style={{
              marginLeft: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 4,
                },
              }}
            >
              <Button onClick={handleCancel} type="default">
                Đóng
              </Button>
            </ConfigProvider>
          </Form.Item>
          <Form.Item
            style={{
              marginLeft: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ConfigProvider
              theme={{
                token: {
                  borderRadius: 4,
                },
              }}
            >
              <Button htmlType="submit" type="primary">
                Xác nhận
              </Button>
            </ConfigProvider>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

import { Button, ConfigProvider, Form, Modal } from "antd";
import React, { useState } from "react";
import { taomoitaikhoanfields } from "../config";
import CustomInput from "@/components/CustomInput";

export default function AddModal({
  isModalOpen,
  handleCreateAccount,
  handleCancel,
  title,
  form,
}: {
  isModalOpen: boolean;
  handleCreateAccount: (values: any) => void;
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
    >
      <Form
        onFinish={handleCreateAccount}
        form={form}
        initialValues={{
          role_ids: 10,
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
          {taomoitaikhoanfields?.map((field: any, index) => {
            return (
              <div key={index} style={{ width: field.width }}>
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
                />
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

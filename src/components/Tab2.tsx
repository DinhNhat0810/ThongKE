"use client";

import { Button, Col, ConfigProvider, Flex, Form, Row, Table } from "antd";
import CustomInput from "./CustomInput";
import { useContext, useEffect, useState } from "react";
import {
  LayDS_ChisoHD,
  LayDS_LoaiHDSD_Donvi,
  LayDS_taikhoan_donvi,
} from "@/apiRequests/thongke";
import { convertXmlToJson } from "@/lib/common";
import { NotificationContext } from "@/contexts/notification.context";

export default function Tab2() {
  const [form] = Form.useForm();
  const { handleOpenNotification } = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);

  const [chisoHd, setChisoHd] = useState<any[]>([
    {
      name: "Tổng số lượng đăng ký:",
      value: 0,
      field: "TongDK",
    },
    {
      name: "Tổng số hóa đơn đã xuất:",
      value: 0,
      field: "Tongdoanhso",
    },
    {
      name: "Tổng số hóa đơn còn lại:",
      value: 0,
      field: "Tongconlai",
    },
    {
      name: "Tổng giá trị hóa đơn phát hành:",
      value: 0,
      field: "Tongphathanh",
    },
  ]);

  const [usersTable, setUsersTable] = useState<any[]>([]);

  const [invoicesTable, setInvoicesTable] = useState<any[]>([]);

  const getDS_ChisoHD = async (masothue: string) => {
    try {
      const response: any = await LayDS_ChisoHD(masothue);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LayDS_ChisoHDResponse"][
          "LayDS_ChisoHDResult"
        ];

      setChisoHd((prev) => {
        const fieldMappings: any = {
          TongDK: "TongDK",
          Tongdoanhso: "Tongdoanhso",
          Tongconlai: "Tongconlai",
          Tongphathanh: "Tongphathanh",
        };

        return prev.map((item: any) => {
          const fieldName = fieldMappings[item.field];
          if (fieldName) {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.[fieldName] || 0,
            };
          }
          return item;
        });
      });
    } catch (error) {
      console.log(error);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra khi lấy dữ liệu từ LayDS_ChisoHD",
      });
    }
  };

  const getDS_taikhoan_donvi = async (masothue: string) => {
    try {
      const response: any = await LayDS_taikhoan_donvi(masothue);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LayDS_taikhoan_donviResponse"][
          "LayDS_taikhoan_donviResult"
        ];

      if (JSON.parse(DocumentElement)?.length > 0 && DocumentElement) {
        setUsersTable(
          JSON.parse(DocumentElement)?.map((item: any, index: number) => {
            return {
              ...item,
              key: index,
            };
          }) || []
        );
      }
    } catch (error) {
      console.log(error);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra khi lấy dữ liệu từ LayDS_taikhoan_donvi",
      });
    }
  };

  const getDS_LoaiHDSD_Donvi = async (masothue: string) => {
    try {
      const response: any = await LayDS_LoaiHDSD_Donvi(masothue);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LayDS_LoaiHDSD_DonviResponse"][
          "LayDS_LoaiHDSD_DonviResult"
        ];

      if (JSON.parse(DocumentElement)?.length > 0 && DocumentElement) {
        setInvoicesTable(
          JSON.parse(DocumentElement)?.map((item: any, index: number) => {
            return {
              ...item,
              key: index,
            };
          }) || []
        );
      }
    } catch (error) {
      console.log(error);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra khi lấy dữ liệu từ LayDS_LoaiHDSD_Donvi",
      });
    }
  };

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      Promise.allSettled([
        getDS_ChisoHD(values.masothue),
        getDS_taikhoan_donvi(values.masothue),
        getDS_LoaiHDSD_Donvi(values.masothue),
      ]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
        onFinish={(values) => {
          handleFinish(values);
        }}
        form={form}
      >
        <CustomInput
          labelHorizontal="Nhập mã đơn vị"
          name="masothue"
          placeholder="Nhập mã đơn vị"
          configBoderRadius={4}
          type="text"
          rules={[{ required: true, message: "Vui lòng nhập mã đơn vị" }]}
          formItemStyle={{}}
        />

        <Form.Item
          style={{
            marginLeft: "8px",
            marginRight: "8px",
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 4,
              },
            }}
          >
            <Button htmlType="submit" type="primary" loading={loading}>
              Lấy dữ liệu
            </Button>
          </ConfigProvider>
        </Form.Item>
        <Button
          type="primary"
          onClick={() => {
            form.resetFields();
            setUsersTable([]);
            setInvoicesTable([]);
            setChisoHd((prev) => {
              return prev.map((item) => {
                return {
                  ...item,
                  value: 0,
                };
              });
            });
          }}
        >
          Làm mới
        </Button>
      </Form>

      <Row gutter={[24, 8]} className="tab2-content">
        <Col span={24} lg={8}>
          <h3 className="tab2-title">Danh sách các loại HĐ sử dụng</h3>

          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: "#f5f9fc",
                  headerColor: "#000",
                  controlItemBgHover: "#fff",
                  headerBorderRadius: 0,
                  colorBgContainer: "#fff",
                  borderColor: "#aaa",
                  padding: 8,
                },
              },
            }}
          >
            <Table
              bordered
              dataSource={invoicesTable}
              columns={[
                {
                  title: "STT",
                  dataIndex: "STT",
                  key: "STT",
                },
                {
                  title: "Loại HĐ",
                  dataIndex: "loaiHD",
                  key: "loaiHD",
                },
                {
                  title: "Ký hiệu",
                  dataIndex: "Kyhieu",
                  key: "Kyhieu",
                },
                {
                  title: "SL",
                  dataIndex: "Soluong",
                  key: "Soluong",
                },
              ]}
            />
          </ConfigProvider>
        </Col>
        <Col span={24} lg={16}>
          <h3 className="tab2-title">Danh sách người dùng</h3>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: "#f5f9fc",
                  headerColor: "#000",
                  controlItemBgHover: "#fff",
                  headerBorderRadius: 0,
                  colorBgContainer: "#fff",
                  borderColor: "#aaa",
                  padding: 8,
                },
              },
            }}
          >
            <Table
              bordered
              columns={[
                {
                  title: "STT",
                  dataIndex: "STT",
                  key: "STT",
                  fixed: "left",
                  width: 50,
                },
                {
                  title: "Tên TK",
                  dataIndex: "Tentaikhoan",
                  key: "Tentaikhoan",
                  fixed: "left",
                  width: 150,
                },
                {
                  title: "Họ tên",
                  dataIndex: "Hoten",
                  key: "Hoten",
                  width: 200,
                },
                {
                  title: "Trạng thái",
                  dataIndex: "Trangthai",
                  key: "Trangthai",
                },
                {
                  title: "Ngày tạo",
                  dataIndex: "Ngaytao",
                  key: "Ngaytao",
                },
                {
                  title: "Serial",
                  dataIndex: "serial",
                  key: "serial",
                },
              ]}
              dataSource={usersTable}
              scroll={{ x: true }}
            />
          </ConfigProvider>
        </Col>

        <Col span={24} lg={24}>
          <h3 className="tab2-title">Chỉ số về hóa đơn</h3>

          {chisoHd.map((item, index) => {
            return (
              <div key={index} className="tab2-content-item">
                <div className="tab2-content-item-label">{item?.name}</div>
                <div className="tab2-content-item-value">{item?.value}</div>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

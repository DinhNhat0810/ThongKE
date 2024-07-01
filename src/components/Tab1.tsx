"use client";

import { Button, ConfigProvider, Form } from "antd";
import CustomInput from "./CustomInput";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import CustomLoading from "./CustomLoading";
import {
  LaySL_TKTruycap,
  LaySLHD_daphathanh,
  LaySLMST_Dacap,
  LaySLMST_GoiDV,
  LaySLMST_Hoatdong,
  LayTGTB_KyguiCM,
} from "@/apiRequests/thongke";
import { convertXmlToJson } from "@/lib/common";
import { NotificationContext } from "@/contexts/notification.context";

export default function Tab1() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([
    {
      title: "Số lượng MST đã cấp",
      value: 0,
      field: "LaySLMST_Dacap",
    },
    {
      title: "Số lượng cấp mới / gia hạn",
      value: 0,
      field: "LaySLMST_GoiDV",
    },
    {
      title: "Số lượng MST đang hoạt động",
      value: 0,
      field: "LaySLMST_Hoatdong",
    },
    {
      title: "Số lượng HĐ đã phát hành",
      value: 0,
      field: "LaySLHD_daphathanh",
    },
    {
      title: "Số lượng user truy cập",
      value: 0,
      field: "LaySL_TKTruycap",
    },
    {
      title: "Thời gian TB ký gửi cấp mã CQT",
      value: 0,
      field: "LayTGTB_KyguiCM",
    },
  ]);
  const { handleOpenNotification } = useContext(NotificationContext);

  const getSLMST_Dacap = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LaySLMST_Dacap(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LaySLMST_DacapResponse"][
          "LaySLMST_DacapResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LaySLMST_Dacap") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LaySLMST_Dacap",
      });
    }
  };

  const getSLMST_GoiDV = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LaySLMST_GoiDV(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LaySLMST_GoiDVResponse"][
          "LaySLMST_GoiDVResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LaySLMST_GoiDV") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LaySLMST_GoiDV",
      });
    }
  };

  const getSLMST_Hoatdong = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LaySLMST_Hoatdong(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LaySLMST_HoatdongResponse"][
          "LaySLMST_HoatdongResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LaySLMST_Hoatdong") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LaySLMST_Hoatdong",
      });
    }
  };

  const getSL_TKTruycap = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LaySL_TKTruycap(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LaySL_TKTruycapResponse"][
          "LaySL_TKTruycapResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LaySL_TKTruycap") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LaySL_TKTruycap",
      });
    }
  };
  const getSLHD_daphathanh = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LaySLHD_daphathanh(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LaySLHD_daphathanhResponse"][
          "LaySLHD_daphathanhResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LaySLHD_daphathanh") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LaySLHD_daphathanh",
      });
    }
  };
  const getTGTB_KyguiCM = async (startDate: string, endDate: string) => {
    try {
      const response: any = await LayTGTB_KyguiCM(startDate, endDate);
      const dataJson = convertXmlToJson(response.data);

      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["LayTGTB_KyguiCMResponse"][
          "LayTGTB_KyguiCMResult"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.field === "LayTGTB_KyguiCM") {
            return {
              ...item,
              value: JSON.parse(DocumentElement)?.Soluong || 0,
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
        description: "Có lỗi xảy ra với LayTGTB_KyguiCM",
      });
    }
  };

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      await Promise.allSettled([
        getSLMST_Dacap(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
        getSLMST_GoiDV(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
        getSLMST_Hoatdong(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
        getSLHD_daphathanh(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
        getSL_TKTruycap(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
        getTGTB_KyguiCM(
          dayjs(values.tungay).format("YYYY-MM-DD"),
          dayjs(values.denngay).format("YYYY-MM-DD")
        ),
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
          labelHorizontal="Từ ngày"
          name="tungay"
          placeholder="Từ ngày"
          size="large"
          configBoderRadius={4}
          type="date"
          rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
          formItemStyle={{}}
        />

        <CustomInput
          labelHorizontal="Đến ngày"
          name="denngay"
          placeholder="Đến ngày"
          size="large"
          configBoderRadius={4}
          type="date"
          rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
          formItemStyle={{
            marginLeft: "8px",
          }}
          //   disabledDate={(data: any) =>
          //     disabledDate(data, form.getFieldValue("tungay"))
          //   }
        />

        <Form.Item
          style={{
            marginLeft: "8px",
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
      </Form>

      <div className="tab1-content">
        {data.map((item: any, index: number) => {
          return (
            <div className="tab1-content-item" key={index}>
              <div className="tab1-content-item-label">{item?.title}</div>
              <div className="tab1-content-item-value">{item?.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

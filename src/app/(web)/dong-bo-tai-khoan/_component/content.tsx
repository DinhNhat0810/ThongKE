"use client";

import { userApiRequests } from "@/apiRequests/user";
import { NotificationContext } from "@/contexts/notification.context";
import { Button, ConfigProvider, Form } from "antd";
import { useContext, useState } from "react";
import { DashBoardWrap } from "./DongBoTaiKhoan.styles";
import CustomLoading from "@/components/CustomLoading";
import { capmoitaikhoanfields } from "./config";
import CustomInput from "@/components/CustomInput";
import AddModal from "./add-modal";
import PushInfoModal from "./push-infor-modal";
import dayjs from "dayjs";
import { capnhatSLHD, daytokhai, themDonVi, themtaikhoan } from "@/app/action";
import { useAppContext } from "@/app/app-provider";
import AddService from "./add-service";

const checkhoadon = [
  {
    field: "is_hoadon_co_ma_cqt",
    value: false,
  },

  {
    field: "is_hoadon_khong_co_ma_cqt",
    value: false,
  },

  {
    field: "is_chuyen_du_lieu_truc_tiep",
    value: false,
  },

  {
    field: "is_chuyen_lieu_thong_qua_to_chuc",
    value: false,
  },

  {
    field: "is_chuyen_day_du_tung_hoadon",
    value: false,
  },

  {
    field: "is_sd_hoadon_gtgt",
    value: false,
  },
];

export default function DongBoTaiKhoan() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();
  const { user } = useAppContext();

  const { handleOpenNotification } = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPushInfoModalOpen, setIsPushInfoModalOpen] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showPushInfoModal = () => {
    setIsPushInfoModalOpen(true);
  };

  const showModalAddService = () => {
    setIsAddServiceModalOpen(true);
  };

  const handleCancel = () => {
    form2.resetFields();
    setIsModalOpen(false);
  };

  const handleCancelPushInfo = () => {
    form3.resetFields();
    setIsPushInfoModalOpen(false);
  };

  const handleCancelAddService = () => {
    form4.resetFields();
    setIsAddServiceModalOpen(false);
  };

  const handleReset = () => {
    form1.resetFields();
  };

  const handleFinish = async (values: any) => {
    for (const key in values) {
      if (values[key] === undefined) {
        values[key] = "";
      }
    }

    setLoading(true);
    try {
      const res: any = await themDonVi(
        {
          ...values,
        },

        user?.token_info?.access_token
      );

      if (
        res.status_code === 401 ||
        res.status === 401 ||
        res.status_code === 400 ||
        res.status === 400 ||
        res.status === 500
      ) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Thêm mới thông tin đơn vị thất bại",
          description: res?.message || res?.title,
        });
        return;
      }

      if (res?.status_code === 200) {
        form1.resetFields();
        handleOpenNotification({
          type: "success",
          message: "Thêm mới thông tin đơn vị thành công",
          description: "",
        });
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Thêm mới thông tin đơn vị thất bại",
        description: "",
      });
    }
  };

  const handleCreateAccount = async (values: any) => {
    setLoading(true);

    try {
      const res: any = await themtaikhoan(
        {
          ...values,
          role_ids: [values.role_ids],
        },
        user?.token_info?.access_token
      );

      if (
        res.status_code === 401 ||
        res.status === 401 ||
        res.status_code === 400 ||
        res.status === 400 ||
        res.status === 500
      ) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Thêm mới người dùng thất bại",
          description: res?.message || res?.title,
        });
        return;
      }

      if (res?.status_code === 200) {
        form2.resetFields();
        handleOpenNotification({
          type: "success",
          message: "Thêm mới người dùng thành công",
          description: "",
        });
        handleCancel();
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Thêm mới người dùng thất bại",
        description: "",
      });
    }
  };

  const handlePushInfo = async (values: any) => {
    setLoading(true);
    try {
      const arr = checkhoadon.map((item) => {
        if (values.checkHoadon.includes(item.field)) {
          return {
            ...item,
            value: true,
          };
        }

        return {
          ...item,
          value: false,
        };
      });

      const convertedObject = arr.reduce((acc: any, { field, value }) => {
        acc[field] = value;
        return acc;
      }, {});

      delete values.checkHoadon;

      const res: any = await daytokhai(
        {
          ...values,
          ...convertedObject,
          ngay_lap: values.ngay_lap
            ? dayjs(values.ngay_lap).format("YYYY-MM-DD")
            : "",
          ngay_co_hieu_luc: values.ngay_co_hieu_luc
            ? dayjs(values.ngay_co_hieu_luc).format("YYYY-MM-DD")
            : "",
          nguoi_tao: "",
          cks_serial_no: "",
          cks_user_full_name: "",
          phat_hanh_uuid: "",
          ma_to_khai: "1",
          mst: values?.donvi_ma_dv,
        },
        user?.token_info?.access_token
      );

      if (res?.status_code === 200 || res?.status === 200) {
        form3.resetFields();
        handleOpenNotification({
          type: "success",
          message: "Đẩy thông tin tờ khai thành công",
          description: "",
        });
        handleCancelPushInfo();
      } else {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Đẩy thông tin tờ khai thất bại",
          description: res?.message || res?.title,
        });
        return;
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Đẩy thông tin tờ khai thất bại",
        description: "",
      });
    }
  };

  const handleUpdateInvoices = async (values: any) => {
    setLoading(true);
    try {
      console.log({
        ...values,
        ngay_mua: dayjs(values.ngay_mua).format("YYYY-MM-DD"),
        trang_thai_hs_id: 1,
        trang_thai_tt_id: 1,
        trang_thai_ds_id: 1,
        tt_xuat_hd_id: 1,
        trang_thai_hd_id: 1,
        transaction_id: Math.random().toString(36).substring(5),
      });

      const res: any = await capnhatSLHD(
        {
          ...values,
          ngay_mua: dayjs(values.ngay_mua).format("YYYY-MM-DD"),
          trang_thai_hs_id: 1,
          trang_thai_tt_id: 1,
          trang_thai_ds_id: 1,
          tt_xuat_hd_id: 1,
          trang_thai_hd_id: 1,
          transaction_id: Math.random().toString(36).substring(5),
        },
        user?.token_info?.access_token
      );

      if (
        res.status_code === 401 ||
        res.status === 401 ||
        res.status_code === 400 ||
        res.status === 400 ||
        res.status === 500
      ) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Cập nhật SL HĐ thất bại",
          description: res?.message || res?.title,
        });
        return;
      }

      if (res?.status_code === 200 || res?.status === 200) {
        form4.resetFields();
        handleOpenNotification({
          type: "success",
          message: "Cập nhật SL HĐ thành công",
          description: "",
        });
        handleCancelAddService();
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Cập nhật SL HĐ thất bại",
        description: "",
      });
    }
  };

  return (
    <DashBoardWrap>
      <CustomLoading loading={loading} />
      <div className="content-area">
        <div className="content-area__title">
          <h3>Thêm mới thông tin đơn vịị</h3>

          <div>
            <Button onClick={showModalAddService} type="primary">
              Cập nhật SL HĐ còn lại
            </Button>
            <Button
              style={{
                marginRight: 8,
                marginLeft: 8,
              }}
              onClick={showPushInfoModal}
              type="primary"
            >
              Đẩy tờ khai
            </Button>
            <Button onClick={showModal} type="primary">
              Thêm người dùng
            </Button>
          </div>
        </div>

        <Form onFinish={handleFinish} form={form1}>
          <div className="form-capmoi">
            <div className="form-capmoi__left">
              <p>{capmoitaikhoanfields.basicInfo.title}</p>
              <div>
                {capmoitaikhoanfields.basicInfo.fields.map((field, index) => {
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
                      />
                      {field?.note && (
                        <p
                          style={{
                            fontSize: 12,
                            color: "gray",
                            marginBottom: 16,
                          }}
                        >
                          {field.note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="form-capmoi__right">
              <p>{capmoitaikhoanfields.contactInfo.title}</p>
              {capmoitaikhoanfields.contactInfo.fields.map(
                (field: any, index: number) => {
                  return (
                    <div key={index} style={{ width: field.width }}>
                      <CustomInput
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                        configBoderRadius={4}
                        type={field.type}
                        rules={field?.rules}
                        formItemStyle={{
                          marginBottom: 20,
                        }}
                      />
                    </div>
                  );
                }
              )}

              <p>{capmoitaikhoanfields.bankInfo.title}</p>
              {capmoitaikhoanfields.bankInfo.fields.map((field: any, index) => {
                return (
                  <div key={index} style={{ width: field.width }}>
                    <CustomInput
                      label={field.label}
                      name={field.name}
                      placeholder={field.placeholder}
                      configBoderRadius={4}
                      type={field.type}
                      rules={field?.rules}
                      formItemStyle={{
                        marginBottom: 20,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="submit-btn">
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
                <Button onClick={handleReset} type="default">
                  Làm mới
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
                  Thêm mới
                </Button>
              </ConfigProvider>
            </Form.Item>
          </div>
        </Form>

        <AddModal
          title="Thêm người dùng"
          isModalOpen={isModalOpen}
          handleCreateAccount={handleCreateAccount}
          handleCancel={handleCancel}
          form={form2}
        />

        <PushInfoModal
          title="Đẩy thông tin tờ khai"
          isModalOpen={isPushInfoModalOpen}
          handlePushInfo={handlePushInfo}
          handleCancel={handleCancelPushInfo}
          form={form3}
        />

        <AddService
          title="Cập nhật SL HĐ còn lại"
          isModalOpen={isAddServiceModalOpen}
          handleUpdateInvoices={handleUpdateInvoices}
          handleCancel={handleCancelAddService}
          form={form4}
        />
      </div>
    </DashBoardWrap>
  );
}

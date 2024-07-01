export const capmoitaikhoanfields = {
  basicInfo: {
    title: "Thông tin cơ bản",
    fields: [
      {
        key: "ma_dv",
        name: "ma_dv",
        label: "Mã số thuế",
        placeholder: "Nhập mã số thuế",
        type: "text",
        width: "50%",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập mã số thuế",
          },
        ],
      },
      {
        key: "ten_dv",
        name: "ten_dv",
        label: "Tên đơn vị",
        placeholder: "Nhập tên đơn vị",
        type: "text",
        width: "100%",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập tên đơn vị",
          },
        ],
      },
      {
        key: "dia_chi",
        name: "dia_chi",
        label: "Địa chỉ",
        placeholder: "Nhập địa chỉ",
        type: "text",
        width: "100%",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập địa chỉ",
          },
        ],
      },
      {
        key: "serials",
        name: "serials",
        label: "Serials",
        placeholder: "Nhập serials",
        type: "text",
        width: "100%",
        note: "Nếu có nhiều số serials, nhập ngăn cách nhau bằng dấu;",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập serials",
          },
        ],
      },
      {
        key: "co_quan_thu_id_chuquan",
        name: "co_quan_thu_id_chuquan",
        label: "Mã cơ quan thuế",
        placeholder: "Nhập mã cơ quan thuế",
        type: "text",
        width: "33%",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập mã cơ quan thuế",
          },
          {
            pattern: /^[0-9]*$/g,
            message: "Vui lòng nhập số",
          },
        ],
      },
      {
        key: "donvi_chuquan",
        name: "donvi_chuquan",
        label: "Tên cơ quan thuế",
        placeholder: "Nhập tên cơ quan thuế",
        type: "text",
        width: "65%",
        rules: [
          {
            required: true,
            message: "Vui lòng nhập tên cơ quan thuế",
          },
        ],
      },
    ],
  },

  contactInfo: {
    title: "Thông tin liên hệ",
    fields: [
      {
        key: "dien_thoai",
        name: "dien_thoai",
        label: "Số điện thoại",
        placeholder: "Nhập số điện thoại",
        type: "text",
        width: "50%",
      },
      {
        key: "fax",
        name: "fax",
        label: "Fax",
        placeholder: "Nhập số fax",
        type: "text",
        width: "50%",
      },
      {
        key: "website",
        name: "website",
        label: "Website",
        placeholder: "Nhập website",
        type: "text",
        width: "100%",
      },
      {
        key: "email",
        name: "email",
        label: "Email",
        placeholder: "Nhập email",
        type: "text",
        width: "100%",
      },
    ],
  },

  bankInfo: {
    title: "Thông tin ngân hàng",
    fields: [
      {
        key: "stk",
        name: "stk",
        label: "Số tài khoản",
        placeholder: "Nhập số tài khoản",
        type: "text",
        width: "100%",
      },
      {
        key: "ngan_hang",
        name: "ngan_hang",
        label: "Tại ngân hàng",
        placeholder: "Nhập tên ngân hàng",
        type: "text",
        width: "100%",
      },
    ],
  },
};

export const taomoitaikhoanfields = [
  {
    key: "donvi_ma_dv",
    name: "donvi_ma_dv",
    label: "Mã đơn vị",
    placeholder: "Nhập mã đơn vị",
    type: "text",
    width: "48%",
    rules: [
      {
        required: true,
        message: "Vui lòng nhập mã đơn vị",
      },
    ],
  },
  {
    key: "username",
    name: "username",
    label: "Tên đăng nhập",
    placeholder: "Nhập tên đăng nhập",
    type: "text",
    width: "48%",
    rules: [
      {
        required: true,
        message: "Vui lòng nhập tên đăng nhập",
      },
    ],
  },
  {
    key: "full_name",
    name: "full_name",
    label: "Họ và tên",
    placeholder: "Nhập họ và tên",
    type: "text",
    width: "100%",
    rules: [
      {
        required: true,
        message: "Vui lòng nhập họ và tên",
      },
    ],
  },
  {
    key: "email_1",
    name: "email_1",
    label: "Email",
    placeholder: "Nhập email",
    type: "text",
    width: "100%",
    rules: [
      {
        required: true,
        message: "Vui lòng nhập email",
      },
    ],
  },
  {
    key: "serial_number",
    name: "serial_number",
    label: "Serials",
    placeholder: "Nhập serials",
    type: "text",
    width: "100%",
    rules: [
      {
        required: true,
        message: "Vui lòng nhập serials",
      },
    ],
  },
  {
    key: "password",
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    type: "password",
    width: "100%",
  },
  {
    key: "role_ids",
    name: "role_ids",
    label: "Vai trò",
    placeholder: "Chọn vai trò",
    type: "select",
    width: "auto",
    rules: [
      {
        required: true,
        message: "Vui lòng chọn vai trò",
      },
    ],
    options: [
      {
        label: "Admin đơn vị",
        value: 10,
      },
    ],
  },
];

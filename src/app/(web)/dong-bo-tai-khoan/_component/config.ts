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
            message: "Vui lòng nhập số",
            pattern: /^[0-9]*$/,
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

export const daytokhaiFields = [
  {
    key: "loai_to_khai_id",
    name: "loai_to_khai_id",
    label: "Loại tờ khai",
    placeholder: "Chọn loại tờ khai",
    type: "radio",
    width: "100%",
    options: [
      {
        label: "Đăng ký mới",
        value: 1,
      },
      {
        label: "Thay đổi thông tin",
        value: 2,
      },
    ],
  },
  {
    key: "donvi_ma_dv",
    name: "donvi_ma_dv",
    label: "Mã đơn vị NNT",
    placeholder: "Nhập mã đơn vị",
    type: "text",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },

  {
    key: "ngay_lap",
    name: "ngay_lap",
    label: "Ngày lập",
    placeholder: "Nhập ngày lập",
    type: "date",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng chọn ngày lập",
    //   },
    // ],
    style: {
      display: "flex",
    },
  },

  {
    key: "nguoi_nop_thue",
    name: "nguoi_nop_thue",
    label: "Tên người nộp thuế",
    placeholder: "Nhập tên người nộp thuế",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập người nộp thuế",
    //   },
    // ],
  },

  {
    key: "nguoi_lien_he",
    name: "nguoi_lien_he",
    label: "Người liên hệ",
    placeholder: "Nhập người liên hệ",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập người liên hệ",
    //   },
    // ],
  },
  {
    key: "ma_cqt",
    name: "ma_cqt",
    label: "Mã cơ quan thuế",
    placeholder: "Nhập mã cơ quan thuế",
    type: "text",
    width: "29%",
    rules: [
      // {
      //   required: true,
      //   message: "Vui lòng nhập tên cơ quan thuế",
      // },
      {
        message: "Vui lòng nhập số",
        pattern: /^[0-9]*$/,
      },
    ],
  },
  {
    key: "co_quan_thue",
    name: "co_quan_thue",
    label: "Cơ quan thuế",
    placeholder: "Nhập tên cơ quan thuế",
    type: "text",
    width: "69%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập tên cơ quan thuế",
    //   },
    // ],
  },
  {
    key: "dia_chi_lien_he",
    name: "dia_chi_lien_he",
    label: "Địa chỉ liên hệ",
    placeholder: "Nhập địa chỉ liên hệ",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập địa chỉ liên hệ",
    //   },
    // ],
  },
  {
    key: "dien_thoai_lien_he",
    name: "dien_thoai_lien_he",
    label: "Điện thoại liên hệ",
    placeholder: "Nhập điện thoại liên hệ",
    type: "text",
    width: "29%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },
  {
    key: "email_lien_he",
    name: "email_lien_he",
    label: "Email liên hệ",
    placeholder: "Nhập email liên hệ",
    type: "text",
    width: "69%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập email liên hệ",
    //   },
    // ],
  },

  {
    key: "noi_lap",
    name: "noi_lap",
    label: "Nơi lập",
    placeholder: "Nhập nơi lập",
    type: "text",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập nơi lập",
    //   },
    // ],
  },

  {
    key: "ngay_co_hieu_luc",
    name: "ngay_co_hieu_luc",
    label: "Ngày có hiệu lực",
    placeholder: "Nhập ngày có hiệu lực",
    type: "date",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng chọn ngày có hiệu lực",
    //   },
    // ],
  },

  {
    key: "checkHoadon",
    name: "checkHoadon",
    label: "Loại hóa đơn sử dụng",
    placeholder: "Chọn loại hóa đơn sử dụng",
    type: "checkboxGroup",
    width: "100%",
    rules: [
      {
        required: true,
        message: "Vui lòng chọn loại hóa đơn sử dụng",
      },
    ],
    gutter: [12, 8],
    options: [
      {
        label: "Hóa đơn có mã cơ quan thuế",
        value: "is_hoadon_co_ma_cqt",
        span: 12,
      },
      {
        label: "Hóa đơn không có mã cơ quan thuế",
        value: "is_hoadon_khong_co_ma_cqt",
        span: 12,
      },

      {
        label: "Chuyển dữ liệu trực tiếp",
        value: "is_chuyen_du_lieu_truc_tiep",
        span: 12,
      },
      {
        label: "Chuyển dữ liệu thông qua tổ chức",
        value: "is_chuyen_lieu_thong_qua_to_chuc",
        span: 12,
      },

      {
        label: "Chuyển đầy đủ từng hóa đơn",
        value: "is_chuyen_day_du_tung_hoadon",
        span: 12,
      },
      {
        label: "Hóa đơn GTGT",
        value: "is_sd_hoadon_gtgt",
        span: 12,
      },
    ],
  },
  {
    key: "is_camket",
    name: "is_camket",
    label: "Cam kết",
    placeholder: "Chọn cam kết",
    type: "checkbox",
    width: "100%",
    rules: [
      {
        validator: (_: any, value: any) =>
          value
            ? Promise.resolve()
            : Promise.reject(new Error("Vui lòng chọn cam kết")),
      },
    ],
    gutter: [12, 8],
    labelCheckbox:
      "Chúng tôi cam kết hoàn toàn chịu trách nhiệm trước pháp luật về tính chính xác, trung thực của nội dung nêu trên và thực hiện theo đúng quy định của pháp luật.",
  },
];

export const capnhatSLHoaDonFields = [
  {
    key: "donvi_mst",
    name: "donvi_mst",
    label: "Mã đơn vị",
    placeholder: "Nhập mã đơn vị",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },
  {
    key: "nguoi_yeu_cau",
    name: "nguoi_yeu_cau",
    label: "Email",
    placeholder: "Email",
    type: "text",
    width: "100%",
    rules: [
      // {
      //   required: true,
      //   message: "Vui lòng nhập mã đơn vị",
      // },
    ],
  },
  {
    key: "ma_goi_dich_vu",
    name: "ma_goi_dich_vu",
    label: "Mã gói dịch vụ",
    placeholder: "Nhập mã gói dịch vụ",
    type: "text",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },
  {
    key: "ngay_mua",
    name: "ngay_mua",
    label: "Ngày mua",
    placeholder: "Ngày mua",
    type: "date",
    width: "49%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },
  {
    key: "so_luong",
    name: "so_luong",
    label: "Số lượng",
    placeholder: "Nhập số lượng",
    type: "text",
    width: "49%",
    rules: [
      // {
      //   required: true,
      //   message: "Vui lòng nhập mã đơn vị",
      // },
      {
        message: "Vui lòng nhập số",
        pattern: /^[0-9]*$/,
      },
    ],
  },
  {
    key: "so_luong_khuyen_mai",
    name: "so_luong_khuyen_mai",
    label: "Số lượng khuyến mãi",
    placeholder: "Nhập số lượng khuyến mãi",
    type: "text",
    width: "49%",
    rules: [
      // {
      //   required: true,
      //   message: "Vui lòng nhập mã đơn vị",
      // },
      {
        message: "Vui lòng nhập số",
        pattern: /^[0-9]*$/,
      },
    ],
  },
  {
    key: "loai_san_pham",
    name: "loai_san_pham",
    label: "Loại sản phẩm",
    placeholder: "Nhập loại sản phẩm",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },

  {
    key: "serial_number",
    name: "serial_number",
    label: "Serials",
    placeholder: "Nhập serials",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },

  {
    key: "ten_cong_ty",
    name: "ten_cong_ty",
    label: "Tên công ty",
    placeholder: "Nhập tên công ty",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },

  {
    key: "dia_chi",
    name: "dia_chi",
    label: "Địa chỉ",
    placeholder: "Nhập địa chỉ",
    type: "text",
    width: "100%",
    // rules: [
    //   {
    //     required: true,
    //     message: "Vui lòng nhập mã đơn vị",
    //   },
    // ],
  },
];

export const ROUTE = {
  HOME: "/",
  CAP_MOI: "/cap-moi-tai-khoan",
  DONG_BO: "/dong-bo-tai-khoan",
  LOGIN: "/login",
  LOGOUT: "/logout",
  NOT_FOUND: "*",
};

export const TITLE = {
  THONG_KE: "Thống kê",
  CAP_MOI: "Cấp mới tài khoản",
  DONG_BO: "Đồng bộ tài khoản",
  LOGIN: "Đăng nhập",
  LOGOUT: "Đăng xuất",
  NOT_FOUND: "Không tìm thấy trang",
};

export const ROUTES = [
  {
    name: TITLE.THONG_KE,
    path: ROUTE.HOME,
  },
  {
    name: TITLE.CAP_MOI,
    path: ROUTE.CAP_MOI,
  },
  {
    name: TITLE.DONG_BO,
    path: ROUTE.DONG_BO,
  },
  {
    name: TITLE.LOGIN,
    path: ROUTE.LOGIN,
  },
  {
    name: TITLE.LOGOUT,
    path: TITLE.LOGOUT,
  },
];

"use client";

import { useAppContext } from "@/app/app-provider";
import { Images } from "@/assets/images";
import Image from "next/image";

const AppBarProfile = () => {
  const { user } = useAppContext();

  return (
    <div className="appbar-profile profile-dropdown">
      <div className="drop-info">
        <div className="drop-info-img">
          <Image src={Images.ProfileImage} alt="" width={40} height={40} />
        </div>
        <div className="drop-info-text">
          <div className="info-text-group">
            <span>{user?.username || ""}</span>
            <span>{user?.donvi_ma_dv || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBarProfile;

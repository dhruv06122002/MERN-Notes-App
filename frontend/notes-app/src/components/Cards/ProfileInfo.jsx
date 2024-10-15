import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  const fullName = userInfo?.fullName;

  return (
    // userInfo && (
    //   <div className="flex items-center gap-3">
    //     <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
    //       {getInitials(userInfo?.fullName)}
    //     </div>
    //     <div>
    //       <p className="text-sm font-medium">{userInfo.fullName}</p>
    //       <button
    //         className="text-sm text-slate-700 underline"
    //         onClick={onLogout}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // )

    userInfo && (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white font-medium bg-[#F2C94C] shadow-md">
          {getInitials(userInfo?.fullName)}
        </div>
        <div>
          <p className="text-sm font-medium text-[#5C5A5A]">
            {userInfo.fullName}
          </p>
          <button
            className="text-sm text-[#6B4226] underline hover:text-[#F2C94C] transition duration-200"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfo;

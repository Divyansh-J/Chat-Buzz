import React from "react";
import userAvatar from "../../assets/userAvatar.avif";

const ConversationCard = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src={userAvatar} alt="user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-700">Divyansh</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default ConversationCard;

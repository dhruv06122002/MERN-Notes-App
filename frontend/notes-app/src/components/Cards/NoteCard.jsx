import React from "react";
import moment from "moment";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    // <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
    //   <div className="flex items-center justify-between">
    //     <div>
    //       <h6 className="text-sm font-medium">{title}</h6>
    //       <span className="text-xs text-slate-500">
    //         {moment(date).format("Do MMM YYYY")}
    //       </span>
    //     </div>
    //     <MdOutlinePushPin
    //       className={`icon-btn ${isPinned ? `text-primary` : `text-slate-300`}`}
    //       onClick={onPinNote}
    //     />
    //   </div>
    //   <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
    //   <div className="flex items-center justify-between mt-2">
    //     <div className="text-xs text-slate-500">
    //       {tags.map((item) => `#${item} `)}
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <MdCreate
    //         className="icon-btn hover:text-green-600"
    //         onClick={onEdit}
    //       />
    //       <MdDelete
    //         className="icon-btn hover:text-red-600"
    //         onClick={onDelete}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="border border-[#F2C94C] rounded-xl p-5 bg-gradient-to-br from-[#FFFAE5] to-[#FFF5CC] hover:shadow-2xl transform hover:scale-[1.02] transition-transform ease-in-out duration-300">
      <div className="flex items-start justify-between">
        <div>
          <h6 className="text-lg font-semibold text-[#6B4226] mb-1">{title}</h6>
          <span className="text-xs text-[#B08968] italic">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn cursor-pointer text-2xl transition-colors ease-in-out duration-300 ${
            isPinned ? `text-[#DAA520]` : `text-[#B0B0B0]`
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-sm text-[#5C5A5A] mt-3 leading-relaxed">
        {content?.slice(0, 60)}...
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm font-medium text-[#B08968] space-x-1">
          {tags.map((item) => (
            <span
              key={item}
              className="bg-[#FFF0D5] text-[#B08968] rounded-full px-2 py-1 inline-block"
            >
              #{item}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <MdCreate
            className="icon-btn text-lg hover:text-[#6B8E23] transition-colors ease-in-out duration-300"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn text-lg hover:text-[#C85C5C] transition-colors ease-in-out duration-300"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

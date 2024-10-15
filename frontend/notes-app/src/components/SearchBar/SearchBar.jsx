import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    // <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
    //   <input
    //     type="text"
    //     placeholder="Search Notes"
    //     className="w-full text-xs bg-transparent py-[11px] outline-none"
    //     value={value}
    //     onChange={onChange}
    //   />
    //   {value && (
    //     <IoMdClose
    //       className="text-xl text-slate-500 cursor-pointer hover:text-black"
    //       onClick={onClearSearch}
    //     />
    //   )}
    //   <FaMagnifyingGlass
    //     className="text-slate-400 cursor-pointer hover:text-black"
    //     onClick={handleSearch}
    //   />
    // </div>

    <div className="w-80 flex items-center px-4 bg-[#FFF9E8] border border-[#F2C94C] rounded-md shadow-sm">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-2 outline-none text-[#5C5A5A] placeholder:text-[#AFAFAF]"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-red-500 transition duration-200"
          onClick={onClearSearch}
        />
      )}
      &nbsp;
      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-[#F2C94C] transition duration-200"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

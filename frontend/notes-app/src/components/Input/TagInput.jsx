import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewtag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewtag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    // <div>
    //   {tags?.length > 0 && (
    //     <div className="flex items-center gap-2 flex-wrap mt-2">
    //       {tags.map((tag, index) => (
    //         <span
    //           key={index}
    //           className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
    //         >
    //           # {tag}
    //           <button
    //             onClick={() => {
    //               handleRemoveTag(tag);
    //             }}
    //           >
    //             <MdClose />
    //           </button>
    //         </span>
    //       ))}
    //     </div>
    //   )}
    //   <div className="flex items-center gap-4 mt-3">
    //     <input
    //       type="text"
    //       value={inputValue}
    //       className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
    //       placeholder="Add tags"
    //       onChange={handleInputChange}
    //       onKeyDown={handleKeyDown}
    //     />

    //     <button
    //       className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
    //       onClick={() => {
    //         addNewtag();
    //       }}
    //     >
    //       <MdAdd className="text-2xl text-blue-700 hover:text-white" />
    //     </button>
    //   </div>
    // </div>

    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-[#5C5A5A] bg-[#F9E5A5] px-3 py-1 rounded"
            >
              # {tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
                className="text-[#C84A36] hover:text-red-600 transition duration-200"
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border-[#F2C94C] border px-3 py-2 rounded outline-none placeholder:text-[#AFAFAF] text-[#5C5A5A]"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="w-8 h-8 flex items-center justify-center rounded bg-[#F2C94C] hover:bg-[#C9A826] transition duration-200"
          onClick={() => {
            addNewtag();
          }}
        >
          <MdAdd className="text-2xl text-white hover:text-black transition duration-200" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;

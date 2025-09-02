"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ProfileInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const blocks = [
    {
      title: "Get Context From Website",
      buttonLabel: "Website",
      tag: "website",
      tagColor: "text-blue-400",
      dotColor: "bg-blue-400",
      icon: "/about/folder.svg",
    },
    {
      title: "Save",
      buttonLabel: "Cache",
      tag: "save",
      tagColor: "text-blue-400",
      dotColor: "bg-blue-400",
      icon: "/about/folder.svg",
    },
    {
      title: "Generate Response",
      buttonLabel: "GPT-4 Turbo",
      tag: "output",
      tagColor: "text-green-400",
      dotColor: "bg-green-400",
      icon: "/about/gpt.svg",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-[#1A1A1A] text-white p-2 my-3 rounded-lg border border-[#333] w-full max-w-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full "
        >
          <span>Inputs</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 ms-3 w-4 text-gray-400" />
          ) : (
            <ChevronDownIcon className="h-5 ms-3 w-4 text-gray-400" />
          )}
        </button>

        {isOpen && (
          <div className="mt-4 space-y-4">
            <div className="relative">
              <label className="block text-sm text-[#E7E7E7] mb-1">
                User Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#2A2A2A] border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#555]"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-[#E7E7E7] mb-1">
                Profile
              </label>
              <textarea className="w-full p-2 rounded-md bg-[#2A2A2A] border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#555]" />
            </div>

            <div className="flex items-end justify-end border-t border-[#333] pt-4">
              <div className="flex gap-6 items-center">
                {/* Run */}
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">Run</span>
                  <Image
                    src="/about/arrow.svg"
                    alt="run icon"
                    width={18}
                    height={18}
                  />
                </div>

                {/* Clear & Run */}
                <div className="flex items-center gap-2 border-l border-[#333] pl-4">
                  <span className="text-white text-sm">Clear & Run</span>
                  <Image
                    src="/about/s.svg"
                    alt="clear icon 1"
                    width={18}
                    height={18}
                  />
                  <Image
                    src="/about/arrow.svg"
                    alt="clear icon 2"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#1A1A1A] text-white p-4 rounded-lg border border-[#333]">
        <button
          onClick={() => setIsActionsOpen(!isActionsOpen)}
          className="flex items-center w-full "
        >
          <span>Actions</span>
          {isActionsOpen ? (
            <ChevronUpIcon className="h-5 ms-3 w-4 text-gray-400" />
          ) : (
            <ChevronDownIcon className="h-5 ms-3 w-4 text-gray-400" />
          )}
        </button>

        {isActionsOpen && (
          <div className="border-t border-[#333] p-4 space-y-8">
            {blocks.map((block, i) => (
              <div key={i}>
                <div className="bg-[#2A2A2A] border border-[#444] rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{block.title}</p>
                    <button className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333] px-3 py-1 rounded-md">
                      {block.icon && (
                        <Image
                          src={block.icon}
                          width={20}
                          height={20}
                          alt={block.buttonLabel}
                        />
                      )}
                      <span className="text-sm">{block.buttonLabel}</span>
                    </button>
                  </div>
                </div>

                <div className="flex ml-6">
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="w-[2px] h-4 bg-gray-600"></div>
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${block.dotColor}`}
                      ></div>
                    </div>
                  </div>

                  <button className="flex items-center m-1 bg-[#1A1A1A] border border-[#333] px-3 py-1 rounded-md">
                    <p className={`text-xs ${block.tagColor}`}>{block.tag}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;

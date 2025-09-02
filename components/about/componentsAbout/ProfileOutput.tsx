"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const ProfileOutput = () => {
  const [openSection, setOpenSection] = useState<string | null>("output");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-black text-gray-200 md:p-4 rounded-lg w-[460px]">
      <div className="mb-6">
        <button
          onClick={() => toggleSection("output")}
          className="flex justify-between items-center w-full py-2"
        >
          <span className="flex items-center md:gap-2 ">
            <Image
              src="/about/gen.svg"
              alt="clear icon 2"
              width={18}
              height={18}
            />{" "}
            Generate Response
          </span>
          {openSection === "output" ? <ChevronUp /> : <ChevronDown />}
        </button>

        {openSection === "output" && (
          <div className="mt-3 space-y-3">
            <div>
              <label className="text-sm">Slug</label>
              <input
                type="text"
                defaultValue="output"
                className="w-full bg-transparent border border-gray-600 rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <input
                type="text"
                placeholder="Add an optional display message"
                className="w-full bg-transparent border border-gray-600 rounded p-2 mt-1"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={() => toggleSection("conditions")}
          className="flex justify-between items-center w-full py-2"
        >
          <span className="flex items-center gap-2 ">
            <Image
              src="/about/sel.svg"
              alt="clear icon 2"
              width={18}
              height={18}
            />{" "}
            Conditions
          </span>
          {openSection === "conditions" ? <ChevronUp /> : <ChevronDown />}
        </button>

        {openSection === "conditions" && (
          <div className="mt-3">
            <p className="bg-gray-800 p-2 rounded text-sm">
              If <span className="text-blue-400">{`{{inputs.input}}`}</span> is
              True
            </p>
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={() => toggleSection("config")}
          className="flex justify-between items-center w-full py-2"
        >
          <span className="flex items-center gap-2 ">
            <Image
              src="/about/set.svg"
              alt="clear icon 2"
              width={18}
              height={18}
            />{" "}
            Configuration
          </span>
          {openSection === "config" ? <ChevronUp /> : <ChevronDown />}
        </button>

        {openSection === "config" && (
          <div className="mt-3 space-y-3">
            <div>
              <label className="text-sm">Model</label>
              <select className="w-full bg-transparent border border-gray-600 rounded p-2 mt-1">
                <option>GPT-4-turbo</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Temperature</label>
              <div className="flex mt-1 border border-[#2A2A2A] rounded">
                <button className="px-3 py-1 border-r border-[#2A2A2A]">
                  -
                </button>
                <input
                  type="text"
                  defaultValue="0.7"
                  className="w-full text-center bg-transparent focus:outline-none"
                />
                <button className="px-3 py-1 border-l border-[#2A2A2A]">
                  +
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm">Max Tokens</label>
              <div className="flex mt-1 border border-[#2A2A2A] rounded">
                <button className="px-3 py-1 border-r border-[#2A2A2A]">
                  -
                </button>
                <input
                  type="text"
                  defaultValue="400"
                  className="w-full text-center bg-transparent focus:outline-none"
                />
                <button className="px-3 py-1 border-l border-[#2A2A2A]">
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm">Max Tokens</label>
              <div className="flex items-center gap-2 mt-1">
                <button className="px-3 py-1 border border-gray-600 rounded">
                  -
                </button>
                <input
                  type="text"
                  defaultValue="400"
                  className="w-16 text-center bg-transparent border border-gray-600 rounded"
                />
                <button className="px-3 py-1 border border-gray-600 rounded">
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm">Response Type</label>
              <select className="w-full bg-transparent border border-gray-600 rounded p-2 mt-1">
                <option>Text</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Prompt</label>
              <textarea
                className="w-full bg-transparent border border-gray-600 rounded p-2 mt-1"
                rows={2}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileOutput;

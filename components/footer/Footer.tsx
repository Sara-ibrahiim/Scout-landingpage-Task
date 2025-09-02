"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="blog"
      className="bg-black text-gray-400 py-12 border-t border-white/10 p-[120px]"
    >
      <div className="m-auto px-4 grid grid-cols-12 ">
        {/* Logo */}
        <div className="col-span-12 md:col-span-3 text-center">
          <Image
            src="/scout.svg"
            width={120}
            height={120}
            alt="scout"
            className="col-span-12 m-auto"
          />

          <span className="inline-block  mt-10 ms-5 px-3 py-1 bg-[radial-gradient(ellipse_27%_183%_at_7%_61%,rgba(11,226,123,0.2)_0%,rgba(22,22,22,0.2)_100%)] text-white rounded-full text-xs">
            ● All systems operational
          </span>
        </div>

        {/* Links */}
        <div className="col-span-12 md:col-span-3 text-center">
          <h3 className="text-white font-medium mb-3">Links</h3>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="col-span-12 md:col-span-3 text-center">
          <h3 className="text-white font-medium mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li>Slack Bot</li>
            <li>Discord Bot</li>
            <li>Command</li>
            <li>Onsite Chat</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-12 md:col-span-3 text-center">
          <h3 className="text-white font-medium mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex grid grid-cols-12 ">
        <p className="text-sm text-gray-500 col-span-12 md:col-span-3">
          Copyright © 2024 Scout. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-6 col-span-12 md:col-span-3">
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
        </div>
        </div>
    </footer>
  );
};

export default Footer;

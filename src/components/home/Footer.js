import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#232122] text-[#cfd0d3] text-sm pt-10 pb-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Offices */}
        <div>
          <h2 className="text-white mb-4">Our Offices</h2>
          <ul className="text-xs space-y-9">
            <li><span className="font-semibold text-white">Delhi:</span> Plot No. 7, 4th Floor, Arihant Nagar, ROHTAK RD, Punjabi Bagh, New Delhi-110026</li>
            <li><span className="font-semibold text-white">Noida:</span> 208-209, Tower-E, Alphathum, Noida-201305</li>
            <li><span className="font-semibold text-white">Bhopal:</span> 401, B-Block HIG, Vijay Stambh, Zone-1, MP Nagar, Bhopal-462011</li>
            <li><span className="font-semibold text-white">Gurgaon:</span> 412, Emaar Colonande, Golf Course Extension Rd, Sec-66, Gurgaon-122018</li>
            <li><span className="font-semibold text-white">Indore:</span> 205, B-Block, The One, RNT Marg, Near High Court, Indore-452001</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="font-semibold text-white mb-4">Navigate</h2>
          <ul className="space-y-2 text-[#cfd0d3] cursor-pointer">
            <li className="hover:text-[#b88b6c]">Home</li>
            <li className="hover:text-[#b88b6c]">About Unsaathi</li>
            <li className="hover:text-[#b88b6c]">Why Us</li>
            <li className="hover:text-[#b88b6c]">How Unsaathi Works</li>
            <li className="hover:text-[#b88b6c]">Contact Us</li>
          </ul>
        </div>

        {/* Contact & Policies */}
        <div>
          <h2 className="font-semibold text-white mb-4">Contact & Policies</h2>
          <ul className="space-y-2 text-[#cfd0d3]">
            <li className="hover:text-[#b88b6c] cursor-pointer">Blogs</li>
            <li className="hover:text-[#b88b6c] cursor-pointer">FAQ</li>
            <li className="hover:text-[#b88b6c] cursor-pointer">Cookie Policy</li>
            <li className="hover:text-[#b88b6c] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#b88b6c] cursor-pointer">Terms & Conditions</li>
          </ul>
          <div className="mt-8 flex items-center gap-3 text-[#b88b6c] text-lg">
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M2 5.5V4a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-.5zM22 18.5V20a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5H20a2 2 0 0 1 2 2z"/>
            </svg>
            998-877-6655
          </div>
          <div className="mt-2 flex items-center gap-3 text-[#b88b6c] text-lg">
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 6l9 6 9-6"/><rect x={3} y={6} width={18} height={12} rx={2}/>
            </svg>
            <span>info@unsaathi.findbacklinks.in</span>
          </div>
          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-[#cfd0d3] hover:text-[#b88b6c]" aria-label="LinkedIn">
              {/* Use your actual icons here */}
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9h4v12H4zm6.563 0h3.682v1.645h.053a4.105 4.105 0 0 1 3.699-2.034c3.954 0 4.69 2.603 4.69 5.986V21h-4v-5.855c0-1.344-.028-3.074-1.873-3.074-1.876 0-2.162 1.464-2.162 2.972V21h-4z"/></svg>
            </a>
            <a href="#" className="text-[#cfd0d3] hover:text-[#b88b6c]" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3h-8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
            <a href="#" className="text-[#cfd0d3] hover:text-[#b88b6c]" aria-label="Twitter">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.59.57-2.46.68a4.09 4.09 0 0 0 1.8-2.27c-.8.48-1.68.83-2.62 1.02a4.07 4.07 0 0 0-6.66 3.71c-3.38-.17-6.4-1.77-8.41-4.2a4.11 4.11 0 0 0-.55 2.04 4.07 4.07 0 0 0 1.81 3.38 4.1 4.1 0 0 1-1.84-.5v.05a4.07 4.07 0 0 0 3.27 3.97c-.39.1-.76.15-1.16.15-.29 0-.57-.03-.85-.08a4.06 4.06 0 0 0 3.8 2.82A8.13 8.13 0 0 1 2 19.54a11.48 11.48 0 0 0 6.21 1.82c7.46 0 11.55-6.18 11.55-11.54l-.01-.53A8.18 8.18 0 0 0 22.46 6z"/></svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3 min-w-[220px] mt-6 md:mt-0">
          <h2 className="font-semibold text-white mb-4">Newsletter</h2>
          <input
            placeholder="Name"
            className="bg-[#28292c] text-[#cfd0d3] rounded px-3 py-2 focus:outline-none placeholder:text-[#7b7680]"
          />
          <input
            placeholder="Email"
            className="bg-[#28292c] text-[#cfd0d3] rounded px-3 py-2 focus:outline-none placeholder:text-[#7b7680]"
          />
          <button className="bg-[#b88b6c] hover:bg-[#a5775c] text-white rounded px-3 py-2 font-semibold transition flex justify-center items-center gap-1">
            <span>→</span>Subscribe
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-[#373737] mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#8c8d91]">
        <span>Unsaathi © 2023, All Rights Reserved</span>
        <span className="mt-1 md:mt-0">Design Credits : Art Attaokk</span>
      </div>
    </footer>
  );
}

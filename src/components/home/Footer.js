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


             <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl w-full mt-4">
              {/* phone icon */}
             <img src="/assets/Call.png" className="h-[18px] w-[20px]"/>
              <span className="text-white text-xl font-medium">+91-9266877791</span>
            </div>
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl  w-full mt-2">
              {/* mail icon */}
              <img src="/assets/Message.png" className="h-[18px] w-[20px]"/>
              <span className="text-white text-xl font-medium">info@unsaathi.com</span>
            </div>
          </div>
          </div>


          {/* Social Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104375160&keywords=unsaathi%20official&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9be0b8b4-9aee-4e18-af9a-d037a94d41dd&sid=Bp7&spellCorrectionEnabled=false" className="text-[#cfd0d3] hover:text-[#b88b6c]" aria-label="LinkedIn">
              {/* Use your actual icons here */}
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9h4v12H4zm6.563 0h3.682v1.645h.053a4.105 4.105 0 0 1 3.699-2.034c3.954 0 4.69 2.603 4.69 5.986V21h-4v-5.855c0-1.344-.028-3.074-1.873-3.074-1.876 0-2.162 1.464-2.162 2.972V21h-4z"/></svg>
            </a>
            <a href="https://www.instagram.com/official_unsaathi?igsh=bHFoZHNjd3Jua2M1" className="text-[#cfd0d3] hover:text-[#b88b6c]" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3h-8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1AmiCrdNcR/" className="text-[#cfd0d3] hover:text-[#3b5998] mt-1" aria-label="Facebook">
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.41 24 24 23.41 24 22.675v-21.35C24 .59 23.41 0 22.675 0z"/>
  </svg>
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
      </div>
    </footer>
  );
}

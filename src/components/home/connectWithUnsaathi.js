import React from "react";

export default function ConnectWithUnsaathi() {
  return (
    <section className=" w-full py-14 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="mb-8 md:flex justify-between items-start">
          <div>
            <div className="text-[#b88b6c] font-semibold text-lg mb-2">
              Connect With Unsaathi
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#232122] leading-tight mb-4">
              Think Of A Peaceful Life.<br />Think Unsaathi
            </h1>
            <div className="text-[#726964] text-base md:text-lg mb-2">
              Ready to embrace a new chapter? Reach out for expert divorce services, personalized support, and a path forward with clarity.
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl w-full mt-4">
              {/* phone icon */}
             <img src="/assets/Call.png" className="h-[18px] w-[20px]"/>
              <span className="text-[#232122] text-xl font-medium">+91-9266877791</span>
            </div>
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl  w-full mt-2">
              {/* mail icon */}
              <img src="/assets/Message.png" className="h-[18px] w-[20px]"/>
              <span className="text-[#232122] text-xl font-medium">info@unsaathi.com</span>
            </div>
          </div>
        </div>
        {/* Form section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0]"/>
          </div>
          {/* Phone */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">
              A phone number we can reach you
            </label>
            <input
              type="text"
              placeholder="998-877-6655"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0]"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0]"
            />
          </div>
          {/* Service Dropdown */}
          <div className="flex flex-col mb-2">
            <label className="text-[#726964] text-sm mb-1">Service Interested In</label>
            <select
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg text-[#a7a0a0]">
              <option className="text-[#232122]">Contested Divorce </option>
              <option className="text-[#232122]">Mutual Divorce</option>
              <option className="text-[#232122]">Child Custody </option>
              <option className="text-[#232122]">Child Visitation</option>
              <option className="text-[#232122]">Maintenance and Alimony  </option>
              <option className="text-[#232122]">Judicial Seperation</option>
              <option className="text-[#232122]">Annulment of marriage </option>
              <option className="text-[#232122]">Dowry Case</option>
              <option className="text-[#232122]">Domestic Violence  </option>
              <option className="text-[#232122]">Case/Cruelty </option>
              <option className="text-[#232122]">False Domestic Violence Case</option>
              <option className="text-[#232122]">False Dowry </option>
              <option className="text-[#232122]">Not mentioned </option>
            </select>
          </div>
          {/* Message row (grid spans 2 columns) */}
          <div className="flex flex-col mb-2 md:col-span-2">
            <label className="text-[#726964] text-sm mb-1">Message</label>
            <textarea
              rows={3}
              className="bg-transparent border-b border-[#232122] outline-none py-2 text-lg placeholder:text-[#a7a0a0]"
              placeholder="" />
          </div>
          {/* submit */}
          <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:justify-between mt-2 items-center">
            <button
              type="submit"
              className="px-8 py-2 bg-[#b88b6c] hover:bg-[#a5775c] text-white rounded-full text-lg font-semibold shadow transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

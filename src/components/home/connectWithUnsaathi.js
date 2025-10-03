import React from "react";

export default function ConnectWithUnsaathi() {
  return (
    <section className="bg-[#ece2d7] w-full py-14 px-4">
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
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl">
              {/* phone icon */}
              <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M2 5.5V4a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-.5zM22 18.5V20a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5H20a2 2 0 0 1 2 2z"/></svg>
              <span className="text-[#232122] text-xl font-medium">998-877-6655</span>
            </div>
            <div className="flex items-center gap-3 text-[#b88b6c] text-2xl">
              {/* mail icon */}
              <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 6l9 6 9-6"/><rect x={3} y={6} width={18} height={12} rx={2}/></svg>
              <span className="text-[#232122] text-xl font-medium">info@unsaathi.findbacklinks.in</span>
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
              <option className="text-[#232122]">Option One</option>
              <option className="text-[#232122]">Option Two</option>
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
          {/* Checkbox and submit */}
          <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:justify-between mt-2 items-center">
            <label className="flex items-center gap-2 text-[#726964] text-sm">
              <input type="checkbox" className="accent-[#b88b6c] w-4 h-4 rounded border-[#232122]" />
              I confirm that I have read and accepted privacy policy.
            </label>
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

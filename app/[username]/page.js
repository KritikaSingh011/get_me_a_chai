"use client"
import React from "react"

const Username = ({ params }) => {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] text-stone-900 antialiased font-sans pb-16">
      
      {/* 1. LUXURY BANNER AREA */}
      <div className="h-48 sm:h-64 md:h-80 w-full relative bg-[#EFEBE4] overflow-hidden border-b border-stone-300">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 620px)" srcSet="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJ3Ijo6MjAsIndlIjoxfQ%3D%3D/12.jpg?token-hash=7mBfwHkKVsEYA7JAk8_73Sx2oeof6YqTbcVMtjl-QtE%3D&amp;token-time=1783123200" />
          <source media="(max-width: 1100px)" srcSet="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/12.jpg?token-hash=r1YWdDV_LGFdYlUq9ML2tspQuA6-UvCqktF1SV6Gi0M%3D&amp;token-time=1783123200" />
          <source media="(max-width: 1400px)" srcSet="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/12.jpg?token-hash=Bm0qO5HO0m2EtUU7YnU_1Jml6hW2iV2bZUYgXAXfALg%3D&amp;token-time=1783123200" />
          <source media="(max-width: 1700px)" srcSet="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/12.jpg?token-hash=w8qbGGf1y7opx_wmJiz3ZiVmAZFYjpzjzaO-Wf0qFOg%3D&amp;token-time=1783123200" />
          <source media="(min-width: 1700px)" srcSet="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b07894425ade14139866/eyJ3Ijox9MjAwLCJ3ZSI6MX0%3D/12.jpg?token-hash=O20PKAWf7qkKeLial9I-gbGdGZkBb8EmMpB5qtPxFh0%3D&amp;token-time=1783123200" />
          <img
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/12.jpg?token-hash=Bm0qO5HO0m2EtUU7YnU_1Jml6hW2iV2bZUYgXAXfALg%3D&amp;token-time=1783123200"
            alt="creator-hero"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-stone-900/[0.03] mix-blend-multiply" />
      </div>

      {/* 2. IDENTITY AREA */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-5 pb-8 border-b border-stone-300">
          
          <div className="-mt-16 sm:-mt-20 relative z-10 shrink-0 shadow-md rounded-full bg-white p-1 border border-stone-300">
            <img
              src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/189274/597dfbe8f6794b0789442ade14139866/eyJiIjo1MCwicSI6MSwidyI6NjIwLCJ3ZSI6MX0%3D/12.jpg?token-hash=HHIYjc0g2hMfXhSclCijb_mrYa_i8Yg9aWOHWsjSBt8%3D&amp;token-time=1783123200"
              alt="Avatar Profile"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover"
            />
          </div>
          
          <div className="text-center sm:text-left mb-1">
            <h1 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-950">
              {params?.username || "Creator"}
            </h1>
            <p className="text-[#926234] font-semibold text-xs uppercase tracking-widest mt-1">
              @GetMeAChai_Member
            </p>
          </div>
        </div>

        {/* 3. ABOUT SECTION */}
        <div className="py-10 border-b border-stone-300 space-y-3">
          <h2 className="text-xl font-serif font-medium tracking-wide text-stone-950">About Creator</h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-normal max-w-3xl">
            This layout section handles the remainder of your page data seamlessly. As this section grows longer with descriptions, posts, or media layout widgets, it will scroll perfectly below without breaking the header banner.
          </p>
        </div>

        {/* 4. CONTENT INTERACTION COLUMNS */}
        <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Column Box: Supporters History */}
          <div className=" w-full md:w-1/2 bg-white border border-stone-300 rounded-xs p-6 md:p-8 shadow-2xs">
            <h2 className="text-xl font-serif font-medium tracking-wide text-stone-950 mb-6 pb-2 border-b border-stone-200">
              Supporters
            </h2>
            <ul className="space-y-4 max-h-[460px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Supporter Item 1 */}
              <li className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xs border border-stone-200 text-stone-800 text-xs sm:text-sm font-normal shadow-3xs">
                {/* Micro Avatar Graphic Asset */}
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full object-cover border border-stone-300 shadow-3xs"
                />
                <div className="flex-1 leading-relaxed">
                  <span className="font-bold text-stone-950 mr-1">John Doe</span> 
                  donated <span className="font-extrabold text-[#A07142] bg-[#A07142]/5 px-1.5 py-0.5 rounded-sm">$30</span>: <span className="italic text-stone-700 font-light">"Keep up the great work!"</span>
                </div>
              </li>

              {/* Looped Mock Supporter Items */}
              {[...Array(8)].map((_, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-xs border border-stone-200 text-stone-800 text-xs sm:text-sm font-normal shadow-3xs">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + idx * 100000}?q=80&w=150`} 
                    fallback="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" }}
                    alt="User avatar" 
                    className="w-8 h-8 rounded-full object-cover border border-stone-300 shadow-3xs"
                  />
                  <div className="flex-1 leading-relaxed">
                    <span className="font-bold text-stone-950 mr-1">Shubham</span> 
                    donated <span className="font-extrabold text-[#A07142] bg-[#A07142]/5 px-1.5 py-0.5 rounded-sm">$20</span>: <span className="italic text-stone-700 font-light">"you are my hero!"</span>
                  </div>
                </li>
              ))}

            </ul>
          </div>

          {/* Right Column Box: Make a payment Container Form */}
          <div className="w-full md:w-1/2 bg-white border border-stone-300 rounded-xs p-6 md:p-8 shadow-2xs">
            <h2 className="text-xl font-serif font-medium tracking-wide text-stone-950 mb-6 pb-2 border-b border-stone-200">
              Make a payment
            </h2>
            
            <div className="space-y-4">
              {/* Darkened borders for better focus input visibility */}
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="w-full p-3 text-sm rounded-xs border border-stone-300 bg-[#FAF7F2] text-stone-950 placeholder-stone-500 font-normal focus:outline-none focus:border-[#A07142] focus:bg-white transition shadow-3xs" 
              />
              
              <textarea 
                placeholder="Enter a message (optional)" 
                className="w-full p-3 text-sm rounded-xs border border-stone-300 bg-[#FAF7F2] text-stone-950 placeholder-stone-500 font-normal focus:outline-none focus:border-[#A07142] focus:bg-white transition h-24 resize-none shadow-3xs" 
              />
              
              <button className="w-full text-white bg-[#A07142] hover:bg-[#8B5F35] font-semibold rounded-xs text-xs uppercase tracking-widest py-3.5 text-center shadow-xs transition-colors duration-200">
                Donate Now
              </button>
              
              {/* Highly visible Quick Payment selection handles */}
              <div className="pt-4 mt-2 border-t border-stone-200 flex flex-wrap items-center justify-center gap-2">
                <button className="text-stone-900 bg-[#FAF7F2] hover:bg-stone-100 border border-stone-300 text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-sm transition shadow-3xs">
                  Pay $10
                </button>
                <button className="text-stone-900 bg-[#FAF7F2] hover:bg-stone-100 border border-stone-300 text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-sm transition shadow-3xs">
                  Pay $25
                </button>
                <button className="text-stone-900 bg-[#FAF7F2] hover:bg-stone-100 border border-stone-300 text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-sm transition shadow-3xs">
                  Pay $50
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Username
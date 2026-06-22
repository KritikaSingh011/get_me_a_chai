"use client"
import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session, router])

  return (
    // Premium warm-cream canvas background structure
    <div className="w-full min-h-screen bg-[#FAF7F2] text-stone-800 antialiased font-sans">
      
      {/* 1. LUXURY HERO BANNER COVER (Matches 1.png design template layout perfectly) */}
      <div className="w-full relative h-[480px] sm:h-[520px] md:h-[580px] overflow-hidden flex items-center bg-[#EFEBE4]">
        
        {/* The clean high-end banner background image asset */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/1.png" 
            alt="Luxury Chai Background" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Extremely soft overlay to guard foreground copy contrast levels */}
          <div className="absolute inset-0 bg-stone-900/[0.02] mix-blend-multiply" />
        </div>

        {/* Text Area Card Content Layer aligned left */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 w-full relative z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="max-w-xl space-y-4 md:space-y-6 text-left p-2 md:p-6">
            
            {/* Main Application Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-stone-900 leading-tight">
              Get Me A Chai
            </h1>
            
            {/* Dynamic Secondary Section Accent Title Text */}
            <h2 className="text-2xl sm:text-3xl font-serif text-stone-800 font-light tracking-wide leading-snug">
              Welcome to Get Me A Chai
              <span className="inline-block ml-3 align-middle bg-white/60 p-0.5 rounded-full border border-stone-200 backdrop-blur-xs">
                <img className="w-10 h-10 rounded-full" src="/coffee-break.gif" alt="" />
              </span>
            </h2>
            
            {/* Application Pitch Copy paragraph */}
            <p className="text-sm sm:text-base text-stone-700 font-light max-w-md leading-relaxed">
              Get Me A Chai is a simple app that allows you to get funds for the clients.
            </p>
            
            {/* Luxury Flat Action Buttons Container block */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                type="button" 
                className="text-white bg-[#A07142] hover:bg-[#8B5F35] font-medium rounded-xs text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-300 shadow-2xs"
              >
                Get Started
              </button>
              <button 
                type="button" 
                className="text-stone-800 bg-white/40 hover:bg-white/80 border border-stone-300/80 font-medium rounded-xs text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-300 backdrop-blur-xs"
              >
                Read More
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MINIMALIST FEATURES ROW GRID WITH FINE-LINE VERTICAL DIVIDERS */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 md:py-24">
        
        {/* Middle Header Row */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-stone-900">
            Your client can buy you a chai.
          </h3>
        </div>

        {/* Clean, separated three-column layout section block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-b border-stone-200/60 py-12 md:py-16">
          
          {/* Column Item Module 1 */}
          <div className="flex flex-col items-center text-center px-6 md:border-r border-stone-200/80 group">
            {/* Elegant Minimalist Outlined Icon Frame Wrapper */}
            <div className="w-14 h-14 rounded-full border border-[#A07142]/30 flex items-center justify-center p-2 mb-6 bg-white/50 shadow-3xs transition-transform duration-300 group-hover:-translate-y-1">
              <img className="w-full h-full object-contain mix-blend-multiply opacity-85" src="/workspace.gif" alt="" />
            </div>
            <p className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-wide">Fans want to help</p>
            <p className="text-stone-500 text-xs max-w-[240px] leading-relaxed font-light">
              your fans are available to support you
            </p>
          </div>
          
          {/* Column Item Module 2 */}
          <div className="flex flex-col items-center text-center px-6 md:border-r border-stone-200/80 group">
            <div className="w-14 h-14 rounded-full border border-[#A07142]/30 flex items-center justify-center p-2 mb-6 bg-white/50 shadow-3xs transition-transform duration-300 group-hover:-translate-y-1">
              <img className="w-full h-full object-contain mix-blend-multiply opacity-85" src="/dollar.gif" alt="" />
            </div>
            <p className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-wide">Clients can contribute</p>
            <p className="text-stone-500 text-xs max-w-[240px] leading-relaxed font-light">
              your clients can support your endeavors
            </p>
          </div>
          
          {/* Column Item Module 3 */}
          <div className="flex flex-col items-center text-center px-6 group">
            <div className="w-14 h-14 rounded-full border border-[#A07142]/30 flex items-center justify-center p-2 mb-6 bg-white/50 shadow-3xs transition-transform duration-300 group-hover:-translate-y-1">
              <img className="w-full h-full object-contain mix-blend-multiply opacity-85" src="/discussion.gif" alt="" />
            </div>
            <p className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-wide">Engage with your community</p>
            <p className="text-stone-500 text-xs max-w-[240px] leading-relaxed font-light">
              connect with your audience and build relationships
            </p>  
          </div>

        </div>
      </div>

      {/* Luxury Floating Pin Action Badge (Matches reference mockup bottom right widget placement) */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-12 h-12 rounded-full bg-[#A07142] text-white flex items-center justify-center shadow-md hover:bg-[#8B5F35] transition-colors duration-300 cursor-pointer group">
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

    </div>
  )
}

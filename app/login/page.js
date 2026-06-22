"use client"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const LoginPage = () => {
    const { data: session } = useSession()
    const router = useRouter()
    
    // Fixed Next.js Router hook side-effect trigger flow
    useEffect(() => {
        if (session) {
            router.push("/")
        }
    }, [session, router])

    return (
        // Root viewport box configured to completely isolate text colors safely
        <div className="w-full min-h-screen flex items-center justify-center bg-[#FAF7F2] font-sans text-stone-900 relative overflow-hidden antialiased">
            
            {/* 1. ATTACHED DESIGN WALLPAPER BACKDROP */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/Untitled design (1).png" 
                    alt="Luxury Abstract Floral Background" 
                    className="w-full h-full object-cover object-center"
                />
                {/* Micro-opacity layering to maintain premium card legibility thresholds */}
                <div className="absolute inset-0 bg-stone-900/[0.01] mix-blend-multiply" />
            </div>

            {/* 2. CENTRAL ELEVATED LUXURY LOGIN CARD */}
            <div className="w-full max-w-md px-6 relative z-10 my-12">
                <div className="bg-white/95 border border-stone-300 rounded-xs shadow-2xl backdrop-blur-xs p-8 sm:p-10 transition-all">
                    
                    {/* Brand Logo & Editorial Header Segment */}
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="w-16 h-16 shadow-xs rounded-full p-0.5 bg-white border border-stone-200">
                            <img src="/coffee-break.gif" alt="logo" className="w-full h-full rounded-full" />
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-stone-950 leading-snug">
                            Login to unlock <br />
                            <span className="font-medium inline-block mt-1 text-[#A07142]">GetMeAChai</span>
                        </h2>
                    </div>

                    {/* INTERACTION AREA: OAUTH BUTTONS MATRIX */}
                    <div className="mt-8">
                        <button
                            onClick={() => signIn("github")}
                            className="w-full h-12 px-6 border border-stone-300 rounded-xs bg-[#FAF7F2] hover:bg-stone-50 transition-colors duration-200 focus:outline-none flex items-center justify-center group shadow-3xs"
                        >
                            <div className="relative flex items-center w-full justify-center gap-3">
                                {/* Cleaned up inline styles to leverage semantic styling */}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor"
                                    className="w-5 h-5 text-stone-800 transition-colors group-hover:text-stone-950" 
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                
                                <span className="text-stone-800 text-xs uppercase tracking-widest font-semibold group-hover:text-stone-950 transition-colors">
                                    Continue with Github
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* LEGAL DISCLAIMER NOTES FOOTER ELEMENT */}
                    <div className="mt-10 pt-4 border-t border-stone-100 text-stone-500 text-center">
                        <p className="text-[10px] uppercase tracking-wider leading-relaxed font-medium">
                            By proceeding, you agree to our <br />
                            <a href="/privacy-policy/" className="underline text-stone-700 hover:text-stone-950 font-semibold transition-colors">Terms of Use</a>
                            {" "}and confirm you have read our <br />
                            <a href="/privacy-policy/" className="underline text-stone-700 hover:text-stone-950 font-semibold transition-colors">Privacy Statement</a>.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LoginPage
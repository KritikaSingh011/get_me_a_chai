"use client"
import Link from "next/link"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowdropdown(false)
    } 
  }

  return (
    // Updated background to match the luxurious off-white/beige canvas and updated text color
    <nav className="h-20 bg-[#FAF7F2] text-stone-800 border-b border-stone-200/60 flex items-center justify-between px-6 py-2 antialiased">
      
      {/* Brand Logo Section styled with high-end serif typography */}
      <div className='text-2xl font-serif font-medium tracking-tight text-stone-900 flex items-center'>
        <span className="inline-block shadow-xs rounded-full p-0.5 bg-white border border-stone-200 mr-3">
          <img src="/coffee-break.gif" alt="logo" className="w-9 h-9 rounded-full" />
        </span>
        GetMeAChai
      </div>

      <div className="flex items-center">
        {session && (
          <>
          <div 
            className="relative"
            onMouseLeave={() => setShowdropdown(false)} 
            onBlur={() => {setTimeout(() => setShowdropdown(false), 300)}} 
            onFocus={() => setShowdropdown(true)} 
            onMouseEnter={() => setShowdropdown(true)}
          >
          
            {/* Main Welcome Button styled in sleek flat luxury tan brown */}
            <button 
              id="dropdownDefaultButton" 
              data-dropdown-toggle="dropdown" 
              className="inline-flex items-center justify-center text-white bg-[#A07142] hover:bg-[#8B5F35] mx-3 font-medium text-xs uppercase tracking-widest rounded-sm px-4 py-2.5 max-w-[180px] sm:max-w-xs transition-colors duration-200 shadow-2xs" 
              type="button"
            >
              <span className="truncate">Welcome {session.user.email}</span>
              <svg className="w-4 h-4 ms-1.5 -me-0.5 opacity-80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu adapted to high-end frosted luxury panel style */}
            <div 
              id="dropdown" 
              className={`${showdropdown ? '' : 'hidden'} absolute left-2/3 -translate-x-1/2 z-50 bg-white/95 border border-stone-200 shadow-md w-36 rounded-xs backdrop-blur-xs`}
            >
              <ul className="p-1.5 text-xs uppercase tracking-wider text-stone-700 font-medium" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/profile" className="inline-flex items-center w-full p-2 hover:bg-[#f3e8d5] hover:text-stone-900 rounded-xs transition-colors">Profile</Link>
                </li>
                <li>
                  <Link href="/settings" className="inline-flex items-center w-full p-2 hover:bg-[#f3e8d5] hover:text-stone-900 rounded-xs transition-colors">Settings</Link>
                </li>
                <li>
                  <Link href="/help" className="inline-flex items-center w-full p-2 hover:bg-[#f3e8d5] hover:text-stone-900 rounded-xs transition-colors">Help</Link>
                </li>
                <li>
                  <Link onClick={() => signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-red-50 hover:text-red-700 rounded-xs transition-colors">Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
          </>
        )}

        {/* Action Button Area handles authentication states */}
        {session ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => signOut()}
              className="text-stone-700 bg-white hover:bg-stone-200 border border-stone-200 font-medium rounded-sm text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 shadow-3xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-[#A07142] hover:bg-[#8B5F35] font-medium rounded-sm text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 shadow-2xs"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
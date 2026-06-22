"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    // Clean, minimalist warm beige background with a delicate border top matching the design theme
    <footer className="w-full bg-[#f9ebd2] text-stone-600 border-t border-stone-200/60 font-sans px-6 py-6 mt-auto antialiased">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider font-medium">
        
        {/* Copyright notice updated with modern slate coloring and current year */}
        <div className="text-stone-500 text-center sm:text-left">
          Copyright &copy; 2026 GetMeAChai. All rights reserved.
        </div>

        {/* Added clean secondary utility navigation links to complete the luxury look */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/privacy" className="hover:text-stone-900 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-stone-900 transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors duration-200">
            Contact Us
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
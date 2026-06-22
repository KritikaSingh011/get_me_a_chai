"use client"
import React, { useState, useRef } from 'react'
import Link from 'next/link'

const Username = ({ params }) => {
  // State tracking utilizing empty strings so placeholders display beautifully
  const [formData, setFormData] = useState({
    name: params?.username ? params.username : "",
    username: params?.username ? `@${params.username}` : "",
    bio: "",
    occupation: "",
    location: "",
    razorpayId: "",
    razorpaySecret: ""
  })

  // State holding the chosen profile image local URL
  const [profilePic, setProfilePic] = useState("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500")
  const [isSaving, setIsSaving] = useState(false)
  
  // File picker reference bridge
  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const localImageUrl = URL.createObjectURL(file)
      setProfilePic(localImageUrl)
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      alert("Profile updated successfully! 🎉")
      console.log("Saved Data:", { ...formData, profilePic })
    }, 1000)
  }

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] text-stone-900 antialiased font-sans pb-16 relative">
      
      {/* 1. PROFILE MANAGE PANEL CONTAINER */}
      <div className="max-w-3xl mx-auto px-6 pt-20 md:pt-20">
        
        {/* Solid Ivory White Form Card Panel Box */}
        <div className="bg-white border border-stone-300 rounded-xs p-5 sm:p-10 mb-16 shadow-2xl relative z-10">
          
          {/* Header Area Identity Layout block */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-5 pb-8 border-b border-stone-200">
            
            {/* INTERACTIVE AVATAR PICKER FRAME */}
            <div 
              onClick={() => fileInputRef.current.click()}
              className="-mt-20 sm:-mt-24 relative z-10 shrink-0 group cursor-pointer shadow-md rounded-full bg-white p-1 border border-stone-300 transition-transform hover:scale-[1.02]"
              title="Click to change profile picture"
            >
              <img 
                src={profilePic}
                alt="Avatar Profile" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover group-hover:brightness-90 transition-all" 
              />
              {/* Visual Action Indicator Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-white bg-stone-900/60 p-2 rounded-full shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            {/* Live Name Header text preview */}
            <div className="text-center sm:text-left mb-1">
              <h1 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-stone-950">
                {formData.name || params?.username || "Creator Profile"}
              </h1>
              <p className="text-[#A07142] font-semibold text-xs uppercase tracking-widest mt-1">
                {formData.username || "@your_handle"}
              </p>
            </div>
          </div>

          {/* EDIT FORM INPUT FIELD MATRIX */}
          <form onSubmit={handleSave} className="mt-8 space-y-6">
            <h2 className="text-xl font-serif font-medium tracking-wide text-stone-950">Edit Profile Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  placeholder="e.g. John Doe"
                  onChange={handleInputChange}
                  className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
                  required
                />
              </div>

              {/* Username Handle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Username Handle</label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username} 
                  placeholder="e.g. @johndoe_chai"
                  onChange={handleInputChange}
                  className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Occupation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Occupation</label>
                <input 
                  type="text" 
                  name="occupation"
                  value={formData.occupation} 
                  placeholder="e.g. Web Developer"
                  onChange={handleInputChange}
                  className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={formData.location} 
                  placeholder="e.g. Lucknow, India"
                  onChange={handleInputChange}
                  className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
                />
              </div>
            </div>

            {/* About Me Bio Area */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">About Me / Bio</label>
              <textarea 
                name="bio"
                rows="3"
                value={formData.bio} 
                placeholder="Tell your audience a bit about yourself..."
                onChange={handleInputChange}
                className="bg-[#FAF7F2] border border-stone-300 rounded-xs p-4 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal resize-none leading-relaxed shadow-3xs"
              />
            </div>

            
            {/* Razorpay ID */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Razorpay ID</label>
              <input 
                type="text" 
                name="razorpayId"
                value={formData.razorpayId} 
                placeholder="rzp_test_..."
                onChange={handleInputChange}
                className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
              />
            </div>

            {/* Razorpay Secret */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Razorpay Secret</label>
              <input 
                type="password" 
                name="razorpaySecret"
                value={formData.razorpaySecret} 
                placeholder="••••••••"
                onChange={handleInputChange}
                className="bg-[#FAF7F2] border border-stone-300 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#A07142] focus:bg-white transition text-stone-950 placeholder-stone-400 font-normal shadow-3xs"
              />
            </div>

            {/* FOOTER ACTION CONTROL PANEL */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row justify-end items-center gap-3">
              
              {/* RETURN HOME ACTION LINK */}
              <Link href="/" className="w-full sm:w-auto order-2 sm:order-1">
                <button 
                  type="button" 
                  className="w-full sm:w-auto px-6 py-3 font-medium text-xs uppercase tracking-widest text-stone-600 hover:text-stone-950 bg-white border border-stone-300 rounded-xs hover:bg-stone-50 transition-colors duration-200 text-center shadow-3xs"
                >
                  Return Home
                </button>
              </Link>

              {/* REFINED LUXURY TAN GOLD SUBMIT BUTTON */}
              <button 
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto order-1 sm:order-2 px-8 py-3.5 font-semibold text-xs uppercase tracking-widest text-white bg-[#A07142] hover:bg-[#8B5F35] focus:outline-none shadow-2xs transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 rounded-xs"
              >
                {isSaving ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : "Save Profile"}
              </button>
              
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Username
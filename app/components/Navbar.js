"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="h-20 bg-yellow-950 text-white flex items-center justify-between px-4 py-2">

            <div className='text-2xl font-bold'>
                <img src="/coffee-break.gif" alt="logo" className="w-10 rounded-full inline-block mr-3" />
                GetMeAChai
            </div>
            <div>
              {session ? (
                <div className="flex items-center gap-4 font-bold">
                  <span className="text-sm">
                    Signed in as {session.user?.email ?? session.user?.name ?? "User"}
                  </span>
                  <button
                    onClick={() => signOut()}
                    className="text-white bg-gradient-to-br from-yellow-600 to-orange-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-full text-sm py-2 px-5"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-yellow-600 to-orange-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-full text-sm py-2 px-5"
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

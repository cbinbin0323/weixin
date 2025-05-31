"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart3, Settings } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center justify-center w-full">
          <Home className={`h-5 w-5 ${pathname === "/" ? "text-green-500" : "text-gray-500"}`} />
          <span className={`text-xs mt-1 ${pathname === "/" ? "text-green-500" : "text-gray-500"}`}>Home</span>
        </Link>

        <Link href="/analysis" className="flex flex-col items-center justify-center w-full">
          <BarChart3 className={`h-5 w-5 ${pathname.startsWith("/analysis") ? "text-green-500" : "text-gray-500"}`} />
          <span className={`text-xs mt-1 ${pathname.startsWith("/analysis") ? "text-green-500" : "text-gray-500"}`}>
            Analysis
          </span>
        </Link>

        <Link href="/settings" className="flex flex-col items-center justify-center w-full">
          <Settings className={`h-5 w-5 ${pathname === "/settings" ? "text-green-500" : "text-gray-500"}`} />
          <span className={`text-xs mt-1 ${pathname === "/settings" ? "text-green-500" : "text-gray-500"}`}>
            Settings
          </span>
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileUp, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-2">Chat Record Summary Assistant</h1>
        <p className="text-sm opacity-90">
          Intelligently analyze your chat records and quickly extract important information
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
        <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
        <Link href="/import">
          <Button className="w-full bg-green-500 hover:bg-green-600 mb-3 flex items-center justify-center">
            <FileUp className="mr-2 h-5 w-5" />
            Import Chat Records
          </Button>
        </Link>
        <div className="flex items-center text-sm text-gray-600">
          <Shield className="h-4 w-4 mr-2" />
          <p>All data is processed locally to ensure your privacy</p>
        </div>
      </div>

      {/* My Chat Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
        <h2 className="text-lg font-semibold mb-4">My Chat Analysis</h2>

        {/* Chat List - Will be dynamic in real app */}
        <div className="space-y-4">
          <Link href="/analysis/1" className="block">
            <div className="flex items-start py-3 border-b border-gray-100">
              <div className="h-12 w-12 rounded-md bg-gray-200 mr-4 overflow-hidden">
                <img src="/placeholder.svg?height=48&width=48" alt="Li Ming" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">Li Ming</span>
                  <span className="text-xs text-gray-400">Today</span>
                </div>
                <p className="text-xs text-gray-500">Analyzed 2,853 messages · 2023/01/01-2023/05/28</p>
              </div>
            </div>
          </Link>

          <Link href="/analysis/2" className="block">
            <div className="flex items-start py-3 border-b border-gray-100">
              <div className="h-12 w-12 rounded-md bg-gray-200 mr-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Product Development Group"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">Product Development Group</span>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                <p className="text-xs text-gray-500">Analyzed 5,241 messages · 2023/01/01-2023/05/28</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">📊</span>
            <span className="block font-medium text-sm mb-1">Chat Analysis</span>
            <span className="block text-xs text-gray-600">Frequency, time distribution statistics</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">🔥</span>
            <span className="block font-medium text-sm mb-1">Hot Word Extraction</span>
            <span className="block text-xs text-gray-600">Discover high-frequency words and topics</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">😊</span>
            <span className="block font-medium text-sm mb-1">Sentiment Analysis</span>
            <span className="block text-xs text-gray-600">Understand conversation emotion trends</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">📝</span>
            <span className="block font-medium text-sm mb-1">Smart Summary</span>
            <span className="block text-xs text-gray-600">Automatically generate conversation highlights</span>
          </div>
        </div>
      </div>
    </div>
  )
}

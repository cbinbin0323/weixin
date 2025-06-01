import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileUp, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-2">聊天记录摘要助手</h1>
        <p className="text-sm opacity-90">智能分析您的聊天记录，快速提取重要信息</p>
      </div>

      {/* Quick Start */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
        <h2 className="text-lg font-semibold mb-4">快速开始</h2>
        <Link href="/import">
          <Button className="w-full bg-green-500 hover:bg-green-600 mb-3 flex items-center justify-center">
            <FileUp className="mr-2 h-5 w-5" />
            导入聊天记录
          </Button>
        </Link>
        <div className="flex items-center text-sm text-gray-600">
          <Shield className="h-4 w-4 mr-2" />
          <p>所有数据均在本地处理，确保您的隐私安全</p>
        </div>
      </div>

      {/* My Chat Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
        <h2 className="text-lg font-semibold mb-4">我的聊天分析</h2>

        {/* Chat List - Will be dynamic in real app */}
        <div className="space-y-4">
          <Link href="/analysis/1" className="block">
            <div className="flex items-start py-3 border-b border-gray-100">
              <div className="h-12 w-12 rounded-md bg-gray-200 mr-4 overflow-hidden">
                <img src="/placeholder.svg?height=48&width=48" alt="Li Ming" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">李明</span>
                  <span className="text-xs text-gray-400">今天</span>
                </div>
                <p className="text-xs text-gray-500">已分析 2,853 条消息 · 2023/01/01-2023/05/28</p>
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
                  <span className="font-medium text-sm">产品开发组</span>
                  <span className="text-xs text-gray-400">昨天</span>
                </div>
                <p className="text-xs text-gray-500">已分析 5,241 条消息 · 2023/01/01-2023/05/28</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">功能特色</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">📊</span>
            <span className="block font-medium text-sm mb-1">聊天分析</span>
            <span className="block text-xs text-gray-600">频率、时间分布统计</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">🔥</span>
            <span className="block font-medium text-sm mb-1">热词提取</span>
            <span className="block text-xs text-gray-600">发现高频词汇和话题</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">😊</span>
            <span className="block font-medium text-sm mb-1">情感分析</span>
            <span className="block text-xs text-gray-600">了解对话情感趋势</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <span className="block text-2xl mb-2">📝</span>
            <span className="block font-medium text-sm mb-1">智能摘要</span>
            <span className="block text-xs text-gray-600">自动生成对话要点</span>
          </div>
        </div>
      </div>
    </div>
  )
}

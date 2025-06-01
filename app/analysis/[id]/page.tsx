"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Share2, Clock, MessageSquare, User, Calendar } from "lucide-react"

export default function AnalysisDetailPage() {
  const params = useParams()
  const id = params.id

  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - would be fetched from API in real app
  const chatData = {
    1: {
      name: "李明",
      type: "friend",
      messageCount: 2853,
      dateRange: "2023/01/01-2023/05/28",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    2: {
      name: "产品开发组",
      type: "group",
      messageCount: 5241,
      dateRange: "2023/01/01-2023/05/28",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  }

  // @ts-ignore - Mock data access
  const chat = chatData[id] || chatData[1]

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">分析详情</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            导出
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            分享
          </Button>
        </div>
      </div>

      {/* Chat Info */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-md bg-gray-200 mr-4 overflow-hidden">
              <img src={chat.avatar || "/placeholder.svg"} alt={chat.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{chat.name}</h2>
              <p className="text-sm text-gray-500">{chat.type === "group" ? "群聊" : "好友"}</p>
              <p className="text-sm text-gray-500">{chat.dateRange}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <MessageSquare className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">消息</div>
                <div className="text-xl font-bold">{chat.messageCount.toLocaleString()}</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <User className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">参与者</div>
                <div className="text-xl font-bold">{chat.type === "group" ? "25" : "2"}</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <Calendar className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">时间跨度</div>
                <div className="text-xl font-bold">148 天</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="activity">活跃度</TabsTrigger>
          <TabsTrigger value="topics">话题</TabsTrigger>
          <TabsTrigger value="summary">摘要</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">关键洞察</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">最活跃时间</h4>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-700">工作日上午 10:00 - 12:00</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">热门关键词</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["项目", "会议", "截止日期", "设计", "功能"].map((keyword) => (
                      <span key={keyword} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">情感分析</h4>
                  <p className="text-purple-700">整体积极情感（62% 积极，28% 中性，10% 消极）</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">活跃度概览</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">活跃度图表将在此显示</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">消息频率</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">消息频率图表将在此显示</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">时间分布</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">按星期分布</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-500">星期分布图</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">按小时分布</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-500">小时分布图</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">热门话题</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">词云将在此显示</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">话题趋势</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">话题趋势图表将在此显示</p>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">热门关键词</h4>
                <div className="space-y-2">
                  {["项目", "会议", "截止日期", "设计", "功能"].map((keyword, index) => (
                    <div key={keyword} className="flex items-center">
                      <div className="w-24 text-sm">{keyword}</div>
                      <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${90 - index * 15}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-sm">{90 - index * 15}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">对话摘要</h3>
              <div className="prose max-w-none">
                <p>本次对话主要围绕新产品功能的开发展开。团队讨论了技术要求、设计考虑和项目时间表。</p>

                <h4>关键点：</h4>
                <ul>
                  <li>团队同意用两周的冲刺时间完成初始原型</li>
                  <li>设计模型需要在周五前最终确定</li>
                  <li>后端 API 开发将于下周一开始</li>
                  <li>客户演示定于本月底</li>
                </ul>

                <h4>行动项目：</h4>
                <ul>
                  <li>John 将准备技术文档</li>
                  <li>Sarah 将最终确定 UI 设计</li>
                  <li>团队会议安排在周三，以审查进度</li>
                </ul>

                <p>
                  对话的整体情绪是积极的，团队成员对该项目表现出热情。有人对紧张的截止日期提出了一些担忧，但团队同意优先考虑各项功能，以确保及时交付。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">重要消息</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">李明</span>
                    <span className="text-sm text-gray-500">Jan 15, 10:23 AM</span>
                  </div>
                  <p className="text-sm">我已经完成了初始需求文档。请在明天之前查看，以便我们最终确定它。</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Wang Xiaohong</span>
                    <span className="text-sm text-gray-500">Jan 16, 2:45 PM</span>
                  </div>
                  <p className="text-sm">客户已要求对原始范围进行一些更改。我稍后会发送更新后的要求。</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Zhang Wei</span>
                    <span className="text-sm text-gray-500">Jan 20, 9:15 AM</span>
                  </div>
                  <p className="text-sm">团队会议已确认在周三下午 2 点举行。请准备好您的进度更新。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

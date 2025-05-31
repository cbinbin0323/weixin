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
      name: "Li Ming",
      type: "friend",
      messageCount: 2853,
      dateRange: "2023/01/01-2023/05/28",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    2: {
      name: "Product Development Group",
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
        <h1 className="text-2xl font-bold">Analysis Details</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share
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
              <p className="text-sm text-gray-500">{chat.type === "group" ? "Group Chat" : "Friend"}</p>
              <p className="text-sm text-gray-500">{chat.dateRange}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <MessageSquare className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Messages</div>
                <div className="text-xl font-bold">{chat.messageCount.toLocaleString()}</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <User className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Participants</div>
                <div className="text-xl font-bold">{chat.type === "group" ? "25" : "2"}</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center">
              <Calendar className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <div className="text-sm text-gray-500">Time Span</div>
                <div className="text-xl font-bold">148 days</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Key Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">Most Active Time</h4>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-700">Weekdays between 10:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Top Keywords</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["project", "meeting", "deadline", "design", "feature"].map((keyword) => (
                      <span key={keyword} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">Sentiment Analysis</h4>
                  <p className="text-purple-700">
                    Overall positive sentiment (62% positive, 28% neutral, 10% negative)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Activity Overview</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Activity chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Message Frequency</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Message frequency chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Time Distribution</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">By Day of Week</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-500">Day of week chart</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">By Hour of Day</h4>
                  <div className="bg-gray-50 p-4 rounded-lg h-40 flex items-center justify-center">
                    <p className="text-gray-500">Hour of day chart</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Hot Topics</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Word cloud will be displayed here</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Topic Trends</h3>
              <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Topic trends chart will be displayed here</p>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Top Keywords</h4>
                <div className="space-y-2">
                  {["project", "meeting", "deadline", "design", "feature"].map((keyword, index) => (
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
              <h3 className="text-lg font-medium mb-4">Conversation Summary</h3>
              <div className="prose max-w-none">
                <p>
                  This conversation primarily revolves around the development of a new product feature. The team
                  discussed technical requirements, design considerations, and project timelines.
                </p>

                <h4>Key Points:</h4>
                <ul>
                  <li>The team agreed on a two-week sprint to complete the initial prototype</li>
                  <li>Design mockups need to be finalized by Friday</li>
                  <li>Backend API development will start next Monday</li>
                  <li>Client presentation is scheduled for the end of the month</li>
                </ul>

                <h4>Action Items:</h4>
                <ul>
                  <li>John will prepare the technical documentation</li>
                  <li>Sarah will finalize the UI designs</li>
                  <li>Team meeting scheduled for Wednesday to review progress</li>
                </ul>

                <p>
                  The overall sentiment of the conversation was positive, with team members showing enthusiasm about the
                  project. There were some concerns raised about the tight deadline, but the team agreed to prioritize
                  features to ensure timely delivery.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Important Messages</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Li Ming</span>
                    <span className="text-sm text-gray-500">Jan 15, 10:23 AM</span>
                  </div>
                  <p className="text-sm">
                    I've just finished the initial requirements document. Please review it by tomorrow so we can
                    finalize it.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Wang Xiaohong</span>
                    <span className="text-sm text-gray-500">Jan 16, 2:45 PM</span>
                  </div>
                  <p className="text-sm">
                    The client has requested some changes to the original scope. I'll send the updated requirements
                    later today.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Zhang Wei</span>
                    <span className="text-sm text-gray-500">Jan 20, 9:15 AM</span>
                  </div>
                  <p className="text-sm">
                    Team meeting confirmed for Wednesday at 2 PM. Please prepare your progress updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

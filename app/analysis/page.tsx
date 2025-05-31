import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function AnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6">Analysis</h1>

      <div className="space-y-4">
        {/* Recent Analysis */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Recent Analysis</h2>

            <div className="space-y-4">
              <Link href="/analysis/1" className="block">
                <div className="flex items-start py-3 border-b border-gray-100">
                  <div className="h-12 w-12 rounded-md bg-gray-200 mr-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="Li Ming"
                      className="h-full w-full object-cover"
                    />
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
          </CardContent>
        </Card>

        {/* Analysis Overview */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Analysis Overview</h2>

            <Tabs defaultValue="activity">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="activity" className="flex items-center">
                  <BarChart className="h-4 w-4 mr-2" />
                  Activity
                </TabsTrigger>
                <TabsTrigger value="sentiment" className="flex items-center">
                  <LineChart className="h-4 w-4 mr-2" />
                  Sentiment
                </TabsTrigger>
                <TabsTrigger value="topics" className="flex items-center">
                  <PieChart className="h-4 w-4 mr-2" />
                  Topics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Activity chart will be displayed here</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Total Messages</div>
                    <div className="text-2xl font-bold">8,094</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Active Days</div>
                    <div className="text-2xl font-bold">148</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sentiment" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Sentiment chart will be displayed here</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Positive</div>
                    <div className="text-2xl font-bold">62%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Neutral</div>
                    <div className="text-2xl font-bold">28%</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="text-sm text-gray-500">Negative</div>
                    <div className="text-2xl font-bold">10%</div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="topics" className="mt-0">
                <div className="bg-gray-50 p-4 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Topics chart will be displayed here</p>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Top Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {["project", "meeting", "deadline", "design", "feature", "bug", "client", "update"].map(
                      (keyword) => (
                        <span key={keyword} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {keyword}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

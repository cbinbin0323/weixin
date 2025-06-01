"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Calendar, ChevronLeft, ChevronRight, Upload } from "lucide-react"

export default function ImportPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedFriend, setSelectedFriend] = useState("")
  const [importMethod, setImportMethod] = useState("local")
  const [startDate, setStartDate] = useState("2023-01-01")
  const [endDate, setEndDate] = useState("2023-05-28")
  const [progress, setProgress] = useState(0)
  const [isImporting, setIsImporting] = useState(false)

  const friends = [
    { value: "friend1", label: "李明（好友）" },
    { value: "friend2", label: "王小红（好友）" },
    { value: "group1", label: "产品开发组（群聊 25人）" },
    { value: "group2", label: "家庭群（群聊 5人）" },
  ]

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const startImport = () => {
    setIsImporting(true)
    setCurrentStep(3)
    simulateImport()
  }

  const simulateImport = () => {
    let currentProgress = 0
    const timer = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(timer)
        setIsImporting(false)

        // Show success message and redirect
        setTimeout(() => {
          router.push("/analysis")
        }, 1000)
      }
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6">导入聊天记录</h1>

      <Card>
        <CardContent className="p-6">
          {/* Step 1: Select Chat */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-lg font-medium mb-4">步骤 1：选择聊天</h2>
              <div className="space-y-3">
                {friends.map((friend) => (
                  <div
                    key={friend.value}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedFriend === friend.value ? "border-green-500 bg-green-50" : "border-gray-200"
                    }`}
                    onClick={() => setSelectedFriend(friend.value)}
                  >
                    {friend.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Import Method */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-lg font-medium mb-4">步骤 2：导入方式</h2>

              <RadioGroup value={importMethod} onValueChange={setImportMethod} className="space-y-3">
                <div className="flex items-center space-x-2 border p-4 rounded-lg">
                  <RadioGroupItem value="local" id="local" />
                  <Label htmlFor="local" className="cursor-pointer flex-1">
                    <div className="font-medium">本地文件</div>
                    <div className="text-sm text-gray-500">从本地聊天导出文件导入</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 border p-4 rounded-lg">
                  <RadioGroupItem value="cloud" id="cloud" />
                  <Label htmlFor="cloud" className="cursor-pointer flex-1">
                    <div className="font-medium">云端备份</div>
                    <div className="text-sm text-gray-500">从您的云端备份导入</div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">日期范围</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="startDate">开始日期</Label>
                    <input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="endDate">结束日期</Label>
                    <input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full border rounded-md p-2 mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => document.getElementById("fileInput")?.click()}
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  选择文件
                </Button>
                <input id="fileInput" type="file" className="hidden" accept=".txt,.csv,.json" />
              </div>
            </div>
          )}

          {/* Step 3: Import Progress */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-lg font-medium mb-4">步骤 3：导入中</h2>

              <div className="text-center mb-6">
                {isImporting ? (
                  <p>正在导入和分析聊天记录...</p>
                ) : (
                  <p className="text-green-500 font-medium">导入完成！</p>
                )}
              </div>

              <Progress value={progress} className="h-2 mb-2" />
              <p className="text-right text-sm text-gray-500">{progress}%</p>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>已处理消息</span>
                  <span>{Math.floor(progress * 52.41)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>剩余时间</span>
                  <span>{isImporting ? `${Math.ceil((100 - progress) / 10)} 秒` : "已完成"}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep !== 3 && (
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                返回
              </Button>

              {currentStep === 2 ? (
                <Button onClick={startImport} disabled={!selectedFriend} className="bg-green-500 hover:bg-green-600">
                  开始导入
                </Button>
              ) : (
                <Button onClick={nextStep} disabled={!selectedFriend} className="flex items-center">
                  下一步
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

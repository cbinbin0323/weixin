"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Moon, Shield, Trash2, HelpCircle, Info, Languages, Download } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [language, setLanguage] = useState("english")

  return (
    <div className="container mx-auto px-4 py-8 pb-20">
      <h1 className="text-2xl font-bold mb-6">设置</h1>

      <div className="space-y-6">
        {/* Appearance */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">外观</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="dark-mode">深色模式</Label>
                </div>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Languages className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="language">语言</Label>
                </div>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border rounded-md px-3 py-1 text-sm"
                >
                  <option value="english">中文</option>
                  <option value="chinese">中文</option>
                  <option value="spanish">西班牙语</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">通知</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="notifications">启用通知</Label>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">数据与隐私</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <Label htmlFor="auto-save">自动保存分析</Label>
                    <p className="text-xs text-gray-500 mt-1">自动将分析结果保存到您的设备</p>
                  </div>
                </div>
                <Switch id="auto-save" checked={autoSave} onCheckedChange={setAutoSave} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Download className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <Label>导出所有数据</Label>
                    <p className="text-xs text-gray-500 mt-1">下载您的所有分析数据</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trash2 className="h-5 w-5 mr-3 text-red-500" />
                  <div>
                    <Label className="text-red-500">清除所有数据</Label>
                    <p className="text-xs text-gray-500 mt-1">删除您的所有分析数据和历史记录</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  清除
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About & Help */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">关于与帮助</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Info className="h-5 w-5 mr-3 text-gray-500" />
                  <Label>关于</Label>
                </div>
                <Button variant="ghost" size="sm">
                  查看
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                  <Label>帮助与支持</Label>
                </div>
                <Button variant="ghost" size="sm">
                  联系
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p>聊天记录摘要助手</p>
              <p>版本 1.0.0</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

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
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* Appearance */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Appearance</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Languages className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="language">Language</Label>
                </div>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border rounded-md px-3 py-1 text-sm"
                >
                  <option value="english">English</option>
                  <option value="chinese">Chinese</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Notifications</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 mr-3 text-gray-500" />
                  <Label htmlFor="notifications">Enable Notifications</Label>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Data & Privacy</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <Label htmlFor="auto-save">Auto-save Analysis</Label>
                    <p className="text-xs text-gray-500 mt-1">Automatically save analysis results to your device</p>
                  </div>
                </div>
                <Switch id="auto-save" checked={autoSave} onCheckedChange={setAutoSave} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Download className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <Label>Export All Data</Label>
                    <p className="text-xs text-gray-500 mt-1">Download all your analysis data</p>
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
                    <Label className="text-red-500">Clear All Data</Label>
                    <p className="text-xs text-gray-500 mt-1">Delete all your analysis data and history</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About & Help */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">About & Help</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Info className="h-5 w-5 mr-3 text-gray-500" />
                  <Label>About</Label>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
                  <Label>Help & Support</Label>
                </div>
                <Button variant="ghost" size="sm">
                  Contact
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              <p>Chat Record Summary Assistant</p>
              <p>Version 1.0.0</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

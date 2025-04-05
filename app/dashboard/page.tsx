"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Laptop, Monitor, Phone, Printer, Recycle, Trash } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const userStats = {
    totalDevices: 5,
    totalCredits: 120,
    carbonSaved: 45,
    pendingReturns: 1,
  }

  const returnHistory = [
    { id: "RT-1234", device: "iPhone 11", date: "2023-12-15", status: "Completed", reward: 45 },
    { id: "RT-1235", device: "Dell XPS 13", date: "2023-11-20", status: "Completed", reward: 75 },
    { id: "RT-1236", device: "Samsung Monitor", date: "2023-10-05", status: "Completed", reward: 30 },
    { id: "RT-1237", device: "HP Printer", date: "2023-09-12", status: "Completed", reward: 25 },
    { id: "RT-1238", device: "iPad Pro", date: "2023-08-28", status: "Processing", reward: 0 },
  ]

  const deviceIcons = {
    iPhone: <Phone className="h-5 w-5" />,
    Dell: <Laptop className="h-5 w-5" />,
    Samsung: <Monitor className="h-5 w-5" />,
    HP: <Printer className="h-5 w-5" />,
    iPad: <Phone className="h-5 w-5" />,
  }

  const getDeviceIcon = (deviceName: string) => {
    for (const [key, icon] of Object.entries(deviceIcons)) {
      if (deviceName.includes(key)) {
        return icon
      }
    }
    return <Recycle className="h-5 w-5" />
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your e-waste recycling activities</p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Return History</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Devices Recycled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.totalDevices}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Recycle className="mr-1 h-4 w-4 text-primary" />
                  <span>Contributing to a cleaner planet</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">EcoCredits Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${userStats.totalCredits}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>Available to use for future purchases</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Carbon Footprint Reduced</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.carbonSaved} kg</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>CO₂ emissions prevented</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.pendingReturns}</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span>Device(s) in processing</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest recycling activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returnHistory.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          {getDeviceIcon(item.device)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.device}</p>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant={item.status === "Completed" ? "default" : "outline"}>{item.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("history")}>
                  View All Activity
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Your contribution to sustainability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Carbon Footprint Reduction</div>
                    <div className="text-sm text-muted-foreground">45%</div>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">E-Waste Diverted from Landfill</div>
                    <div className="text-sm text-muted-foreground">8.5 kg</div>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Rare Metals Recovered</div>
                    <div className="text-sm text-muted-foreground">120g</div>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="pt-4">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center space-x-2">
                      <Trash className="h-5 w-5 text-primary" />
                      <div className="text-sm font-medium">Recycling Milestone</div>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      You're just 2 devices away from reaching your next recycling milestone and earning a bonus reward!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Return History</CardTitle>
              <CardDescription>A record of all your device returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 bg-muted p-4 font-medium">
                  <div>Return ID</div>
                  <div>Device</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Reward</div>
                </div>
                <div className="divide-y">
                  {returnHistory.map((item) => (
                    <div key={item.id} className="grid grid-cols-5 items-center p-4">
                      <div className="text-sm">{item.id}</div>
                      <div className="flex items-center gap-2 text-sm">
                        {getDeviceIcon(item.device)}
                        {item.device}
                      </div>
                      <div className="text-sm">{item.date}</div>
                      <div>
                        <Badge variant={item.status === "Completed" ? "default" : "outline"}>{item.status}</Badge>
                      </div>
                      <div className="text-sm font-medium">{item.reward > 0 ? `$${item.reward}` : "Pending"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rewards Summary</CardTitle>
                <CardDescription>Your EcoCredits and rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Available Balance</p>
                    <p className="text-3xl font-bold">${userStats.totalCredits}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Lifetime Earnings</div>
                    <div className="font-medium">$175</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Redeemed</div>
                    <div className="font-medium">$55</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Pending</div>
                    <div className="font-medium">$0</div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium">Reward Tier: Silver</p>
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Recycle 3 more devices to reach Gold tier and get 15% bonus on all rewards!
                    </p>
                  </div>
                  <div className="mt-3">
                    <Progress value={40} className="h-2" />
                    <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                      <span>Silver</span>
                      <span>Gold</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Redeem Credits</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reward History</CardTitle>
                <CardDescription>Your past rewards and redemptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium">iPhone 11 Return</p>
                      <p className="text-xs text-muted-foreground">Dec 15, 2023</p>
                    </div>
                    <div className="text-sm font-medium text-primary">+$45</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium">Dell XPS 13 Return</p>
                      <p className="text-xs text-muted-foreground">Nov 20, 2023</p>
                    </div>
                    <div className="text-sm font-medium text-primary">+$75</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium">Store Purchase</p>
                      <p className="text-xs text-muted-foreground">Nov 05, 2023</p>
                    </div>
                    <div className="text-sm font-medium text-destructive">-$35</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium">Samsung Monitor Return</p>
                      <p className="text-xs text-muted-foreground">Oct 05, 2023</p>
                    </div>
                    <div className="text-sm font-medium text-primary">+$30</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Store Purchase</p>
                      <p className="text-xs text-muted-foreground">Sep 18, 2023</p>
                    </div>
                    <div className="text-sm font-medium text-destructive">-$20</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


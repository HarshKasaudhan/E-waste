"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, CreditCard, Users, ShoppingCart, CheckCircle, Clock, ArrowLeft, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function AdminDashboard() {
  const [isClient, setIsClient] = useState(false)

  // Use this to prevent hydration errors
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mock data for admin dashboard
  const stats = {
    totalOrders: 156,
    pendingOrders: 23,
    completedOrders: 133,
    totalUsers: 89,
    totalCredits: 45000,
    totalDevices: 178,
  }

  // Mock recent orders
  const recentOrders = [
    { id: "ORD-1234", user: "Rahul Sharma", device: "iPhone 12", date: "2025-03-28", status: "Completed", value: 1200 },
    {
      id: "ORD-1235",
      user: "Priya Patel",
      device: "Samsung Galaxy S21",
      date: "2025-03-27",
      status: "Processing",
      value: 1000,
    },
    { id: "ORD-1236", user: "Amit Kumar", device: "MacBook Pro", date: "2025-03-26", status: "Completed", value: 3500 },
    { id: "ORD-1237", user: "Neha Singh", device: "Dell XPS 13", date: "2025-03-25", status: "Pending", value: 2800 },
    { id: "ORD-1238", user: "Vikram Mehta", device: "iPad Pro", date: "2025-03-24", status: "Completed", value: 1500 },
  ]

  if (!isClient) return null

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage e-waste returns and user rewards</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Site
          </Button>
        </Link>
      </div>

      <Alert className="mb-8 bg-yellow-100 border-yellow-400">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
        <AlertTitle className="text-yellow-800 font-bold">Prototype Data</AlertTitle>
        <AlertDescription className="text-yellow-700">
          This dashboard displays prototype data for demonstration purposes only. The information shown does not
          represent real orders or users.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.pendingOrders} pending, {stats.completedOrders} completed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Credits Issued</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹{stats.totalCredits}</div>
            <p className="text-xs text-muted-foreground mt-1">Across {stats.totalOrders} orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">{stats.totalDevices} devices recycled</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Overview of the latest device return requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted p-4 font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Device</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Value</div>
                </div>
                <div className="divide-y">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="grid grid-cols-6 items-center p-4">
                      <div className="text-sm font-medium">{order.id}</div>
                      <div className="text-sm">{order.user}</div>
                      <div className="text-sm">{order.device}</div>
                      <div className="text-sm">{order.date}</div>
                      <div>
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "default"
                              : order.status === "Processing"
                                ? "outline"
                                : "secondary"
                          }
                          className="flex w-24 justify-center items-center gap-1"
                        >
                          {order.status === "Completed" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : order.status === "Processing" ? (
                            <Clock className="h-3 w-3" />
                          ) : (
                            <ShoppingCart className="h-3 w-3" />
                          )}
                          {order.status}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium">₹{order.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
              <CardDescription>Orders awaiting processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted p-4 font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Device</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Value</div>
                </div>
                <div className="divide-y">
                  {recentOrders
                    .filter((order) => order.status === "Pending")
                    .map((order) => (
                      <div key={order.id} className="grid grid-cols-6 items-center p-4">
                        <div className="text-sm font-medium">{order.id}</div>
                        <div className="text-sm">{order.user}</div>
                        <div className="text-sm">{order.device}</div>
                        <div className="text-sm">{order.date}</div>
                        <div>
                          <Badge variant="secondary" className="flex w-24 justify-center items-center gap-1">
                            <ShoppingCart className="h-3 w-3" />
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium">₹{order.value}</div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>Orders currently being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted p-4 font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Device</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Value</div>
                </div>
                <div className="divide-y">
                  {recentOrders
                    .filter((order) => order.status === "Processing")
                    .map((order) => (
                      <div key={order.id} className="grid grid-cols-6 items-center p-4">
                        <div className="text-sm font-medium">{order.id}</div>
                        <div className="text-sm">{order.user}</div>
                        <div className="text-sm">{order.device}</div>
                        <div className="text-sm">{order.date}</div>
                        <div>
                          <Badge variant="outline" className="flex w-24 justify-center items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium">₹{order.value}</div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Orders</CardTitle>
              <CardDescription>Successfully processed orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted p-4 font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Device</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Value</div>
                </div>
                <div className="divide-y">
                  {recentOrders
                    .filter((order) => order.status === "Completed")
                    .map((order) => (
                      <div key={order.id} className="grid grid-cols-6 items-center p-4">
                        <div className="text-sm font-medium">{order.id}</div>
                        <div className="text-sm">{order.user}</div>
                        <div className="text-sm">{order.device}</div>
                        <div className="text-sm">{order.date}</div>
                        <div>
                          <Badge className="flex w-24 justify-center items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium">₹{order.value}</div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


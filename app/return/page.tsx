"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ReturnPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // For demo purposes, set to true
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [deviceType, setDeviceType] = useState("")
  const [deviceCondition, setDeviceCondition] = useState("")
  const [estimatedValue, setEstimatedValue] = useState(0)
  const [deviceDetails, setDeviceDetails] = useState({
    brand: "",
    model: "",
    age: "",
    description: "",
  })

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDeviceDetails((prev) => ({ ...prev, [name]: value }))
  }

  const calculateEstimatedValue = () => {
    // Base values for different device types
    const baseValues = {
      smartphone: 1000,
      tablet: 1500,
      laptop: 2500,
      desktop: 2000,
      monitor: 800,
      printer: 600,
      other: 500,
    }

    // Condition multipliers
    const conditionMultipliers = {
      "like-new": 1.0,
      good: 0.8,
      fair: 0.6,
      poor: 0.4,
      "non-functional": 0.2,
    }

    // Age multipliers
    const ageMultipliers = {
      "less-than-1": 1.0,
      "1-2": 0.8,
      "3-4": 0.6,
      "5-plus": 0.4,
    }

    // Calculate base value
    const baseValue = baseValues[deviceType as keyof typeof baseValues] || 500

    // Apply condition multiplier
    const conditionMultiplier = conditionMultipliers[deviceCondition as keyof typeof conditionMultipliers] || 0.5

    // Apply age multiplier
    const ageMultiplier = ageMultipliers[deviceDetails.age as keyof typeof ageMultipliers] || 0.6

    // Calculate final value
    const calculatedValue = Math.round(baseValue * conditionMultiplier * ageMultiplier)

    return calculatedValue
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Calculate value based on device type, condition, and age
    const value = calculateEstimatedValue()
    setEstimatedValue(value)

    // Simulate submission process
    setTimeout(() => {
      setIsLoading(false)
      document.querySelector('[data-value="shipping"]')?.click()
    }, 1500)
  }

  const handleCompleteReturn = () => {
    setIsLoading(true)

    // Simulate processing
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (!isLoggedIn) {
    return (
      <div className="container py-12">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>You need to be logged in to return a device</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Access Denied</AlertTitle>
              <AlertDescription>
                Please log in or create an account to access the device return system.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (isSubmitted) {
    return (
      <div className="container py-12">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Return Request Submitted</CardTitle>
            <CardDescription>Thank you for recycling your e-waste with us!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert className="bg-primary/10 border-primary">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your device return request has been submitted successfully. You will receive an email with further
                  instructions.
                </AlertDescription>
              </Alert>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Return Summary</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Device Type:</div>
                  <div className="capitalize">{deviceType}</div>
                  <div className="text-muted-foreground">Condition:</div>
                  <div className="capitalize">{deviceCondition.replace("-", " ")}</div>
                  <div className="text-muted-foreground">Brand:</div>
                  <div>{deviceDetails.brand}</div>
                  <div className="text-muted-foreground">Model:</div>
                  <div>{deviceDetails.model}</div>
                  <div className="text-muted-foreground">Credits Earned:</div>
                  <div className="font-medium text-primary">₹{estimatedValue}</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/dashboard">
              <Button variant="outline">Go to Dashboard</Button>
            </Link>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setDeviceType("")
                setDeviceCondition("")
                setEstimatedValue(0)
                setDeviceDetails({
                  brand: "",
                  model: "",
                  age: "",
                  description: "",
                })
              }}
            >
              Return Another Device
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Return Your Device</h1>
          <p className="text-muted-foreground mt-2">Tell us about your device and get an estimate of your reward</p>
        </div>

        <Tabs defaultValue="device-info" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="device-info">Device Information</TabsTrigger>
            <TabsTrigger value="shipping" disabled={!deviceType || !deviceCondition}>
              Shipping & Reward
            </TabsTrigger>
          </TabsList>
          <TabsContent value="device-info">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Device Details</CardTitle>
                  <CardDescription>Provide information about the device you want to recycle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="device-type">Device Type</Label>
                    <Select value={deviceType} onValueChange={setDeviceType} required>
                      <SelectTrigger id="device-type">
                        <SelectValue placeholder="Select device type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smartphone">Smartphone</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="desktop">Desktop Computer</SelectItem>
                        <SelectItem value="monitor">Monitor</SelectItem>
                        <SelectItem value="printer">Printer</SelectItem>
                        <SelectItem value="other">Other Electronics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Device Condition</Label>
                    <RadioGroup value={deviceCondition} onValueChange={setDeviceCondition} required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="like-new" id="like-new" />
                        <Label htmlFor="like-new">Like New (Fully functional, minimal wear)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="good" />
                        <Label htmlFor="good">Good (Fully functional, some wear)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="fair" />
                        <Label htmlFor="fair">Fair (Functional with issues, visible wear)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="poor" />
                        <Label htmlFor="poor">Poor (Major issues, heavy wear)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-functional" id="non-functional" />
                        <Label htmlFor="non-functional">Non-functional</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        name="brand"
                        placeholder="e.g., Apple, Samsung"
                        value={deviceDetails.brand}
                        onChange={handleDetailsChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Input
                        id="model"
                        name="model"
                        placeholder="e.g., iPhone 12, Galaxy S21"
                        value={deviceDetails.model}
                        onChange={handleDetailsChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Device Age (years)</Label>
                    <Select
                      name="age"
                      value={deviceDetails.age}
                      onValueChange={(value) => setDeviceDetails((prev) => ({ ...prev, age: value }))}
                    >
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Select device age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-4">3-4 years</SelectItem>
                        <SelectItem value="5-plus">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please provide any additional information about your device"
                      value={deviceDetails.description}
                      onChange={handleDetailsChange}
                      rows={3}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => window.history.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!deviceType || !deviceCondition || isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="shipping">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Reward</CardTitle>
                <CardDescription>Choose how to send your device and receive your reward</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4 bg-primary/5">
                  <h3 className="font-medium mb-2">Estimated Reward</h3>
                  <p className="text-2xl font-bold text-primary">₹{estimatedValue}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Final amount will be determined after device inspection
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Shipping Method</Label>
                  <RadioGroup defaultValue="free-shipping">
                    <div className="flex items-start space-x-2 border p-4 rounded-md">
                      <RadioGroupItem value="free-shipping" id="free-shipping" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="free-shipping" className="font-medium">
                          Free Shipping Label
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          We'll email you a prepaid shipping label to send your device
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 border p-4 rounded-md">
                      <RadioGroupItem value="drop-off" id="drop-off" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="drop-off" className="font-medium">
                          Drop-off Location
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Bring your device to one of our collection centers
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Reward Method</Label>
                  <RadioGroup defaultValue="credits">
                    <div className="flex items-start space-x-2 border p-4 rounded-md">
                      <RadioGroupItem value="credits" id="credits" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="credits" className="font-medium">
                          EcoCredits
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Receive 10% bonus when you choose EcoCredits for future purchases
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 border p-4 rounded-md">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="bank-transfer" className="font-medium">
                          Bank Transfer
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Get cash directly to your bank account (3-5 business days)
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => document.querySelector('[data-value="device-info"]')?.click()}>
                  Back
                </Button>
                <Button onClick={handleCompleteReturn} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Return"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


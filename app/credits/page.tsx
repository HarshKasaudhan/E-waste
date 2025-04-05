"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CreditsPage() {
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [isRedeemSuccess, setIsRedeemSuccess] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  })

  // Mock user credit data
  const userCredits = {
    balance: 3500,
    lifetime: 5000,
    redeemed: 1500,
    tier: "Silver",
  }

  // Mock product data
  const products = [
    { id: "p1", name: "Wireless Earbuds", credits: 2000, image: "/placeholder.svg?height=100&width=100" },
    { id: "p2", name: "Power Bank", credits: 1500, image: "/placeholder.svg?height=100&width=100" },
    { id: "p3", name: "Phone Case", credits: 800, image: "/placeholder.svg?height=100&width=100" },
    { id: "p4", name: "USB Cable Pack", credits: 500, image: "/placeholder.svg?height=100&width=100" },
    { id: "p5", name: "Screen Protector", credits: 300, image: "/placeholder.svg?height=100&width=100" },
    { id: "p6", name: "Eco-Friendly Notebook", credits: 400, image: "/placeholder.svg?height=100&width=100" },
  ]

  // Mock transaction history
  const transactions = [
    { id: "t1", type: "earned", description: "iPhone 11 Return", date: "2023-12-15", amount: 1000 },
    { id: "t2", type: "earned", description: "Dell XPS 13 Return", date: "2023-11-20", amount: 2500 },
    { id: "t3", type: "redeemed", description: "Wireless Earbuds", date: "2023-11-05", amount: 2000 },
    { id: "t4", type: "earned", description: "Samsung Monitor", date: "2023-10-05", amount: 800 },
    { id: "t5", type: "redeemed", description: "Phone Case", date: "2023-09-18", amount: 800 },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleRedeemSubmit = () => {
    setIsRedeeming(true)

    // Simulate processing
    setTimeout(() => {
      setIsRedeeming(false)
      setIsRedeemSuccess(true)

      // Reset after showing success message
      setTimeout(() => {
        setIsRedeemSuccess(false)
        setSelectedProduct(null)
      }, 3000)
    }, 1500)
  }

  const getSelectedProduct = () => {
    return products.find((product) => product.id === selectedProduct)
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your Credits</h1>
        <p className="text-muted-foreground mt-2">Manage and redeem your earned credits for eco-friendly products</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="redeem">Redeem Credits</TabsTrigger>
          <TabsTrigger value="history">Transaction History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Credits Summary</CardTitle>
                <CardDescription>Your current credits and rewards status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Available Balance</p>
                    <p className="text-3xl font-bold">₹{userCredits.balance}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Lifetime Earnings</div>
                    <div className="font-medium">₹{userCredits.lifetime}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Redeemed</div>
                    <div className="font-medium">₹{userCredits.redeemed}</div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm font-medium">Reward Tier: {userCredits.tier}</p>
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
                <Button className="w-full" onClick={() => document.querySelector('[data-value="redeem"]')?.click()}>
                  Redeem Credits
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your recent credit activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.slice(0, 4).map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                      <div
                        className={`text-sm font-medium ${transaction.type === "earned" ? "text-primary" : "text-destructive"}`}
                      >
                        {transaction.type === "earned" ? "+" : "-"}₹{transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => document.querySelector('[data-value="history"]')?.click()}
                >
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="redeem">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Redeem Your Credits</CardTitle>
                <CardDescription>Exchange your credits for eco-friendly products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium">Available Credits:</p>
                  <p className="text-lg font-bold text-primary">₹{userCredits.balance}</p>
                </div>

                {isRedeemSuccess && (
                  <Alert className="mb-6 bg-primary/10 border-primary">
                    <AlertTitle>Redemption Successful!</AlertTitle>
                    <AlertDescription>
                      Your product has been redeemed successfully. You will receive it within 5-7 business days.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {products.map((product) => (
                    <Dialog key={product.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:border-primary transition-colors">
                          <CardContent className="p-4 flex flex-col items-center text-center">
                            <div className="h-24 w-24 mb-4 flex items-center justify-center">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="max-h-full max-w-full"
                              />
                            </div>
                            <h3 className="font-medium">{product.name}</h3>
                            <div className="mt-2 flex items-center gap-1">
                              <CreditCard className="h-4 w-4 text-primary" />
                              <span className="text-sm font-bold">₹{product.credits}</span>
                            </div>
                            <Badge
                              className={`mt-2 ${product.credits <= userCredits.balance ? "bg-primary" : "bg-muted"}`}
                            >
                              {product.credits <= userCredits.balance ? "Available" : "Not Enough Credits"}
                            </Badge>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Redeem {product.name}</DialogTitle>
                          <DialogDescription>
                            Exchange your credits for this product. Please provide your shipping details.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex items-center gap-4">
                            <div className="h-20 w-20 flex items-center justify-center">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="max-h-full max-w-full"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <div className="flex items-center gap-1 mt-1">
                                <CreditCard className="h-4 w-4 text-primary" />
                                <span className="text-sm font-bold">₹{product.credits}</span>
                              </div>
                            </div>
                          </div>

                          {product.credits > userCredits.balance ? (
                            <Alert variant="destructive">
                              <AlertTitle>Not Enough Credits</AlertTitle>
                              <AlertDescription>
                                You need {product.credits - userCredits.balance} more credits to redeem this product.
                              </AlertDescription>
                            </Alert>
                          ) : (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Full Name</Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    value={shippingDetails.name}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="phone">Phone Number</Label>
                                  <Input
                                    id="phone"
                                    name="phone"
                                    value={shippingDetails.phone}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                  id="address"
                                  name="address"
                                  value={shippingDetails.address}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    id="city"
                                    name="city"
                                    value={shippingDetails.city}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="pincode">PIN Code</Label>
                                  <Input
                                    id="pincode"
                                    name="pincode"
                                    value={shippingDetails.pincode}
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={() => {
                              setSelectedProduct(product.id)
                              handleRedeemSubmit()
                            }}
                            disabled={product.credits > userCredits.balance || isRedeeming}
                          >
                            {isRedeeming ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              "Confirm Redemption"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>A record of all your credit transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 bg-muted p-4 font-medium">
                  <div>Description</div>
                  <div>Date</div>
                  <div>Type</div>
                  <div>Amount</div>
                </div>
                <div className="divide-y">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="grid grid-cols-4 items-center p-4">
                      <div className="text-sm font-medium">{transaction.description}</div>
                      <div className="text-sm">{transaction.date}</div>
                      <div>
                        <Badge variant={transaction.type === "earned" ? "default" : "outline"}>
                          {transaction.type === "earned" ? "Earned" : "Redeemed"}
                        </Badge>
                      </div>
                      <div
                        className={`text-sm font-medium ${transaction.type === "earned" ? "text-primary" : "text-destructive"}`}
                      >
                        {transaction.type === "earned" ? "+" : "-"}₹{transaction.amount}
                      </div>
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


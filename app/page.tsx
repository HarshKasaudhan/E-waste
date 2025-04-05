"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Smartphone, Laptop, Award, DollarSign, Leaf, ChevronRight, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const [showImpactReport, setShowImpactReport] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          "rgba(52, 211, 153, 0.7)", // Green (primary color)
          "rgba(52, 211, 153, 0.5)",
          "rgba(52, 211, 153, 0.3)",
          "rgba(167, 139, 250, 0.5)", // Purple
          "rgba(251, 191, 36, 0.5)", // Yellow
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      ctx.strokeStyle = "rgba(52, 211, 153, 0.2)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Recycle Your E-Waste, Earn Rewards
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our mission to reduce electronic waste and protect the environment. Return your old devices and
                  get credits or cash in exchange.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/return">
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Return Device
                    <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/credits">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    View Credits
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 z-10 rounded-2xl"></div>
              <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
              <div className="relative z-20 text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Recycle className="h-10 w-10 text-primary animate-spin-slow" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">E-Waste Impact</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">8,500</div>
                    <div className="text-sm text-gray-600">Devices Recycled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">12,300</div>
                    <div className="text-sm text-gray-600">kg CO₂ Saved</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group transition-all duration-300 hover:border-primary hover:bg-primary/5"
                    onClick={() => setShowImpactReport(!showImpactReport)}
                  >
                    View Impact Report
                    <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Report Section - Conditionally rendered */}
      {showImpactReport && (
        <section className="w-full py-8 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Alert className="mb-6 border-primary/50 bg-primary/10">
                <AlertCircle className="h-4 w-4 animate-pulse" />
                <AlertTitle>Prototype Data</AlertTitle>
                <AlertDescription>
                  This is just prototype data for demonstration purposes, not real data.
                </AlertDescription>
              </Alert>

              <h2 className="text-2xl font-bold mb-6">Environmental Impact Report</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Recycle className="h-5 w-5 text-primary animate-spin-slow" />
                      Materials Recovered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Metals</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Plastics</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Glass</span>
                          <span>10%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary animate-bounce-slow" />
                      Environmental Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>CO₂ Emissions Reduced</span>
                        <span className="font-bold">12,300 kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Water Saved</span>
                        <span className="font-bold">45,000 liters</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Energy Saved</span>
                        <span className="font-bold">85,000 kWh</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Landfill Space Saved</span>
                        <span className="font-bold">120 m³</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowImpactReport(false)}
                  className="transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  Close Report
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our process is simple, transparent, and rewarding. Follow these steps to recycle your e-waste.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-8">
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group">
                  <Smartphone className="h-8 w-8 text-primary transform group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="mt-4">1. Register & Login</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create an account and log in to access our e-waste recycling services.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group">
                  <Laptop className="h-8 w-8 text-primary transform group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="mt-4">2. Submit Device Details</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Select your device type, provide details about its condition, and get an instant quote.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group">
                  <Award className="h-8 w-8 text-primary transform group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="mt-4">3. Return & Get Rewarded</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ship or drop off your device and receive credits or cash as a reward for recycling.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're committed to making e-waste recycling easy, rewarding, and environmentally responsible.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-primary animate-bounce-slow" />
                <CardTitle>Competitive Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get the best value for your old electronics with our generous credit and cash rewards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <Leaf className="h-8 w-8 text-primary animate-bounce-slow animation-delay-300" />
                <CardTitle>Eco-Friendly Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our recycling process follows strict environmental standards to minimize ecological impact.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <Recycle className="h-8 w-8 text-primary animate-spin-slow" />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We ensure complete data wiping and secure handling of all devices to protect your privacy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated team behind our e-waste management initiative.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 mt-8">
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group">
                  <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">H</span>
                </div>
                <CardTitle>Harsh</CardTitle>
                <CardDescription>Project Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leads the e-waste management initiative with a focus on sustainable practices. Contact -
                  hkasaudhan016@gmail.com
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group">
                  <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">D</span>
                </div>
                <CardTitle>Deepak</CardTitle>
                <CardDescription>Technical Expert</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Oversees the technical aspects of device evaluation and recycling processes. Contact -
                  dtv.deepak2503@gmail.com
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group">
                  <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">A</span>
                </div>
                <CardTitle>Ankur</CardTitle>
                <CardDescription>Operations Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manages the day-to-day operations and ensures smooth processing of returns. Contact -
                  ankurss159@gmail.com
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
              <CardHeader>
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-2 group">
                  <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">G</span>
                </div>
                <CardTitle>Gaurav</CardTitle>
                <CardDescription>Customer Relations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Handles customer inquiries and ensures a positive experience for all users. Contact -
                  gauravsingh041453@gmail.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Recycle?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of environmentally conscious users who have already recycled their e-waste with us.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


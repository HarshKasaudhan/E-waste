import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Recycle, Leaf, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-muted-foreground mt-2">Learn more about our mission and the team behind E - Waste</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At E - Waste, we are committed to addressing the growing problem of electronic waste through responsible
              recycling and reuse. Our mission is to create a sustainable ecosystem where electronic devices are
              properly recycled, reducing environmental impact while providing value back to consumers.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Recycle className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Responsible Recycling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We ensure all e-waste is processed according to environmental standards, preventing harmful
                    materials from entering landfills.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Leaf className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    By recycling electronic devices, we reduce carbon emissions and conserve natural resources that
                    would be used in manufacturing new products.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">Consumer Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in creating value for everyone involved. Our credit system rewards consumers for making
                    environmentally responsible choices.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Our Team</h2>
            </div>
            <p className="text-muted-foreground">
              Our dedicated team of professionals is passionate about environmental sustainability and technology.
              Together, we work to make e-waste recycling accessible, rewarding, and impactful.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 mt-6">
              <Card className="flex flex-col items-center text-center p-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">H</span>
                </div>
                <CardTitle className="text-lg">Harsh</CardTitle>
                <CardDescription className="mt-1">Project Lead</CardDescription>
                <p className="text-sm text-muted-foreground mt-4">
                  Leads our e-waste management initiative with a focus on creating sustainable recycling solutions.
                </p>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">D</span>
                </div>
                <CardTitle className="text-lg">Deepak</CardTitle>
                <CardDescription className="mt-1">Technical Expert</CardDescription>
                <p className="text-sm text-muted-foreground mt-4">
                  Oversees the technical aspects of our platform and ensures secure processing of all devices.
                </p>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <CardTitle className="text-lg">Ankur</CardTitle>
                <CardDescription className="mt-1">Operations Manager</CardDescription>
                <p className="text-sm text-muted-foreground mt-4">
                  Manages our day-to-day operations and ensures smooth processing of all device returns.
                </p>
              </Card>

              <Card className="flex flex-col items-center text-center p-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">G</span>
                </div>
                <CardTitle className="text-lg">Gaurav</CardTitle>
                <CardDescription className="mt-1">Customer Relations</CardDescription>
                <p className="text-sm text-muted-foreground mt-4">
                  Handles customer inquiries and ensures a positive experience for all our users.
                </p>
              </Card>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Inspiring Vision For 2025</h2>
            <p className="text-muted-foreground">
              Since our inception, we have Achieved Numerous Significant Milestone In Reducing E-Waste & Its
              Environmental Impact:
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <CardTitle className="text-lg">Devices Will Be Recycled</CardTitle>
                <CardDescription className="mt-2">
                  Electronic devices diverted from landfills and properly recycled
                </CardDescription>
              </Card>

              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">1500kg</div>
                <CardTitle className="text-lg">CO₂ Emissions Will Be Saved</CardTitle>
                <CardDescription className="mt-2">
                  Reduction Will Be Made In carbon footprint through our recycling efforts
                </CardDescription>
              </Card>

              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">₹5 Lakhs+</div>
                <CardTitle className="text-lg">Credits Will Be Awarded</CardTitle>
                <CardDescription className="mt-2">
                  Value returned to our users through our rewards program
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


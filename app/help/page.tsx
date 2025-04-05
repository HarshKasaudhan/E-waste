import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HelpPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <p className="text-muted-foreground mt-2">
            Find answers to common questions about our e-waste recycling program
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does the reward system work?</AccordionTrigger>
                  <AccordionContent>
                    Our reward system is based on the type, age, and condition of your device. After we receive and
                    inspect your device, we'll determine the final reward amount. You can choose to receive your reward
                    as EcoCredits (with a 10% bonus) or as a direct bank transfer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of devices do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept a wide range of electronic devices, including smartphones, tablets, laptops, desktop
                    computers, monitors, printers, and other electronic equipment. If you're unsure about a specific
                    device, please contact our support team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How is my data protected?</AccordionTrigger>
                  <AccordionContent>
                    We take data security very seriously. All devices undergo a secure data wiping process that meets
                    industry standards. We recommend backing up your data and performing a factory reset before sending
                    your device, but we'll ensure all personal data is completely removed regardless.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does the process take?</AccordionTrigger>
                  <AccordionContent>
                    Once we receive your device, the inspection process typically takes 1-3 business days. After
                    inspection, rewards are processed within 1-2 business days for EcoCredits and 3-5 business days for
                    bank transfers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What if my device is rejected?</AccordionTrigger>
                  <AccordionContent>
                    If your device doesn't qualify for a reward (e.g., it's not on our accepted list or is too damaged),
                    we'll contact you with options. You can choose to have it returned to you (shipping fees may apply)
                    or allow us to recycle it responsibly at no cost to you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Need more help? Our support team is here for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Call us at +91 8787039720
                      <br />
                      Monday-Friday: 9am-6pm IST
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[24px_1fr] gap-4 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Send us an email at
                      <br />
                      ankurss159@gmail.com
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-2">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Helpful guides and documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-medium">How to Prepare Your Device</div>
                  <div className="text-sm text-muted-foreground">
                    Learn how to back up and reset your device before recycling
                  </div>
                </Link>
                <Link href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-medium">Shipping Guidelines</div>
                  <div className="text-sm text-muted-foreground">
                    Instructions for safely packaging and shipping your device
                  </div>
                </Link>
                <Link href="#" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-medium">Reward Value Guide</div>
                  <div className="text-sm text-muted-foreground">
                    Understand how we determine the value of your device
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


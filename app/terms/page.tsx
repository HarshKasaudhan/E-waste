import { Card, CardContent } from "@/components/ui/card"
import { FileText, AlertTriangle, Scale, ShieldCheck, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last Updated: March 31, 2025</p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <div className="bg-primary/10 p-6 flex items-center gap-4 border-b">
            <Scale className="h-10 w-10 text-primary animate-pulse-slow" />
            <div>
              <h2 className="text-xl font-bold">Agreement to Terms</h2>
              <p className="text-muted-foreground">Please read these terms carefully before using our services</p>
            </div>
          </div>
          <CardContent className="pt-6">
            <p className="mb-4">
              These Terms of Service ("Terms") govern your use of the E - Waste website and services operated by E -
              Waste Management ("we," "us," or "our").
            </p>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with
              any part of the Terms, you may not access the website or use our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Services Description</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">E - Waste provides an e-waste recycling platform that allows users to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Submit electronic devices for recycling</li>
                  <li>Receive rewards in the form of credits or cash for recycled devices</li>
                  <li>Track the environmental impact of their recycling activities</li>
                  <li>Redeem credits for eco-friendly products</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with
                  or without notice.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <AlertTriangle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">User Responsibilities</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">By using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when registering and using our services</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>
                    Ensure that all devices submitted for recycling are legally owned by you and free of any liens or
                    encumbrances
                  </li>
                  <li>Back up and remove all personal data from devices before submission</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Device Submission and Rewards</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">When submitting devices for recycling:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Initial reward estimates are based on the information you provide and are subject to change after
                    physical inspection
                  </li>
                  <li>
                    Final reward amounts are determined after we receive and inspect your device, based on its actual
                    condition, age, and market value
                  </li>
                  <li>
                    We reserve the right to reject any device that does not meet our acceptance criteria or that differs
                    significantly from your description
                  </li>
                  <li>
                    Once a device is submitted and processed, ownership transfers to E - Waste, and the device cannot be
                    returned
                  </li>
                  <li>
                    Credits earned have no cash value unless explicitly stated and can only be redeemed through our
                    platform
                  </li>
                  <li>Credits expire after 12 months of inactivity on your account</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <HelpCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">
                  To the maximum extent permitted by law, E - Waste and its affiliates, officers, employees, agents,
                  partners, and licensors shall not be liable for any direct, indirect, incidental, special,
                  consequential, or punitive damages, including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use the services</li>
                  <li>Any conduct or content of any third party on the services</li>
                  <li>Any content obtained from the services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>Loss of data or information from devices submitted for recycling</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any significant
                  changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use
                  of our services after any changes to the Terms constitutes your acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Scale className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Governing Law</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                  its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be
                  subject to the exclusive jurisdiction of the courts located in Lucknow, Uttar Pradesh.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            By using our website or services, you acknowledge that you have read and understood these Terms of Service.
          </p>
          <div className="mt-4">
            <Link href="/privacy" className="text-primary hover:underline inline-flex items-center">
              View our Privacy Policy
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
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


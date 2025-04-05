import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last Updated: March 31, 2025</p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <div className="bg-primary/10 p-6 flex items-center gap-4 border-b">
            <Shield className="h-10 w-10 text-primary animate-pulse-slow" />
            <div>
              <h2 className="text-xl font-bold">Your Privacy Matters</h2>
              <p className="text-muted-foreground">We are committed to protecting your personal information</p>
            </div>
          </div>
          <CardContent className="pt-6">
            <p className="mb-4">
              At E - Waste, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our e-waste recycling services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site or use our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register on our website</li>
                  <li>Submit a device for recycling</li>
                  <li>Fill out a form</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact us</li>
                </ul>
                <p className="mt-4">The personal information we may collect includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Payment information</li>
                  <li>Device information (type, model, condition)</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Eye className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing device returns and issuing rewards</li>
                  <li>Sending administrative information, such as updates or changes to our terms</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending promotional communications, such as special offers or newsletters</li>
                  <li>Monitoring and analyzing trends, usage, and activities</li>
                  <li>Detecting, preventing, and addressing fraud or security issues</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Lock className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Secure data wiping of all recycled devices</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your personal information, we cannot guarantee
                  its absolute security.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Clock className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Data Retention</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p>
                  We will retain your personal information only for as long as necessary to fulfill the purposes
                  outlined in this privacy policy, comply with our legal obligations, resolve disputes, and enforce our
                  agreements. When we no longer need your personal information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Your Rights</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal information we have about you</li>
                  <li>The right to request correction of inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@ewaste.com" className="text-primary hover:underline">
                    privacy@ewaste.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <div className="mt-4">
            <Link href="/terms" className="text-primary hover:underline inline-flex items-center">
              View our Terms of Service
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


import { Card, CardContent } from "@/components/ui/card"
import { Cookie, Info, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
          <p className="text-muted-foreground mt-2">Last Updated: March 31, 2025</p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <div className="bg-primary/10 p-6 flex items-center gap-4 border-b">
            <Cookie className="h-10 w-10 text-primary animate-pulse-slow" />
            <div>
              <h2 className="text-xl font-bold">About Cookies</h2>
              <p className="text-muted-foreground">Understanding how we use cookies on our website</p>
            </div>
          </div>
          <CardContent className="pt-6">
            <p className="mb-4">
              This Cookie Policy explains how E - Waste uses cookies and similar technologies to recognize you when you
              visit our website. It explains what these technologies are and why we use them, as well as your rights to
              control our use of them.
            </p>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
              well as to provide reporting information.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Info className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">We use the following types of cookies:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong className="font-medium">Essential Cookies:</strong> These cookies are necessary for the
                    website to function properly. They enable core functionality such as security, network management,
                    and account access. You may disable these by changing your browser settings, but this may affect how
                    the website functions.
                  </li>
                  <li>
                    <strong className="font-medium">Analytics Cookies:</strong> These cookies help us understand how
                    visitors interact with our website by collecting and reporting information anonymously. They help us
                    improve our website and services.
                  </li>
                  <li>
                    <strong className="font-medium">Functionality Cookies:</strong> These cookies enable the website to
                    provide enhanced functionality and personalization. They may be set by us or by third-party
                    providers whose services we have added to our pages.
                  </li>
                  <li>
                    <strong className="font-medium">Targeting Cookies:</strong> These cookies may be set through our
                    site by our advertising partners. They may be used by those companies to build a profile of your
                    interests and show you relevant advertisements on other sites.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Settings className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Cookie Management</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. However, if you
                  limit the ability of websites to set cookies, you may worsen your overall user experience, as it will
                  no longer be personalized to you.
                </p>
                <p className="mb-4">Here's how to manage cookies in popular web browsers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">Chrome:</strong> Settings → Privacy and security → Cookies and other
                    site data
                  </li>
                  <li>
                    <strong className="font-medium">Firefox:</strong> Options → Privacy & Security → Cookies and Site
                    Data
                  </li>
                  <li>
                    <strong className="font-medium">Safari:</strong> Preferences → Privacy → Cookies and website data
                  </li>
                  <li>
                    <strong className="font-medium">Edge:</strong> Settings → Cookies and site permissions → Cookies and
                    site data
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                  of the website, deliver advertisements on and through the website, and so on.
                </p>
                <p>
                  These third-party cookies may include analytics services (like Google Analytics), social media
                  platforms, advertising partners, and payment processors. Each third-party has its own privacy and
                  cookie policies, which we encourage you to review.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4 group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Cookie className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold">Updates to This Cookie Policy</h2>
            </div>
            <Card className="group-hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or
                  our business practices. Any changes will be posted on this page with an updated "Last Updated" date.
                  We encourage you to check this page periodically for any changes.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/privacy" className="text-primary hover:underline inline-flex items-center">
              Privacy Policy
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
            <Link href="/terms" className="text-primary hover:underline inline-flex items-center">
              Terms of Service
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


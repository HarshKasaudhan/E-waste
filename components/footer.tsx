"use client"

import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, ExternalLink, User, School, Code } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Footer() {
  const [showDeveloperInfo, setShowDeveloperInfo] = useState(false)

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="animate-spin-slow hover:animate-spin">
                <Recycle className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
              </div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                E - Waste
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Responsible e-waste management for a greener future.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/return"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Return
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/credits"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Credits
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    About Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Cookie Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 group">
                <MapPin className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  SRMCEM Lucknow / Tiwariganj
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  hkasaudhan015@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  +91 89576 58015
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} E - Waste. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            <span>Designed & Developed by Deepak</span>
            <button
              onClick={() => setShowDeveloperInfo(true)}
              className="inline-flex items-center hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3 w-3 animate-bounce-slow" />
            </button>
          </p>
        </div>
      </div>

      <Dialog open={showDeveloperInfo} onOpenChange={setShowDeveloperInfo}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Developer Information
            </DialogTitle>
            <DialogDescription>This website was designed and developed by:</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Deepak Verma</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>dtv.deepak2503@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 8787039720</span>
              </div>
              <div className="flex items-center gap-3">
                <School className="h-5 w-5 text-primary" />
                <span> BTech CSE AIML student at SRMCEM</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
}


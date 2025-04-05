"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Recycle } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const routes = [
    { name: "Home", path: "/" },
    { name: "Return", path: "/return" },
    { name: "Credits", path: "/credits" },
    { name: "Help", path: "/help" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled && "shadow-md",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="animate-spin-slow hover:animate-spin">
              <Recycle className="h-6 w-6 text-primary group-hover:scale-125 transition-transform" />
            </div>
            <span className="text-xl font-bold group-hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
              E - Waste
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-all hover:text-primary relative overflow-hidden group",
                pathname === route.path ? "text-primary" : "text-muted-foreground",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {route.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              {pathname === route.path && (
                <span className="absolute -bottom-0 left-0 w-full h-0.5 bg-primary animate-pulse-slow"></span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 relative overflow-hidden group"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </Link>
          <Link href="/register">
            <Button className="transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Register</span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col gap-6 pt-6">
              {routes.map((route, index) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary group flex items-center",
                    pathname === route.path ? "text-primary" : "text-muted-foreground",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {route.name}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


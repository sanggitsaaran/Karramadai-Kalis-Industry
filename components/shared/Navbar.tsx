// components/shared/Navbar.tsx

"use client"; // This is a client component because it uses hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "../../lib/utils";
import { Menu, Mountain, ShoppingCart } from "lucide-react";

// You can manage your links in one place like this
const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/comparison", label: "Comparison" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
      {/* THIS IS THE NEW CONTAINER WRAPPER */}
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Mountain className="h-6 w-6 text-green-700" />
          <span className="font-bold text-lg">Kalis Power Weeder</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-gray-600 hover:text-primary transition-colors",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS (CART & CTA) */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
            <span className="sr-only">Shopping Cart</span>
          </Button>

          <Button className="hidden sm:inline-flex">Order Now</Button>

          {/* MOBILE MENU TRIGGER */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                {/* Mobile menu content does not need the container */}
                <nav className="grid gap-6 text-lg font-medium mt-10">
                  <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setMobileMenuOpen(false)}>
                      <Mountain className="h-6 w-6 text-green-700" />
                      <span className="font-bold">Kalis Power Weeder</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-muted-foreground hover:text-foreground",
                        pathname === link.href && "text-foreground font-semibold"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>
    </header>
  );
}
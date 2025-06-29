// components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image"; // <-- Make sure to import Image

export default function Footer() {
  return (
    <footer className="w-full shrink-0 border-t bg-slate-100">
      <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-between">
        
        {/* --- LEFT SIDE OF FOOTER --- */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/main.jpg" // The path to your pamphlet image
            alt="Kalis Power Weeder Pamphlet"
            width={50}
            height={70}
            className="rounded-md object-cover shadow-md"
          />
          <p className="text-xs text-gray-500">
            © 2024 Kalis Power Weeder. <br />
            All Rights Reserved.
          </p>
        </div>

        {/* --- RIGHT SIDE OF FOOTER --- */}
        <nav className="hidden sm:flex gap-4 sm:gap-6">
          <Link href="/about" className="text-xs hover:underline underline-offset-4">
            About Us
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
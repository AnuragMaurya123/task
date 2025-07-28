import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - Logo and tagline */}
          <div className="flex items-center gap-2">
            <Image
              src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
              alt="ClickUp logo"
              className="w-6 h-6"
              width={24}
              height={24}
            />
            <span className="text-gray-600 text-sm font-medium">The everything app, for work.</span>
          </div>

          {/* Right side - Copyright and links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>© 2025 ClickUp</span>
            <Link href="/security" className="hover:text-gray-700 transition-colors">
              Security
            </Link>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

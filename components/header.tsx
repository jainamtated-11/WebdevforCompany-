import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Prismoria.in
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-gray-800">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="outline" size="icon">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}


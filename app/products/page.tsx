import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  { name: "Notebooks", slug: "notebooks", image: "/placeholder.svg?height=300&width=400" },
  { name: "Pens & Pencils", slug: "pens-pencils", image: "/placeholder.svg?height=300&width=400" },
  { name: "Planners", slug: "planners", image: "/placeholder.svg?height=300&width=400" },
  { name: "Desk Accessories", slug: "desk-accessories", image: "/placeholder.svg?height=300&width=400" },
  { name: "Art Supplies", slug: "art-supplies", image: "/placeholder.svg?height=300&width=400" },
  { name: "Greeting Cards", slug: "greeting-cards", image: "/placeholder.svg?height=300&width=400" },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-r from-[#f9f5f0] to-[#fdf4f2] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore our curated collection of premium stationery
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link href="/products/category/productId" key={category.slug} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


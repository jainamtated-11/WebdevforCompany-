import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const products = {
  notebooks: [
    {
      id: 1,
      name: "Classic Leather Notebook",
      price: 24.99,
      image: "/placeholder.svg?height=600&width=600",
      description: "A premium leather-bound notebook perfect for journaling or sketching.",
    },
    // Add more notebook products...
  ],
  "pens-pencils": [
    {
      id: 1,
      name: "Fountain Pen Set",
      price: 49.99,
      image: "/placeholder.svg?height=600&width=600",
      description: "A luxurious fountain pen set for the discerning writer.",
    },
    // Add more pen and pencil products...
  ],
  // Add products for other categories...
}

// export default function ProductPage({ params }: { params: { category: string; productId: string } }) {
//   const categoryProducts = products[params.category as keyof typeof products] || []
//   const product = categoryProducts.find((p) => p.id === Number.parseInt(params.productId))

//   if (!product) {
//     notFound()
//   }
export default function ProductPage(){

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img
                src={"/placeholder.svg"}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Sample</h1>
              <p className="text-2xl text-gray-600">$600</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam, ipsa nisi optio delectus sed harum ullam aliquam. Debitis eveniet laboriosam at. Omnis officia ipsa adipisci repellendus laboriosam. Itaque, molestiae.</p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


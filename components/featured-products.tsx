import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Luxury Notebook", price: "$24.99", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Fountain Pen Set", price: "$49.99", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Washi Tape Collection", price: "$14.99", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Leather Journal", price: "$34.99", image: "/placeholder.svg?height=200&width=200" },
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                <p className="text-gray-600">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


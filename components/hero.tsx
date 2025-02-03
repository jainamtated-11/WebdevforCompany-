import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Elevate Your Writing Experience</h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover our premium collection of stationery that inspires creativity and productivity.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Shop Now
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Stationery collection"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}


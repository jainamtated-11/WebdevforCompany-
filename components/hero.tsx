import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#f9f5f0] to-[#fdf4f2] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2c2c2c] mb-4">Elevate Your Writing Experience</h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover our premium collection of stationery that inspires creativity and productivity.
          </p>
          <Button size="lg" className="bg-[#e8a87c] hover:bg-[#d89668] text-white border-none">
            Shop Now
          </Button>
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#fae5d3] rounded-full opacity-50 animate-float"></div>
          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#e8d0c9] rounded-full opacity-50 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bookimage.jpg-e4GhqIuZswbCMgfKdMMvh1oyuvVJux.webp"
            alt="Elegant floral journal with stationery items"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
          <div
            className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f8d0b0] rounded-full opacity-50 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}

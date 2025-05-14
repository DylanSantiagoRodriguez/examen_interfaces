import { Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-100 p-4">
      <div className="max-w-[368px] overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="relative">
          {/* Fondo degradado */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-t-2xl"></div>

          {/* Imagen del zapato */}
          <div className="relative pt-10 pb-6 px-8">
            <Image src="/shoe.png" alt="Nike Running Shoe" width={300} height={200} className="relative z-10 mx-auto" />
          </div>

          {/* Botón de favorito */}
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/30 text-white backdrop-blur-sm transition hover:bg-purple-500/50 z-10">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        {/* Información del producto - ahora con z-index y margin negativo para superponerse */}
        <div className="rounded-2xl bg-white p-6 relative z-20 -mt-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Nike Running Shoe</h2>

          <div className="mt-2 flex gap-2">
            <span className="inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-700">EU38</span>
            <span className="inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-700">
              BLACK/WHITE
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Crossing hardwood comfort with off-court flair. &apos;80s-inspired construction, bold details and
            nothin&apos;-but-net style.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">PRICE</p>
              <p className="text-xl font-semibold text-gray-800">$69.99</p>
            </div>

            <button className="rounded bg-purple-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-purple-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}


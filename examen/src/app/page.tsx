import { Heart } from "lucide-react";
import Image from "next/image";
import shoeImage from "./shoe.png";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-200 p-4" style={{ backgroundColor: "#F0EBFA" }}>
      <article className="max-w-[368px] overflow-hidden rounded-2xl bg-white shadow-xl" style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}>
        <header className="relative">
          <div className="absolute inset-0 rounded-t-2xl" style={{ background: "linear-gradient(to left, #A38FEB, rgba(24, 24, 24, 0.9))" }}></div>
          
          <figure className="relative pt-10 pb-6 px-8">
            <Image src={shoeImage} alt="Nike Running Shoe" width={300} height={200} className="relative z-10 mx-auto" />
          </figure>

          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-white backdrop-blur-sm transition z-10 hover:bg-opacity-50" style={{ backgroundColor: "rgba(88, 77, 128, 0.3)" }}>
            <Heart className="h-5 w-5" />
          </button>
        </header>

        <section className="rounded-2xl bg-white p-6 relative z-20 -mt-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Nike Running Shoe</h2>

          <ul className="mt-2 flex gap-2">
            <li className="inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-700">EU38</li>
            <li className="inline-block rounded border border-gray-300 px-2 py-1 text-xs text-gray-700">
              BLACK/WHITE
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-600">
            Crossing hardwood comfort with off-court flair. &apos;80s-inspired construction, bold details and
            nothin&apos;-but-net style.
          </p>

          <footer className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">PRICE</p>
              <p className="text-xl font-semibold text-gray-800">$69.99</p>
            </div>

            <button 
              className="rounded-xl px-8 py-3 text-base font-medium text-white transition hover:opacity-90" 
              style={{ backgroundColor: "#4F4075" }}>
              Add to cart
            </button>
          </footer>
        </section>
      </article>
    </main>
  )
}


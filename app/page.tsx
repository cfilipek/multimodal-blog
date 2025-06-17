import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="border-2 border-black p-6">
            <h2 className="text-xl font-bold mb-4">LATEST POST</h2>
            <Link href="/posts/introduction">
              <Image
                 src="https://i.imgur.com/3YyaWZD.jpeg"
                 alt="Portrait of Claire Filipek"
                width={300}
                height={200}
                className="w-full border border-black mb-4"
              />
              <h3 className="font-bold hover:underline">Introduction to Multimodality</h3>
              <p className="font-mono text-sm mt-2">Introducing myself and getting aquainted with the course...</p>
            </Link>
          </div>

          <div className="border-2 border-black p-6">
            <h2 className="text-xl font-bold mb-4">RECENT SUMMARY</h2>
            <Link href="/summaries/day-1">
              <div className="bg-black text-white p-4 mb-4">
                <h3 className="font-bold">Day 1</h3>
                <p className="font-mono text-sm">Programmed or be Programmed/Personal Connections in the Digital Age</p>
              </div>
              <p className="font-mono text-sm">Understanding how context shapes multimodal communication...</p>
            </Link>
          </div>

          <div className="border-2 border-black p-6">
            <h2 className="text-xl font-bold mb-4">COURSE INFO</h2>
            <div className="space-y-2 font-mono text-sm">
              <p>MULTIMODAL LITERACIES</p>
              <p>SUMMER 2025</p>
              <p>DAILY POSTS + SUMMARIES</p>
              <Link href="/about" className="block mt-4 font-bold hover:underline">
                READ MORE →
              </Link>
            </div>
          </div>
        </div>

        {/* <section className="mt-16 border-t-2 border-black pt-8">
          <h2 className="text-2xl font-bold mb-8">ALL POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="border border-black p-4">
              <Link href="/posts/visual-rhetoric">
                <h3 className="font-bold text-lg mb-2 hover:underline">Visual Rhetoric in Digital Media</h3>
                <p className="font-mono text-sm mb-4">January 15, 2025</p>
                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="Visual rhetoric"
                  width={400}
                  height={150}
                  className="w-full border border-black mb-4"
                />
                <p className="text-sm">
                  An exploration of how visual elements communicate meaning in digital environments...
                </p>
              </Link>
            </article>

            <article className="border border-black p-4">
              <Link href="/posts/multimodal-composition">
                <h3 className="font-bold text-lg mb-2 hover:underline">Multimodal Composition Techniques</h3>
                <p className="font-mono text-sm mb-4">January 8, 2025</p>
                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="Composition techniques"
                  width={400}
                  height={150}
                  className="w-full border border-black mb-4"
                />
                <p className="text-sm">Examining different approaches to creating multimodal compositions...</p>
              </Link>
            </article>
          </div>
        </section> */}
      </main>
    </div>
  )
}

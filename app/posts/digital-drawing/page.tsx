import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function DigitalDrawingPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">DIGITAL DRAWING</h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 18, 2025</span>
              <span>BLOG POST</span>
              <span>MULTIMODAL LITERACIES</span>
            </div>
          </header>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">FINAL DIGITAL ART PIECE</h2>
            <Image
              src="https://i.imgur.com/2lpVHqH.jpeg"
              alt="Digital Drawing of Maia"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                While I am content with this final product, a digital art piece created in Procreate on the Ipad, it took a few iterations to get here. View the process below.
              </p>
            </div>

            <Image
              src="https://i.imgur.com/yq47o1f.gif"
              alt="Gif of Digital Drawing of Maia"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                  Here is the process in Procreate. I think it turned out better than the two other tries below because I was using an Apple Pencil and an environment I was very comfortable with.
              </p>
            </div>

            <Image
              src="https://i.imgur.com/qd5o5ZP.jpeg"
              alt="GIMP Digital Drawing of Maia"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                  Above was my first attempt at a portrait of Maia. Done using a new-to-me program called GIMP. I think if I had access to a tablet this would have turned out better.
              </p>
            </div>

            <Image
              src="https://i.imgur.com/GGpIAdg.jpeg"
              alt="GIMP Digital Drawing of Maia"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

          </div>

     

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
                <span>TAGS:</span>
                <span>DIGITAL ART</span>
                <span>DRAWING</span>
                <span>MULTIMODAL</span>
                <span>PROCESS</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function TwodDesignAndFabricationPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">2D DESIGN AND FABRICATION</h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 23, 2025</span>
              <span>BLOG POST</span>
              <span>MULTIMODAL LITERACIES</span>
            </div>
          </header>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">FINAL "ENGRAVED" PIECE</h2>
            <Image
              src="https://i.imgur.com/4WD4rmL.jpeg"
              alt="Digital engraving in Photoshop"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                  Here is a mockup in the program Photoshop of what I would like the final engraved piece to look like.
              </p>
            </div>

            <Image
              src="https://i.imgur.com/ApxPE3G.png"
              alt="Design in Adobe Illustrator"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                  Here I am vectorizing the design in Adobe Illustrator.
              </p>
            </div>

            <Image
              src="https://i.imgur.com/hPaAa38.png"
              alt="Digital design for Tea Time"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                  I found the design <a href="https://www.atomm.com/template/57093-laser-engraved-wooden-tea-box-with-decorative-teapot-design" target="_blank">here</a>.
              </p>
            </div>

          </div>

     

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
                <span>TAGS:</span>
                <span>DIGITAL ART</span>
                <span>ENGRAVING</span>
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

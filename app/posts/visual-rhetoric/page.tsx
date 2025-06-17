import Link from "next/link"
import Image from "next/image"

export default function VisualRhetoricPost() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="hover:underline">
            <h1 className="text-2xl font-bold tracking-tight">CLAIRE'S MULTIMODAL LITERACY BLOG</h1>
            <p className="text-sm font-mono">2025</p>
          </Link>
          <nav className="flex gap-8">
            <div className="relative group">
              <button className="font-bold hover:underline">BLOG POSTS</button>
              <div className="absolute top-full left-0 bg-white border-2 border-black p-4 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link href="/posts/visual-rhetoric" className="block py-2 hover:underline font-mono">
                  Visual Rhetoric in Digital Media
                </Link>
                <Link href="/posts/multimodal-composition" className="block py-2 hover:underline font-mono">
                  Multimodal Composition Techniques
                </Link>
                <Link href="/posts/digital-storytelling" className="block py-2 hover:underline font-mono">
                  Digital Storytelling Methods
                </Link>
                <Link href="/posts/typography-meaning" className="block py-2 hover:underline font-mono">
                  Typography and Meaning Making
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="font-bold hover:underline">READING SUMMARIES</button>
              <div className="absolute top-full left-0 bg-white border-2 border-black p-4 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link href="/summaries/day-1" className="block py-2 hover:underline font-mono">
                  Day 1: Introduction to Multimodality
                </Link>
                <Link href="/summaries/day-2" className="block py-2 hover:underline font-mono">
                  Day 2: Technology Effects
                </Link>
              </div>
            </div>
            <Link href="/about" className="font-bold hover:underline">
              ABOUT
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">VISUAL RHETORIC IN DIGITAL MEDIA</h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JANUARY 15, 2025</span>
              <span>BLOG POST</span>
              <span>MULTIMODAL LITERACIES</span>
            </div>
          </header>

          <div className="space-y-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Visual rhetoric in digital media - collage of social media interfaces"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Visual rhetoric in digital media represents a fundamental shift in how we communicate and persuade in
                the 21st century. Unlike traditional text-based rhetoric, digital visual rhetoric combines images,
                typography, color, layout, and interactive elements to create meaning and influence audiences.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">THE POWER OF VISUAL ELEMENTS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="border border-black p-4">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Example of typography hierarchy"
                    width={350}
                    height={250}
                    className="w-full border border-black mb-4"
                  />
                  <p className="font-mono text-sm">Typography as a rhetorical tool - hierarchy creates meaning</p>
                </div>
                <div className="border border-black p-4">
                  <Image
                    src="/placeholder.svg?height=250&width=350"
                    alt="Color psychology in digital design"
                    width={350}
                    height={250}
                    className="w-full border border-black mb-4"
                  />
                  <p className="font-mono text-sm">Color psychology influences emotional response</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                In digital spaces, every visual choice carries rhetorical weight. The selection of fonts, the
                arrangement of elements, the use of white space, and the integration of multimedia all contribute to the
                overall persuasive impact of a message. This multimodal approach to communication requires us to think
                beyond traditional writing skills.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">
                CASE STUDY: SOCIAL MEDIA ACTIVISM
              </h2>

              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Social media activism visual examples"
                width={600}
                height={300}
                className="w-full border-2 border-black my-8"
              />

              <p className="text-lg leading-relaxed">
                Social media platforms have become powerful spaces for visual rhetoric, where activists use carefully
                crafted images, infographics, and video content to mobilize audiences and create social change. The
                immediacy and shareability of visual content makes it particularly effective for grassroots movements.
              </p>

              <div className="bg-black text-white p-6 my-8">
                <h3 className="font-bold text-xl mb-4">KEY TAKEAWAYS</h3>
                <ul className="space-y-2 font-mono">
                  <li>• Visual elements are rhetorical choices</li>
                  <li>• Digital media amplifies visual impact</li>
                  <li>• Context shapes interpretation</li>
                  <li>• Multimodal literacy is essential</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                As we continue to navigate an increasingly visual digital landscape, understanding visual rhetoric
                becomes crucial for both creating and critically analyzing the media we encounter daily. This awareness
                empowers us to be more intentional communicators and more discerning consumers of visual information.
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
                <span>VISUAL RHETORIC</span>
                <span>DIGITAL MEDIA</span>
                <span>MULTIMODAL</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

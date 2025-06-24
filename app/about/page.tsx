import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto p-8">
        <div className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">ABOUT THIS BLOG</h1>
            <div className="border-b border-black pb-4">
              <p className="font-mono text-sm">SUMMER 2025 • MULTIMODAL LITERACIES COURSE</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">PURPOSE</h2>
                <p className="text-lg leading-relaxed">
                  This blog serves as a digital portfolio and reflection space for my journey through the Multimodal
                  Literacies course. Here, I explore how different modes of communication—visual, textual, audio, and
                  digital—work together to create meaning in our increasingly connected world.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">WHAT YOU'LL FIND</h2>
                <div className="space-y-4">
                  <div className="border border-black p-4">
                    <h3 className="font-bold mb-2">BLOG POSTS</h3>
                    <p className="text-sm">
                      In-depth explorations of multimodal concepts, case studies, and personal projects that demonstrate
                      understanding of course materials.
                    </p>
                  </div>
                  <div className="border border-black p-4">
                    <h3 className="font-bold mb-2">READING SUMMARIES</h3>
                    <p className="text-sm">
                      Daily summaries of assigned readings, including key concepts, critical analysis, and personal
                      reflections on the material.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div>
                <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">DESIGN PHILOSOPHY</h2>
                <p className="text-lg leading-relaxed">
                  The brutalist design of this blog is intentional—it reflects the raw, unfiltered exploration of ideas
                  that characterizes academic inquiry. The stark typography and minimal aesthetic allow the content to
                  speak for itself while demonstrating that effective communication doesn't always require elaborate
                  visual flourishes.
                </p>
              </div> */}
            </div>

            <div className="space-y-6">
              <div className="border-2 border-black p-6">
                <Image
                  src="https://i.imgur.com/3YyaWZD.jpeg"
                  alt="Portrait of Claire Filipek"
                  width={200}
                  height={200}
                  className="w-full border border-black mb-4"
                />
                <h3 className="font-bold mb-2">CLAIRE</h3>
                <p className="font-mono text-sm mb-4">STUDENT • PROGRAMMER • ARTIST • TEACHER</p>
                <p className="text-sm">
                  Exploring the intersection of technology, communication, and meaning-making in digital spaces.
                </p>
              </div>

              <div className="bg-black text-white p-6">
                <h3 className="font-bold mb-4">COURSE DETAILS</h3>
                <div className="space-y-2 font-mono text-sm">
                  <p>MULTIMODAL LITERACIES</p>
                  <p>SUMMER 2025</p>
                  <p>DAILY POSTS + SUMMARIES</p>
                </div>
              </div>
{/* 
              <div className="border border-black p-4">
                <h3 className="font-bold mb-2">CONTACT</h3>
                <p className="font-mono text-sm">
                  For questions about this blog or course-related discussions, feel free to reach out through the course
                  platform.
                </p>
              </div> */}
            </div>
          </div>

          {/* <section className="border-t-2 border-black pt-8">
            <h2 className="text-2xl font-bold mb-6">LEARNING OBJECTIVES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">CRITICAL ANALYSIS</h3>
                  <p className="text-sm">
                    Develop skills in analyzing multimodal texts across various media and platforms.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">COMPOSITION SKILLS</h3>
                  <p className="text-sm">
                    Create effective multimodal compositions that demonstrate understanding of audience and context.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">DIGITAL LITERACY</h3>
                  <p className="text-sm">Navigate and critically evaluate digital communication environments.</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">REFLECTION</h3>
                  <p className="text-sm">Engage in ongoing reflection about learning and communication practices.</p>
                </div>
              </div>
            </div>
          </section> */}

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <p className="font-mono text-sm">LAST UPDATED: JUNE 2025</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

import Link from "next/link"

export default function Week4Summary() {
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
                <Link href="/summaries/week-1" className="block py-2 hover:underline font-mono">
                  Week 1: Introduction to Multimodality
                </Link>
                <Link href="/summaries/week-2" className="block py-2 hover:underline font-mono">
                  Week 2: Visual Design Principles
                </Link>
                <Link href="/summaries/week-3" className="block py-2 hover:underline font-mono">
                  Week 3: Digital Composition
                </Link>
                <Link href="/summaries/week-4" className="block py-2 hover:underline font-mono">
                  Week 4: Audience and Context
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
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">WEEK 4 READING SUMMARY</h1>
              <p className="font-mono">AUDIENCE AND CONTEXT</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JANUARY 22, 2025</span>
              <span>READING SUMMARY</span>
              <span>REQUIRED ASSIGNMENT</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                  <strong>Kress, G. & van Leeuwen, T.</strong> (2021). "Audience and Context in Multimodal
                  Communication." <em>Reading Multimodal Texts</em>, pp. 45-67.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">KEY CONCEPTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-2">AUDIENCE AWARENESS</h3>
                  <p className="text-sm">
                    Understanding how different audiences interpret multimodal texts based on their cultural background,
                    literacy levels, and technological access.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-2">CONTEXTUAL FACTORS</h3>
                  <p className="text-sm">
                    The role of social, cultural, and technological contexts in shaping meaning-making processes in
                    multimodal communication.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-2">DESIGN CHOICES</h3>
                  <p className="text-sm">
                    How creators make strategic decisions about mode selection and combination based on audience and
                    context considerations.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-2">ACCESSIBILITY</h3>
                  <p className="text-sm">
                    The importance of considering diverse abilities and needs when creating multimodal texts for
                    inclusive communication.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">MAIN ARGUMENTS</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">1. CONTEXT SHAPES INTERPRETATION</h3>
                  <p>
                    Kress and van Leeuwen argue that the same multimodal text can have vastly different meanings
                    depending on the context in which it is encountered. They emphasize that creators must consider not
                    just what they want to communicate, but where and how their audience will engage with the content.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">2. AUDIENCE IS NOT PASSIVE</h3>
                  <p>
                    The authors challenge the notion of passive audiences, instead presenting readers/viewers as active
                    meaning-makers who bring their own experiences and knowledge to multimodal texts. This requires
                    creators to anticipate and design for multiple possible interpretations.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">3. TECHNOLOGICAL MEDIATION</h3>
                  <p>
                    The chapter explores how different technologies and platforms shape both the creation and reception
                    of multimodal texts, arguing that the medium is inseparable from the message in digital
                    communication.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">PERSONAL REFLECTION</h2>
              <div className="bg-black text-white p-6">
                <p className="mb-4">
                  This reading has significantly shifted my understanding of multimodal communication. Previously, I
                  focused primarily on the technical aspects of creating multimodal texts - choosing fonts, arranging
                  layouts, selecting images. However, Kress and van Leeuwen's emphasis on audience and context has made
                  me realize that these technical choices are meaningless without careful consideration of who will
                  encounter the text and under what circumstances.
                </p>
                <p className="mb-4">
                  The concept of "audience as active meaning-makers" particularly resonates with my experience as both a
                  creator and consumer of digital content. I think about how differently I interpret Instagram posts
                  when I'm scrolling quickly versus when I'm deliberately studying them for a class assignment. The same
                  image can feel casual and fun in one context, but loaded with meaning in another.
                </p>
                <p>
                  Moving forward, I want to be more intentional about considering accessibility and diverse audiences in
                  my own multimodal compositions. This reading has highlighted how easy it is to unconsciously design
                  for people who share my own background and abilities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">QUESTIONS FOR FURTHER EXPLORATION</h2>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  • How do we balance designing for specific audiences versus creating inclusive, accessible content?
                </li>
                <li>
                  • What role does algorithmic curation play in shaping the contexts where audiences encounter
                  multimodal texts?
                </li>
                <li>
                  • How might emerging technologies (AR, VR) change the relationship between audience, context, and
                  meaning?
                </li>
                <li>
                  • Can we develop better methods for testing how different audiences interpret our multimodal
                  compositions?
                </li>
              </ul>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
                <span>WORD COUNT: 487</span>
                <span>DUE: JANUARY 23, 2025</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

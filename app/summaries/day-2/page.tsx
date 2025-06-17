import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Day2Summary() {
  return (
    <div className="min-h-screen bg-white">
        <Navigation/>

      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">DAY 2 READING SUMMARY</h1>
              <p className="font-mono">TBD</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 17, 2025</span>
              <span>READING SUMMARY</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 1</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                7 Things you should know about Makerspaces.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 2</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                All I Really Need to Know (About Creative Thinking) I Learned (By Studying How Children Learn) in Kindergarten*
                </p>
              </div>
            </section>

            {/* <section>
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
            </section> */}

            {/* <section>
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
            </section> */}

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">QUESTIONS FOR FURTHER EXPLORATION</h2>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  • Write Questions Here
                </li>
               
              </ul>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link> 
            </div>
          </footer>

        </article>
      </main>
    </div>
  )
}

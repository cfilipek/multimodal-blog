import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Day5Summary() {
  return (
    <div className="min-h-screen bg-white">
            <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">DAY 5 READING SUMMARY</h1>
              <p className="font-mono">2-D DESIGN AND FABRICATION</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 23, 2025</span>
              <span>READING SUMMARY</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 9</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                The Democratization of Invention.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In “The Democratization of Invention,” Paulo Blikstein explores how digital fabrication and the maker movement are revolutionizing education by empowering students to become creators rather than passive consumers. Drawing on the theoretical foundations of Dewey, Papert, and Freire, he argues that digital fabrication labs (FabLabs) allow students to engage in authentic, interdisciplinary, and personally meaningful projects that foster creativity, resilience, and real-world problem solving. These labs bridge the gap between intellectual and manual work, validate students' prior knowledge and interests, and support deeper learning through iterative design and failure. However, Blikstein warns of the "keychain syndrome," where flashy, simple projects can distract from deeper learning goals. Ultimately, he emphasizes that the true value of digital making lies not in the tools themselves, but in the new forms of expression, identity, and learning they enable.
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
                  • How can educators design maker experiences that balance creativity and technical challenge while avoiding superficial engagement like the “keychain syndrome”?
                </li>
                <li>
                  • In what ways can digital fabrication serve as a bridge between students' home knowledge (like crafts or carpentry) and academic content in STEM or the humanities?

                </li>
                <li>
                  • What are the pedagogical risks and rewards of embracing failure and open-ended design in a school system that typically prioritizes correctness and efficiency?
                </li>
                {/* <li>
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
                </li> */}
              </ul>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
              
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

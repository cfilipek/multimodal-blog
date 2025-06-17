import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Day1Summary() {
  return (
    <div className="min-h-screen bg-white">
            <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">DAY 1 READING SUMMARY</h1>
              <p className="font-mono">TECHNOLOGY: CAUSE & EFFECT</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 16, 2025</span>
              <span>READING SUMMARY</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 1</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                Baym, N. K. (2010). <i>Personal Connections in the Digital Age</i>. Polity Press.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In Personal Connections in the Digital Age, Nancy K. Baym explores how digital media—especially the internet and mobile technologies—reshape personal relationships and communication. She argues that rather than simply replacing or degrading human connection, these technologies introduce new possibilities and challenges that reflect broader cultural shifts. People’s responses to digital media often mirror longstanding anxieties about change, swinging between utopian hopes and dystopian fears. Baym emphasizes the importance of understanding the characteristics of different media (like interactivity, synchronicity, and mobility) and how users actively shape their meanings and uses. Ultimately, she calls for a more nuanced view that considers both the capabilities of technology and the everyday practices of its users.
                  </p>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 2</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                Rushkoff, D. (2010). <i>Program or be Programmed Ten Commandments for a Digital Age</i>. New York Or Books.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In Chapters 1 and 2 of Program or Be Programmed, Douglas Rushkoff argues that digital technologies are inherently biased toward asynchronicity and dislocation, affecting how we experience time and place. Initially, the internet allowed for thoughtful, deliberate communication, but with “always on” devices, we’ve become reactive, overwhelmed, and disconnected from natural human rhythms. Similarly, while digital tools can connect us across distances, their use in local, face-to-face situations often undermines real-world engagement. Rushkoff urges readers to recognize these biases, reclaim autonomy, and use digital media intentionally rather than passively adapting to its demands.
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
                  • How does being “always on” affect the quality of our attention, relationships, and well-being?
                </li>
                <li>
                  • In what ways do digital media shape our sense of identity and authenticity—and are we consciously shaping them back?

                </li>
                <li>
                  • How can recognizing the built-in biases of digital tools help us use them more intentionally and humanely?
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

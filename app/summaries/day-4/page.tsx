import Link from "next/link"
import Navigation from "@/components/navigation"

export default function Day4Summary() {
  return (
    <div className="min-h-screen bg-white">
            <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">DAY 4 READING SUMMARY</h1>
              <p className="font-mono">CINEMATOGRAPHY/VIDEOGRAPHY & SOUNDS</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 20, 2025</span>
              <span>READING SUMMARY</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 6</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                Digital Storytelling Guide for Educators.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  Midge Frazel's Digital Storytelling Guide for Educators provides a practical roadmap for integrating digital storytelling into classrooms, emphasizing the creative, collaborative, and technical aspects of multimedia production. The guide walks educators through tools like iMovie, Movie Maker, Photo Story, and Audacity, offering step-by-step strategies for organizing media, recording narration, and rendering final projects. Frazel stresses the importance of student ownership, ethical media use, and careful planning, while encouraging experimentation and reflection throughout the process. By combining storytelling with accessible technology, educators can engage students in meaningful, standards-based learning that builds communication, research, and digital citizenship skills.
                  </p>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 7</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                New Literacies.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In <i>New Literacies</i>, Colin Lankshear and Michele Knobel explore how digital remixing is reshaping cultural participation and redefining what it means to be literate. They argue that remix is not only central to digital creativity but also a vital part of cultural development, positioning it as a necessary practice for sustaining a democratic culture. Citing Lawrence Lessig, the authors highlight the importance of moving from a "Read/Only" culture, where people passively consume media, to a "Read/Write" culture, where everyday users actively remix, critique, and produce media. These practices include everything from music and image remixes to fanfiction, cosplay, and app mashups—often using accessible digital tools. The chapter ultimately frames digital remixing as a powerful and legitimate form of modern literacy and creative expression.
                  </p>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING/PODCAST ASSIGNMENT 8</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
               "The Act of Listening" - TED Radio Hour (NPR)
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In the TED Radio Hour episode "The Act of Listening," host Guy Raz and a lineup of guest speakers highlight how listening deeply transforms us and our communities. Isay's StoryCorps demonstrates that simply giving people a voice immerses us in the poetry and wisdom of everyday lives. The next guest, Honor Harger, shows that listening extends even to the cosmos, revealing unexpected patterns and beauty in space through sound . Another guest reminds us that listening is a full-body experience, and that absence of conventional hearing doesn't impede deep auditory engagement. And Jeffrey Brown illustrates how attentive listening within communities can become an act of love and a powerful catalyst for social change. Together, these stories confirm that true listening is both an act of generosity and a dynamic journey of discovery.
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
                  • How can digital storytelling be used across different subject areas to enhance student engagement and learning outcomes?
                </li>
                <li>
                  • How might digital storytelling projects support student voice, identity development, and community connection in meaningful ways?

                </li>
                <li>
                  • What role do remix communities and platforms play in shaping young people's cultural identities and civic participation?
                </li>
                <li>
                  • How might incorporating intentional “StoryCorps-style” interviews in classrooms or communities foster empathy and connection among participants?
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
              
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

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
              <p className="font-mono">TECHNOLOGY EFFECTS</p>
            </div>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 17, 2025</span>
              <span>READING SUMMARY</span>
            </div>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 3</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                7 Things you should know about Makerspaces.
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  This EDUCAUSE brief on makerspaces outlines their role as collaborative, hands-on learning environments where students, faculty, and community members can design, build, and experiment across disciplines. Rooted in hacker and maker culture, these spaces offer tools like 3D printers, laser cutters, and microcontrollers to support self-directed, project-based learning. Makerspaces foster creativity, peer learning, and multidisciplinary collaboration, making them powerful complements to traditional education. While they present challenges such as high equipment costs and the need for physical space, their potential to enhance engagement, innovation, and skill-building makes them a significant educational resource.
                  </p>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">READING ASSIGNMENT 4</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                All I Really Need to Know (About Creative Thinking) I Learned (By Studying How Children Learn) in Kindergarten*
                </p>
              </div>
            </section>

            <section>
            <div className="border-l-4 border-black pl-4">
                  <h3 className="font-bold mb-2">KEY TAKEAWAYS</h3>
                  <p>
                  In All I Really Need to Know (About Creative Thinking) I Learned in Kindergarten, Mitchel Resnick advocates for extending the kindergarten model of learning, which is built around the cycle of Imagine, Create, Play, Share, Reflect, to learners of all ages. He argues this approach nurtures essential 21st-century creative-thinking skills through open-ended, hands-on exploration and collaboration. Drawing from experiences with tools like Scratch and Crickets, Resnick emphasizes that learning is most meaningful when learners design their own projects, iterate on ideas, and share them within supportive communities. Rather than pushing rote memorization or rigid outcomes, he calls for educational environments that value curiosity, experimentation, and personal expression, just like a good kindergarten.                  </p>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">QUESTIONS FOR FURTHER EXPLORATION</h2>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  • How can educational environments better support open-ended, self-directed learning without sacrificing structure or rigor?
                </li>
                <li>
                • In what ways can digital and physical tools be designed to encourage creativity, iteration, and collaboration across different age groups and disciplines?
                </li>

                <li>
                • What role should play and experimentation have in older students’ education, and how can schools make space for these practices?
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

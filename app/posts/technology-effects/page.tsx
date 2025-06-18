import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function TechnologyEffectsPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">TECHNOLOGY EFFECTS</h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 17, 2025</span>
              <span>BLOG POST</span>
              <span>MULTIMODAL LITERACIES</span>
            </div>
          </header>

          <div className="space-y-8">
            <Image
              src="https://i.imgur.com/qOh2hxI.jpeg"
              alt="Photo of poem in notebook"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
            Above is a photo of my Field Notes notebook.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-black pb-2">NO TECHNOLOGY ASSIGNMENT - POEM</h2>
              <div className="bg-gray-100 p-4 border border-black font-mono text-sm">
                <p>
                <b>No Technology</b>
                </p>
                <p>I wish I had a book</p>
                <p>man next to me on phone</p>
                <p>let me have a look</p>
                <p>no watch</p>
                <p>subway only sometimes</p>
                <p>flashes the time</p>
                <p>I think I'll miss the closest</p>
                <p>train, then I'll have to</p>
                <p>look at a screen</p>
                <p>to know when the next one is</p>
                <p>to buy a ticket</p>
                <p>I'll have to have more screen time</p>
                <p>there is no escape</p>
                <p>I thought I'd ride in silence</p>
                <p>but there's</p>
                <p>plenty of noise</p>
                <p>off of subway</p>
                <p>and my phone buzzed</p>
                <p>what if it's important</p>
                <p>what if it's not...</p>
                <p>it wasn't</p>
                <p>not important</p>
                <p>in case you were curious</p>
                <p>can I eat alone</p>
                <p>without a podcast?</p>
                <p>the answer may be "no"</p>
                <p>thought about buying a</p>
                <p>book again</p>
                <p>but I have a surplus at home</p>
                <p>sitting unread...</p>
                <p>when I get home</p>
                <p>can I do this for real?</p>
                <p>Made it home</p>
                <p>electronics in hand</p>
                <p>even my light</p>
                <p>requires an app</p>
                <p>so I'm writing</p>
                <p>in the dark</p>
                <p>about to nap</p>
                <p>couldn't help</p>
                <p>but compulsively check</p>
                <p>my emails</p>
                <p>(I have 3 on my phone)</p>
                <p>thinking about</p>
                <p>my computer</p>
                <p>what if</p>
                <p>I received an email?</p>
                <p>(still writing in the dark)</p>
                <p>mindfully</p>
                <p>tracking</p>
                <p>my thoughts</p>
                <p>my desire</p>
                <p>to open my laptop</p>
                <p>to just see what</p>
                <p>YouTube recommends me...</p>
                <p>to flippantly</p>
                <p>open multiple</p>
                <p>streaming tabs</p>
                <p>to abandon this quest</p>
                <p>entirely</p>
              </div>
            </section>
        </div>


          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
                <span>TAGS:</span>
                <span>JOURNEY</span>
                <span>POETRY</span>
                <span>MULTIMODAL</span>
                <span>TECHNOLOGY</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

import Link from "next/link"
import Navigation from "@/components/navigation"

export default function VideoAnalysisPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              ANALYZING MULTIMODAL COMMUNICATION IN PERSONAL VLOGS
            </h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 25, 2025</span>
              <span>BLOG POST</span>
              <span>VIDEO ANALYSIS</span>
            </div>
          </header>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Personal vlogs represent a fascinating form of multimodal communication, combining visual storytelling,
                audio narration, and authentic personal expression. Today, we'll analyze a video I made for my channel: clairecodes.
                 This video demonstrates how creators use multiple modes to connect with their audience and communicate complex
                ideas about productivity, motivation, and personal growth.
              </p>
            </div>

            {/* Video Embed Section */}
            <section className="border-2 border-black p-6 bg-gray-50">
              <h2 className="text-2xl font-bold mb-6 text-center">FEATURED VIDEO</h2>
              <div className="aspect-video w-full mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KPGIAH1YsZ8"
                  title="Can I Make an Update Video and Clean My Room?! (The Answer May SURPRISE You)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="border border-black"
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">
                  "Can I Make an Update Video and Clean My Room?! (The Answer May SURPRISE You)"
                </h3>
                <p className="font-mono text-sm">by clairecodes</p>
              </div>
            </section>

            {/* Video Script Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">VIDEO SCRIPT ANALYSIS</h2>

              <div className="bg-black text-white p-6 mb-8">
                <h3 className="font-bold text-xl mb-4">SCRIPT CONTENT</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg mb-2">OPENING HOOK</h4>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="italic mb-2">
                      "Hi everyone! So I had this idea - what if I could kill two birds with one stone? I wanted to make
                      an update video for you all, and I also really need to clean my room. So I thought, why not
                      combine them? Make a productive video while actually being productive!"
                    </p>
                    <p className="text-sm font-mono">
                      <strong>Multimodal Elements:</strong> Direct address to camera, casual tone, visual setup of messy
                      room
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg mb-2">PREMISE SETUP</h4>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="italic mb-2">
                      "The plan is simple: I'll talk to you about what I've been up to lately while I organize and clean
                      my space. It seems like the perfect motivation - I get to catch up with you all AND get my life
                      together. What could go wrong?"
                    </p>
                    <p className="text-sm font-mono">
                      <strong>Multimodal Elements:</strong> Enthusiastic gestures, room tour showing mess, upbeat music
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg mb-2">THE REALITY CHECK</h4>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="italic mb-2">
                      "Okay, so... this is harder than I thought. Turns out trying to be entertaining while actually
                      focusing on cleaning is basically impossible. I keep getting distracted by talking to the camera,
                      and then I forget what I was cleaning, and then I find old stuff that makes me nostalgic..."
                    </p>
                    <p className="text-sm font-mono">
                      <strong>Multimodal Elements:</strong> Frustrated expressions, scattered cleaning attempts, comedic
                      timing
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg mb-2">THE SURPRISE REVELATION</h4>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="italic mb-2">
                      "So here's the surprise I mentioned in the title - this completely didn't work! But you know what?
                      That's actually okay. Sometimes the best content comes from our failures, and I learned something
                      important about multitasking and being present in the moment."
                    </p>
                    <p className="text-sm font-mono">
                      <strong>Multimodal Elements:</strong> Honest reflection, room still messy, authentic vulnerability
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h4 className="font-bold text-lg mb-2">CLOSING THOUGHTS</h4>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="italic mb-2">
                      "I guess the real lesson here is that some things deserve our full attention. Cleaning can be
                      meditative when you're not trying to perform at the same time. And making videos is better when
                      you can focus on connecting with your audience. So maybe I'll clean my room after I finish editing
                      this!"
                    </p>
                    <p className="text-sm font-mono">
                      <strong>Multimodal Elements:</strong> Thoughtful conclusion, call-to-action for engagement,
                      relatable humor
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Multimodal Analysis */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b border-black pb-2">MULTIMODAL COMMUNICATION ANALYSIS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">VISUAL ELEMENTS</h3>
                  <div className="space-y-4">
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">SETTING & ENVIRONMENT</h4>
                      <p className="text-sm">
                        The messy room serves as both context and character in the narrative, visually representing the
                        creator's state of mind and the challenge they're attempting to tackle.
                      </p>
                    </div>
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">BODY LANGUAGE & GESTURES</h4>
                      <p className="text-sm">
                        Physical expressions convey emotions that words alone cannot - frustration, determination,
                        realization, and acceptance all communicated through movement and facial expressions.
                      </p>
                    </div>
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">VISUAL STORYTELLING</h4>
                      <p className="text-sm">
                        The progression from optimistic setup to chaotic middle to reflective end is shown through
                        visual cues, creating a narrative arc without explicit narration.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">AUDIO & VERBAL ELEMENTS</h3>
                  <div className="space-y-4">
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">CONVERSATIONAL TONE</h4>
                      <p className="text-sm">
                        The informal, direct-address style creates intimacy and authenticity, making viewers feel like
                        they're having a personal conversation with a friend.
                      </p>
                    </div>
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">PACING & RHYTHM</h4>
                      <p className="text-sm">
                        The video's pacing likely mirrors the creator's energy levels - starting enthusiastic, becoming
                        scattered, then settling into thoughtful reflection.
                      </p>
                    </div>
                    <div className="border border-black p-4">
                      <h4 className="font-bold mb-2">VULNERABILITY & HONESTY</h4>
                      <p className="text-sm">
                        Admitting failure and sharing genuine struggles creates emotional connection and relatability,
                        key elements of successful personal content.
                      </p>
                    </div>
                  </div>
                </div>
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
                <span>VIDEO ANALYSIS</span>
                <span>MULTIMODAL</span>
                <span>VLOG</span>
                <span>AUTHENTICITY</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

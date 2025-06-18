import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import DancingMonkey from "@/components/dancing-monkey"


export default function IntroductionPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />


      <main className="max-w-4xl mx-auto p-8">
        <article className="mt-8">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">INTRODUCTION</h1>
            <div className="flex gap-4 font-mono text-sm border-b border-black pb-4">
              <span>JUNE 16, 2025</span>
              <span>BLOG POST</span>
              <span>MULTIMODAL LITERACIES</span>
            </div>
          </header>

          <div className="space-y-8">
            <Image
              src="https://i.imgur.com/3YyaWZD.jpeg"
              alt="Portrait of Claire Filipek"
              width={800}
              height={400}
              className="w-full border-2 border-black"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                <b>A little about me:</b> I have about one semester left studying Computer Science Education at Adelphi University. I am so very excited to become a CTE Teacher in the fall. I am interested in art, computer science, and comedy. Specifically I love painting, coding, and improvisational comedy. As a former software developer, I have a background in a few programming languages such as: JavaScript, React.js, and Python. I also have a YouTube channel called <a href="https://www.youtube.com/@clairecodes" target="_blank" rel="noopener noreferrer">clairecodes</a>, so I am somewhat familiar with video editing software. Additionally, my undergraduate degree is actually in Graphic Design so I am also familiar with the Adobe Suite and other photo manipulating/editing software.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-black p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">IMPROV ASSIGNMENT: DANCING MONKEY ANIMATION</h2>
              <DancingMonkey />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">THE ANATOMY OF CSS ANIMATION</h2>

              <p className="text-lg leading-relaxed">
                CSS animations work by defining keyframes that describe how an element should change over time. Let's
                break down the code that makes our monkey dance:
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">STEP 1: DEFINING THE KEYFRAMES</h3>

              <div className="bg-black text-green-400 p-6 font-mono text-sm overflow-x-auto">
                <pre>{`@keyframes dance {
  0% { 
    transform: rotate(-10deg) scale(1); 
  }
  25% { 
    transform: rotate(10deg) scale(1.1); 
  }
  50% { 
    transform: rotate(-5deg) scale(0.9); 
  }
  75% { 
    transform: rotate(15deg) scale(1.05); 
  }
  100% { 
    transform: rotate(-10deg) scale(1); 
  }
}`}</pre>
              </div>

              <p className="mt-4">
                The <code className="bg-gray-200 px-2 py-1 font-mono">@keyframes</code> rule defines what happens at
                different points in the animation timeline. Each percentage represents a moment in time:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-2">ROTATION</h4>
                  <p className="text-sm">
                    <code className="bg-gray-200 px-1 font-mono">rotate()</code> spins the monkey left and right,
                    creating a swaying motion that mimics dancing.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-2">SCALING</h4>
                  <p className="text-sm">
                    <code className="bg-gray-200 px-1 font-mono">scale()</code> makes the monkey grow and shrink
                    slightly, adding a bouncing effect to the dance.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">STEP 2: APPLYING THE ANIMATION</h3>

              <div className="bg-black text-green-400 p-6 font-mono text-sm overflow-x-auto">
                <pre>{`.animate-dance {
  animation: dance 1s ease-in-out infinite;
  transform-origin: center bottom;
}`}</pre>
              </div>

              <p className="mt-4">This CSS class applies our animation with specific properties:</p>

              <ul className="list-disc list-inside space-y-2 my-6">
                <li>
                  <strong>dance</strong>: The name of our keyframe animation
                </li>
                <li>
                  <strong>1s</strong>: Duration - the animation takes 1 second to complete
                </li>
                <li>
                  <strong>ease-in-out</strong>: Timing function - starts slow, speeds up, then slows down
                </li>
                <li>
                  <strong>infinite</strong>: Repeats the animation forever
                </li>
                <li>
                  <strong>transform-origin: center bottom</strong>: Sets the pivot point at the monkey's feet
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">STEP 3: INTERACTIVE CONTROL</h3>

              <div className="bg-black text-green-400 p-6 font-mono text-sm overflow-x-auto">
                <pre>{`const [isPlaying, setIsPlaying] = useState(true)

return (
  <div className={\`text-6xl \${isPlaying ? 'animate-dance' : ''}\`}>
    🐵
  </div>
)`}</pre>
              </div>

              <p className="mt-4">
                Using React state, we can dynamically add or remove the animation class, giving users control over the
                animation. This interactivity transforms a simple animation into an engaging user experience.
              </p>

              {/* <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">
                MULTIMODAL COMMUNICATION PRINCIPLES
              </h2>

              <p className="text-lg leading-relaxed">
                This dancing monkey demonstrates several key principles of multimodal communication:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-2">VISUAL HIERARCHY</h4>
                  <p className="text-sm">
                    The animation draws immediate attention, making it the focal point of the content area.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-2">EMOTIONAL ENGAGEMENT</h4>
                  <p className="text-sm">
                    The playful movement evokes joy and creates a positive emotional response in viewers.
                  </p>
                </div>
                <div className="border border-black p-4">
                  <h4 className="font-bold mb-2">INTERACTIVE FEEDBACK</h4>
                  <p className="text-sm">
                    The start/stop button provides immediate user control and feedback, enhancing engagement.
                  </p>
                </div>
              </div> */}

              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">TECHNICAL CONSIDERATIONS</h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <h4 className="font-bold mb-2">⚠️ ACCESSIBILITY CONCERNS</h4>
                <p className="text-sm">
                  Animations can cause motion sickness or seizures in some users. Always provide controls to pause
                  animations and respect the <code className="bg-gray-200 px-1 font-mono">prefers-reduced-motion</code>
                  media query for users who have requested reduced motion in their system settings.
                </p>
              </div>

              <div className="bg-black text-green-400 p-6 font-mono text-sm overflow-x-auto">
                <pre>{`@media (prefers-reduced-motion: reduce) {
  .animate-dance {
    animation: none;
  }
}`}</pre>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">PERFORMANCE OPTIMIZATION</h3>

              <p>
                CSS animations are generally more performant than JavaScript animations because they can be
                hardware-accelerated by the browser. Properties like{" "}
                <code className="bg-gray-200 px-1 font-mono">transform</code>
                and <code className="bg-gray-200 px-1 font-mono">opacity</code> are particularly efficient because they
                don't trigger layout recalculations.
              </p>

              {/* <div className="bg-black text-white p-6 my-8">
                <h3 className="font-bold text-xl mb-4">KEY TAKEAWAYS</h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>• Animations enhance multimodal communication</li>
                  <li>• CSS keyframes provide precise control over timing</li>
                  <li>• Interactive controls improve user experience</li>
                  <li>• Always consider accessibility and performance</li>
                  <li>• Simple animations can have powerful emotional impact</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                As we continue to explore multimodal literacies, animation serves as a bridge between static visual
                design and dynamic user experience. The dancing monkey may seem simple, but it demonstrates how
                technical implementation and design principles work together to create meaningful digital communication.
              </p> */}

              <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-black pb-2">TRY IT YOURSELF</h2>

              <div className="border-2 border-black p-6 bg-gray-50">
                <h4 className="font-bold mb-4">EXPERIMENT WITH THE CODE</h4>
                <p className="mb-4">Try modifying the animation by changing these values in the keyframes:</p>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm">
                  <li>
                    Change rotation angles: <code className="bg-gray-200 px-1">rotate(20deg)</code>
                  </li>
                  <li>
                    Adjust scale values: <code className="bg-gray-200 px-1">scale(1.5)</code>
                  </li>
                  <li>
                    Modify timing: <code className="bg-gray-200 px-1">animation: dance 2s</code>
                  </li>
                  <li>
                    Try different easing: <code className="bg-gray-200 px-1">ease-out</code>
                  </li>
                </ul>
              </div>
            </div>


          <footer className="mt-16 pt-8 border-t-2 border-black">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold hover:underline">
                ← BACK TO HOME
              </Link>
              <div className="flex gap-4 font-mono text-sm">
                <span>TAGS:</span>
                <span>INTRODUCTION</span>
                <span>DIGITAL MEDIA</span>
                <span>MULTIMODAL</span>
                <span>CSS ANIMATIONS</span>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

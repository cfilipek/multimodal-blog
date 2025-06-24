import Link from "next/link"
import Navigation from "@/components/navigation"

export default function LessonPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-5xl mx-auto p-8">
        <div className="mt-8">
          <header className="mb-12">
            <div className="bg-black text-white p-6 mb-8">
              <h1 className="text-3xl font-bold mb-2">MOVIE MAGIC IN SCRATCH</h1>
              <p className="font-mono">RECREATING CINEMATIC SCENES WITH SOUND AND CODE</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm border-b border-black pb-4">
              <div>
                <span className="font-bold">GRADE LEVEL:</span> 9-12
              </div>
              <div>
                <span className="font-bold">DURATION:</span> 45 Minutes
              </div>
              <div>
                <span className="font-bold">SUBJECT:</span> Computer Science
              </div>
            </div>
          </header>

          <div className="space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">LESSON OVERVIEW</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">ESSENTIAL QUESTION</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    How can we use programming and sound design to recreate the emotional impact of our favorite movie
                    scenes?
                  </p>

                  <h3 className="text-xl font-bold mb-4">LEARNING OBJECTIVES</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will analyze the role of sound in cinematic storytelling
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will create interactive scenes using Scratch programming
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will integrate audio elements with visual programming
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will present their work and reflect on multimodal communication
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-black p-6">
                  <h3 className="text-xl font-bold mb-4">MULTIMODAL COMPONENTS</h3>
                  <div className="space-y-4">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">VISUAL</h4>
                      <p className="text-sm">Scratch sprites, backgrounds, animations, visual effects</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">AUDIO</h4>
                      <p className="text-sm">Movie-inspired sound effects, timing, audio cues</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">INTERACTIVE</h4>
                      <p className="text-sm">User controls, event-driven programming, scene triggers</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">NARRATIVE</h4>
                      <p className="text-sm">Storytelling, scene recreation, emotional impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* NYS Standards Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
                NEW YORK STATE STANDARDS ALIGNMENT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.4 - ALGORITHMS AND PROGRAMMING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Implement a program using control structures, functions, and variables.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students use Scratch blocks to create conditional statements, loops,
                      and event handlers for their movie scenes.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.7 - ALGORITHMS AND PROGRAMMING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Design programs by incorporating learned concepts and debugging
                      techniques.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students debug their Scratch programs and refine timing of sound
                      effects and animations.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.DL.2 - DIGITAL LITERACY</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Communicate and work collaboratively with others using digital tools.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students share their Scratch projects and provide peer feedback on
                      creative implementations.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.IC.1 - IMPACTS OF COMPUTING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Evaluate the ways computing impacts personal, ethical, social,
                      economic, and cultural practices.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students analyze how sound design in movies influences emotions and
                      cultural perceptions.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.9 - ALGORITHMS AND PROGRAMMING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Systematically test programs and refine them based on user feedback.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students test their interactive scenes with classmates and refine
                      based on feedback.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.1 - COMPUTATIONAL THINKING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Create a simple digital model that makes predictions about real-world
                      phenomena.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students model how sound timing affects emotional response in their
                      digital recreations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 45-Minute Lesson Breakdown */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">45-MINUTE LESSON BREAKDOWN</h2>

              <div className="space-y-6">
                {/* Opening */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">OPENING: MOVIE SOUND ANALYSIS</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">8 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Watch 2-3 famous movie clips (sound on/off)</li>
                        <li>• Discuss impact of sound on emotion</li>
                        <li>• Identify different types of sound effects</li>
                        <li>• Introduce today's challenge</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">EXAMPLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Jaws theme music</li>
                        <li>• Star Wars lightsaber sounds</li>
                        <li>• Marvel superhero landing sounds</li>
                        <li>• Horror movie jump scares</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">KEY QUESTIONS</h4>
                      <ul className="text-sm space-y-1">
                        <li>• How does sound change the mood?</li>
                        <li>• What makes a sound effect memorable?</li>
                        <li>• How do sounds tell a story?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Planning Phase */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">PLANNING: MOVIE SELECTION & SOUND MAPPING</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">7 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">STUDENT TASKS</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Choose favorite movie scene</li>
                        <li>• Identify 2-3 key sound effects</li>
                        <li>• Sketch basic scene layout</li>
                        <li>• Plan character/sprite actions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">PLANNING TEMPLATE</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Movie: _______________</li>
                        <li>• Scene: _______________</li>
                        <li>• Sound 1: _____________</li>
                        <li>• Sound 2: _____________</li>
                        <li>• Sound 3: _____________</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TEACHER SUPPORT</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Circulate and provide guidance</li>
                        <li>• Help with scene simplification</li>
                        <li>• Suggest appropriate sound effects</li>
                        <li>• Ensure feasibility for time limit</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Creation Phase */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">CREATION: SCRATCH PROGRAMMING</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">25 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">PROGRAMMING TASKS</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Create or select appropriate sprites</li>
                        <li>• Choose/design background scene</li>
                        <li>• Add 2-3 sound effects from library</li>
                        <li>• Program sprite movements/animations</li>
                        <li>• Set up user interaction (click/key press)</li>
                        <li>• Synchronize sounds with actions</li>
                        <li>• Test and debug the scene</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">SCRATCH CONCEPTS USED</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Event blocks (when clicked, when key pressed)</li>
                        <li>• Motion blocks (move, glide, turn)</li>
                        <li>• Sound blocks (play sound, stop all sounds)</li>
                        <li>• Control blocks (wait, repeat, if/then)</li>
                        <li>• Looks blocks (show, hide, change costume)</li>
                        <li>• Sensing blocks (touching, key pressed)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 border border-black p-4">
                    <h4 className="font-bold mb-2">MINIMUM REQUIREMENTS</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>VISUAL:</strong>
                        <ul className="mt-1">
                          <li>• At least 1 sprite</li>
                          <li>• Appropriate background</li>
                          <li>• Some form of animation</li>
                        </ul>
                      </div>
                      <div>
                        <strong>AUDIO:</strong>
                        <ul className="mt-1">
                          <li>• 2-3 sound effects</li>
                          <li>• Sounds triggered by events</li>
                          <li>• Appropriate timing</li>
                        </ul>
                      </div>
                      <div>
                        <strong>INTERACTION:</strong>
                        <ul className="mt-1">
                          <li>• User can trigger scene</li>
                          <li>• Clear instructions</li>
                          <li>• Scene runs smoothly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sharing & Reflection */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">SHARING & REFLECTION</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">5 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">PRESENTATION</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 3-4 volunteers share projects</li>
                        <li>• Demonstrate their scene</li>
                        <li>• Explain movie connection</li>
                        <li>• Highlight sound choices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">PEER FEEDBACK</h4>
                      <ul className="text-sm space-y-1">
                        <li>• What movie did you recognize?</li>
                        <li>• Which sound was most effective?</li>
                        <li>• What was creative about the scene?</li>
                        <li>• One suggestion for improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">REFLECTION QUESTIONS</h4>
                      <ul className="text-sm space-y-1">
                        <li>• How did sound enhance your scene?</li>
                        <li>• What was challenging about timing?</li>
                        <li>• How does this relate to real filmmaking?</li>
                        <li>• What would you add with more time?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Assessment Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">QUICK ASSESSMENT CHECKLIST</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-black p-6">
                  <h3 className="text-xl font-bold mb-4">TECHNICAL SKILLS ✓</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Successfully created a Scratch project
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Added and positioned sprites appropriately
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Integrated 2-3 sound effects
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Programmed user interaction
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Scene runs without major errors
                    </label>
                  </div>
                </div>

                <div className="border-2 border-black p-6">
                  <h3 className="text-xl font-bold mb-4">CREATIVE EXPRESSION ✓</h3>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Clear connection to chosen movie
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Thoughtful sound effect selection
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Creative use of Scratch features
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Effective timing and synchronization
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Engaged in reflection discussion
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Materials & Setup */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">MATERIALS & SETUP</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">TECHNOLOGY NEEDED</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Computers/tablets with internet access</li>
                    <li>• Scratch 3.0 (online or offline)</li>
                    <li>• Headphones for each student</li>
                    <li>• Projector for demonstrations</li>
                    <li>• Planning worksheet (printed)</li>
                  </ul>
                </div>

                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">TEACHER PREPARATION</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Test Scratch access on all devices</li>
                    <li>• Prepare movie clip examples</li>
                    <li>• Create sample Scratch project</li>
                    <li>• Print planning worksheets</li>
                    <li>• Set up sharing/presentation method</li>
                  </ul>
                </div>

                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">DIFFERENTIATION</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Provide Scratch tutorial links</li>
                    <li>• Offer pre-made sprite options</li>
                    <li>• Allow pair programming</li>
                    <li>• Extend with advanced features</li>
                    <li>• Support with visual programming guides</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Extension Ideas */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">EXTENSION OPPORTUNITIES</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">FOR ADVANCED STUDENTS</h3>
                  <div className="space-y-3">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">TECHNICAL EXTENSIONS</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Add multiple scenes with transitions</li>
                        <li>• Create custom sprites/costumes</li>
                        <li>• Record original sound effects</li>
                        <li>• Add scoring or game elements</li>
                      </ul>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">CREATIVE EXTENSIONS</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Create an entire movie trailer</li>
                        <li>• Develop interactive movie quiz</li>
                        <li>• Design movie poster in Scratch</li>
                        <li>• Add dialogue and character voices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">HOMEWORK/FOLLOW-UP</h3>
                  <div className="space-y-3">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">OPTIONAL ASSIGNMENTS</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Finish and polish the Scratch project</li>
                        <li>• Share project with Scratch community</li>
                        <li>• Write reflection on sound in movies</li>
                        <li>• Research career in sound design</li>
                      </ul>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">CROSS-CURRICULAR</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• English: Analyze movie themes</li>
                        <li>• Music: Study film score composition</li>
                        <li>• Art: Design movie posters</li>
                        <li>• History: Research movie time periods</li>
                      </ul>
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
                <span>DURATION: 45 MINUTES</span>
                <span>NYS ALIGNED</span>
                <span>SCRATCH PROGRAMMING</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

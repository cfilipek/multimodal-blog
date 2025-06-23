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
              <h1 className="text-3xl font-bold mb-2">MULTIMODAL COMPUTER SCIENCE LESSON PLAN</h1>
              <p className="font-mono">VIDEOGRAPHY MEETS PROGRAMMING: CREATING INTERACTIVE STORIES</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm border-b border-black pb-4">
              <div>
                <span className="font-bold">GRADE LEVEL:</span> 9-12
              </div>
              <div>
                <span className="font-bold">DURATION:</span> 5 Days (50 min each)
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
                    How can we combine storytelling, videography, and programming to create interactive digital
                    narratives that engage multiple audiences?
                  </p>

                  <h3 className="text-xl font-bold mb-4">LEARNING OBJECTIVES</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will design and implement interactive video experiences using HTML, CSS, and JavaScript
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will apply algorithmic thinking to create branching narrative structures
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will analyze the impact of multimodal communication on different audiences
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      Students will collaborate effectively using version control systems (Git)
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-black p-6">
                  <h3 className="text-xl font-bold mb-4">MULTIMODAL COMPONENTS</h3>
                  <div className="space-y-4">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">VISUAL</h4>
                      <p className="text-sm">Video production, UI design, visual storytelling</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">AUDIO</h4>
                      <p className="text-sm">Narration, sound effects, background music</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">INTERACTIVE</h4>
                      <p className="text-sm">User input, branching choices, responsive design</p>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">TEXTUAL</h4>
                      <p className="text-sm">Code documentation, user instructions, captions</p>
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
                      <strong>Application:</strong> Students create JavaScript functions to handle user interactions and
                      implement conditional logic for story branching.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.8 - ALGORITHMS AND PROGRAMMING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Develop programs that utilize combinations of nested repetition,
                      compound conditionals, procedures, and/or lists.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students implement complex decision trees and data structures to
                      manage story paths and user choices.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.DL.1 - DIGITAL LITERACY</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Type proficiently on a keyboard and/or input device while using proper
                      posture and technique.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students develop coding proficiency through extensive programming
                      practice and proper development workflows.
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
                      <strong>Application:</strong> Students analyze how interactive media influences different
                      audiences and consider ethical implications of digital storytelling.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.IC.5 - IMPACTS OF COMPUTING</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Describe issues that impact network functionality and explain how the
                      Internet facilitates global communication.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students deploy their projects online and discuss how web
                      technologies enable global sharing of interactive content.
                    </p>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h3 className="font-bold mb-2">9-12.CT.10 - COLLABORATION</h3>
                    <p className="text-sm mb-2">
                      <strong>Standard:</strong> Collaborate to design and develop a program or computational artifact.
                    </p>
                    <p className="text-sm">
                      <strong>Application:</strong> Students work in teams using Git for version control and
                      collaborative development practices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Daily Breakdown */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">5-DAY LESSON BREAKDOWN</h2>

              <div className="space-y-8">
                {/* Day 1 */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">DAY 1: STORY DESIGN & PLANNING</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">50 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Introduction to interactive storytelling</li>
                        <li>• Analyze existing interactive videos</li>
                        <li>• Brainstorm story concepts in teams</li>
                        <li>• Create story flowcharts</li>
                        <li>• Plan video scenes and decision points</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TOOLS & TECH</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Flowchart software (Lucidchart)</li>
                        <li>• Storyboard templates</li>
                        <li>• Example interactive videos</li>
                        <li>• Collaborative planning docs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">DELIVERABLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Story concept document</li>
                        <li>• Decision tree flowchart</li>
                        <li>• Scene storyboard</li>
                        <li>• Team roles assignment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">DAY 2: VIDEO PRODUCTION</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">50 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Video production techniques workshop</li>
                        <li>• Film story scenes with smartphones/cameras</li>
                        <li>• Record multiple endings/branches</li>
                        <li>• Capture audio narration</li>
                        <li>• Basic video editing introduction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TOOLS & TECH</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Smartphones/digital cameras</li>
                        <li>• Tripods and lighting</li>
                        <li>• Video editing software</li>
                        <li>• Audio recording equipment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">DELIVERABLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Raw video footage</li>
                        <li>• Audio recordings</li>
                        <li>• Edited video segments</li>
                        <li>• Production notes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">DAY 3: WEB DEVELOPMENT FOUNDATION</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">50 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• HTML5 video element introduction</li>
                        <li>• CSS styling for video interfaces</li>
                        <li>• JavaScript event handling basics</li>
                        <li>• Create basic interactive video player</li>
                        <li>• Implement user choice buttons</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TOOLS & TECH</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Code editor (VS Code)</li>
                        <li>• Web browser dev tools</li>
                        <li>• HTML/CSS/JavaScript</li>
                        <li>• Local web server</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">DELIVERABLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Basic HTML structure</li>
                        <li>• CSS styling sheet</li>
                        <li>• JavaScript interaction functions</li>
                        <li>• Working video player prototype</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">DAY 4: ADVANCED INTERACTIVITY</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">50 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Implement branching logic</li>
                        <li>• Add user choice tracking</li>
                        <li>• Create dynamic content loading</li>
                        <li>• Integrate multiple video segments</li>
                        <li>• Add accessibility features</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TOOLS & TECH</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Advanced JavaScript concepts</li>
                        <li>• JSON for data management</li>
                        <li>• Responsive design principles</li>
                        <li>• Accessibility testing tools</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">DELIVERABLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Complete interactive system</li>
                        <li>• User choice tracking</li>
                        <li>• Responsive design implementation</li>
                        <li>• Accessibility compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="border-2 border-black p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">DAY 5: PRESENTATION & REFLECTION</h3>
                    <span className="font-mono text-sm bg-black text-white px-2 py-1">50 MINUTES</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">ACTIVITIES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Team presentations of projects</li>
                        <li>• Peer testing and feedback</li>
                        <li>• Code review sessions</li>
                        <li>• Reflection on multimodal impact</li>
                        <li>• Discussion of real-world applications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">TOOLS & TECH</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Presentation software</li>
                        <li>• Screen sharing tools</li>
                        <li>• Feedback forms</li>
                        <li>• Portfolio platforms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">DELIVERABLES</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Final interactive video project</li>
                        <li>• Presentation to class</li>
                        <li>• Peer feedback forms</li>
                        <li>• Reflection essay</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Assessment Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">ASSESSMENT RUBRIC</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="border border-black p-3 text-left">CRITERIA</th>
                      <th className="border border-black p-3 text-center">EXEMPLARY (4)</th>
                      <th className="border border-black p-3 text-center">PROFICIENT (3)</th>
                      <th className="border border-black p-3 text-center">DEVELOPING (2)</th>
                      <th className="border border-black p-3 text-center">BEGINNING (1)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-black p-3 font-bold">Technical Implementation</td>
                      <td className="border border-black p-3">
                        Code is clean, efficient, and demonstrates advanced programming concepts
                      </td>
                      <td className="border border-black p-3">
                        Code functions correctly with good structure and organization
                      </td>
                      <td className="border border-black p-3">Code works with minor issues and basic structure</td>
                      <td className="border border-black p-3">
                        Code has significant issues or incomplete functionality
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-black p-3 font-bold">Multimodal Integration</td>
                      <td className="border border-black p-3">
                        Seamlessly combines video, audio, text, and interactivity
                      </td>
                      <td className="border border-black p-3">Effectively uses multiple modes of communication</td>
                      <td className="border border-black p-3">Uses some multimodal elements appropriately</td>
                      <td className="border border-black p-3">Limited or ineffective use of multimodal elements</td>
                    </tr>
                    <tr>
                      <td className="border border-black p-3 font-bold">Story & User Experience</td>
                      <td className="border border-black p-3">
                        Compelling narrative with intuitive, engaging user interface
                      </td>
                      <td className="border border-black p-3">Clear story with functional user interface</td>
                      <td className="border border-black p-3">Basic story with adequate user interface</td>
                      <td className="border border-black p-3">Unclear story or confusing user interface</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-black p-3 font-bold">Collaboration & Process</td>
                      <td className="border border-black p-3">
                        Exceptional teamwork with clear documentation and version control
                      </td>
                      <td className="border border-black p-3">Good collaboration with adequate documentation</td>
                      <td className="border border-black p-3">Basic teamwork with some documentation</td>
                      <td className="border border-black p-3">Poor collaboration or minimal documentation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Resources Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">RESOURCES & MATERIALS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">REQUIRED TECHNOLOGY</h3>
                  <div className="space-y-3">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">HARDWARE</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Computers with web browsers</li>
                        <li>• Smartphones or digital cameras</li>
                        <li>• Tripods and basic lighting</li>
                        <li>• Headphones/microphones</li>
                      </ul>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">SOFTWARE</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Code editor (VS Code)</li>
                        <li>• Video editing software</li>
                        <li>• Web browser with dev tools</li>
                        <li>• Git for version control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">LEARNING RESOURCES</h3>
                  <div className="space-y-3">
                    <div className="border border-black p-3">
                      <h4 className="font-bold">TUTORIALS & GUIDES</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• HTML5 video element documentation</li>
                        <li>• JavaScript event handling tutorials</li>
                        <li>• Video production best practices</li>
                        <li>• Accessibility guidelines (WCAG)</li>
                      </ul>
                    </div>
                    <div className="border border-black p-3">
                      <h4 className="font-bold">INSPIRATION</h4>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Interactive documentary examples</li>
                        <li>• Choose-your-own-adventure games</li>
                        <li>• Educational interactive videos</li>
                        <li>• Multimodal storytelling projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Extension Activities */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">EXTENSION ACTIVITIES</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">ADVANCED PROGRAMMING</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Add data visualization of user choices</li>
                    <li>• Implement user accounts and progress saving</li>
                    <li>• Create mobile app version</li>
                    <li>• Add AI-powered content recommendations</li>
                  </ul>
                </div>

                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">CROSS-CURRICULAR</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Create historical interactive documentaries</li>
                    <li>• Develop science experiment simulations</li>
                    <li>• Build language learning tools</li>
                    <li>• Design social issue awareness campaigns</li>
                  </ul>
                </div>

                <div className="border border-black p-4">
                  <h3 className="font-bold mb-3">COMMUNITY IMPACT</h3>
                  <ul className="text-sm space-y-2">
                    <li>• Share projects with local organizations</li>
                    <li>• Present at school board meetings</li>
                    <li>• Submit to student film festivals</li>
                    <li>• Mentor younger students</li>
                  </ul>
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
                <span>CREATED: JANUARY 2025</span>
                <span>NYS ALIGNED</span>
                <span>MULTIMODAL</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

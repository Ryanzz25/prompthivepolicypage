import React from 'react';
import { Shield, Lock, Server, Users, Mail, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">PromptHive</h1>
          </div>
          <p className="text-slate-600">Chrome Extension Privacy Policy</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700">
            <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy for PromptHive</h2>
            <div className="flex items-center gap-2 text-blue-100">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Effective Date: October 26, 2023</span>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Introduction */}
            <div className="prose max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                Thank you for using PromptHive, a Chrome extension built by Rehan Nawaz. This Privacy Policy is here to help you understand how your data is handled when you use our extension. <span className="font-semibold text-blue-700">Your privacy is our top priority.</span>
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">The Core Principle: Your Data is Yours</h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-700 leading-relaxed">
                  PromptHive is designed from the ground up to be a <span className="font-semibold bg-green-50 px-2 py-1 rounded text-green-800">private, local-first application</span>. We do not collect, store, transmit, or sell any of your personal information or the content you create.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-700 font-bold text-sm">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Information We Do NOT Collect</h3>
              </div>
              <div className="ml-11 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  We want to be crystal clear: PromptHive does not collect any personally identifiable information. This includes, but is not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Your name, email address, or contact information</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Your IP address or location data</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Any browsing history or data from other tabs</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Analytics or usage data about your interactions</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">How Your Prompt Data is Stored</h3>
              </div>
              <div className="ml-11 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  All the prompts, categories, tags, and any other content you create and save within PromptHive are stored exclusively on your local computer using your browser's standard localStorage API.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-blue-600" />
                      <h4 className="font-semibold text-blue-900">Your Data Stays Local</h4>
                    </div>
                    <p className="text-sm text-blue-700">This data never leaves your device and is never sent to our servers or any third-party service.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-green-900">You Have Full Control</h4>
                    </div>
                    <p className="text-sm text-green-700">You can export, delete, or clear your data at any time. We have zero access to your prompts.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-sm">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Third-Party Services (For Functionality Only)</h3>
              </div>
              <div className="ml-11 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  To provide a modern and fast user interface, PromptHive loads two common front-end libraries from reputable Content Delivery Networks (CDNs):
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Server className="w-5 h-5 text-slate-500" />
                    <div>
                      <span className="font-semibold text-slate-900">React & React-DOM</span>
                      <span className="text-slate-600"> (via aistudiocdn.com)</span>
                      <p className="text-sm text-slate-600 mt-1">Core library used to build the user interface</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Server className="w-5 h-5 text-slate-500" />
                    <div>
                      <span className="font-semibold text-slate-900">Tailwind CSS</span>
                      <span className="text-slate-600"> (via cdn.tailwindcss.com)</span>
                      <p className="text-sm text-slate-600 mt-1">Utility-first CSS framework used for styling</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">Important:</span> These services only deliver static code for styling and functionality. They do not receive any of your personal data or prompt information from the extension.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-700 font-bold text-sm">5</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Data Security</h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-700 leading-relaxed">
                  The security of your data is directly tied to the security of the computer and browser you use. Since your data is stored locally, we recommend following standard security practices for your device, such as using updated antivirus software and a secure browser.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-700 font-bold text-sm">6</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Children's Privacy</h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-700 leading-relaxed">
                  PromptHive is not intended for use by children under the age of 13. We do not knowingly collect any information from children.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-sm">7</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Changes to This Privacy Policy</h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-700 font-bold text-sm">8</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Contact Us</h3>
              </div>
              <div className="ml-11">
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please feel free to contact us through our website:
                </p>
                <a 
                  href="https://rehannawaz.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Visit rehannawaz.info
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Built with privacy in mind by Rehan Nawaz</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
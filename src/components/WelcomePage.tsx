import React, { useState } from 'react'
import { Drawer } from './ui/Drawer'
import { ReferenceContent } from './ui/ReferenceContent'

interface WelcomePageProps {
  onStart: () => void
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Header with Reference Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
            title="Quick Reference"
          >
            📚 Reference
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            XPath & CSS Selector Practice
          </h1>
          <p className="text-xl text-gray-600">
            Master automation testing selectors with 20 progressive exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              CSS Selectors
            </h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Basic:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    • <code className="bg-gray-100 px-2 py-1 rounded">tag</code>{' '}
                    - Select by tag name
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      .class
                    </code>{' '}
                    - Select by class
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-2 py-1 rounded">#id</code>{' '}
                    - Select by ID
                  </li>
                </ul>
              </div>
              <div>
                <strong>Attributes:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      [attr]
                    </code>{' '}
                    - Has attribute
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      [attr="value"]
                    </code>{' '}
                    - Exact match
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      [attr*="text"]
                    </code>{' '}
                    - Contains text
                  </li>
                </ul>
              </div>
              <div>
                <strong>Pseudo-selectors:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      :first-child
                    </code>{' '}
                    - First child
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      :nth-child(n)
                    </code>{' '}
                    - Nth child
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      :not(selector)
                    </code>{' '}
                    - Not matching
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              XPath
            </h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Basic:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">//tag</code>{' '}
                    - Find any tag
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //*[@class="name"]
                    </code>{' '}
                    - By class
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //*[@id="name"]
                    </code>{' '}
                    - By ID
                  </li>
                </ul>
              </div>
              <div>
                <strong>Text & Content:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //tag[text()="text"]
                    </code>{' '}
                    - Exact text
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //tag[contains(text(),"text")]
                    </code>{' '}
                    - Contains
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //*[contains(@attr,"value")]
                    </code>{' '}
                    - Attr contains
                  </li>
                </ul>
              </div>
              <div>
                <strong>Axes:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //parent/child
                    </code>{' '}
                    - Direct child
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //ancestor//descendant
                    </code>{' '}
                    - Any descendant
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      //following-sibling::
                    </code>{' '}
                    - Next sibling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Tips:</strong> Start with simple selectors and
                progressively learn more complex patterns. In automation
                testing, prefer stable selectors that won't break when the UI
                changes slightly. Avoid using indices when possible - look for
                unique attributes, text content, or relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Practicing →
          </button>
        </div>
      </div>

      {/* Reference Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <ReferenceContent />
      </Drawer>
    </div>
  )
}

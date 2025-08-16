import React, { useState } from 'react'

interface CodeExampleProps {
  good?: string
  bad?: string
  description: string
}

const CodeExample: React.FC<CodeExampleProps> = ({
  good,
  bad,
  description,
}) => (
  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p className="text-sm text-gray-700 mb-3 font-medium">{description}</p>
    {good && (
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded">
            ✓ GOOD
          </span>
        </div>
        <code className="text-sm bg-green-50 text-green-800 p-3 rounded-md block font-mono border border-green-200">
          {good}
        </code>
      </div>
    )}
    {bad && (
      <div>
        <div className="flex items-center mb-2">
          <span className="text-red-600 text-xs font-semibold bg-red-100 px-2 py-1 rounded">
            ✗ AVOID
          </span>
        </div>
        <code className="text-sm bg-red-50 text-red-800 p-3 rounded-md block font-mono border border-red-200">
          {bad}
        </code>
      </div>
    )}
  </div>
)

export const ReferenceContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'css' | 'xpath'>('css')

  const cssSelectors = [
    {
      category: 'Basic Selectors',
      items: [
        {
          syntax: 'element',
          description: 'Select by tag name',
          example: 'div, p, span',
        },
        {
          syntax: '.class',
          description: 'Select by class',
          example: '.btn, .header',
        },
        {
          syntax: '#id',
          description: 'Select by ID',
          example: '#main, #sidebar',
        },
        {
          syntax: '*',
          description: 'Universal selector',
          example: '* (selects all)',
        },
      ],
    },
    {
      category: 'Attribute Selectors',
      items: [
        {
          syntax: '[attr]',
          description: 'Has attribute',
          example: '[required]',
        },
        {
          syntax: '[attr=value]',
          description: 'Exact match',
          example: "[type='text']",
        },
        {
          syntax: '[attr^=value]',
          description: 'Starts with',
          example: "[href^='https']",
        },
        {
          syntax: '[attr$=value]',
          description: 'Ends with',
          example: "[src$='.jpg']",
        },
        {
          syntax: '[attr*=value]',
          description: 'Contains',
          example: "[class*='btn']",
        },
      ],
    },
    {
      category: 'Combinators',
      items: [
        { syntax: 'A B', description: 'Descendant', example: 'div p' },
        { syntax: 'A > B', description: 'Direct child', example: 'ul > li' },
        { syntax: 'A + B', description: 'Adjacent sibling', example: 'h1 + p' },
        { syntax: 'A ~ B', description: 'General sibling', example: 'h1 ~ p' },
      ],
    },
    {
      category: 'Pseudo-classes',
      items: [
        {
          syntax: ':first-child',
          description: 'First child element',
          example: 'li:first-child',
        },
        {
          syntax: ':last-child',
          description: 'Last child element',
          example: 'li:last-child',
        },
        {
          syntax: ':nth-child(n)',
          description: 'Nth child',
          example: 'tr:nth-child(2n)',
        },
        {
          syntax: ':not(selector)',
          description: 'Not matching',
          example: 'input:not([disabled])',
        },
      ],
    },
  ]

  const xpathExpressions = [
    {
      category: 'Basic Syntax',
      items: [
        {
          syntax: '//element',
          description: 'Select all elements',
          example: '//div, //p',
        },
        {
          syntax: '/element',
          description: 'Direct child from root',
          example: '/html/body',
        },
        {
          syntax: "//element[@attr='value']",
          description: 'Attribute equals',
          example: "//input[@type='text']",
        },
        {
          syntax: "//element[text()='value']",
          description: 'Text content equals',
          example: "//button[text()='Submit']",
        },
      ],
    },
    {
      category: 'Advanced Predicates',
      items: [
        {
          syntax: '//element[position()=n]',
          description: 'By position',
          example: '//li[position()=1]',
        },
        {
          syntax: "//element[contains(@attr,'value')]",
          description: 'Attribute contains',
          example: "//div[contains(@class,'btn')]",
        },
        {
          syntax: "//element[contains(text(),'value')]",
          description: 'Text contains',
          example: "//p[contains(text(),'error')]",
        },
        {
          syntax: "//element[starts-with(@attr,'value')]",
          description: 'Attribute starts with',
          example: "//a[starts-with(@href,'http')]",
        },
      ],
    },
    {
      category: 'Axes',
      items: [
        {
          syntax: '//element/parent::',
          description: 'Parent element',
          example: '//span/parent::div',
        },
        {
          syntax: '//element/child::',
          description: 'Child elements',
          example: '//ul/child::li',
        },
        {
          syntax: '//element/following-sibling::',
          description: 'Following siblings',
          example: '//h1/following-sibling::p',
        },
        {
          syntax: '//element/preceding-sibling::',
          description: 'Preceding siblings',
          example: '//p/preceding-sibling::h1',
        },
      ],
    },
    {
      category: 'Functions',
      items: [
        {
          syntax: '//element[last()]',
          description: 'Last element',
          example: '//li[last()]',
        },
        {
          syntax: '//element[count(child)>n]',
          description: 'Count children',
          example: '//ul[count(li)>3]',
        },
        {
          syntax: "//element[normalize-space(text())='value']",
          description: 'Normalized text',
          example: "//p[normalize-space(text())='Hello']",
        },
        {
          syntax: '//element[string-length(@attr)>n]',
          description: 'Attribute length',
          example: '//input[string-length(@value)>5]',
        },
      ],
    },
  ]

  const bestPractices = {
    css: [
      {
        description: 'Use semantic class names instead of presentational ones',
        good: '.submit-button, .error-message',
        bad: '.red-text, .big-button',
      },
      {
        description: 'Prefer class selectors over complex descendant chains',
        good: '.card-title',
        bad: '.container div div h3',
      },
      {
        description: 'Use specific attribute selectors for form elements',
        good: "input[type='email']",
        bad: 'input',
      },
      {
        description: 'Avoid overly specific selectors',
        good: '.nav-item.active',
        bad: 'body div.header ul.nav li.nav-item.active',
      },
      {
        description: 'Use child combinator for direct relationships',
        good: '.menu > .menu-item',
        bad: '.menu .menu-item',
      },
    ],
    xpath: [
      {
        description: 'Use attribute-based selectors for stability',
        good: "//button[@data-testid='submit']",
        bad: '//div[3]/button[1]',
      },
      {
        description: 'Prefer contains() for partial text matching',
        good: "//button[contains(text(), 'Submit')]",
        bad: "//button[text()='Submit Order Now']",
      },
      {
        description: 'Use normalize-space() for text with whitespace',
        good: "//p[normalize-space(text())='Hello']",
        bad: "//p[text()='  Hello  ']",
      },
      {
        description: 'Avoid absolute paths that break easily',
        good: "//form//input[@name='email']",
        bad: '/html/body/div[2]/form/input[1]',
      },
      {
        description: 'Use logical operators for complex conditions',
        good: "//input[@type='text' and @required]",
        bad: "//input[@type='text'][@required]",
      },
    ],
  }

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="flex mb-6 gap-4">
        <button
          onClick={() => setActiveTab('css')}
          className={`px-6 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg focus:outline-none ${
            activeTab === 'css'
              ? 'text-blue-600 border-blue-600 bg-blue-50  '
              : 'text-gray-600 hover:text-gray-800 border-transparent hover:bg-gray-50 bg-gray-100 border-blue-100'
          }`}
        >
          CSS Selectors
        </button>
        <button
          onClick={() => setActiveTab('xpath')}
          className={`px-6 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg focus:outline-none ${
            activeTab === 'xpath'
              ? 'text-blue-600 border-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-gray-800 border-transparent hover:bg-gray-50 bg-gray-100 border-blue-100'
          }`}
        >
          XPath
        </button>
      </div>

      {/* CSS Selectors Tab */}
      {activeTab === 'css' && (
        <div>
          {/* Syntax Reference */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              Syntax Reference
            </h3>
            {cssSelectors.map((category) => (
              <div key={category.category} className="mb-6">
                <h4 className="font-semibold text-lg text-gray-700 mb-3 text-blue-700">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <code className="text-base font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {item.syntax}
                        </code>
                      </div>
                      <p className="text-sm text-gray-700 mb-2 font-medium">
                        {item.description}
                      </p>
                      <code className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                        {item.example}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              Best Practices
            </h3>
            {bestPractices.css.map((practice, index) => (
              <CodeExample
                key={index}
                description={practice.description}
                good={practice.good}
                bad={practice.bad}
              />
            ))}
          </div>
        </div>
      )}

      {/* XPath Tab */}
      {activeTab === 'xpath' && (
        <div>
          {/* Syntax Reference */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              Syntax Reference
            </h3>
            {xpathExpressions.map((category) => (
              <div key={category.category} className="mb-6">
                <h4 className="font-semibold text-lg text-gray-700 mb-3 text-blue-700">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <code className="text-base font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {item.syntax}
                        </code>
                      </div>
                      <p className="text-sm text-gray-700 mb-2 font-medium">
                        {item.description}
                      </p>
                      <code className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                        {item.example}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
              Best Practices
            </h3>
            {bestPractices.xpath.map((practice, index) => (
              <CodeExample
                key={index}
                description={practice.description}
                good={practice.good}
                bad={practice.bad}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

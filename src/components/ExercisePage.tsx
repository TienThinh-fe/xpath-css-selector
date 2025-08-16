import React, { useState, useEffect, useRef } from 'react'
import type { Exercise } from '../types'
import {
  validateSelector,
  highlightElements,
  clearHighlights,
  checkAnswer,
  getSelectorType,
} from '../utils'

interface ExercisePageProps {
  exercise: Exercise
  onNext: () => void
  onPrevious: () => void
  onGoToWelcome: () => void
  hasNext: boolean
  hasPrevious: boolean
  exerciseNumber: number
  totalExercises: number
}

export const ExercisePage: React.FC<ExercisePageProps> = ({
  exercise,
  onNext,
  onPrevious,
  onGoToWelcome,
  hasNext,
  hasPrevious,
  exerciseNumber,
  totalExercises,
}) => {
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error' | 'info' | null
    message: string
  }>({ type: null, message: '' })
  const [showHint, setShowHint] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const exerciseContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clear highlights and feedback when exercise changes
    clearHighlights()
    setUserInput('')
    setFeedback({ type: null, message: '' })
    setShowHint(false)
    setCurrentHintIndex(0)
  }, [exercise.id])

  useEffect(() => {
    // Update highlights when user input changes
    if (userInput.trim()) {
      const selectorType = getSelectorType(userInput)
      const result = validateSelector(
        userInput,
        selectorType,
        exerciseContainerRef.current || undefined,
      )

      if (result.isValid && result.matchedElements.length > 0) {
        highlightElements(result.matchedElements)
        setFeedback({
          type: 'info',
          message: `Found ${result.matchedElements.length} element(s)`,
        })
      } else {
        clearHighlights()
        if (result.error) {
          setFeedback({
            type: 'error',
            message: `Invalid selector: ${result.error}`,
          })
        } else {
          setFeedback({
            type: 'error',
            message: 'No elements found',
          })
        }
      }
    } else {
      clearHighlights()
      setFeedback({ type: null, message: '' })
    }
  }, [userInput])

  const handleCheck = () => {
    if (!userInput.trim()) {
      setFeedback({
        type: 'error',
        message: 'Please enter a selector',
      })
      return
    }

    const selectorType = getSelectorType(userInput)
    const isCorrect = checkAnswer(
      userInput,
      selectorType,
      exercise.validSelectors,
      exerciseContainerRef.current || undefined,
    )

    if (isCorrect) {
      setFeedback({
        type: 'success',
        message: '🎉 Correct! Well done!',
      })
    } else {
      setFeedback({
        type: 'error',
        message: 'Not quite right. Try again or use a hint!',
      })
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 w-full">
      <div className="w-full px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Exercise {exerciseNumber} of {totalExercises}
              </h1>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                  exercise.difficulty,
                )}`}
              >
                {exercise.difficulty}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={onGoToWelcome}
                className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
              >
                🏠 Home
              </button>
              <button
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {exercise.title}
          </h2>
          <p className="text-gray-600 mb-4">{exercise.description}</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">
              <strong>Target:</strong> {exercise.targetElement}
            </p>
          </div>
        </div>

        {/* Exercise Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Exercise Component */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Practice Area
            </h3>
            <div
              ref={exerciseContainerRef}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 min-h-96"
            >
              {React.createElement(exercise.component, {
                onHighlight: (selector: string) => {
                  const selectorType = getSelectorType(selector)
                  const result = validateSelector(
                    selector,
                    selectorType,
                    exerciseContainerRef.current || undefined,
                  )
                  if (result.isValid) {
                    highlightElements(result.matchedElements)
                  }
                },
                clearHighlight: clearHighlights,
              })}
            </div>
          </div>

          {/* Input and Controls */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Your Solution
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="selector-input"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter CSS Selector or XPath:
                </label>
                <textarea
                  id="selector-input"
                  name="selector"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="e.g., button.primary or //button[@class='primary']"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                  rows={3}
                />
              </div>

              <button
                onClick={handleCheck}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Check Answer
              </button>

              {feedback.type && (
                <div
                  className={`p-4 rounded-lg ${
                    feedback.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : feedback.type === 'error'
                      ? 'bg-red-50 border border-red-200 text-red-800'
                      : 'bg-blue-50 border border-blue-200 text-blue-800'
                  }`}
                >
                  {feedback.message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hint Button - Fixed Position */}
        <div className="fixed bottom-6 right-6">
          <div className="relative">
            <button
              onMouseEnter={() => setShowHint(true)}
              onMouseLeave={() => setShowHint(false)}
              onClick={() => {
                setCurrentHintIndex(
                  (prev) => (prev + 1) % exercise.hints.length,
                )
                setShowHint(true)
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-colors"
              title="Hint"
            >
              💡
            </button>

            {showHint && (
              <div className="absolute bottom-full right-0 mb-2 w-80 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg">
                <div className="text-sm text-yellow-800">
                  <strong>
                    Hint {currentHintIndex + 1} of {exercise.hints.length}:
                  </strong>
                  <p className="mt-1">{exercise.hints[currentHintIndex]}</p>
                </div>
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-yellow-50 border-r border-b border-yellow-200"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

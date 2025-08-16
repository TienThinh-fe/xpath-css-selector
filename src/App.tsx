import React, { useState, useEffect } from 'react'
import { WelcomePage } from './components/WelcomePage'
import { ExercisePage } from './components/ExercisePage'
import { exercises } from './exercises'
import './App.css'

type AppState = 'welcome' | 'exercise'

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome')
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)

  // Initialize state from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const exerciseParam = urlParams.get('exercise')

    if (exerciseParam) {
      const exerciseNumber = parseInt(exerciseParam, 10)
      if (exerciseNumber >= 1 && exerciseNumber <= exercises.length) {
        setCurrentExerciseIndex(exerciseNumber - 1)
        setAppState('exercise')
      }
    }
  }, [])

  // Update URL when exercise changes
  const updateURL = (exerciseIndex: number) => {
    const url = new URL(window.location.href)
    url.searchParams.set('exercise', (exerciseIndex + 1).toString())
    window.history.pushState({}, '', url.toString())
  }

  const handleStart = () => {
    setAppState('exercise')
    setCurrentExerciseIndex(0)
    updateURL(0)
  }

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      const newIndex = currentExerciseIndex + 1
      setCurrentExerciseIndex(newIndex)
      updateURL(newIndex)
    }
  }

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      const newIndex = currentExerciseIndex - 1
      setCurrentExerciseIndex(newIndex)
      updateURL(newIndex)
    }
  }

  const handleGoToWelcome = () => {
    setAppState('welcome')
    const url = new URL(window.location.href)
    url.searchParams.delete('exercise')
    window.history.pushState({}, '', url.toString())
  }

  const currentExercise = exercises[currentExerciseIndex]

  if (appState === 'welcome') {
    return <WelcomePage onStart={handleStart} />
  }

  return (
    <ExercisePage
      exercise={currentExercise}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onGoToWelcome={handleGoToWelcome}
      hasNext={currentExerciseIndex < exercises.length - 1}
      hasPrevious={currentExerciseIndex > 0}
      exerciseNumber={currentExerciseIndex + 1}
      totalExercises={exercises.length}
    />
  )
}

export default App

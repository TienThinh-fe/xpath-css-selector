export interface Exercise {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  targetElement: string // Description of what to find
  hints: string[]
  validSelectors: string[] // Multiple correct answers
  component: React.ComponentType<ExerciseComponentProps>
}

export interface ExerciseComponentProps {
  onHighlight: (selector: string) => void
  clearHighlight: () => void
}

export type SelectorType = 'css' | 'xpath'

export interface ValidationResult {
  isValid: boolean
  matchedElements: Element[]
  error?: string
}

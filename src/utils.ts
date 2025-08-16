import type { ValidationResult, SelectorType } from './types'

export function validateSelector(
  selector: string,
  type: SelectorType,
  containerElement?: Element,
): ValidationResult {
  const container = containerElement || document

  try {
    let elements: Element[] = []

    if (type === 'css') {
      elements = Array.from(container.querySelectorAll(selector))
    } else if (type === 'xpath') {
      const result = document.evaluate(
        selector,
        container,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null,
      )

      for (let i = 0; i < result.snapshotLength; i++) {
        const node = result.snapshotItem(i)
        if (node && node.nodeType === Node.ELEMENT_NODE) {
          elements.push(node as Element)
        }
      }
    }

    return {
      isValid: elements.length > 0,
      matchedElements: elements,
    }
  } catch (error) {
    return {
      isValid: false,
      matchedElements: [],
      error: error instanceof Error ? error.message : 'Invalid selector',
    }
  }
}

export function highlightElements(elements: Element[]): void {
  // Remove existing highlights
  clearHighlights()

  // Add highlight class to matched elements
  elements.forEach((element) => {
    element.classList.add('highlighted')
  })
}

export function clearHighlights(): void {
  document.querySelectorAll('.highlighted').forEach((element) => {
    element.classList.remove('highlighted')
  })
}

export function checkAnswer(
  userSelector: string,
  type: SelectorType,
  validSelectors: string[],
  containerElement?: Element,
): boolean {
  const userResult = validateSelector(userSelector, type, containerElement)

  if (!userResult.isValid || userResult.matchedElements.length === 0) {
    return false
  }

  // Check if user's selector matches any of the valid selectors
  for (const validSelector of validSelectors) {
    const validResult = validateSelector(validSelector, type, containerElement)

    if (
      validResult.isValid &&
      arraysEqual(
        userResult.matchedElements.map((el) => el),
        validResult.matchedElements.map((el) => el),
      )
    ) {
      return true
    }
  }

  return false
}

function arraysEqual<T>(a: T[], b: T[]): boolean {
  return a.length === b.length && a.every((val) => b.includes(val))
}

export function getSelectorType(selector: string): SelectorType {
  // Simple heuristic to detect XPath vs CSS
  if (
    selector.startsWith('/') ||
    selector.startsWith('./') ||
    selector.startsWith('//') ||
    selector.includes('[@') ||
    selector.includes('[contains(') ||
    selector.includes('[text()') ||
    selector.includes('following-sibling') ||
    selector.includes('preceding-sibling') ||
    selector.includes('ancestor') ||
    selector.includes('descendant')
  ) {
    return 'xpath'
  }
  return 'css'
}

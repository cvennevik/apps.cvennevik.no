/// <reference types="vite/client" />

import 'vitest'

// From @testing-library/jest-dom
interface CustomMatchers {
  toBeDisabled(): void
  toBeEnabled(): void
  toBeEmptyDOMElement(): void
  toBeInTheDocument(): void
  toBeInvalid(): void
  toBeRequired(): void
  toBeValid(): void
  toBeVisible(): void
  toContainElement(element: HTMLElement | SVGElement | null): void
  toContainHTML(htmlText: string): void
  toHaveAccessibleDescription(expectedAccessibleDescription?: string | RegExp): void
  toHaveAccessibleName(expectedAccessibleName?: string | RegExp): void
  toHaveAttribute(attr: string, value?: any): void
  toHaveClass(...classNames: string[], options?: { exact: boolean }): void
  toHaveFocus(): void
  toHaveFormValues(expectedValues: { [name: string]: any }): void
  toHaveStyle(css: string | object): void
  toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): void
  toHaveValue(value: string | string[] | number): void
  toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): void
  toBeChecked(): void
  toBePartiallyChecked(): void
  toHaveErrorMessage(text: string | RegExp): void
}

declare module 'vitest' {
  interface Assertion extends CustomMatchers {}
  interface AssymetricMatchersContaining extends CustomMatchers {}
}

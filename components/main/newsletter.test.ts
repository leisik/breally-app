import { describe, test, expect } from 'vitest'
import { emailRegex } from '@/utils/emailRegex'

describe('Test Email Input', () => {
  test('Valid email input', () => {
    const emailInput = 'test@example.com'
    const isValidEmail = emailRegex.test(emailInput)
    expect(isValidEmail).toBe(true)
  })

  test('Invalid email input', () => {
    const emailInput = 'invalid_email'
    const isValidEmail = emailRegex.test(emailInput)
    expect(isValidEmail).toBe(false)
  })

  test('Empty email input', () => {
    const emailInput = ''
    const isValidEmail = emailRegex.test(emailInput)
    expect(isValidEmail).toBe(false)
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar'

test('has correct headding text', () => {
  render(<NavBar />)
  const TextElement = screen.getByRole('heading', /Crypto Coins Index/i)
  expect(TextElement).toBeInTheDocument()
})

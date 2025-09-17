import Star from './Star'
import { render, screen } from '@testing-library/react'

describe('Star component', () => {
  it('should be unchecked when Star is not selected', () => {
    render(<Star />)
    const star = screen.getByRole('checkbox')

    expect(star).not.toBeChecked()
    expect(star).toHaveAttribute('fill', 'white')
  })

  it('should be checked when Star is selected', () => {
    render(<Star filled={true} />)
    const star = screen.getByRole('checkbox')

    expect(star).toBeChecked()
    expect(star).toHaveAttribute('fill', 'gold')
  })
})

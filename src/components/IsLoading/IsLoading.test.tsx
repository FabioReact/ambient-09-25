import { render, screen } from '@testing-library/react'
import IsLoading from './IsLoading'

// Arrange, Act, Assert

describe('IsLoading component', () => {
  it('should return Loading... when loading is true', () => {
    // Arrange
    render(
      <IsLoading loading={true}>
        <p>Contenu</p>
      </IsLoading>,
    )
    const element = screen.getByRole('status')
    const children = screen.queryByRole('paragraph', { name: 'Contenu' })

    // Assert
    expect(element).toHaveAttribute('aria-busy', 'true')
    expect(children).not.toBeInTheDocument()
  })

  it('should return children when loading is false', () => {
    render(
      <IsLoading loading={false}>
        <h1>children</h1>
      </IsLoading>,
    )

    const children = screen.getByRole('heading', { name: 'children' })

    expect(children).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/react'

import Home from 'pages'
import { renderWithTheme } from 'utils/tests/helpers'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/TextField', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextField"></div>
    }
  }
})

jest.mock('components/Pagination', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Pagination"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render home correctly', () => {
    renderWithTheme(<Home />)

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()

    expect(screen.getByTestId('Mock TextField')).toBeInTheDocument()

    expect(screen.getByTestId('Mock Pagination')).toBeInTheDocument()
  })
})

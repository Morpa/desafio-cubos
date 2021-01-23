import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Movie from '.'

import movieMock from './mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Badge', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Badge" />
  }
}))

jest.mock('components/MovieTypes', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock MovieTypes" />
  }
}))

describe('<Movie />', () => {
  it('should render movie page correctly', () => {
    renderWithTheme(<Movie {...movieMock} />)

    expect(
      screen.getByRole('heading', { name: movieMock.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /idioma/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /duração/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /orçamento/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Receita/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Lucro/i })).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /Poster of movie Pelé: O Nascimento de uma Lenda/i
      })
    ).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/w342/${movieMock.poster_path}`
    )
  })
})

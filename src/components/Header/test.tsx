import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByText(/movies/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /movies/i })).toHaveAttribute(
      'href',
      '/'
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #116193;
        width: 100%;
        padding: 1.6rem;
      }

      .c0 a {
        color: #00ede7;
        font-size: 40px;
        font-style: 'Lato';
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: color 0.3s ease-in-out;
        transition: color 0.3s ease-in-out;
      }

      .c0 a:hover {
        color: #00c9c4;
      }

      <header
        class="c0"
      >
        <a
          href="/"
        >
          Movies
        </a>
      </header>
    `)
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MovieTypes from '.'

describe('<MovieTypes />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MovieTypes name={'Suspense'} />)

    expect(screen.getByText(/suspense/i)).toBeInTheDocument()

    expect(screen.getByText(/suspense/i)).toHaveStyleRule(
      'background',
      '#e5e5e5',
      {
        modifier: ':hover'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})

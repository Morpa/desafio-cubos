import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Badge from '.'

describe('<Badge />', () => {
  it('should render the normal size by default', () => {
    renderWithTheme(
      <Badge>
        <div>Percent</div>
      </Badge>
    )

    expect(
      screen.getByText(/percent/i).parentElement?.parentElement
    ).toHaveStyle({
      height: '5.6rem',
      width: '5.6rem'
    })
  })

  it('should render large size when is pased', () => {
    renderWithTheme(
      <Badge size="large">
        <div>Percent</div>
      </Badge>
    )

    expect(
      screen.getByText(/percent/i).parentElement?.parentElement
    ).toHaveStyle({
      height: '12rem',
      width: '12rem'
    })
  })

  it('should render small size when is pased', () => {
    renderWithTheme(
      <Badge size="small">
        <div>Percent</div>
      </Badge>
    )

    expect(
      screen.getByText(/percent/i).parentElement?.parentElement
    ).toHaveStyle({
      height: '4.0rem',
      width: '4.0rem'
    })
  })
})

import styled, { css, DefaultTheme } from 'styled-components'
import { PercentBadgeProps } from '.'

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xxlarge};
    width: ${theme.spacings.xxlarge};
  `,

  large: (theme: DefaultTheme) => css`
    height: 10rem;
    width: 10rem;
    font-size: ${theme.font.sizes.xxlarge};
    border: 0.3rem solid ${theme.colors.primary};
  `
}

export const Wrapper = styled.div<PercentBadgeProps>`
  ${({ theme, size }) => css`
    background: ${theme.colors.primary};
    padding: 0.2rem;
    border-radius: 50%;
    color: ${theme.colors.acqua};
    position: relative;

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
export const Circle = styled.div<PercentBadgeProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Abel';
    border: 0.3rem solid ${theme.colors.acqua};
    border-radius: 50%;
    width: 100%;
    height: 100%;
  `}
`

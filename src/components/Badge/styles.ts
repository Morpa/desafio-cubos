import styled, { css, DefaultTheme } from 'styled-components'
import { BadgeProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    width: ${theme.spacings.large};

    ${Circle} {
      border: 0.2rem solid ${theme.colors.acqua};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    height: ${theme.spacings.xxlarge};
    width: ${theme.spacings.xxlarge};

    ${Circle} {
      border: 0.3rem solid ${theme.colors.acqua};
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 10rem;
    width: 10rem;
    font-size: ${theme.font.sizes.xxlarge};
    border: 0.3rem solid ${theme.colors.primary};

    ${Circle} {
      border: 0.5rem solid ${theme.colors.acqua};
    }
  `
}

export const Wrapper = styled.div<BadgeProps>`
  ${({ theme, size }) => css`
    background: ${theme.colors.primary};
    padding: 0.2rem;
    border-radius: 50%;
    color: ${theme.colors.acqua};
    position: relative;

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

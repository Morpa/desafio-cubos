import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    width: 100%;
    padding: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.secondary};
      font-size: 40px;
      font-style: 'Lato';
      text-decoration: none;
      transition: color ${theme.transition.default};

      &:hover {
        color: ${shade(0.15, theme.colors.acqua)};
      }
    }
  `}
`

import { shade } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.span`
  ${({ theme }) => css`
    padding: 0.2rem 0.9rem;
    text-align: center;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    border-radius: 2rem;
    color: ${theme.colors.primary};
    transition: background ${theme.transition.default};

    &:hover {
      background: ${shade(0.1, theme.colors.white)};
    }
  `}
`

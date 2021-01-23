import { shade } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
`
export const List = styled.ul`
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
    padding: 0 16px;
  `}
`
export const Page = styled.li`
  ${({ theme }) => css`
    list-style: none;
    color: ${theme.colors.primary};
    margin: 0.4rem;
    transition: ${theme.transition.default};

    &:hover {
      color: ${shade(0.2, theme.colors.primary)};
      cursor: pointer;
    }
  `}
`

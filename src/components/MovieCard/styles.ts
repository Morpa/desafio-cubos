import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

import * as MovieTypeStyles from 'components/MovieTypes/styles'

export const Wrapper = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: ${theme.border.radius};
  `}
`
export const MovieWrapper = styled(motion.a)`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    margin: 2rem 0;
    width: 100%;
    height: 32rem;
    margin-bottom: 4rem;
    background: ${theme.colors.cardBackground};
    text-decoration: none;
    color: ${theme.colors.textColor};

    ${media.lessThan('medium')`
      flex-direction: column-reverse;
      width: 100%;
      height: 100%;
    `}
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    width: 20rem;
    height: 100%;
    background: ${theme.colors.primary};
    object-fit: cover;

    ${media.lessThan('medium')`
        width: 95%;
        margin: 0 auto;
        max-height: 100%;
    `}
  `}
`

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  display: block;
`

export const Header = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-items: flex-start;
    height: 6.4rem;
    flex: 1;
    padding-left: 9.6rem;
    padding-right: ${theme.spacings.xxsmall};
    background: ${theme.colors.primary};
    color: ${theme.colors.acqua};
    overflow: auto;
    white-space: nowrap;
    font-family: 'Abel';

    ${media.lessThan('medium')`
    align-items: center;
        white-space: normal;
        min-height:90%;
        font-size:${theme.font.sizes.medium}
      `};
  `}
`

export const InfosWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    padding: ${theme.spacings.small};
    overflow: hidden;
  `}
`

export const Date = styled.p`
  ${({ theme }) => css`
    align-self: flex-start;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.textColor};
  `}
`

export const Overview = styled.div`
  flex: 1;
  max-height: 13rem;
  overflow: hidden;
  text-overflow: clip;
`

export const Categories = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall} 0;

    ${media.lessThan('medium')`
      flex-wrap: wrap;
      justify-content: center;
      margin-top: ${theme.spacings.xxsmall};

      ${MovieTypeStyles.Wrapper} {
        margin: 0.4rem;
      }
    `}
  `}

  ${MovieTypeStyles.Wrapper} {
    margin-right: 0.4rem;
  }
`

export const BadgeWrapper = styled.div`
  ${({ theme }) => css`
    width: 7rem;
    height: 7rem;
    position: absolute;
    margin-top: ${theme.spacings.small};
    margin-left: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
  `}
`

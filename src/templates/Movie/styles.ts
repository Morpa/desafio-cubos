import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { darken } from 'polished'
import media from 'styled-media-query'

import * as MovieTypeStyles from 'components/MovieTypes/styles'

export const MovieWrapper = styled.main`
  display: flex;
  flex-direction: column;
`
export const MovieDetailsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.large};
    width: 100%;
    height: auto;
    background: ${theme.colors.movieBackground};
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 6.6rem;
    width: 100%;
    padding: 1.2rem 3.8rem;
    background: ${darken(0.1, theme.colors.movieBackground)};

    h1 {
      color: ${theme.colors.primary};
      white-space: nowrap;
      overflow: hidden;
      font-weight: 300;
    }

    p {
      font-weight: 300;
      font-size: 1.8rem;
      color: ${theme.colors.textColor};
      margin-bottom: 8px;
    }

    ${media.lessThan('medium')`
      height: auto;
      display: flex;

      h1{
        white-space: normal;
        overflow: unset;
      }
    `}
  `}
`

export const MovieDetailsContent = styled.section`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    padding: 0 1rem;
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: ${theme.spacings.large};
  `}
`

export const Overview = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow: hidden;
    text-overflow: clip;

    h2 {
      color: ${theme.colors.primary};
      margin-bottom: 0.4rem;
    }

    p {
      text-align: justify;
      margin: 1rem 0;
    }
  `}
`
export const MovieDetailsDivider = styled.hr`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.acqua};
    color: ${theme.colors.acqua};
  `}
`

export const DetailsInfo = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const InfosWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-top: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top: ${theme.spacings.medium};
    `};
  `}
`

export const Info = styled.li`
  ${({ theme }) => css`
    list-style: none;
    font-size: ${theme.font.sizes.small};
  `}
`

export const InfosFooter = styled.footer`
  display: flex;
  height: auto;
`

export const Categories = styled.footer`
  display: flex;
  flex: 1;
  max-height: 3rem;

  > span {
    margin-right: 0.3rem;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: baseline;

    ${MovieTypeStyles.Wrapper} {
        margin: 0.5rem;
      }
  `};
`

export const MovieCover = styled(motion.img)`
  ${({ theme }) => css`
    width: 34rem;
    height: 51rem;
    background-size: cover;

    ${media.lessThan('medium')`
    width: 100%;
    height: auto;
    padding: 0 ${theme.spacings.xxsmall};
  `}
  `}
`

export const EmbedVideo = styled.iframe`
  ${({ theme }) => css`
    flex: 1;
    margin:  ${theme.spacings.large}; 0;
    height:54rem;
    border: 0;

    ${media.lessThan('medium')`
      padding: 0 1rem;
      height: auto;
    `}
  `}
`

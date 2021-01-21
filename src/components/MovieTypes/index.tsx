import * as S from './styles'

export type MovieTypesProps = {
  name: string
}

const MovieTypes = ({ name }: MovieTypesProps) => <S.Wrapper>{name}</S.Wrapper>

export default MovieTypes

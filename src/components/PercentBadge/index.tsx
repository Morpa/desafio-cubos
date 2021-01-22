import * as S from './styles'

export type PercentBadgeProps = {
  size?: 'normal' | 'large'
  children: React.ReactNode
}

const PercentBadge = ({ size = 'normal', children }: PercentBadgeProps) => (
  <S.Wrapper size={size}>
    <S.Circle>{children}</S.Circle>
  </S.Wrapper>
)

export default PercentBadge

import * as S from './styles'

export type BadgeProps = {
  size?: 'small' | 'normal' | 'large'

  children: React.ReactNode
}

const Badge = ({ size = 'normal', children }: BadgeProps) => (
  <S.Wrapper size={size}>
    <S.Circle>{children}</S.Circle>
  </S.Wrapper>
)

export default Badge

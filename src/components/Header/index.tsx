import Link from 'next/link'

import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Link href="/" passHref>
      <a>Movies</a>
    </Link>
  </S.Wrapper>
)

export default Header

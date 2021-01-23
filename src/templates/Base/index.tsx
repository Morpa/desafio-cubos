import { Container } from 'components/Container'
import Header from 'components/Header'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
)

export default Base

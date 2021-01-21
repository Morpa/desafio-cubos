import { Story, Meta } from '@storybook/react/types-6-0'
import MovieTypes, { MovieTypesProps } from '.'

export default {
  title: 'MovieTypes',
  component: MovieTypes,
  args: {
    name: 'Terror'
  }
} as Meta

export const Default: Story<MovieTypesProps> = (args) => (
  <MovieTypes {...args} />
)

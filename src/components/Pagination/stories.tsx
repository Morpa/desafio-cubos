import { Story, Meta } from '@storybook/react/types-6-0'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    moviesPerPage: 5,
    totalMovies: 25,
    paginate: 1,
    currentPage: 1
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

import { Story, Meta } from '@storybook/react/types-6-0'
import Badge, { BadgeProps } from '.'

export default {
  title: 'Badge',
  component: Badge
} as Meta

export const Default: Story<BadgeProps> = (args) => <Badge {...args} />
Default.args = {
  children: ' 98%'
}

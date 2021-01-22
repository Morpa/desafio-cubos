import { Story, Meta } from '@storybook/react/types-6-0'
import PercentBadge, { PercentBadgeProps } from '.'

export default {
  title: 'PercentBadge',
  component: PercentBadge
} as Meta

export const Default: Story<PercentBadgeProps> = (args) => (
  <PercentBadge {...args} />
)
Default.args = {
  children: ' 98%'
}

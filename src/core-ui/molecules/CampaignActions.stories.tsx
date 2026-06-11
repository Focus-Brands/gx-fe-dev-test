import type { Meta, StoryObj } from '@storybook/react-vite';
import { CampaignActions } from './CampaignActions';

const meta = {
  title: 'Core UI/Molecules/CampaignActions',
  component: CampaignActions,
  tags: ['autodocs'],
  args: {
    primary: { label: 'Primary action', href: '#primary' },
    secondary: { label: 'Secondary action', href: '#secondary' },
  },
} satisfies Meta<typeof CampaignActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryOnly: Story = {
  args: { secondary: null },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonLink } from './ButtonLink';

const meta = {
  title: 'Core UI/Atoms/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  args: {
    children: 'Call to action',
    href: '#action',
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'Secondary action',
    variant: 'secondary',
  },
};

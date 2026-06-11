import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta = {
  title: 'Core UI/Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'A simple campaign heading',
    level: 1,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LevelOne: Story = {};

export const LevelTwo: Story = {
  args: { level: 2 },
};

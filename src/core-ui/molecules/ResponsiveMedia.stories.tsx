import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveMedia } from './ResponsiveMedia';

const meta = {
  title: 'Core UI/Molecules/ResponsiveMedia',
  component: ResponsiveMedia,
  tags: ['autodocs'],
  args: {
    desktopSrc: '/art/assessment-placeholder.svg',
    alt: 'Abstract campaign artwork',
  },
} satisfies Meta<typeof ResponsiveMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

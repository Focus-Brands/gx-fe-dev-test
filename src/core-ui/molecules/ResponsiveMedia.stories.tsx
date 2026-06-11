import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveMedia } from './ResponsiveMedia';

const meta = {
  title: 'Core UI/Molecules/ResponsiveMedia',
  component: ResponsiveMedia,
  tags: ['autodocs'],
  args: {
    desktopSrc: '/art/campaign-default.png',
    alt: 'Campaign image placeholder',
    width: 648,
    height: 420,
  },
} satisfies Meta<typeof ResponsiveMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

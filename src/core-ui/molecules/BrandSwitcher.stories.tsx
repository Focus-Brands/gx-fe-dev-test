import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrandSwitcher } from './BrandSwitcher';

const options = [
  { label: "Auntie Anne's", value: 'auntie-annes' },
  { label: 'Jamba', value: 'jamba' },
  { label: "Moe's", value: 'moes' },
];

const meta = {
  title: 'Core UI/Molecules/BrandSwitcher',
  component: BrandSwitcher,
  tags: ['autodocs'],
  args: {
    label: 'Brand preview',
    onChange: () => undefined,
    options,
    value: 'auntie-annes',
  },
  render: function BrandSwitcherStory(args) {
    const [value, setValue] = useState(args.value);

    return <BrandSwitcher {...args} onChange={setValue} value={value} />;
  },
} satisfies Meta<typeof BrandSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

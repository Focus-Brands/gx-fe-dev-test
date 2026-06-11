import type { Meta, StoryObj } from '@storybook/react-vite';
import { CampaignHero } from './CampaignHero';

const meta = {
  title: 'Core UI/Organisms/CampaignHero',
  component: CampaignHero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A presentation-only campaign hero with required and optional content examples.',
      },
    },
  },
  args: {
    id: 'storybook-starter',
    title: 'A neutral campaign hero',
    description:
      'This story uses direct props and a neutral visual treatment.',
    media: {
      desktopSrc: '/art/campaign-default.png',
      alt: 'Campaign image placeholder',
      width: 648,
      height: 420,
    },
    primaryAction: {
      label: 'Primary action',
      href: '#primary',
    },
  },
} satisfies Meta<typeof CampaignHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NeutralStarter: Story = {};

export const WithOptionalContent: Story = {
  args: {
    eyebrow: 'Optional eyebrow',
    badgeLabel: 'Optional badge',
    secondaryAction: {
      label: 'Secondary action',
      href: '#secondary',
    },
    legalDisclaimer: 'Optional legal copy belongs below the actions.',
    showGradient: true,
  },
};

// TODO: Add a story that demonstrates dynamic branded campaign content and themes.

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
          'A presentation-only hero. Complete the assessment by mapping the mock Contentful entries to this prop contract and adding a token-driven theme switcher in Storybook.',
      },
    },
  },
  args: {
    id: 'storybook-starter',
    title: 'A neutral campaign hero',
    description:
      'This story intentionally uses direct props and does not import mock Contentful data or brand design tokens.',
    media: {
      desktopSrc: '/art/assessment-placeholder.svg',
      alt: 'Abstract campaign artwork',
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

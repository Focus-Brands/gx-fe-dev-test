import { CampaignHero } from './core-ui';

const starterHero = {
  id: 'starter-campaign',
  title: 'Make the next campaign impossible to miss.',
  description:
    'A simple, responsive campaign hero ready to be connected to content and brand themes.',
  media: {
    desktopSrc: '/art/assessment-placeholder.svg',
    alt: 'Abstract campaign artwork',
  },
  primaryAction: {
    label: 'Explore the campaign',
    href: '#campaign',
  },
};

export default function App() {
  return (
    <main className="app-shell">
      <CampaignHero {...starterHero} />
    </main>
  );
}

import { useState } from 'react';
import { BrandSwitcher, CampaignHero } from './core-ui';

const brandOptions = [
  { label: "Auntie Anne's", value: 'auntie-annes' },
  { label: 'Jamba', value: 'jamba' },
  { label: "Moe's", value: 'moes' },
];

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
  const [selectedBrand, setSelectedBrand] = useState(brandOptions[0].value);

  return (
    <main className="app-shell">
      <div className="assessment-stage">
        <BrandSwitcher
          label="Brand preview"
          onChange={setSelectedBrand}
          options={brandOptions}
          value={selectedBrand}
        />
        <CampaignHero {...starterHero} />
      </div>
    </main>
  );
}

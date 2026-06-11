import { useState } from 'react';
import { BrandSwitcher, CampaignHero } from './core-ui';

const brandOptions = [
  { label: "Auntie Anne's", value: 'auntie-annes' },
  { label: 'Jamba', value: 'jamba' },
  { label: "Moe's", value: 'moes' },
];

const starterHero = {
  id: 'starter-campaign',
  title: `Let's Begin!`,
  description:
    'Use the provided campaign data and design tokens to bring each brand’s experience to life.',
  media: {
    desktopSrc: '/art/campaign-default.png',
    alt: 'Campaign image placeholder',
    width: 648,
    height: 420,
  },
};

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState(brandOptions[0].value);

  return (
    <main className="app-shell">
      <div className="campaign-stage">
        {/* TODO: Make the selected brand update the hero content and visual theme. */}
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

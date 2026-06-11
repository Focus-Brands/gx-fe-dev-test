import type { MockContentfulCampaign } from './types';

function image(
  id: string,
  url: string,
  title: string,
  description: string,
  width: number,
  height: number,
) {
  return {
    sys: { id },
    fields: {
      title,
      description,
      file: {
        url,
        details: { image: { width, height } },
      },
    },
  };
}

function action(
  id: string,
  label: string,
  url: string,
  style: 'primary' | 'secondary',
) {
  return {
    sys: { id },
    fields: { label, url, style },
  };
}

export const mockCampaigns = {
  auntieAnnes: {
    sys: { id: 'campaign-auntie-annes' },
    fields: {
      brand: 'auntie-annes',
      headline: 'Fresh from the oven and ready to share.',
      summary: 'Turn an everyday stop into a warm, shareable campaign moment.',
      eyebrow: 'Seasonal favorite',
      badge: 'New',
      desktopImage: image(
        'asset-aa-desktop',
        '/art/auntieannes-desktop.svg',
        "Auntie Anne's campaign",
        'Warm pretzel campaign artwork',
        1440,
        960,
      ),
      mobileImage: image(
        'asset-aa-mobile',
        '/art/auntieannes-mobile.svg',
        "Auntie Anne's mobile campaign",
        'Warm pretzel campaign artwork',
        720,
        960,
      ),
      actions: [
        action('link-aa-order', 'Order now', '#order-now', 'primary'),
        action('link-aa-menu', 'View menu', '#menu', 'secondary'),
      ],
      legalCopy: 'Offer available at participating locations.',
      gradientEnabled: true,
    },
  },
  jamba: {
    sys: { id: 'campaign-jamba' },
    fields: {
      brand: 'jamba',
      headline: 'Blend something bright into your day.',
      summary: 'A fruit-forward campaign built for a quick burst of energy.',
      desktopImage: image(
        'asset-jamba-desktop',
        '/art/jamba-desktop.svg',
        'Jamba campaign',
        'Bright fruit campaign artwork',
        1440,
        960,
      ),
      mobileImage: image(
        'asset-jamba-mobile',
        '/art/jamba-mobile.svg',
        'Jamba mobile campaign',
        'Bright fruit campaign artwork',
        720,
        960,
      ),
      actions: [
        action('link-jamba-start', 'Start an order', '#start', 'primary'),
        action('link-jamba-menu', 'See smoothies', '#smoothies', 'secondary'),
      ],
      legalCopy: 'Available while supplies last.',
      gradientEnabled: true,
    },
  },
  moes: {
    sys: { id: 'campaign-moes' },
    fields: {
      brand: 'moes',
      headline: 'Build a meal with a little more kick.',
      summary: 'Bold flavors meet a high-energy campaign moment.',
      badge: 'Fan favorite',
      desktopImage: image(
        'asset-moes-desktop',
        '/art/moes-desktop.svg',
        "Moe's campaign",
        'Bold meal campaign artwork',
        1440,
        960,
      ),
      mobileImage: image(
        'asset-moes-mobile',
        '/art/moes-mobile.svg',
        "Moe's mobile campaign",
        'Bold meal campaign artwork',
        720,
        960,
      ),
      actions: [
        action('link-moes-build', 'Build a bowl', '#build-a-bowl', 'primary'),
      ],
      legalCopy: 'Delivery fees and taxes may apply.',
      gradientEnabled: true,
    },
  },
} satisfies Record<string, MockContentfulCampaign>;

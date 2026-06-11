// @vitest-environment node

import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const appSource = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8');
const previewSource = readFileSync(
  new URL('../.storybook/preview.tsx', import.meta.url),
  'utf8',
);
const neutralStorySource = readFileSync(
  new URL('./core-ui/organisms/CampaignHero.stories.tsx', import.meta.url),
  'utf8',
);

describe('starter assessment boundaries', () => {
  it('keeps the default app independent from mock data and mapping utilities', () => {
    expect(appSource).not.toContain('mock-contentful');
    expect(appSource).not.toContain('core-utils');
    expect(appSource).not.toContain('mockDesignTokens');
    expect(appSource).toContain('BrandSwitcher');
  });

  it('does not ship a completed brand toolbar in the starter preview', () => {
    expect(previewSource).not.toContain('globalTypes');
    expect(previewSource).not.toContain('data-brand');
    expect(previewSource).not.toContain('mockDesignTokens');
  });

  it('keeps the starter hero story on direct presentation props', () => {
    expect(neutralStorySource).not.toContain('mockCampaigns');
    expect(neutralStorySource).not.toContain('mapCampaignHeroProps');
    expect(neutralStorySource).not.toContain('mockDesignTokens');
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CampaignHero } from './CampaignHero';

const requiredProps = {
  id: 'test-campaign',
  title: 'Test campaign',
  media: {
    desktopSrc: '/art/assessment-placeholder.svg',
    alt: 'Test campaign artwork',
  },
  primaryAction: {
    label: 'Start now',
    href: '#start',
  },
};

describe('CampaignHero', () => {
  it('renders required content with accessible semantics', () => {
    render(<CampaignHero {...requiredProps} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Test campaign' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Test campaign artwork' }),
    ).toHaveAttribute('src', '/art/assessment-placeholder.svg');
    expect(screen.getByRole('link', { name: 'Start now' })).toHaveAttribute(
      'href',
      '#start',
    );
  });

  it('renders optional campaign content when supplied', () => {
    render(
      <CampaignHero
        {...requiredProps}
        badgeLabel="New"
        eyebrow="Seasonal"
        legalDisclaimer="Terms apply."
        secondaryAction={{ label: 'Learn more', href: '#learn' }}
      />,
    );

    expect(screen.getByText('Seasonal')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Terms apply.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute(
      'href',
      '#learn',
    );
  });
});

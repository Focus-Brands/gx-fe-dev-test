import { Badge } from '../atoms/Badge';
import { Heading } from '../atoms/Heading';
import { CampaignActions } from '../molecules/CampaignActions';
import { ResponsiveMedia } from '../molecules/ResponsiveMedia';
import type { CampaignHeroProps } from '../types';

export function CampaignHero({
  id,
  title,
  description,
  eyebrow,
  badgeLabel,
  media,
  primaryAction,
  secondaryAction,
  legalDisclaimer,
  showGradient = false,
}: CampaignHeroProps) {
  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className="campaign-hero"
      data-gradient={showGradient ? 'visible' : 'hidden'}
    >
      <div className="campaign-hero__copy">
        {eyebrow || badgeLabel ? (
          <div className="campaign-hero__meta">
            {eyebrow ? (
              <p className="campaign-hero__eyebrow">{eyebrow}</p>
            ) : null}
            {badgeLabel ? <Badge>{badgeLabel}</Badge> : null}
          </div>
        ) : null}

        <Heading id={titleId} level={1}>
          {title}
        </Heading>

        {description ? (
          <p className="campaign-hero__description">{description}</p>
        ) : null}

        <CampaignActions primary={primaryAction} secondary={secondaryAction} />

        {legalDisclaimer ? (
          <p className="campaign-hero__legal">{legalDisclaimer}</p>
        ) : null}
      </div>

      <div className="campaign-hero__media">
        <ResponsiveMedia {...media} />
      </div>
    </section>
  );
}

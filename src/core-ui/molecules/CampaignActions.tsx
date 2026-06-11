import { ButtonLink } from '../atoms/ButtonLink';
import type { CampaignAction } from '../types';

export type CampaignActionsProps = {
  primary: CampaignAction;
  secondary?: CampaignAction | null;
};

export function CampaignActions({ primary, secondary }: CampaignActionsProps) {
  return (
    <div className="campaign-actions">
      <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
      {secondary ? (
        <ButtonLink href={secondary.href} variant="secondary">
          {secondary.label}
        </ButtonLink>
      ) : null}
    </div>
  );
}

import type { CampaignHeroProps } from '../core-ui';
import type { MockContentfulCampaign } from '../mock-contentful/types';

export function mapCampaignHeroProps(
  _entry: MockContentfulCampaign,
): CampaignHeroProps {
  // TODO: Transform a campaign entry into the existing hero prop contract.
  throw new Error('Campaign mapping is not implemented');
}

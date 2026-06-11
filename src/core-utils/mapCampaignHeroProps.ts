import type { CampaignHeroProps } from '../core-ui';
import type { MockContentfulCampaign } from '../mock-contentful/types';

/**
 * Candidate task:
 * Map the raw Contentful-shaped entry to the business-agnostic core-ui props.
 * Keep content-system knowledge in this module rather than in CampaignHero.
 */
export function mapCampaignHeroProps(
  entry: MockContentfulCampaign,
): CampaignHeroProps {
  void entry;
  throw new Error('Candidate implementation required');
}

export type CampaignAction = {
  label: string;
  href: string;
};

export type CampaignMedia = {
  desktopSrc: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CampaignHeroProps = {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  badgeLabel?: string;
  media: CampaignMedia;
  primaryAction: CampaignAction;
  secondaryAction?: CampaignAction | null;
  legalDisclaimer?: string;
  showGradient?: boolean;
};

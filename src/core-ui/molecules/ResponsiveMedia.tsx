import type { CampaignMedia } from '../types';

export type ResponsiveMediaProps = CampaignMedia;

export function ResponsiveMedia({
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
}: ResponsiveMediaProps) {
  return (
    <picture className="responsive-media">
      {mobileSrc ? (
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
      ) : null}
      <img alt={alt} height={height} src={desktopSrc} width={width} />
    </picture>
  );
}

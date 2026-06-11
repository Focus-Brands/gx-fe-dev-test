export type MockContentfulAsset = {
  sys: { id: string };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
};

export type MockContentfulLink = {
  sys: { id: string };
  fields: {
    label: string;
    url: string;
    style: 'primary' | 'secondary';
  };
};

export type MockContentfulCampaign = {
  sys: { id: string };
  fields: {
    brand: 'auntie-annes' | 'jamba' | 'moes';
    headline: string;
    summary?: string;
    eyebrow?: string;
    badge?: string;
    desktopImage: MockContentfulAsset;
    mobileImage?: MockContentfulAsset;
    actions: MockContentfulLink[];
    legalCopy?: string;
    gradientEnabled?: boolean;
  };
};

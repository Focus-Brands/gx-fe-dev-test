export type BrandId = 'auntie-annes' | 'jamba' | 'moes';

export type BrandTokenSet = {
  color: {
    page: string;
    surface: string;
    text: string;
    mutedText: string;
    accent: string;
    accentHover: string;
    onAccent: string;
    border: string;
  };
  radius: {
    hero: string;
    action: string;
  };
  shadow: {
    hero: string;
  };
};

export const mockDesignTokens: Record<BrandId, BrandTokenSet> = {
  'auntie-annes': {
    color: {
      page: '#f8f5f2',
      surface: '#fffaf8',
      text: '#2d0c1f',
      mutedText: '#6f4b5e',
      accent: '#c2416e',
      accentHover: '#9f2955',
      onAccent: '#ffffff',
      border: '#eadcd7',
    },
    radius: { hero: '2rem', action: '999px' },
    shadow: { hero: '0 1.5rem 4rem rgba(45, 12, 31, 0.14)' },
  },
  jamba: {
    color: {
      page: '#f4fbf5',
      surface: '#f7fff8',
      text: '#052e16',
      mutedText: '#3f684b',
      accent: '#15803d',
      accentHover: '#166534',
      onAccent: '#ffffff',
      border: '#d8e9db',
    },
    radius: { hero: '1.25rem', action: '0.75rem' },
    shadow: { hero: '0 1.5rem 4rem rgba(5, 46, 22, 0.12)' },
  },
  moes: {
    color: {
      page: '#fdf7f2',
      surface: '#fffaf7',
      text: '#451a03',
      mutedText: '#7c4a2f',
      accent: '#c2410c',
      accentHover: '#9a3412',
      onAccent: '#ffffff',
      border: '#efd9cc',
    },
    radius: { hero: '0.5rem', action: '0.25rem' },
    shadow: { hero: '0 1.5rem 4rem rgba(69, 26, 3, 0.14)' },
  },
};

import type { HTMLAttributes } from 'react';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const levelClasses: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'heading--one',
  2: 'heading--two',
  3: 'heading--three',
  4: 'heading--four',
  5: 'heading--five',
  6: 'heading--six',
};

export function Heading({ level = 2, className = '', ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`heading ${levelClasses[level]} ${className}`.trim()}
      {...props}
    />
  );
}

import type { AnchorHTMLAttributes } from 'react';

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({
  className = '',
  variant = 'primary',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`button-link button-link--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}

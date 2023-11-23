import type { iconPaths } from './IconPaths';

/** Icon links to social media */
export const iconLinks: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
  { label: 'X', href: 'https://x.com/lucasmancini', icon: 'x-logo' },
  { label: 'GitHub', href: 'https://github.com/lucas-mancini', icon: 'github-logo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucasmancini', icon: 'linkedin-logo' },
];

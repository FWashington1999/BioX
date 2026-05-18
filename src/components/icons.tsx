import type { ReactNode, SVGProps } from 'react';

type SvgRest = Omit<SVGProps<SVGSVGElement>, 'children' | 'stroke'>;

export interface IconProps extends SvgRest {
  size?: number;
  stroke?: number;
}

interface BaseIconProps extends IconProps {
  paths: ReactNode;
}

const Icon = ({ paths, size = 22, stroke = 1.6, ...rest }: BaseIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {paths}
  </svg>
);

export const IconWhatsApp = (p: IconProps) => (
  <Icon {...p} size={p.size ?? 22} paths={<>
    <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.45L3 21l1.6-4.7A8.5 8.5 0 1 1 20.5 12Z"/>
    <path d="M8.5 9.2c.2-.6.6-.7 1-.7h.4c.2 0 .4 0 .6.5l.7 1.6c.1.2.1.4 0 .5l-.3.5c-.1.2-.2.3 0 .6.3.5 1.4 1.7 2.6 2.2.3.1.5.1.6 0l.5-.5c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.4.3 0 .2 0 .8-.3 1.4-.3.7-1.4 1.2-2 1.3-.5 0-1 .2-3.4-.7-2.8-1.1-4.6-3.9-4.7-4-.2-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5Z" fill="currentColor" stroke="none"/>
  </>}/>
);

export const IconArrowRight   = (p: IconProps) => <Icon {...p} paths={<><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></>}/>;
export const IconArrowUpRight = (p: IconProps) => <Icon {...p} paths={<><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>}/>;
export const IconCheck        = (p: IconProps) => <Icon {...p} paths={<path d="M5 12.5 10 17l9-10"/>}/>;
export const IconShield       = (p: IconProps) => <Icon {...p} paths={<><path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></>}/>;
export const IconGlobe        = (p: IconProps) => <Icon {...p} paths={<><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></>}/>;
export const IconNet          = (p: IconProps) => <Icon {...p} paths={<><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m6.5 6.5 3.5 3.5M17.5 6.5 14 10M6.5 17.5 10 14M17.5 17.5 14 14"/></>}/>;
export const IconBolt         = (p: IconProps) => <Icon {...p} paths={<path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/>}/>;
export const IconLock         = (p: IconProps) => <Icon {...p} paths={<><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>}/>;
export const IconUser         = (p: IconProps) => <Icon {...p} paths={<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>}/>;
export const IconMolecule     = (p: IconProps) => <Icon {...p} paths={<>
  <circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
  <circle cx="12" cy="12" r="2.4"/>
  <path d="m7.6 7.6 2.8 2.8M16.4 7.6l-2.8 2.8M7.6 16.4l2.8-2.8M16.4 16.4l-2.8-2.8"/>
</>}/>;
export const IconDNA          = (p: IconProps) => <Icon {...p} paths={<>
  <path d="M5 3c4 4 10 4 14 0"/>
  <path d="M5 21c4-4 10-4 14 0"/>
  <path d="M5 3c0 6 14 12 14 18"/>
  <path d="M19 3c0 6-14 12-14 18"/>
</>}/>;
export const IconFlask        = (p: IconProps) => <Icon {...p} paths={<>
  <path d="M9 3h6"/><path d="M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 9V3"/>
  <path d="M7.5 14h9"/>
</>}/>;
export const IconCapsule      = (p: IconProps) => <Icon {...p} paths={<>
  <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)"/>
  <path d="M9.5 6.5 14 15"/>
</>}/>;
export const IconAtom         = (p: IconProps) => <Icon {...p} paths={<>
  <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
  <ellipse cx="12" cy="12" rx="10" ry="4"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
</>}/>;
export const IconContainer    = (p: IconProps) => <Icon {...p} paths={<>
  <rect x="3" y="7" width="18" height="11" rx="1"/>
  <path d="M7 7v11M11 7v11M15 7v11M19 7v11"/>
</>}/>;
export const IconBeaker       = (p: IconProps) => <Icon {...p} paths={<>
  <path d="M6 3h12"/><path d="M8 3v6l-3 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-3-9V3"/>
  <circle cx="11" cy="15" r="0.8" fill="currentColor"/>
  <circle cx="14" cy="17" r="0.6" fill="currentColor"/>
</>}/>;
export const IconMail         = (p: IconProps) => <Icon {...p} paths={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>}/>;
export const IconPin          = (p: IconProps) => <Icon {...p} paths={<><path d="M12 22s7-7.4 7-13a7 7 0 0 0-14 0c0 5.6 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></>}/>;
export const IconInstagram    = (p: IconProps) => <Icon {...p} paths={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/></>}/>;
export const IconChevron      = (p: IconProps) => <Icon {...p} paths={<path d="m6 9 6 6 6-6"/>}/>;
export const IconClose        = (p: IconProps) => <Icon {...p} paths={<><path d="M6 6 18 18"/><path d="M18 6 6 18"/></>}/>;
export const IconPlane        = (p: IconProps) => <Icon {...p} paths={<path d="M2 12c5-1 7-2 11-7l3 1-3 4 4 1 2-1 2 2-3 1c-1 5-3 7-4 11l-2-1 1-4-3-1-3 3-2-1 3-3-3-3-1 3-2-1Z" fill="currentColor" stroke="none"/>}/>;
export const IconMenu         = (p: IconProps) => <Icon {...p} paths={<><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}/>;

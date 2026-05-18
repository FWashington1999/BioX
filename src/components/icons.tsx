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

export const IconWhatsApp = (p: IconProps) => {
  const { size = 22, stroke: _stroke, ...rest } = p;
  void _stroke;
  return (
    <svg
      {...rest}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
    </svg>
  );
};

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

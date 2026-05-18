interface SectionHeadProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHead({ eyebrow, title, sub, align = 'left' }: SectionHeadProps) {
  return (
    <header className="bx-sec-head" style={{ textAlign: align }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="sub">{sub}</p>}
    </header>
  );
}

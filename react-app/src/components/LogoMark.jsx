import { useId } from 'react';
import { LOGO_VIEWBOX, LOGO_DOT, LOGO_LETTERS_D, LOGO_SWASH_D } from './logoPaths';

// The brand monogram as vector. `swashReveal` (0..1) wipes the swash in
// left-to-right — at 1 it is fully drawn, which is the normal resting
// state; the intro animation drives it from 0.
export default function LogoMark({
  size = 30,
  swashReveal = 1,
  lettersOpacity = 1,
  className,
  style,
}) {
  const uid = useId().replace(/:/g, '');
  const clipId = `swash-clip-${uid}`;

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      width={size}
      height={size}
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          {/* a touch of overshoot so the wipe never clips the end caps */}
          <rect x="-20" y="-20" width={1080 * Math.max(0, Math.min(1, swashReveal))} height="925" />
        </clipPath>
      </defs>
      <path d={LOGO_LETTERS_D} fill="currentColor" opacity={lettersOpacity} />
      <path d={LOGO_SWASH_D} fill="currentColor" clipPath={`url(#${clipId})`} />
      <circle cx={LOGO_DOT.cx} cy={LOGO_DOT.cy} r={LOGO_DOT.r} fill="var(--color-accent)" />
    </svg>
  );
}

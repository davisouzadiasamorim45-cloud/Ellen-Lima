import { LOGO_VIEWBOX, LOGO_DOT, LOGO_LETTERS_D, LOGO_SWASH_D } from './logoPaths';

// The monogram as an HTML string, for the header markup that is still
// injected via dangerouslySetInnerHTML. Same artwork as <LogoMark />.
export function logoSvgMarkup(size = 30) {
  return `<svg viewBox="${LOGO_VIEWBOX}" width="${size}" height="${size}" aria-hidden="true" focusable="false" style="display:block;overflow:visible">
<path d="${LOGO_LETTERS_D}" fill="currentColor"/>
<path d="${LOGO_SWASH_D}" fill="currentColor"/>
<circle cx="${LOGO_DOT.cx}" cy="${LOGO_DOT.cy}" r="${LOGO_DOT.r}" fill="var(--color-accent)"/>
</svg>`;
}

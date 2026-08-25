import {
  Shader,
  DotGrid,
  ChromaFlow,
  LinearGradient,
  CursorRipples,
  FilmGrain,
} from 'shaders/react';

// WebGPU cursor-trail shader (twinkling halftone dots revealed on movement,
// with chromatic ripple fringes and film grain) recolored to the site's
// gold palette instead of the library's default black/white. Shared by
// every dark closing section — Home's contact section and the Planos
// page's final CTA — so both read as the same design system.
export default function GoldTrailShader() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
      <Shader style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}>
        <DotGrid
          id="trailDots"
          density={40}
          dotSize={{
            type: 'map',
            source: 'trailFlow',
            channel: 'alpha',
            inputMax: 1,
            inputMin: 0,
            outputMax: 1,
            outputMin: 0,
          }}
          twinkle={0.9}
          visible={false}
        />
        <ChromaFlow id="trailFlow" intensity={1.4} radius={2.9} visible={false} />
        <LinearGradient
          colorA="#241c12"
          colorB="#17161a"
          colorSpace="hsl"
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 1 }}
        />
        <LinearGradient
          colorA="#7d5411"
          colorB="#facb8d"
          colorSpace="hsl"
          end={{ x: 1, y: 0 }}
          maskSource="trailDots"
          start={{ x: 0, y: 1 }}
        />
        <CursorRipples />
        <FilmGrain strength={0.1} />
      </Shader>
    </div>
  );
}

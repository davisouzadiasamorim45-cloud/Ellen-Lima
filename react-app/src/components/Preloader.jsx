import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import LogoMark from './LogoMark';
import { LOGO_SWASH_D } from './logoPaths';
import './Preloader.css';

const REDUCE =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// "Ellen Lima" — the E and the L are the two letters the monogram keeps.
const LETTERS = [
  { ch: 'E', keep: true },
  { ch: 'l' }, { ch: 'l' }, { ch: 'e' }, { ch: 'n' },
  { ch: ' ' },
  { ch: 'L', keep: true },
  { ch: 'i' }, { ch: 'm' }, { ch: 'a' },
];

// The swash band within the monogram's 1039x885 viewBox.
const SWASH_VB = '0 300 1039 197';

const T = {
  reveal: 60,     // letters start rising into view
  swash: 780,     // swash begins wiping across the whole name
  collapse: 1500, // the other letters drop away; E and L close in
  fly: 2200,      // the formed monogram travels to its slot in the nav
  fade: 2850,     // overlay clears
  done: 3200,
};

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('idle');
  const [flight, setFlight] = useState(null);
  const stageRef = useRef(null);
  const logoRef = useRef(null);
  const letterRefs = useRef([]);

  // Freeze each letter's natural width so it can be animated down to zero.
  useLayoutEffect(() => {
    letterRefs.current.forEach((el) => {
      if (el) el.style.width = `${el.getBoundingClientRect().width}px`;
    });
  }, []);

  useEffect(() => {
    if (REDUCE) {
      const t = setTimeout(() => setPhase('fade'), 150);
      return () => clearTimeout(t);
    }
    const timers = [
      setTimeout(() => setPhase('reveal'), T.reveal),
      setTimeout(() => setPhase('swash'), T.swash),
      setTimeout(() => setPhase('collapse'), T.collapse),
      setTimeout(() => setPhase('fly'), T.fly),
      setTimeout(() => setPhase('fade'), T.fade),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Measure the real nav logo and send the formed monogram into it. The
  // logo sits at the stage's centre, so transforming the stage moves and
  // scales the logo about its own centre.
  useLayoutEffect(() => {
    if (phase !== 'fly' || flight) return;
    const slot = document.querySelector('[data-logo-slot]');
    const from = logoRef.current?.getBoundingClientRect();
    const to = slot?.getBoundingClientRect();
    if (!from?.width || !to?.width) return;
    setFlight({
      scale: to.width / from.width,
      dx: to.left + to.width / 2 - (from.left + from.width / 2),
      dy: to.top + to.height / 2 - (from.top + from.height / 2),
    });
  }, [phase, flight]);

  useEffect(() => {
    if (phase !== 'fade') return;
    const t = setTimeout(onDone, REDUCE ? 350 : T.done - T.fade);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  const started = phase !== 'idle';
  const swashIn = ['swash', 'collapse', 'fly', 'fade'].includes(phase);
  const collapsed = ['collapse', 'fly', 'fade'].includes(phase);
  const flying = ['fly', 'fade'].includes(phase);

  return (
    <div className={`pl${phase === 'fade' ? ' pl--out' : ''}`} aria-hidden="true">
      <div
        ref={stageRef}
        className={`pl-stage${flying ? ' pl-stage--flying' : ''}`}
        style={
          flight
            ? { transform: `translate(${flight.dx}px, ${flight.dy}px) scale(${flight.scale})` }
            : undefined
        }
      >
        <div className={`pl-name${collapsed ? ' pl-name--collapsed' : ''}`}>
          {LETTERS.map((l, i) => (
            <span
              key={i}
              ref={(el) => { letterRefs.current[i] = el; }}
              className={`pl-l${l.keep ? ' pl-l--keep' : ''}`}
              style={{ '--i': i }}
            >
              <span className={`pl-l-in${started ? ' pl-l-in--up' : ''}`}>{l.ch}</span>
            </span>
          ))}
        </div>

        {/* the swash sweeping in, joining the two letters */}
        <svg
          className={`pl-swash${swashIn ? ' pl-swash--in' : ''}`}
          viewBox={SWASH_VB}
        >
          <path d={LOGO_SWASH_D} fill="currentColor" />
        </svg>

        {/* the real monogram, cross-faded in as the flight begins */}
        <div ref={logoRef} className="pl-logo">
          <LogoMark size="100%" />
        </div>
      </div>
    </div>
  );
}

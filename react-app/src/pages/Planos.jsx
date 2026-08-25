import { memo, useEffect, useMemo, useRef } from 'react';
import { getPlanosHeaderHtml, getPlanosMainInnerHtml } from './planosMarkup';
import { initPlanos } from './planosEffects';
import PlanosFinalSection from '../components/PlanosFinalSection';

function Planos() {
  const rootRef = useRef(null);

  // Same fix as Home: keep the dangerouslySetInnerHTML object identity
  // stable across re-renders, or React resets the innerHTML (and wipes
  // every DOM mutation initPlanos made) whenever a parent re-renders.
  const headerHtml = useMemo(() => ({ __html: getPlanosHeaderHtml() }), []);
  const mainHtml = useMemo(() => ({ __html: getPlanosMainInnerHtml() }), []);

  useEffect(() => {
    const cleanup = initPlanos(rootRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef}>
      <div dangerouslySetInnerHTML={headerHtml} />
      <main style={{ position: 'relative' }}>
        <div dangerouslySetInnerHTML={mainHtml} />
        <PlanosFinalSection />
      </main>
    </div>
  );
}

export default memo(Planos);

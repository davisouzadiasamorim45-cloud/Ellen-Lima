import { memo, useEffect, useMemo, useRef } from 'react';
import { getHomeHeaderHtml, getHomeMainInnerHtml } from './homeMarkup';
import { initHome } from './homeEffects';
import ContactSection from '../components/ContactSection';

function Home() {
  const rootRef = useRef(null);

  // dangerouslySetInnerHTML must get the SAME object across re-renders —
  // React compares it by reference, and a fresh {__html: ...} literal on
  // every render (e.g. when a sibling like the Preloader unmounts and
  // App re-renders) makes React reset the whole subtree's innerHTML,
  // wiping out everything initHome's effect mutated into it.
  const headerHtml = useMemo(() => ({ __html: getHomeHeaderHtml() }), []);
  const mainHtml = useMemo(() => ({ __html: getHomeMainInnerHtml() }), []);

  useEffect(() => {
    const cleanup = initHome(rootRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef}>
      <div dangerouslySetInnerHTML={headerHtml} />
      <main id="top" style={{ position: 'relative' }}>
        <div dangerouslySetInnerHTML={mainHtml} />
        <ContactSection />
      </main>
    </div>
  );
}

// Home takes no props; memo skips the re-render entirely when a parent
// (App) re-renders for unrelated reasons (e.g. the preloader finishing),
// which is the other half of the fix — belt and suspenders with the
// useMemo above.
export default memo(Home);

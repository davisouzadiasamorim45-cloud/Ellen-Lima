import GoldTrailShader from './GoldTrailShader';
import { waLink, INSTAGRAM_URL, NOXI_URL } from '../lib/contact';
import { logoSvgMarkup } from './logoSvg';

// Original "Vamos começar" contact section and footer, unchanged in copy,
// fonts and layout — the only thing swapped out is the flat #17161a
// background + cursor-follow glow div, replaced by a WebGPU cursor-trail
// shader (twinkling halftone dots revealed on movement) recolored to the
// site's own gold palette instead of the library's default black/white.
export default function ContactSection() {
  return (
    <>
      <section
        id="contato"
        style={{
          position: 'relative',
          background: '#17161a',
          color: 'var(--color-bg)',
          padding: 'clamp(90px,16vh,190px) clamp(20px,5vw,64px)',
          overflow: 'hidden',
          scrollMarginTop: '80px',
        }}
      >
        <GoldTrailShader />

        <div
          style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}
          dangerouslySetInnerHTML={{
            __html: `
    <div data-reveal="up" style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:28px">
      <span style="width:44px;height:1px;background:var(--color-accent);display:block"></span>
      <span data-i18n="s_cta" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-accent-400)">Vamos começar</span>
      <span style="width:44px;height:1px;background:var(--color-accent);display:block"></span>
    </div>
    <h2 data-reveal="up" data-i18n="cta_h" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(38px,7vw,104px);line-height:.98;letter-spacing:-.025em">A sua marca merece<br><span style="font-style:italic;color:var(--color-accent-400)">ser vista assim.</span></h2>
    <p data-reveal="up" data-i18n="cta_p" style="margin:clamp(24px,4vh,40px) auto 0;max-width:56ch;font-size:clamp(15px,1.2vw,18px);line-height:1.75;color:var(--color-neutral-400)">Me conte sobre o seu negócio, o momento da marca e o que você precisa alcançar. Eu respondo com uma proposta de estratégia e produção.</p>
    <div data-reveal="up" style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:clamp(30px,5vh,48px)">
      <a href="${waLink('Olá! Vi o seu site e quero saber mais sobre seus serviços.')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="cta_wa" class="hover-dark" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-bg);border:1px solid var(--color-accent);border-radius:4px;padding:17px 38px;transition:background-color .45s ease,color .45s ease">Falar no WhatsApp</a>
      <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" data-cursor="btn" class="hover-light" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-400);border:1px solid rgba(243,242,242,.24);border-radius:4px;padding:17px 38px;transition:border-color .45s ease,color .45s ease">Instagram</a>
    </div>
`,
          }}
        />
      </section>

      <footer
        style={{
          background: '#17161a',
          color: 'var(--color-neutral-600)',
          borderTop: '1px solid rgba(243,242,242,.12)',
          padding: '34px clamp(20px,5vw,64px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-heading)', fontSize: 14, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--color-neutral-400)' }}>
          <span
            style={{ display: 'block', width: 20, height: 20, color: '#fff' }}
            dangerouslySetInnerHTML={{ __html: logoSvgMarkup(20) }}
          />
          Ellen Lima
        </span>
        <span className="footer-meta" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          <span data-i18n="foot" style={{ fontSize: 12.5, letterSpacing: '.06em' }}>
            © 2026 — Todos os direitos reservados
          </span>
          <span className="footer-dot" style={{ opacity: 0.4 }}>·</span>
          <span style={{ fontSize: 12.5, letterSpacing: '.06em' }}>
            Desenvolvido por{' '}
            <a
              href={NOXI_URL}
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--color-neutral-400)', textDecoration: 'underline', textUnderlineOffset: 2 }}
            >
              Noxi
            </a>
          </span>
        </span>
      </footer>
    </>
  );
}

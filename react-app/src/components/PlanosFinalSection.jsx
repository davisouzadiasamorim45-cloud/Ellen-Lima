import GoldTrailShader from './GoldTrailShader';
import { waLink } from '../lib/contact';

// Original "Ainda em dúvida" closing section and footer, unchanged in copy,
// fonts and layout — the only thing swapped out is the flat #17161a
// background + cursor-follow glow div, replaced by the same gold-recolored
// WebGPU cursor-trail shader used on the Home page's contact section.
export default function PlanosFinalSection() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          background: '#17161a',
          color: 'var(--color-bg)',
          padding: 'clamp(80px,14vh,160px) clamp(20px,5vw,64px)',
          overflow: 'hidden',
        }}
      >
        <GoldTrailShader />

        <div
          style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', textAlign: 'center' }}
          dangerouslySetInnerHTML={{
            __html: `
    <h2 data-reveal="up" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(32px,5.5vw,68px);line-height:1.05;letter-spacing:-.02em">Ainda em dúvida sobre <span style="font-style:italic;color:var(--color-accent-400)">qual plano escolher?</span></h2>
    <p data-reveal="up" style="margin:22px auto 0;max-width:52ch;font-size:clamp(15px,1.1vw,17px);line-height:1.7;color:var(--color-neutral-400)">Me chame e eu te ajudo a montar o pacote certo para o seu momento.</p>
    <a href="${waLink('Olá! Vi os planos no site e gostaria de tirar uma dúvida sobre qual escolher.')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-dark" style="margin-top:32px;display:inline-block;font-family:var(--font-heading);font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-bg);border:1px solid var(--color-accent);border-radius:4px;padding:17px 38px;transition:background-color .45s ease,color .45s ease">Falar no WhatsApp</a>
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
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 14, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--color-neutral-400)' }}>
          Ellen Lima
        </span>
        <span style={{ fontSize: 12.5, letterSpacing: '.06em' }}>
          © 2026 — Estratégia, conteúdo e filmmaking.
        </span>
      </footer>
    </>
  );
}

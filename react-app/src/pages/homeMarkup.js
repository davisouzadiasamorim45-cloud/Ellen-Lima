import { elHero, elSvc1, elSvc2, elSvc3, elSvc4 } from '../assets/images';
import elSobreVideo from '../assets/images/el-sobre-video.mp4';
import { waLink } from '../lib/contact';
import { logoSvgMarkup } from '../components/logoSvg';

export function getHomeHeaderHtml() {
  return `
<div style="position:fixed;top:0;left:0;right:0;height:2px;z-index:120;pointer-events:none"><div id="prog" style="height:100%;width:0%;background:var(--color-accent);transform-origin:left"></div></div>
<header id="nav" style="position:fixed;top:0;left:0;right:0;z-index:110;display:flex;align-items:center;gap:24px;padding:18px clamp(20px,5vw,64px);background-color:rgba(243,242,242,.42);border-bottom:1px solid rgba(32,31,29,.08);transition:background-color .5s ease,border-color .5s ease,padding .5s ease,backdrop-filter .5s ease;backdrop-filter:blur(14px) saturate(160%);-webkit-backdrop-filter:blur(14px) saturate(160%)">
  <a href="#top" data-cursor="link" style="display:flex;align-items:center;gap:10px;font-family:var(--font-heading);font-size:19px;letter-spacing:.16em;color:var(--color-text);margin-right:auto;text-transform:uppercase">
    <span data-logo-slot style="display:block;width:30px;height:30px">${logoSvgMarkup(30)}</span>
    Ellen&nbsp;Lima
  </a>
  <nav style="display:none;gap:30px;align-items:center" id="navlinks">
    <a href="#sobre" data-cursor="link" data-i18n="n1" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Sobre</a>
    <a href="#servicos" data-cursor="link" data-i18n="n2" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Serviços</a>
    <a href="#processo" data-cursor="link" data-i18n="n3" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Processo</a>
    <a href="/planos" data-cursor="link" data-i18n="n4" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Planos</a>
  </nav>
  <div id="navRight" style="display:flex;align-items:center;gap:14px">
    <button id="lang" data-cursor="link" style="font-family:var(--font-heading);font-size:13px;letter-spacing:.14em;background:transparent;border:1px solid rgba(32,31,29,.22);color:var(--color-text);padding:7px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;line-height:1;transition:border-color .3s,color .3s,padding .3s,font-size .3s">PT / <span style="opacity:.4">EN</span></button>
    <a id="ctaNav" href="#contato" data-cursor="link" data-i18n="cta_nav" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);padding:9px 18px;border-radius:4px;white-space:nowrap;transition:background-color .35s ease,padding .3s,font-size .3s">Orçamento</a>
    <button id="menuBtn" data-cursor="link" aria-label="Abrir menu" aria-expanded="false" style="display:none;flex-direction:column;justify-content:center;align-items:flex-end;gap:6px;width:30px;height:26px;background:transparent;border:0;padding:0;cursor:pointer">
      <span id="menuLine1" style="display:block;width:100%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .3s ease"></span>
      <span id="menuLine2" style="display:block;width:100%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .3s ease"></span>
      <span id="menuLine3" style="display:block;width:65%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),width .3s ease"></span>
    </button>
  </div>
</header>
<div id="mobileMenu" style="position:fixed;inset:0;z-index:200;background:var(--color-bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(30px,6vh,52px);opacity:0;pointer-events:none;transition:opacity .45s ease">
  <nav style="display:flex;flex-direction:column;align-items:center;gap:clamp(22px,4vh,34px)">
    <a href="#sobre" data-cursor="link" data-mobilenav="" data-i18n="n1" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Sobre</a>
    <a href="#servicos" data-cursor="link" data-mobilenav="" data-i18n="n2" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Serviços</a>
    <a href="#processo" data-cursor="link" data-mobilenav="" data-i18n="n3" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Processo</a>
    <a href="/planos" data-cursor="link" data-mobilenav="" data-i18n="n4" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Planos</a>
  </nav>
  <a href="#contato" data-cursor="link" data-mobilenav="" data-i18n="cta_nav" class="hover-accent-ls" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:15px 34px;transition:background-color .4s ease,letter-spacing .4s ease">Orçamento</a>
</div>
`;
}

// Everything that lives inside <main id="top">, up to (but not including) the
// closing contact section — that section is now the standalone ContactSection
// React component, rendered as a sibling after this markup inside <main>.
export function getHomeMainInnerHtml() {
  return `
<section style="position:relative;min-height:100svh;height:auto;display:grid;grid-template-columns:minmax(0,1fr);align-items:end;padding:120px clamp(20px,5vw,64px) 60px;overflow:visible;background:radial-gradient(120% 90% at 82% 8%,rgba(225,173,102,.28),rgba(225,173,102,0) 58%),radial-gradient(90% 70% at 10% 100%,rgba(182,130,53,.20),rgba(182,130,53,0) 62%),color-mix(in srgb,var(--color-accent-100) 22%,var(--color-bg))">
  <div id="heroGrid" style="display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(24px,5vw,72px);align-items:stretch;width:100%;max-width:1440px;margin:0 auto">
    <div style="display:flex;flex-direction:column;justify-content:center">
      <div data-reveal="up" style="display:flex;align-items:center;gap:14px;margin-bottom:clamp(14px,2.4vh,26px)">
        <span style="width:clamp(30px,6vw,72px);height:1px;background:var(--color-accent);display:block"></span>
        <span data-i18n="hero_kicker" style="font-family:var(--font-heading);font-size:clamp(11px,1.05vw,14px);letter-spacing:.28em;text-transform:uppercase;color:var(--color-accent-700);font-feature-settings:'tnum'">ESSA SOU EU!</span>
        <span style="width:clamp(30px,6vw,72px);height:1px;background:var(--color-accent);display:block"></span>
      </div>
      <h1 style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(58px,10.5vw,178px);line-height:.83;letter-spacing:-.025em;text-transform:uppercase">
        <span data-hero-line="" style="display:block;overflow:hidden;line-height:1.05"><span data-hero-inner="" style="display:block">Ellen</span></span>
        <span data-hero-line="" style="display:block;overflow:hidden;line-height:1.05"><span data-hero-inner="" style="display:block;padding-left:.06em"><span style="font-style:italic;font-weight:300">Lima</span></span></span>
      </h1>
      <div data-reveal="up" style="margin-top:10px;display:flex;align-items:center;gap:9px">
        <span style="width:22px;height:1px;background:var(--color-accent);display:block"></span>
        <span data-i18n="hero_brand" style="font-family:var(--font-heading);font-size:16px;letter-spacing:.24em;text-transform:uppercase;font-style:italic;color:var(--color-accent-700)">Foco Mídia</span>
      </div>
      <div data-reveal="up" style="margin-top:clamp(14px,2.2vh,24px);display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center">
        <span data-i18n="r1" style="font-family:var(--font-heading);font-size:clamp(12px,1.15vw,15px);letter-spacing:.2em;text-transform:uppercase">Assessoria</span>
        <span data-roledot="" style="width:4px;height:4px;background:var(--color-accent);border-radius:50%;display:block"></span>
        <span data-i18n="r2" style="font-family:var(--font-heading);font-size:clamp(12px,1.15vw,15px);letter-spacing:.2em;text-transform:uppercase">Social Mídia</span>
        <span data-roledot="" style="width:4px;height:4px;background:var(--color-accent);border-radius:50%;display:block"></span>
        <span data-i18n="r3" style="font-family:var(--font-heading);font-size:clamp(12px,1.15vw,15px);letter-spacing:.2em;text-transform:uppercase">Filmmaker</span>
        <span data-roledot="" style="width:4px;height:4px;background:var(--color-accent);border-radius:50%;display:block"></span>
        <span data-i18n="r4" style="font-family:var(--font-heading);font-size:clamp(12px,1.15vw,15px);letter-spacing:.2em;text-transform:uppercase">Influencer</span>
      </div>
      <p id="heroTagMobile" data-reveal="up" data-i18n="hero_tag" style="display:none;margin:clamp(16px,2.6vh,28px) 0 0;max-width:34ch;font-size:clamp(16px,1.35vw,20px);line-height:1.55;color:var(--color-neutral-800);text-wrap:pretty">Grandes marcas não surgem por acaso. Começam com grande foco.</p>
      <div data-reveal="up" style="display:flex;flex-wrap:wrap;gap:14px;margin-top:clamp(20px,3.2vh,34px)">
        <a href="#contato" data-cursor="btn" data-i18n="hero_cta1" class="hover-accent-ls" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:15px 30px;transition:background-color .4s ease,letter-spacing .4s ease">Começar um projeto</a>
        <a href="/planos" data-cursor="btn" data-i18n="hero_cta2" class="hover-outline" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-text);border:1px solid rgba(32,31,29,.2);border-radius:4px;padding:15px 30px;transition:border-color .4s ease,letter-spacing .4s ease">Ver planos</a>
      </div>
    </div>
    <div id="heroArtWrap" style="justify-self:end;width:100%;display:flex;flex-direction:column;justify-content:flex-end">
      <div id="heroArt" style="position:relative;aspect-ratio:4/5;width:100%;max-height:76vh;will-change:transform;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.2,.8,.2,1)">
        <div style="position:absolute;inset:-1px;border:1px solid rgba(32,31,29,.18)"></div>
        <div style="position:absolute;inset:14px;overflow:hidden;background:var(--color-surface)">
          <img id="el-hero" src="${elHero}" alt="Retrato principal — Ellen Lima" style="width:100%;height:100%;object-fit:cover;object-position:50% 20%;filter:sepia(.22) saturate(.82) contrast(1.05)" />
          <div id="heroShine" style="position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .4s ease;background:radial-gradient(circle at 50% 50%,rgba(255,255,255,.55),rgba(255,255,255,0) 45%)"></div>
        </div>
        <div id="heroGlow" style="position:absolute;inset:-1px;pointer-events:none;opacity:0;transition:opacity .4s ease;border:1px solid rgba(225,173,102,.9);box-shadow:0 0 24px 2px rgba(182,130,53,.35),inset 0 0 24px 0 rgba(182,130,53,.25)"></div>
        <div id="heroBorderGlint" style="position:absolute;top:0;left:0;width:52px;height:5px;pointer-events:none;opacity:.85;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.95),rgba(255,255,255,0));filter:blur(1.5px);border-radius:3px;transform-origin:left center"></div>
      </div>
      <p data-reveal="up" data-i18n="hero_tag" style="margin:20px 2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--font-heading);font-style:italic;font-size:clamp(16px,1.4vw,21px);letter-spacing:.01em;line-height:1.5;color:var(--color-neutral-800)">Grandes marcas não surgem por acaso. Começam com grande foco.</p>
    </div>
  </div>
  <div style="position:sticky;left:clamp(20px,5vw,64px);bottom:-20px;display:flex;align-items:center;gap:10px;justify-content:center;width:100%;flex-direction:column;margin-top:12px;height:50px">
    <span style="display:block;width:1px;height:26px;background:var(--color-accent);animation:drop 2.4s ease-in-out infinite"></span>
    <span data-i18n="scroll" style="font-family:var(--font-heading);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Role</span>
  </div>
</section>

<section style="border-top:1px solid rgba(32,31,29,.16);border-bottom:1px solid rgba(32,31,29,.16);overflow:hidden;padding:18px 0;background:var(--color-surface)">
  <div id="marquee" style="display:flex;width:max-content;animation:mq 34s linear infinite;will-change:transform">
    <div style="display:flex;align-items:center;gap:44px;padding-right:44px">
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Assessoria Estratégica</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300;font-style:italic">Filmmaker</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Cobertura de Eventos</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Social Mídia</span><span style="color:var(--color-accent);font-size:20px">✦</span>
    </div>
    <div style="display:flex;align-items:center;gap:44px;padding-right:44px" aria-hidden="true">
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Assessoria Estratégica</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300;font-style:italic">Filmmaker</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Cobertura de Eventos</span><span style="color:var(--color-accent);font-size:20px">✦</span>
      <span style="font-family:var(--font-heading);font-size:clamp(20px,2.6vw,38px);letter-spacing:.06em;text-transform:uppercase;font-weight:300">Social Mídia</span><span style="color:var(--color-accent);font-size:20px">✦</span>
    </div>
  </div>
</section>

<section id="sobre" style="padding:clamp(80px,12vh,160px) clamp(20px,5vw,64px);scroll-margin-top:80px">
  <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:clamp(36px,5vw,80px)" data-cols="0.85fr 1.15fr">
    <div>
      <div data-reveal="up" style="display:flex;align-items:baseline;gap:12px;margin-bottom:26px">
        <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;color:var(--color-accent);font-feature-settings:'tnum'">01</span>
        <span data-i18n="s_sobre" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Sobre</span>
      </div>
      <div id="sobreRail" style="position:relative">
        <div id="sobrePlate" style="position:relative;aspect-ratio:3/4;max-width:420px;border:1px solid rgba(32,31,29,.18);padding:12px;background:var(--color-bg);will-change:scale;transition:scale .25s linear">
          <video id="el-sobre" src="${elSobreVideo}" autoplay muted loop playsinline preload="auto" aria-label="Vídeo de bastidores / em ação" style="width:100%;height:100%;object-fit:cover;object-position:50% 25%;filter:sepia(.22) saturate(.82) contrast(1.05)"></video>
        </div>
      </div>
    </div>
    <div>
      <h2 data-reveal="up" data-i18n="sobre_h" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(34px,5.2vw,76px);line-height:1.02;letter-spacing:-.02em;text-wrap:pretty">Quem sou eu?</h2>
      <div style="height:1px;background:rgba(32,31,29,.16);margin:clamp(28px,4vh,46px) 0" data-reveal="line"></div>
      <div style="display:grid;grid-template-columns:1fr;gap:clamp(20px,3vw,44px)" data-cols2="1fr 1fr">
        <p data-reveal="up" data-i18n="sobre_p1" style="margin:0;font-size:clamp(15px,1.15vw,17px);line-height:1.78;text-align:justify;hyphens:auto;color:var(--color-neutral-900)">Olá! Sou Ellen Lima, estrategista de marketing digital, criadora de conteúdo em Social Mídia, influenciadora cristã e filmmaker. Meu trabalho vai além de produzir fotos e vídeos: desenvolvo estratégias que fortalecem a presença digital das marcas.</p>
        <p data-reveal="up" data-i18n="sobre_p2" style="margin:0;font-size:clamp(15px,1.15vw,17px);line-height:1.78;text-align:justify;hyphens:auto;color:var(--color-neutral-900)">Aproximo empresas dos seus clientes e transformo seguidores em compradores. Atendo empresas, lojas, eventos e empreendedores que desejam crescer nas redes sociais com consistência, direção criativa e método.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(32,31,29,.16);border:1px solid rgba(32,31,29,.16);margin-top:clamp(34px,5vh,60px)" data-cols3="repeat(4,1fr)">
        <div data-reveal="up" style="background:var(--color-bg);padding:clamp(18px,2.4vw,30px)">
          <div data-count="3" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(38px,4.6vw,64px);line-height:1;color:var(--color-accent);font-feature-settings:'tnum'">0</div>
          <div data-i18n="m1" style="margin-top:10px;font-family:var(--font-heading);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--color-neutral-700)">Frentes de atuação</div>
        </div>
        <div data-reveal="up" style="background:var(--color-bg);padding:clamp(18px,2.4vw,30px)">
          <div data-count="9" data-suffix="+" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(38px,4.6vw,64px);line-height:1;color:var(--color-accent);font-feature-settings:'tnum'">0</div>
          <div data-i18n="m2" style="margin-top:10px;font-family:var(--font-heading);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--color-neutral-700)">Tipos de evento cobertos</div>
        </div>
        <div data-reveal="up" style="background:var(--color-bg);padding:clamp(18px,2.4vw,30px)">
          <div data-count="15" data-suffix="/sem" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(38px,4.6vw,64px);line-height:1;color:var(--color-accent);font-feature-settings:'tnum'">0</div>
          <div data-i18n="m3" style="margin-top:10px;font-family:var(--font-heading);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--color-neutral-700)">Stories no plano VIP</div>
        </div>
        <div data-reveal="up" style="background:var(--color-bg);padding:clamp(18px,2.4vw,30px)">
          <div data-count="150" data-prefix="R$" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(38px,4.6vw,64px);line-height:1;color:var(--color-accent);font-feature-settings:'tnum'">0</div>
          <div data-i18n="m4" style="margin-top:10px;font-family:var(--font-heading);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--color-neutral-700)">A partir de</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="servicos" style="background:#17161a;color:var(--color-bg);padding:clamp(80px,12vh,150px) clamp(20px,5vw,64px);scroll-margin-top:80px;position:relative">
  <div style="max-width:1440px;margin:0 auto">
    <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:22px" data-reveal="up">
      <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;color:var(--color-accent-400);font-feature-settings:'tnum'">02</span>
      <span data-i18n="s_serv" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-500)">Serviços</span>
    </div>
    <h2 data-reveal="up" data-i18n="serv_h" style="margin:0 0 clamp(40px,7vh,84px);font-family:var(--font-heading);font-weight:300;font-size:clamp(34px,5.4vw,80px);line-height:1.02;letter-spacing:-.02em">Quatro frentes,<br><span style="font-style:italic;color:var(--color-accent-400)">um só resultado.</span></h2>

    <div id="svcTrack" style="position:relative;height:400vh">
      <div id="svcPin" style="position:sticky;top:0;height:100vh;box-sizing:border-box;padding:clamp(86px,11vh,120px) 0 clamp(40px,6vh,72px);display:flex;align-items:stretch">
        <div id="svcPinGrid" style="width:100%;height:100%;max-width:1440px;margin:0 auto;display:grid;grid-template-columns:auto 1.1fr .9fr;gap:clamp(20px,4vw,60px);align-items:stretch">
          <div id="svcNav" style="display:flex;gap:18px;height:100%;align-self:stretch">
            <div style="position:relative;width:1px;background:rgba(243,242,242,.18)">
              <div id="svcBar" style="position:absolute;left:0;top:0;width:1px;height:0%;background:var(--color-accent-400);transition:height .3s linear"><span style="position:absolute;left:-3px;bottom:-3px;width:7px;height:7px;border-radius:50%;background:var(--color-accent-300);animation:tippulse 2.4s ease-in-out infinite"></span></div>
            </div>
            <div style="display:flex;flex-direction:column;justify-content:space-between">
              <button data-svcgo="1" data-cursor="link" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.2em;background:transparent;border:0;padding:0;cursor:pointer;color:var(--color-accent-400);transition:color .5s ease;font-feature-settings:'tnum'">01</button>
              <button data-svcgo="2" data-cursor="link" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.2em;background:transparent;border:0;padding:0;cursor:pointer;color:var(--color-neutral-600);transition:color .5s ease;font-feature-settings:'tnum'">02</button>
              <button data-svcgo="3" data-cursor="link" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.2em;background:transparent;border:0;padding:0;cursor:pointer;color:var(--color-neutral-600);transition:color .5s ease;font-feature-settings:'tnum'">03</button>
              <button data-svcgo="4" data-cursor="link" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.2em;background:transparent;border:0;padding:0;cursor:pointer;color:var(--color-neutral-600);transition:color .5s ease;font-feature-settings:'tnum'">04</button>
            </div>
          </div>

          <div id="svcTextStage" style="position:relative;align-self:center;min-height:clamp(300px,42vh,430px);overflow:hidden">
            <div data-svctext="1" style="position:absolute;inset:0;opacity:1;transform:translateY(0px);transition:opacity .55s ease,transform .8s cubic-bezier(.16,1,.3,1)">
              <h3 data-i18n="sv1_t" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(28px,3.6vw,52px);line-height:1.05;letter-spacing:-.01em;text-transform:uppercase;color:var(--color-accent-400)">Assessoria Estratégica</h3>
              <p data-i18n="sv1_d" style="margin:18px 0 26px;max-width:52ch;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:var(--color-neutral-400)">Acompanhamento para empresas que desejam vender mais através do Instagram — da leitura do mercado ao plano de conteúdo que sustenta a venda.</p>
              <ul style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px 26px">
                <li data-i18n="sv1_1" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Campanhas promocionais</li>
                <li data-i18n="sv1_2" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Estratégias de lançamento</li>
                <li data-i18n="sv1_3" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Planejamento de vendas</li>
                <li data-i18n="sv1_4" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Posicionamento da marca</li>
                <li data-i18n="sv1_5" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Análise de concorrentes</li>
              </ul>
            </div>
            <div data-svctext="2" style="position:absolute;inset:0;opacity:0;transform:translateY(60px);transition:opacity .55s ease,transform .8s cubic-bezier(.16,1,.3,1)">
              <h3 data-i18n="sv2_t" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(28px,3.6vw,52px);line-height:1.05;letter-spacing:-.01em;text-transform:uppercase;color:var(--color-accent-400)">Filmmaker</h3>
              <p data-i18n="sv2_d" style="margin:18px 0 26px;max-width:52ch;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:var(--color-neutral-400)">Captação e edição profissional, com direção de cena e ritmo pensado para cada formato.</p>
              <ul style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px 26px">
                <li data-i18n="sv2_1" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Vídeos institucionais</li>
                <li data-i18n="sv2_2" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Reels cinematográficos</li>
                <li data-i18n="sv2_3" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Making of e bastidores</li>
                <li data-i18n="sv2_4" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Campanhas</li>
                <li data-i18n="sv2_5" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Vídeos promocionais</li>
                <li data-i18n="sv2_6" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Conteúdo para redes sociais</li>
              </ul>
            </div>
            <div data-svctext="3" style="position:absolute;inset:0;opacity:0;transform:translateY(60px);transition:opacity .55s ease,transform .8s cubic-bezier(.16,1,.3,1)">
              <h3 data-i18n="sv3_t" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(28px,3.6vw,52px);line-height:1.05;letter-spacing:-.01em;text-transform:uppercase;color:var(--color-accent-400)">Cobertura de Eventos</h3>
              <p data-i18n="sv3_d" style="margin:18px 0 26px;max-width:52ch;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:var(--color-neutral-400)">Registro completo do seu evento, do primeiro convidado ao encerramento — com entrega em tempo real.</p>
              <ul style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px 26px">
                <li data-i18n="sv3_1" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Inaugurações</li>
                <li data-i18n="sv3_2" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Eventos esportivos e corridas</li>
                <li data-i18n="sv3_3" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Workshops e congressos</li>
                <li data-i18n="sv3_4" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Eventos corporativos</li>
                <li data-i18n="sv3_5" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Lançamentos e feiras</li>
                <li data-i18n="sv3_6" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Eventos religiosos</li>
              </ul>
              <div style="margin-top:26px;display:flex;flex-wrap:wrap;gap:10px;align-items:center">
                <span data-i18n="sv3_e" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--color-neutral-500)">Entrega</span>
                <span data-i18n="sv3_e1" style="display:inline-flex;align-items:center;white-space:nowrap;font-size:13px;border:1px solid rgba(225,173,102,.5);color:var(--color-accent-400);padding:5px 12px;border-radius:3px">Stories em tempo real</span>
                <span style="display:inline-flex;align-items:center;white-space:nowrap;font-size:13px;border:1px solid rgba(225,173,102,.5);color:var(--color-accent-400);padding:5px 12px;border-radius:3px">Reels</span>
                <span data-i18n="sv3_e3" style="display:inline-flex;align-items:center;white-space:nowrap;font-size:13px;border:1px solid rgba(225,173,102,.5);color:var(--color-accent-400);padding:5px 12px;border-radius:3px">Fotos</span>
              </div>
            </div>
            <div data-svctext="4" style="position:absolute;inset:0;opacity:0;transform:translateY(60px);transition:opacity .55s ease,transform .8s cubic-bezier(.16,1,.3,1)">
              <h3 data-i18n="sv4_t" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(28px,3.6vw,52px);line-height:1.05;letter-spacing:-.01em;text-transform:uppercase;color:var(--color-accent-400)">Social Mídia</h3>
              <p data-i18n="sv4_d" style="margin:18px 0 26px;max-width:52ch;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:var(--color-neutral-400)">Gestão completa do seu perfil — do planejamento à publicação — para manter presença constante e consistente nas redes.</p>
              <ul style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px 26px">
                <li data-i18n="sv4_1" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Planejamento de conteúdo</li>
                <li data-i18n="sv4_2" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Stories</li>
                <li data-i18n="sv4_3" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Reels</li>
                <li data-i18n="sv4_4" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Organização do feed</li>
                <li data-i18n="sv4_5" style="font-size:14px;line-height:1.5;color:var(--color-neutral-200);border-left:1px solid rgba(225,173,102,.5);padding-left:12px">Gestão do perfil</li>
              </ul>
            </div>
          </div>

          <div id="svcImgStage" style="position:relative;aspect-ratio:4/5;height:100%;max-height:100%;justify-self:end;align-self:stretch;border:1px solid rgba(243,242,242,.2);padding:12px">
            <div style="position:absolute;inset:-64px;pointer-events:none;z-index:0;background:radial-gradient(circle at 50% 50%,rgba(198,145,62,.72),rgba(182,130,53,.18) 45%,rgba(182,130,53,0) 72%);animation:softpulse 4.6s ease-in-out infinite"></div>
            <div style="position:relative;z-index:1;width:100%;height:100%;overflow:hidden">
              <div data-svcimg="1" style="position:absolute;inset:0;opacity:1;transition:opacity .85s ease">
                <img id="el-svc1" src="${elSvc1}" alt="Assessoria — planejamento" style="width:100%;height:100%;object-fit:cover;object-position:50% 15%;filter:sepia(.22) saturate(.82) contrast(1.05)" />
              </div>
              <div data-svcimg="2" style="position:absolute;inset:0;opacity:0;transition:opacity .85s ease">
                <img id="el-svc2" src="${elSvc2}" alt="Filmmaker — set / câmera" style="width:100%;height:100%;object-fit:cover;object-position:50% 22%;filter:sepia(.22) saturate(.82) contrast(1.05)" />
              </div>
              <div data-svcimg="3" style="position:absolute;inset:0;opacity:0;transition:opacity .85s ease">
                <img id="el-svc3" src="${elSvc3}" alt="Evento — cobertura" style="width:100%;height:100%;object-fit:cover;object-position:50% 20%;filter:sepia(.22) saturate(.82) contrast(1.05)" />
              </div>
              <div data-svcimg="4" style="position:absolute;inset:0;opacity:0;transition:opacity .85s ease">
                <img id="el-svc4" src="${elSvc4}" alt="Social Mídia — criação de conteúdo" style="width:100%;height:100%;object-fit:cover;object-position:50% 8%;filter:sepia(.22) saturate(.82) contrast(1.05)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="processo" style="padding:clamp(80px,12vh,160px) clamp(20px,5vw,64px);scroll-margin-top:80px">
  <div style="max-width:1440px;margin:0 auto">
    <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:22px" data-reveal="up">
      <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;color:var(--color-accent);font-feature-settings:'tnum'">03</span>
      <span data-i18n="s_proc" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Como funciona</span>
    </div>
    <h2 data-reveal="up" data-i18n="proc_h" style="margin:0 0 clamp(40px,6vh,72px);font-family:var(--font-heading);font-weight:300;font-size:clamp(34px,5.2vw,76px);line-height:1.02;letter-spacing:-.02em;max-width:16ch">Um método, do briefing ao relatório.</h2>
    <div style="display:grid;grid-template-columns:1fr;gap:clamp(32px,5vw,72px)" data-cols5="minmax(0,1.15fr) minmax(0,.85fr)">
    <div id="procTrack" style="position:relative;max-width:880px">
      <div style="position:absolute;left:27px;top:8px;bottom:8px;width:1px;background:rgba(32,31,29,.16)">
        <div id="procLineFill" style="position:absolute;top:0;left:0;width:1px;height:0%;background:var(--color-accent);transition:height .1s linear">
          <span style="position:absolute;left:-3px;bottom:-3px;width:7px;height:7px;border-radius:50%;background:var(--color-accent-300,var(--color-accent))"></span>
        </div>
      </div>
      <div data-step="0" style="position:relative;display:flex;gap:clamp(22px,4vw,44px);align-items:flex-start;padding:clamp(20px,3.4vh,36px) 0">
        <div data-stepnum="" style="position:relative;z-index:1;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:var(--color-bg);border:1px solid rgba(32,31,29,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:16px;letter-spacing:.04em;color:rgba(32,31,29,.4);font-feature-settings:'tnum';transition:color .5s ease,border-color .5s ease,background-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)">01</div>
        <div style="flex:1;padding-top:6px;transition:transform .6s cubic-bezier(.2,.8,.2,1)" data-stepbody="">
          <h3 data-i18n="p1_t" style="margin:0 0 10px;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.6vw,36px);line-height:1.1">Briefing</h3>
          <p data-i18n="p1_d" style="margin:0;max-width:56ch;font-size:14.5px;line-height:1.7;color:var(--color-neutral-800);text-wrap:pretty">Formulário e conversa inicial para entender objetivos, público e concorrência.</p>
        </div>
      </div>
      <div data-step="1" style="position:relative;display:flex;gap:clamp(22px,4vw,44px);align-items:flex-start;padding:clamp(20px,3.4vh,36px) 0">
        <div data-stepnum="" style="position:relative;z-index:1;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:var(--color-bg);border:1px solid rgba(32,31,29,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:16px;letter-spacing:.04em;color:rgba(32,31,29,.4);font-feature-settings:'tnum';transition:color .5s ease,border-color .5s ease,background-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)">02</div>
        <div style="flex:1;padding-top:6px;transition:transform .6s cubic-bezier(.2,.8,.2,1)" data-stepbody="">
          <h3 data-i18n="p2_t" style="margin:0 0 10px;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.6vw,36px);line-height:1.1">Estratégia</h3>
          <p data-i18n="p2_d" style="margin:0;max-width:56ch;font-size:14.5px;line-height:1.7;color:var(--color-neutral-800);text-wrap:pretty">Planejamento de conteúdo, roteiros e calendário alinhados à meta de vendas.</p>
        </div>
      </div>
      <div data-step="2" style="position:relative;display:flex;gap:clamp(22px,4vw,44px);align-items:flex-start;padding:clamp(20px,3.4vh,36px) 0">
        <div data-stepnum="" style="position:relative;z-index:1;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:var(--color-bg);border:1px solid rgba(32,31,29,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:16px;letter-spacing:.04em;color:rgba(32,31,29,.4);font-feature-settings:'tnum';transition:color .5s ease,border-color .5s ease,background-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)">03</div>
        <div style="flex:1;padding-top:6px;transition:transform .6s cubic-bezier(.2,.8,.2,1)" data-stepbody="">
          <h3 data-i18n="p3_t" style="margin:0 0 10px;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.6vw,36px);line-height:1.1">Captação</h3>
          <p data-i18n="p3_d" style="margin:0;max-width:56ch;font-size:14.5px;line-height:1.7;color:var(--color-neutral-800);text-wrap:pretty">Diárias de gravação com direção de cena, poses e condução da equipe.</p>
        </div>
      </div>
      <div data-step="3" style="position:relative;display:flex;gap:clamp(22px,4vw,44px);align-items:flex-start;padding:clamp(20px,3.4vh,36px) 0">
        <div data-stepnum="" style="position:relative;z-index:1;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:var(--color-bg);border:1px solid rgba(32,31,29,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:16px;letter-spacing:.04em;color:rgba(32,31,29,.4);font-feature-settings:'tnum';transition:color .5s ease,border-color .5s ease,background-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)">04</div>
        <div style="flex:1;padding-top:6px;transition:transform .6s cubic-bezier(.2,.8,.2,1)" data-stepbody="">
          <h3 data-i18n="p4_t" style="margin:0 0 10px;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.6vw,36px);line-height:1.1">Edição</h3>
          <p data-i18n="p4_d" style="margin:0;max-width:56ch;font-size:14.5px;line-height:1.7;color:var(--color-neutral-800);text-wrap:pretty">Corte, cor e trilha. Reels, stories e fotos entregues prontos para publicar.</p>
        </div>
      </div>
      <div data-step="4" style="position:relative;display:flex;gap:clamp(22px,4vw,44px);align-items:flex-start;padding:clamp(20px,3.4vh,36px) 0">
        <div data-stepnum="" style="position:relative;z-index:1;flex:0 0 auto;width:56px;height:56px;border-radius:50%;background:var(--color-bg);border:1px solid rgba(32,31,29,.2);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:16px;letter-spacing:.04em;color:rgba(32,31,29,.4);font-feature-settings:'tnum';transition:color .5s ease,border-color .5s ease,background-color .5s ease,transform .5s cubic-bezier(.2,.8,.2,1)">05</div>
        <div style="flex:1;padding-top:6px;transition:transform .6s cubic-bezier(.2,.8,.2,1)" data-stepbody="">
          <h3 data-i18n="p5_t" style="margin:0 0 10px;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.6vw,36px);line-height:1.1">Relatório</h3>
          <p data-i18n="p5_d" style="margin:0;max-width:56ch;font-size:14.5px;line-height:1.7;color:var(--color-neutral-800);text-wrap:pretty">Análise mensal de resultados e reuniões de ajuste contínuo da estratégia.</p>
        </div>
      </div>
    </div>
    <div id="procSide" style="display:none;position:sticky;top:130px;align-self:start">
      <div style="border-left:1px solid rgba(32,31,29,.16);padding-left:clamp(24px,3vw,44px)">
        <div id="procSideNum" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(110px,11vw,220px);line-height:.78;color:rgba(182,130,53,.16);font-feature-settings:'tnum';transition:opacity .35s ease">01</div>
        <div id="procSideTitle" style="margin-top:-14px;font-family:var(--font-heading);font-weight:300;font-size:clamp(24px,2.2vw,34px);color:var(--color-accent-700);transition:opacity .35s ease">Briefing</div>
        <p id="procSideDesc" style="margin:14px 0 0;max-width:34ch;font-size:14px;line-height:1.7;color:var(--color-neutral-700);transition:opacity .35s ease">Formulário e conversa inicial para entender objetivos, público e concorrência.</p>
      </div>
    </div>
    </div>
  </div>
</section>

<section id="planos" style="padding:clamp(80px,12vh,150px) clamp(20px,5vw,64px);background:var(--color-surface);border-top:1px solid rgba(32,31,29,.16);scroll-margin-top:80px">
  <div style="max-width:1440px;margin:0 auto">
    <div style="display:flex;flex-wrap:wrap;gap:24px;align-items:flex-end;justify-content:space-between;margin-bottom:clamp(36px,5vh,64px)">
      <div data-reveal="up">
        <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:22px">
          <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;color:var(--color-accent);font-feature-settings:'tnum'">04</span>
          <span data-i18n="s_plan" style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Investimento</span>
        </div>
        <h2 data-i18n="plan_h" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(34px,5.2vw,76px);line-height:1.02;letter-spacing:-.02em">Planos e valores</h2>
        <a href="/planos" data-cursor="link" data-i18n="plan_all" style="display:inline-block;margin-top:16px;font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border-bottom:1px solid var(--color-accent);padding-bottom:2px">Ver todos os planos →</a>
      </div>
      <div data-reveal="up" style="display:inline-flex;border:1px solid rgba(32,31,29,.24);border-radius:4px;overflow:hidden;background:var(--color-bg)">
        <button data-tab="mensal" data-cursor="link" data-i18n="tab1" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;padding:13px 22px;border:0;background:var(--color-text);color:var(--color-bg);cursor:pointer;transition:background-color .35s,color .35s">Assessoria + Filmmaker</button>
        <button data-tab="avulso" data-cursor="link" data-i18n="tab2" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Assessoria + Social Mídia</button>
      </div>
    </div>

    <div data-panel="mensal" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan="" style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease,border-color .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Start</h3>
        <p data-i18n="pl1_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">4 dias por mês · 1 vez na semana</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="pl1_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reuniões estratégicas no mês</li>
          <li data-i18n="pl1_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de conteúdo</li>
          <li data-i18n="pl1_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">5 stories por semana (20 no mês)</li>
          <li data-i18n="pl1_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel por semana (4 no mês)</li>
          <li data-i18n="pl1_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 post de feed por mês</li>
          <li data-i18n="pl1_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Acompanhamento e orientação</li>
          <li data-i18n="pl1_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatórios mensais de resultados</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">450</span>
          <span data-i18n="mes" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Start (assessoria + filmmaker, R$450/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>

      <div data-plan="" data-featured="" style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease,border-color .55s ease">
        <span data-i18n="popular" style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Intermediário</h3>
        <p data-i18n="pl2_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">2 vezes na semana · tudo do Start</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="pl2_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 diárias de captação por mês</li>
          <li data-i18n="pl2_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reels por semana</li>
          <li data-i18n="pl2_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Conteúdos para stories</li>
          <li data-i18n="pl2_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Roteiros estratégicos</li>
          <li data-i18n="pl2_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento semanal</li>
          <li data-i18n="pl2_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias de campanhas e promoções</li>
          <li data-i18n="pl2_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise de resultados · 2 reuniões mensais</li>
          <li data-i18n="pl2_8" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Direcionamento de modelos e equipe nas gravações</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">650</span>
          <span data-i18n="mes2" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Intermediário (assessoria + filmmaker, R$650/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta2" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Contratar</a>
      </div>

      <div data-plan="" style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease,border-color .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">VIP</h3>
        <p data-i18n="pl3_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">3 vezes por semana · operação completa</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="pl3_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">3 reels por semana · até 12 editados</li>
          <li data-i18n="pl3_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">15 stories por semana</li>
          <li data-i18n="pl3_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">4 posts de feed por mês</li>
          <li data-i18n="pl3_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Assessoria estratégica completa</li>
          <li data-i18n="pl3_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de campanhas e roteiros</li>
          <li data-i18n="pl3_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Captação profissional e direção nas gravações</li>
          <li data-i18n="pl3_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégia de vendas</li>
          <li data-i18n="pl3_8" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatório mensal e reuniões de acompanhamento</li>
          <li data-i18n="pl3_9" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Ajustes constantes na estratégia</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">950</span>
          <span data-i18n="mes3" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano VIP (assessoria + filmmaker, R$950/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta3" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
    </div>

    <div data-panel="avulso" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan="" style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Start</h3>
        <p data-i18n="av1_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">Para empresas que já possuem alguém para produzir os conteúdos, mas precisam de direcionamento.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="av1_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Diagnóstico inicial do Instagram</li>
          <li data-i18n="av1_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Definição de objetivos</li>
          <li data-i18n="av1_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento estratégico mensal</li>
          <li data-i18n="av1_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Calendário de conteúdo</li>
          <li data-i18n="av1_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Ideias de Reels e Stories</li>
          <li data-i18n="av1_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias de vendas</li>
          <li data-i18n="av1_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de campanhas</li>
          <li data-i18n="av1_8" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reunião estratégica mensal</li>
          <li data-i18n="av1_9" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise básica dos resultados</li>
          <li data-i18n="av1_10" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Suporte para dúvidas durante o mês</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">350</span>
          <span data-i18n="av_mes1" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Start de Assessoria + Social Mídia (R$350/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta4" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan="" data-featured="" style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span data-i18n="popular2" style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Intermediário</h3>
        <p data-i18n="av2_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">Assessoria + Acompanhamento — para empresas que querem acompanhamento mais próximo.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="av2_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reuniões estratégicas por mês</li>
          <li data-i18n="av2_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento semanal de conteúdo</li>
          <li data-i18n="av2_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégia de Stories</li>
          <li data-i18n="av2_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias para aumentar interação</li>
          <li data-i18n="av2_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias para conversão em vendas</li>
          <li data-i18n="av2_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de campanhas promocionais</li>
          <li data-i18n="av2_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise dos conteúdos que tiveram melhor desempenho</li>
          <li data-i18n="av2_8" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Ajustes na estratégia durante o mês</li>
          <li data-i18n="av2_9" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Orientação para equipe</li>
          <li data-i18n="av2_10" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatório mensal simplificado</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">550</span>
          <span data-i18n="av_mes2" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Intermediário de Assessoria + Social Mídia (R$550/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta5" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan="" style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">VIP</h3>
        <p data-i18n="av3_s" style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">Assessoria Estratégica Completa — para empresas que querem mais envolvimento na estratégia de marketing.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li data-i18n="av3_1" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Reunião semanal ou quinzenal</li>
          <li data-i18n="av3_2" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento mensal completo</li>
          <li data-i18n="av3_3" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégia de posicionamento</li>
          <li data-i18n="av3_4" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de campanhas</li>
          <li data-i18n="av3_5" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégia de lançamentos</li>
          <li data-i18n="av3_6" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias para datas comemorativas</li>
          <li data-i18n="av3_7" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise de concorrentes</li>
          <li data-i18n="av3_8" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise aprofundada dos resultados</li>
          <li data-i18n="av3_9" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de ofertas e promoções</li>
          <li data-i18n="av3_10" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Orientação da equipe</li>
          <li data-i18n="av3_11" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatório mensal</li>
          <li data-i18n="av3_12" style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Revisão constante da estratégia</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">800</span>
          <span data-i18n="av_mes3" style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano VIP de Assessoria + Social Mídia (R$800/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" data-i18n="pl_cta6" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
    </div>
    <p data-i18n="plan_note" style="margin:26px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">Deslocamento e demandas fora do escopo são orçados à parte. Pacotes personalizados sob consulta.</p>
  </div>
</section>
`;
}

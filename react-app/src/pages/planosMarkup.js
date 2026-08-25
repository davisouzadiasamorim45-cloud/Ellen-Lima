import { waLink } from '../lib/contact';
import { logoSvgMarkup } from '../components/logoSvg';

export function getPlanosHeaderHtml() {
  return `
<div style="position:fixed;top:0;left:0;right:0;height:2px;z-index:120;pointer-events:none"><div id="prog" style="height:100%;width:0%;background:var(--color-accent);transform-origin:left"></div></div>

<header id="nav" style="position:fixed;top:0;left:0;right:0;z-index:110;display:flex;align-items:center;gap:24px;padding:18px clamp(20px,5vw,64px);background-color:rgba(243,242,242,.72);border-bottom:1px solid rgba(32,31,29,.14);transition:background-color .5s ease,padding .5s ease;backdrop-filter:blur(14px) saturate(160%);-webkit-backdrop-filter:blur(14px) saturate(160%)">
  <a href="/" data-cursor="link" style="display:flex;align-items:center;gap:10px;font-family:var(--font-heading);font-size:19px;letter-spacing:.16em;color:var(--color-text);margin-right:auto;text-transform:uppercase">
    <span data-logo-slot style="display:block;width:30px;height:30px">${logoSvgMarkup(30)}</span>
    Ellen&nbsp;Lima
  </a>
  <nav style="display:none;gap:30px;align-items:center" id="navlinks">
    <a href="/#sobre" data-cursor="link" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Sobre</a>
    <a href="/#servicos" data-cursor="link" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Serviços</a>
    <a href="/#processo" data-cursor="link" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-text)">Processo</a>
    <a href="/planos" data-cursor="link" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-accent-700);border-bottom:1px solid var(--color-accent);padding-bottom:2px">Planos</a>
  </nav>
  <div style="display:flex;align-items:center;gap:14px">
    <a id="ctaNav" href="/#contato" data-cursor="link" class="hover-accent" style="font-family:var(--font-heading);font-size:14px;letter-spacing:.13em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);padding:9px 18px;border-radius:4px;transition:background-color .35s ease">Orçamento</a>
    <button id="menuBtn" data-cursor="link" aria-label="Abrir menu" aria-expanded="false" style="display:none;flex-direction:column;justify-content:center;align-items:flex-end;gap:6px;width:30px;height:26px;background:transparent;border:0;padding:0;cursor:pointer">
      <span id="menuLine1" style="display:block;width:100%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .3s ease"></span>
      <span id="menuLine2" style="display:block;width:100%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),opacity .3s ease"></span>
      <span id="menuLine3" style="display:block;width:65%;height:1px;background:var(--color-text);transition:transform .4s cubic-bezier(.2,.8,.2,1),width .3s ease"></span>
    </button>
  </div>
</header>
<div id="mobileMenu" style="position:fixed;inset:0;z-index:200;background:var(--color-bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(30px,6vh,52px);opacity:0;pointer-events:none;transition:opacity .45s ease">
  <nav style="display:flex;flex-direction:column;align-items:center;gap:clamp(22px,4vh,34px)">
    <a href="/#sobre" data-cursor="link" data-mobilenav="" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Sobre</a>
    <a href="/#servicos" data-cursor="link" data-mobilenav="" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Serviços</a>
    <a href="/#processo" data-cursor="link" data-mobilenav="" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-text)">Processo</a>
    <a href="/planos" data-cursor="link" data-mobilenav="" style="font-family:var(--font-heading);font-weight:300;font-size:clamp(30px,7vw,44px);letter-spacing:.03em;text-transform:uppercase;color:var(--color-accent-700)">Planos</a>
  </nav>
  <a href="/#contato" data-cursor="link" data-mobilenav="" class="hover-accent-ls" style="font-family:var(--font-heading);font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:15px 34px;transition:background-color .4s ease,letter-spacing .4s ease">Orçamento</a>
</div>
`;
}

// Everything that lives inside <main>, up to (but not including) the final
// "Ainda em dúvida" CTA section — that section is now the standalone
// PlanosFinalSection React component, rendered as a sibling after this
// markup inside <main>.
export function getPlanosMainInnerHtml() {
  return `
<section style="padding:clamp(150px,20vh,220px) clamp(20px,5vw,64px) clamp(50px,7vh,80px)">
  <div style="max-width:1100px;margin:0 auto">
    <div data-reveal="up" style="display:flex;align-items:baseline;gap:12px;margin-bottom:22px">
      <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;color:var(--color-accent);font-feature-settings:'tnum'">04</span>
      <span style="font-family:var(--font-heading);font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Investimento</span>
    </div>
    <h1 data-reveal="up" style="margin:0;font-family:var(--font-heading);font-weight:300;font-size:clamp(40px,6.5vw,92px);line-height:1.02;letter-spacing:-.02em">Todos os planos,<br><span style="font-style:italic;color:var(--color-accent-700)">por serviço.</span></h1>
    <p data-reveal="up" style="margin:clamp(20px,3vh,32px) 0 0;max-width:58ch;font-size:clamp(15px,1.15vw,18px);line-height:1.72;color:var(--color-neutral-800)">Assessoria estratégica, filmmaker, provador, reels, publi e visitas em eventos — escolha a frente que faz sentido para o seu momento e veja o que cada plano inclui.</p>
  </div>
</section>

<section style="padding:0 clamp(20px,5vw,64px) clamp(90px,12vh,150px)">
  <div style="max-width:1300px;margin:0 auto">
    <div data-reveal="up" style="display:flex;flex-wrap:wrap;width:max-content;max-width:100%;border:1px solid rgba(32,31,29,.24);border-radius:4px;background:var(--color-surface);margin-bottom:clamp(40px,6vh,68px)">
      <button data-svctab="assessoria" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:var(--color-text);color:var(--color-bg);cursor:pointer;transition:background-color .35s,color .35s">Assessoria Estratégica</button>
      <button data-svctab="filmmaker" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Filmmaker</button>
      <button data-svctab="provador" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Provador</button>
      <button data-svctab="reels" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Reels</button>
      <button data-svctab="publi" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Publi &amp; Permuta</button>
      <button data-svctab="eventos" data-cursor="link" style="font-family:var(--font-heading);font-size:13.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:13px 22px;border:0;background:transparent;color:var(--color-text);cursor:pointer;transition:background-color .35s,color .35s">Visitas em Eventos</button>
    </div>

    <div data-svcpanel="assessoria" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Start</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">4 dias por mês · 1 vez na semana</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reuniões estratégicas no mês</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de conteúdo</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">5 stories por semana (20 no mês)</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel por semana (4 no mês)</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 post de feed por mês</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Acompanhamento e orientação</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatórios mensais de resultados</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">450</span>
          <span style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Start de Assessoria Estratégica (R$450/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan data-featured style="background:var(--color-bg);border:1px solid var(--color-accent);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-bg);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:6px 13px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Intermediário</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">2 vezes na semana · tudo do Start</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 diárias de captação por mês</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reels por semana</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Conteúdos para stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Roteiros estratégicos</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento semanal</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégias de campanhas e promoções</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Análise de resultados · 2 reuniões mensais</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Direcionamento de modelos e equipe nas gravações</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">650</span>
          <span style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano Intermediário de Assessoria Estratégica (R$650/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Plano</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">VIP</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">3 vezes por semana · operação completa</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">3 reels por semana · até 12 editados</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">15 stories por semana</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">4 posts de feed por mês</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Assessoria estratégica completa</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento de campanhas e roteiros</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Captação profissional e direção nas gravações</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Estratégia de vendas</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Relatório mensal e reuniões de acompanhamento</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Ajustes constantes na estratégia</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">950</span>
          <span style="font-size:14px;color:var(--color-neutral-700)">/mês</span>
        </div>
        <a href="${waLink('Olá! Me interessei pelo plano VIP de Assessoria Estratégica (R$950/mês). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
    </div>

    <div data-svcpanel="filmmaker" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Ensaio</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Start</h3>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel profissional</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Direção de poses</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">150</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Ensaio Start de Filmmaker (10 fotos + 1 reel, R$150). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Agendar</a>
      </div>
      <div data-plan data-featured style="background:var(--color-bg);border:1px solid var(--color-accent);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-bg);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:6px 13px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Ensaio</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">Intermediário</h3>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">2 reels profissionais</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Direção criativa</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Captação estratégica</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">200</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Ensaio Intermediário de Filmmaker (15 fotos + 2 reels, R$200). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Agendar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Ensaio</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(26px,2.6vw,36px);letter-spacing:.02em;text-transform:uppercase">VIP</h3>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">3 reels profissionais</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Conteúdo de campanha</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Planejamento da gravação</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">250</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Ensaio VIP de Filmmaker (20 fotos + 3 reels, R$250). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Agendar</a>
      </div>
    </div>

    <div data-svcpanel="provador" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Provador</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">7 Looks</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por conta da empresa.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">7 looks provados e gravados</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição inclusa</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Entrega dos vídeos prontos</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">120</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Provador 7 Looks (R$120). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Agendar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Provador</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">7 Looks + Stories</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por conta da empresa.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">7 looks provados e gravados</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Postagem do provador completo nos Stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição inclusa</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">160</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Provador 7 Looks + Stories (R$160). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Agendar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Provador</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">7 Looks — Foto e Vídeo da Peça</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por minha conta.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">7 looks provados e gravados</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Foto e vídeo de cada peça</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Produção e direção por minha conta</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Edição inclusa</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">150</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Provador 7 Looks — Foto e Vídeo da Peça (R$150). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Agendar</a>
      </div>
      <div data-plan data-featured style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Provador</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">7 Looks — Foto e Vídeo + Stories</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-accent-700);font-style:italic;text-wrap:pretty">Produção por minha conta.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">7 looks provados e gravados</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Foto e vídeo de cada peça</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Postagens nos Stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Produção e direção por minha conta</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-accent-700);font-feature-settings:'tnum'">200</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Provador 7 Looks — Foto e Vídeo + Stories (R$200). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Agendar</a>
      </div>
    </div>
    <p data-svcnote="provador" style="display:none;margin:26px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Os valores podem ser alterados de acordo com a necessidade da loja e a quantidade de looks.</p>

    <div data-svcpanel="reels" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote de Reels</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Sem Collab</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por conta da empresa.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel gravado e editado</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Publicação no meu perfil</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Roteiro e direção de cena</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">120</span>
        </div>
        <a href="${waLink('Olá! Me interessei no pacote de Reels Sem Collab (R$120). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote de Reels</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Com Collab</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por conta da empresa.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel gravado e editado</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Publicação em collab com a marca</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Roteiro e direção de cena</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">180</span>
        </div>
        <a href="${waLink('Olá! Me interessei no pacote de Reels Com Collab (R$180). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote de Reels</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Sem Collab — Minha Produção</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Produção por minha conta.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel gravado e editado</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Produção, cenário e figurino por minha conta</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Publicação no meu perfil</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">180</span>
        </div>
        <a href="${waLink('Olá! Me interessei no pacote de Reels Sem Collab — Minha Produção (R$180). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan data-featured style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote de Reels</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Com Collab — Minha Produção</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-accent-700);font-style:italic;text-wrap:pretty">Produção por minha conta.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 reel gravado e editado</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Produção, cenário e figurino por minha conta</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Publicação em collab com a marca</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-accent-700);font-feature-settings:'tnum'">200</span>
        </div>
        <a href="${waLink('Olá! Me interessei no pacote de Reels Com Collab — Minha Produção (R$200). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Contratar</a>
      </div>
    </div>

    <div data-svcpanel="publi" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote Publi</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Story — 24h</h3>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 Story publicado</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Permanência de 24 horas</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Marcação da marca</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">50</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Pacote Publi Story — 24h (R$50). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan data-featured style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Pacote Publi</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Post ou Collab</h3>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">1 publicação no feed ou collab</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Legenda e marcação da marca</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Conteúdo produzido por mim</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-accent-700);font-feature-settings:'tnum'">100</span>
        </div>
        <a href="${waLink('Olá! Me interessei no Pacote Publi Post ou Collab (R$100). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Contratar</a>
      </div>
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Permuta</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Divulgação por Permuta</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Sem custo em dinheiro.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">A loja envia o produto</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Divulgação nos Stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Exibição apenas do produto recebido</li>
        </ul>
        <a href="${waLink('Olá! Gostaria de propor uma divulgação por permuta. Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Propor permuta</a>
      </div>
    </div>

    <div data-svcpanel="eventos" style="display:none;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(16px,2vw,28px)">
      <div data-plan style="background:var(--color-bg);border:1px solid rgba(32,31,29,.18);padding:clamp(26px,3vw,40px);display:flex;flex-direction:column;position:relative;transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Visitas em Eventos</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Sem Filmmaker</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Valor por hora.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Presença e cobertura nos Stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Registro do evento em tempo real</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Marcação dos organizadores</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-text);font-feature-settings:'tnum'">150</span>
          <span style="font-size:14px;color:var(--color-neutral-700)">/h</span>
        </div>
        <a href="${waLink('Olá! Gostaria de um orçamento para Visita em Evento Sem Filmmaker (R$150/h). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;transition:background-color .4s ease">Solicitar orçamento</a>
      </div>
      <div data-plan data-featured style="background:var(--color-neutral-100);border:1px solid var(--color-accent);padding:clamp(30px,3.2vw,44px);display:flex;flex-direction:column;position:relative;box-shadow:0 4px 20px rgba(182,130,53,.1);transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s ease">
        <span style="position:absolute;top:-1px;right:-1px;background:var(--color-accent);color:var(--color-neutral-100);font-family:var(--font-heading);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:7px 14px">Mais escolhido</span>
        <div style="font-family:var(--font-heading);font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--color-neutral-600)">Visitas em Eventos</div>
        <h3 style="margin:8px 0 0;font-family:var(--font-heading);font-weight:400;font-size:clamp(24px,2.4vw,34px);letter-spacing:.02em;text-transform:uppercase;line-height:1.08">Com Filmmaker</h3>
        <p style="margin:10px 0 0;font-size:13.5px;color:var(--color-accent-700);font-style:italic;text-wrap:pretty">Valor por hora, incluindo captação.</p>
        <div style="height:1px;background:rgba(32,31,29,.16);margin:24px 0"></div>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;flex:1">
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Presença e cobertura nos Stories</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Captação profissional como filmmaker</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Reels e fotos do evento</li>
          <li style="font-size:14.5px;line-height:1.55;padding-left:16px;position:relative;color:var(--color-neutral-900)">Entrega em tempo real</li>
        </ul>
        <div style="margin-top:30px;display:flex;align-items:baseline;gap:6px">
          <span style="font-family:var(--font-heading);font-size:20px;color:var(--color-accent-700)">R$</span>
          <span style="font-family:var(--font-heading);font-weight:300;font-size:clamp(42px,4.4vw,58px);line-height:1;color:var(--color-accent-700);font-feature-settings:'tnum'">250</span>
          <span style="font-size:14px;color:var(--color-neutral-700)">/h</span>
        </div>
        <a href="${waLink('Olá! Gostaria de um orçamento para Visita em Evento Com Filmmaker (R$250/h). Pode me passar mais detalhes?')}" target="_blank" rel="noopener" data-cursor="btn" class="hover-accent2" style="margin-top:22px;text-align:center;font-family:var(--font-heading);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);border:1px solid var(--color-accent);border-radius:4px;padding:13px 20px;background:var(--color-accent-100);transition:background-color .4s ease">Solicitar orçamento</a>
      </div>
    </div>
    <p data-svcnote="eventos" style="display:none;margin:26px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic;text-wrap:pretty">Inaugurações, corridas, workshops, congressos, corporativos, lançamentos, feiras e eventos religiosos. Coberturas longas e pacotes fechados sob consulta.</p>

    <p data-reveal="up" style="margin:26px 0 0;font-size:13.5px;color:var(--color-neutral-700);font-style:italic">Deslocamento e demandas fora do escopo são orçados à parte. Pacotes personalizados sob consulta.</p>
  </div>
</section>
`;
}

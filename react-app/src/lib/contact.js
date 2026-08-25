// Real contact channels. WhatsApp CTAs are personalized with a pre-filled
// message naming the specific plan/service the visitor clicked, via wa.me's
// `text` query param.
export const WHATSAPP_NUMBER = "5599981011833";
export const INSTAGRAM_URL = "https://www.instagram.com/ellen__limma/";
// Developer credit link — Instagram for now, will be swapped for Noxi's site later.
export const NOXI_URL = "https://www.instagram.com/noxidesignbr/";

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

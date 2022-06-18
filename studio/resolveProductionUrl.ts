export default function resolveProductionUrl(document) {
  return `https://sanity-capri-react-web-nyhkjifu.netlify.app/preview?slug=${document.slug.current}`;
}

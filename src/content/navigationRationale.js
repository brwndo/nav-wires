/**
 * Context for each navigation direction, from NAVIGATION_RATIONALE.md
 */
export const navigationRationale = {
  a: {
    title: 'Option A: Discover & Series-First + Product Type',
    philosophy: 'Balanced approach prioritizing IP discovery alongside content-commerce storytelling.',
    why: [
      'IP-centric — Series as second position acknowledges anime fandom\'s primary shopping behavior (fans search by series first)',
      'Content-forward — Leading with "Discover" signals editorial value and storytelling without forcing exploration',
      'Proven patterns — Uses familiar eCommerce structures that reduce cognitive load',
      'Cross-category merchandising — Series pages naturally group apparel + collectibles + media for maximum cross-sell',
    ],
    bestFor: 'Established brands with diverse catalogs that need to balance discovery and direct shopping paths.',
    tradeoffs: 'Generic "Discover" label may lack specificity; drops/new arrivals nested rather than emphasized.',
  },
  b: {
    title: "Option B: Gender First + Product Type",
    philosophy: 'Apparel-dominant strategy targeting gender-specific shopping behaviors.',
    why: [
      'Gender marketing — Enables targeted campaigns and personalized experiences for men\'s vs. women\'s audiences',
      'Apparel primacy — Direct access to gender-filtered products in 2 clicks for product-type shoppers',
      'Lifestyle positioning — Frames shopping as identity/style rather than fandom/IP',
      'Conversion optimization — Reduces decision paralysis by immediately segmenting the catalog',
    ],
    bestFor: 'Sites where apparel is 70%+ of revenue and analytics show strong gender-based shopping patterns.',
    tradeoffs: 'Fragments IP discovery across multiple sections; creates 3-level mobile accordion depth; reinforces gender stereotypes; collectibles/media become afterthoughts.',
  },
  d: {
    title: 'Option D: Hybrid IP + Smart Defaults',
    philosophy: 'IP-first positioning with elevated FOMO/drops strategy.',
    why: [
      'Strongest IP signal — Leading with "Series" claims "anime merch destination" positioning immediately',
      'Drop strategy emphasis — Top-level "New" with countdown timer capitalizes on release-driven traffic spikes',
      'Smart defaults reduce friction — "All Apparel", "All Figures" links provide quick escape hatches for browsers',
      'Scalable architecture — Adding new IPs or product categories doesn\'t break navigation structure',
    ],
    bestFor: 'Drop-focused brands where limited releases drive traffic; sites competing to own the "anime merchandise" category.',
    tradeoffs: 'Discovery content deprioritized to trailing position; 4 top-level items push horizontal space limits; requires active curation of "Popular" series.',
  },
};

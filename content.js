/**
 * ═══════════════════════════════════════════════════════════════
 * VIVA LANDSCAPE & DESIGN — INTERNAL SALES CATALOG
 * Content Data File (content.js) — v2.0 (Scrollable + Real Images)
 * ═══════════════════════════════════════════════════════════════
 *
 * HOW TO EDIT:
 * ───────────────────────
 * This file controls ALL text, product data, FAQs, gallery items,
 * and before/after entries shown in the catalog.
 *
 * IMAGES:
 * All image URLs are centralized in this file. To update an image,
 * change the URL in the relevant object. Images come from:
 *   - Vendor product pages (Duralum, Phoenix Paver, No Limit Turf, etc.)
 *   - Internal Viva project photos (Google Drive)
 *
 * ═══════════════════════════════════════════════════════════════
 */

const BRAND = {
  name: "Viva Landscape & Design",
  tagline: "Engineered Right. Managed Right. Built to Last.",
  logo: null,
  website: "https://vivalandscapeanddesign.com",
  phone: "(602) 524-0770",
  email: "customerservice@vivalandscapedesign.com",
  address: "10000 North 31st Avenue, Suite C308, Phoenix, AZ 85051",
  hours: "Mon-Fri: 7:00 AM - 8:00 PM | Sat: 7:00 AM - 4:00 PM | Sun: Closed",
  position: "The Most Structured Outdoor Experience Company in Phoenix",
};

/**
 * ─── HOME PAGE ───────────────────────────────────────────────
 */
const HOME = {
  heroTitle: "Internal Sales Catalog",
  heroSubtitle: "Your presentation-ready guide to every service, product, and option we offer.",
  toolDescription: "This tool is built for Viva consultants to use during Loom recordings, screen shares, Google Meet calls, and live sales conversations. Navigate by service, scroll through product options, compare tiers, and build client confidence — all from one place.",
  howToUse: [
    { icon: "sidebar", label: "Navigate", text: "Use the left sidebar to jump to any service category." },
    { icon: "tabs", label: "Scroll & Explore", text: "Each service is a single scrollable page with all sections visible." },
    { icon: "gallery", label: "Show Visuals", text: "Click any image to enlarge it during a screen share." },
    { icon: "compare", label: "Compare Options", text: "Use comparison sections to walk clients through differences." },
    { icon: "faq", label: "Answer Questions", text: "FAQs are inline — expand them live if a client asks." },
  ],
  recommendedFlow: [
    "Open the relevant service section before the call.",
    "Start at the top — the hero and overview introduce the service.",
    "Scroll down to show tiers and product options.",
    "Use the in-page anchor menu to jump to specific sections.",
    "Show the Gallery or Before & After to build excitement.",
    "Reference FAQs if the client has questions.",
    "Mention add-ons and upgrades to increase project value.",
  ],
  recentUpdates: [
    { label: "Pergolas", note: "Full content + vendor imagery from Duralum integrated.", status: "complete" },
    { label: "Pavers", note: "All product lines with Phoenix Paver images + color swatches.", status: "complete" },
    { label: "Artificial Turf", note: "Standard, Premium, Pet & Putting Green with No Limit Turf images.", status: "complete" },
    { label: "Sod / Natural Grass", note: "Midiron vs Tifway comparison + Evergreen Turf imagery.", status: "complete" },
    { label: "UX Update", note: "All services converted to long-scroll pages with anchor navigation.", status: "complete" },
  ],
};

/**
 * ─── SERVICES ────────────────────────────────────────────────
 * Each service now uses `sections` instead of `tabs`.
 * Sections are rendered vertically as a scrollable page.
 */
const SERVICES = [

  // ═══════════════════════════════════════════════════════════
  // 1. PERGOLAS
  // ═══════════════════════════════════════════════════════════
  {
    id: "pergolas",
    title: "Pergolas & Patio Covers",
    icon: "pergola",
    shortDesc: "Three pergola types we install: Lattice, Solid, and Cantilever (two-post). All from Duralum aluminum systems.",
    heroBadges: ["Lattice · Solid · Cantilever", "Duralum Aluminum", "Custom Colors & Finishes", "Add-On Ready"],
    heroImage: "https://lh3.googleusercontent.com/d/1XFixujTOltHntNijYPC9yLTRW8fdQjGa",
    sections: ["Overview", "Pergola Types", "Configurations", "Colors & Finishes", "Add-Ons", "FAQs", "Gallery"],

    overview: {
      intro: "Pergolas and patio covers are one of the highest-impact upgrades for any Phoenix-area home — they extend usable outdoor living space, reduce direct sun exposure, and lift the property's value. We install three Duralum pergola types: Lattice, Solid, and Cantilever (two-post).",
      vendorNote: "Our preferred vendor is Duralum — over 60 years of aluminum patio cover manufacturing. For complex projects we partner locally with AZ Sun Covers. AlumaWood Patio is a useful research reference for the team.",
      keyPoints: [
        "Lattice covers allow airflow and filtered sunlight — open feel.",
        "Solid covers provide full shade and weather protection — premium feel.",
        "Cantilever (two-post) pergolas are a clean, modern footprint with two posts and a wall-mounted side.",
        "Each type can be installed in Attached or Freestanding configuration.",
        "Color and rafter-tail cut selections are part of the close — clients love seeing the options.",
      ],
      consultant_tip: "Start by asking the client what they want to use the space for — entertaining, relaxing, working from home, kids' play area. That answer drives the lattice-vs-solid recommendation faster than spec talk.",
    },

    options: [
      {
        name: "Lattice Pergola",
        subtitle: "Duralum Phoenix Lattice — open, filtered light",
        tier: "standard",
        badges: ["Airflow", "Filtered Light", "Most Versatile"],
        description: "Wood-look aluminum lattice cover. Slatted top allows airflow and filtered sunlight — ideal for garden areas, open entertaining, or anywhere full shade isn't required. Installs attached to the home or freestanding.",
        specs: [
          { label: "Vendor", value: "Duralum" },
          { label: "Material", value: "Wood-look aluminum" },
          { label: "Maintenance", value: "Low — no rot, no warp, no repaint" },
          { label: "Configurations", value: "Attached or Freestanding" },
          { label: "Best For", value: "Gardens, open entertaining, partial shade" },
        ],
        image: "https://lh3.googleusercontent.com/d/1SDo-aFoaBiC5kjGLchyWN_wBPcFIoKhv",
        images: [
          "https://lh3.googleusercontent.com/d/1ItDyaa8CF8LkHc5HnLPsFyUpM2Mz7x7o",
          "https://lh3.googleusercontent.com/d/1bDXyYbnYxxH1ld98tP6Ngg7CaoVrWZl9",
          "https://lh3.googleusercontent.com/d/1o6aEFaJR3zYF2NNQCtVobaaAzfLUX__R",
        ],
      },
      {
        name: "Solid Pergola",
        subtitle: "Duralum Californian Solid — full shade, weather protection",
        tier: "standard",
        badges: ["Full Shade", "Weather Protection", "Premium Feel"],
        description: "Solid aluminum cover providing complete shade and protection from rain. Higher-grade construction with a premium feel — best fit for outdoor kitchens, dining areas, and outdoor living rooms. Choose from three decorative rafter-tail end cuts: Scallop, Miter, or Bevel.",
        specs: [
          { label: "Vendor", value: "Duralum" },
          { label: "Material", value: "High-grade aluminum, solid panel" },
          { label: "Rafter-Tail Cuts", value: "Scallop · Miter · Bevel" },
          { label: "Configurations", value: "Attached or Freestanding" },
          { label: "Best For", value: "Outdoor kitchens, dining, living rooms" },
        ],
        image: "https://lh3.googleusercontent.com/d/1r5hl_AV0g_iYrqEpDu2n2fQKydvclrYm",
        images: [
          "https://lh3.googleusercontent.com/d/13Ds8x8qydwJ5cip1yvxWMXD-kZK3AAn0",
          "https://lh3.googleusercontent.com/d/16NTqEeHYY9XulWBwkuAPUQ8jY6sh138Q",
        ],
      },
      {
        name: "Cantilever (Two-Post) Pergola",
        subtitle: "Modern footprint — two outer posts, wall-mounted on the home side",
        tier: "standard",
        badges: ["Two-Post", "Clean Look", "Compact Patios"],
        description: "A two-post or cantilever pergola uses only two support posts on the outer edge, with the structure supported by the home's wall on the other side. The result is a cleaner, more open footprint — great for smaller patios or where post placement is limited.",
        specs: [
          { label: "Posts", value: "2 (outer edge only)" },
          { label: "Other Side", value: "Wall-mounted to the home" },
          { label: "Available As", value: "Lattice or Solid finish" },
          { label: "Best For", value: "Smaller patios, modern look, minimal posts" },
        ],
        image: "https://lh3.googleusercontent.com/d/14gB-ANPUozQkReaLXpCRcWRDecJZ-mmh",
        images: [
          "https://lh3.googleusercontent.com/d/1Kp5vEPZ232_mEupIYV6WQge1z3QU6qiS",
        ],
      },
      {
        name: "Insulated Patio Cover",
        subtitle: "Duralum Monterey Insulated — Specialty",
        tier: "premium",
        hidden: true,
        badges: ["Best Heat Control", "Hidden Wiring"],
        description: "Specialty solid cover with insulated panels. Includes hidden internal raceways for ceiling fans, light fixtures, and electrical without exposed conduit. Reveal when a client signals interest in heat control or extensive add-ons.",
        specs: [
          { label: "Material", value: "Insulated aluminum panels" },
          { label: "Wiring", value: "Hidden internal raceways" },
          { label: "Best For", value: "Outdoor living rooms with heavy add-ons" },
        ],
        image: "https://lh3.googleusercontent.com/d/1Wm6u-dM7Hcc9AkUeHCA9MJ17TwzTzjlB",
        note: "Specialty upsell. Reveal when the client asks about insulated panels or wants extensive add-ons (fans, lights, electrical).",
      },
    ],

    configurations: {
      title: "Attached or Freestanding",
      description: "Every Duralum pergola we install can be configured one of two ways. This is a layout decision — independent of the type (Lattice, Solid, or Cantilever).",
      items: [
        {
          name: "Attached",
          subtitle: "Connected to the home structure",
          badges: ["Most Common", "Seamless Look"],
          points: [
            "Mounts directly to the fascia or wall of the home.",
            "Creates a natural extension of indoor living space.",
            "Most common configuration for backyard patios.",
          ],
          image: "https://lh3.googleusercontent.com/d/1nv-q_VA_0_a-llCQVnY9rMDeljZjyLDX",
        },
        {
          name: "Freestanding",
          subtitle: "Independent structure",
          badges: ["Flexible Placement", "Pool Areas"],
          points: [
            "Stands independently with its own post system.",
            "Ideal for pool areas, garden features, or detached seating zones.",
            "Offers more placement flexibility in the yard.",
          ],
          image: "https://lh3.googleusercontent.com/d/1ItDyaa8CF8LkHc5HnLPsFyUpM2Mz7x7o",
        },
      ],
    },

    addOns: [
      {
        name: "Recessed Lighting",
        description: "Built-in LED lighting integrated into the underside of the cover.",
        icon: "light",
        details: [
          "Used for ambient evening lighting on the patio.",
          "On insulated covers (Monterey), wiring runs through hidden raceways — no exposed conduit.",
          "On non-insulated covers, surface-mounted conduit is the standard alternative.",
        ],
      },
      {
        name: "Ceiling Fans",
        description: "Outdoor-rated ceiling fans for air circulation under the cover.",
        icon: "fan",
        details: [
          "Standard outdoor-rated fan, mounted to the ceiling beam.",
          "Requires planned electrical access during installation.",
          "Insulated covers (Monterey) hide the wiring inside the panel for a cleaner look.",
        ],
      },
      {
        name: "Electrical Access",
        description: "Outlets and wiring for appliances, speakers, fans, or lights.",
        icon: "electric",
        details: [
          "Plan electrical at install time to avoid surface conduit later.",
          "Outlets are commonly placed near corner posts or on the wall-mount side.",
          "Requires permit and licensed electrician — Viva coordinates the trade.",
        ],
      },
      {
        name: "Privacy Screens",
        description: "Side panels for wind protection, sun blocking, or privacy.",
        icon: "screen",
        details: [
          "Lattice or solid side-screen panels.",
          "Encloses one or two sides of the pergola for partial privacy.",
          "Decorative cut options available.",
        ],
      },
      {
        name: "Gutters & Drainage",
        description: "Integrated gutter and drainage system, primarily for solid covers.",
        icon: "gutter",
        details: [
          "Channels rainwater runoff away from the patio.",
          "Standard on most solid cover installs in monsoon-zone properties.",
          "Lattice covers don't require gutters but can have them as an option.",
        ],
      },
    ],

    colorOptions: {
      note: "Duralum offers a defined palette across all patio cover systems. Color and rafter-tail cut selections are part of the close — clients love seeing the options.",
      categories: [
        { label: "Standard Colors", items: ["White", "Sandstone", "Adobe", "Brown"] },
        { label: "Premium / Wood-Grain Finishes", items: ["Knotwood wood-grain finishes — confirm exact options with Duralum rep before quoting"] },
        { label: "Rafter-Tail End Cuts (Solid Pergolas)", items: ["Scallop Cut", "Miter Cut", "Bevel Cut"] },
      ],
      placeholder: "Final color swatch images pending — replace with vendor-provided assets from Duralum.",
    },

    faqs: [
      { q: "What is the difference between lattice and solid?", a: "Lattice allows airflow and filtered sunlight through the slats, creating a more open feel. Solid provides complete shade and weather protection, blocking all direct sun and rain.", tag: "client" },
      { q: "How long do aluminum patio covers last?", a: "Aluminum patio covers from manufacturers like Duralum are designed for decades of use with minimal maintenance. They do not rot, warp, or require repainting like wood.", tag: "client" },
      { q: "Can I add fans and lights later?", a: "It depends on the system. Insulated covers (like the Monterey) have hidden raceways for wiring. Other systems may require surface-mounted conduit. It is best to plan electrical during the initial installation.", tag: "both" },
      { q: "What is a two-post pergola?", a: "A two-post or cantilever pergola uses only two support posts on the outer edge, with the structure supported by the home's wall on the other side. It creates a cleaner, more open look.", tag: "client" },
      { q: "Which option is better for outdoor kitchens?", a: "Solid covers are generally recommended for outdoor kitchens because they provide full protection from sun and rain, keeping the cooking and dining area comfortable.", tag: "client" },
      { q: "Do you offer freestanding pergolas?", a: "Yes. Both lattice and solid options are available in freestanding configurations, which are great for pool areas, gardens, or detached seating zones.", tag: "client" },
    ],

    gallery: [
      { src: "https://lh3.googleusercontent.com/d/1XFixujTOltHntNijYPC9yLTRW8fdQjGa", alt: "Viva — Lattice patio cover installed", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1SDo-aFoaBiC5kjGLchyWN_wBPcFIoKhv", alt: "Viva — Lattice cover backyard", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1ItDyaa8CF8LkHc5HnLPsFyUpM2Mz7x7o", alt: "Viva — Lattice pergola outdoor living", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1bDXyYbnYxxH1ld98tP6Ngg7CaoVrWZl9", alt: "Viva — Lattice cover side view", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1o6aEFaJR3zYF2NNQCtVobaaAzfLUX__R", alt: "Viva — Lattice patio entertaining area", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1rrHC8ldl-rmgx_WqfeWMpiad-B9V65u6", alt: "Viva — Lattice cover wide view", category: "lattice" },
      { src: "https://lh3.googleusercontent.com/d/1r5hl_AV0g_iYrqEpDu2n2fQKydvclrYm", alt: "Viva — Solid patio cover installed", category: "solid" },
      { src: "https://lh3.googleusercontent.com/d/13Ds8x8qydwJ5cip1yvxWMXD-kZK3AAn0", alt: "Viva — Solid cover backyard project", category: "solid" },
      { src: "https://lh3.googleusercontent.com/d/16NTqEeHYY9XulWBwkuAPUQ8jY6sh138Q", alt: "Viva — Patio cover full shade", category: "solid" },
      { src: "https://lh3.googleusercontent.com/d/14gB-ANPUozQkReaLXpCRcWRDecJZ-mmh", alt: "Viva — Cantilever pergola two-post", category: "cantilever" },
      { src: "https://lh3.googleusercontent.com/d/1Kp5vEPZ232_mEupIYV6WQge1z3QU6qiS", alt: "Viva — Cantilever cover clean look", category: "cantilever" },
      { src: "https://lh3.googleusercontent.com/d/1nv-q_VA_0_a-llCQVnY9rMDeljZjyLDX", alt: "Viva — Attached pergola project", category: "solid" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Backyard patio transformation", beforePlaceholder: "Before — empty backyard patio", afterPlaceholder: "After — solid patio cover with lighting" },
      { before: null, after: null, label: "Pool area pergola addition", beforePlaceholder: "Before — open pool deck", afterPlaceholder: "After — freestanding lattice cover" },
    ],

    internalNotes: [
      "Vendor: Duralum (https://duralum.com) — primary source for color/finish/cut options.",
      "Local partner for complex installs: AZ Sun Covers (https://azsuncovers.com).",
      "Research reference for the team: AlumaWood Patio (https://alumawoodpatio.com).",
      "Verify image-to-product assignments next time a real install is photographed — current images are best-categorized but should be confirmed against actual product types.",
      "Confirm exact Knotwood premium color names + pricing before quoting wood-grain finishes.",
      "Add-on availability depends on system: Insulated (Monterey) supports hidden wiring; non-insulated needs surface conduit.",
      "Solid pergola end-cuts: Scallop / Miter / Bevel — scalloping is the most decorative; miter is clean modern; bevel is a 45° straight finish.",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 2. PAVERS
  // ═══════════════════════════════════════════════════════════
  {
    id: "pavers",
    title: "Pavers",
    icon: "paver",
    shortDesc: "Townscape paver sets from Phoenix Paver — our flagship 3-piece system. Specialty and premium options available on request.",
    heroBadges: ["Best Seller: Townscape", "3-Piece Combo", "Patio · Walkway · Driveway", "Pool Deck Ready"],
    heroImage: "https://lh3.googleusercontent.com/d/1kbOoQN1vfDQcDoA6KrD5T4_SYsgfpY5F",
    sections: ["Overview", "Standard Options", "Colors", "Add-Ons", "FAQs", "Gallery"],

    overview: {
      intro: "Pavers are one of the most transformative outdoor upgrades available. They define walkways, patios, driveways, and pool decks with lasting beauty and function. Our flagship system is the Townscape three-piece set from Phoenix Paver — simple to present, versatile in pattern, and the choice for ~90% of our installs.",
      vendorNote: "Our primary vendor is Phoenix Paver. Townscape sets are the lead product. Additional specialty options (Veneer overlay, Aztec premium, 12×12 step stones) stay available for clients who request them — they live behind the 'Specialty options' toggle on this page.",
      keyPoints: [
        "Townscape is our flagship paver — simple, versatile, and easy to present.",
        "Available in 4 color blends and patterns optimized for our local installs.",
        "Three-piece combos come pre-organized on full pallets, easy to sell, easy to install.",
        "Color borders (a contrasting accent on the edges) noticeably elevate any patio.",
      ],
      consultant_tip: "Pavers are one of the best categories for before-and-after storytelling. Pattern, color borders, and surrounding upgrades dramatically change the emotional feel of a yard. Lead with the Townscape Slate transformation visuals — that single product covers most consultations.",
    },

    options: [
      {
        name: "Townscape Paver Sets",
        subtitle: "Phoenix Paver — Flagship Product",
        tier: "standard",
        badges: ["Best Seller", "3-Piece Combo", "4 Color Options"],
        description: "The Townscape is our most-used paver — about 90% of our installs are this exact product. It comes in a three-piece set, pre-organized for easy installation. Simple to sell, simple to install.",
        specs: [
          { label: "Vendor", value: "Phoenix Paver" },
          { label: "Set Type", value: "Three-piece random pattern combo" },
          { label: "Colors", value: "Territorial, Tierra, Norte, Slate Native (4 options)" },
          { label: "Most Popular", value: "Townscape Slate" },
          { label: "Layouts", value: "Random pattern (default), running bond, custom" },
        ],
        colorOptions: ["Territorial", "Tierra", "Norte", "Slate Native"],
        image: "https://phoenixpaver.com/wp-content/uploads/2025/09/Townscape_3_pieces.jpg",
        images: [
          "https://phoenixpaver.com/wp-content/uploads/2025/09/townscape_driveway.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/tonscape_territorial_atrium.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/TownScape_Territorial_Parkinglot.jpg",
        ],
        note: "This is the paver to lead with for most residential projects. The limited color selection actually simplifies the sales conversation.",
      },
      {
        name: "Holland Pavers",
        subtitle: "Phoenix Paver — Classic Linear",
        tier: "standard",
        badges: ["Classic Pattern", "Versatile Layout"],
        description: "Holland pavers offer a more classic, linear, brick-style pattern. They can be installed in herringbone, running bond, basketweave, and other traditional layouts.",
        specs: [
          { label: "Vendor", value: "Phoenix Paver" },
          { label: "Style", value: "Rectangular brick-format paver" },
          { label: "Colors", value: "4 color options — see vendor page" },
          { label: "Patterns", value: "Herringbone, running bond, basketweave, stacked" },
        ],
        image: "https://phoenixpaver.com/wp-content/uploads/2025/09/holland-pavers-driveway.jpg",
        images: [
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Holland_Slate_Pathway.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/holland-paver-walkway-residential.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Holland-driveway-black.jpg",
        ],
        note: "Holland is a secondary option — roughly 5–10% of projects. Keep it available but don't lead with it unless the client specifically requests a brick look.",
      },
      {
        name: "Veneer Pavers / Pool Coping",
        subtitle: "Phoenix Paver — Overlay Solution (Specialty)",
        tier: "standard",
        hidden: true,
        badges: ["No Demolition", "Pool & Patio Refresh"],
        description: "Veneer pavers are designed to be installed directly over existing concrete surfaces. This makes them ideal for pool deck upgrades, patio refreshes, and remodels where full demolition isn't practical or desired.",
        specs: [
          { label: "Vendor", value: "Phoenix Paver" },
          { label: "Application", value: "Overlay on existing concrete (cold-set)" },
          { label: "Best For", value: "Pool coping, patio remodels, walkway refresh" },
          { label: "Colors", value: "Multiple — see vendor page" },
        ],
        image: "https://phoenixpaver.com/wp-content/uploads/2025/09/veneer-paver-poolside.jpg",
        images: [
          "https://phoenixpaver.com/wp-content/uploads/2025/09/veneer-pool-deck.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Veneer-overlay-example.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Veneer-overlay-commercial-pool.jpg",
        ],
        note: "Emphasize the no-demolition benefit. This is a strong selling point for remodel projects and pool renovations.",
      },
      {
        name: "Aztec Stone Sets",
        subtitle: "Phoenix Paver — Premium Specialty",
        tier: "premium",
        hidden: true,
        badges: ["Large Format", "Natural Stone Feel", "Premium"],
        description: "The Aztec stone set is a larger-format paver with a more textured, natural-stone appearance. It is positioned as a premier option for clients who want a higher-end aesthetic.",
        specs: [
          { label: "Vendor", value: "Phoenix Paver" },
          { label: "Style", value: "Large-format with natural stone texture" },
          { label: "Colors", value: "4 color options — see vendor page" },
          { label: "Sizes", value: "High-end sizing — refer to vendor specs" },
        ],
        image: "https://phoenixpaver.com/wp-content/uploads/2025/09/Pool-at-Night.jpg",
        images: [
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_stone_territorial.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_Slate_paver.jpg",
          "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_Greendoors_Cafe.jpg",
        ],
        note: "Premium upsell. Reveal only when the client signals interest in upgrading the visual or asks about higher-end finishes.",
      },
      {
        name: "12×12 Square Step Stone",
        subtitle: "Home Depot — Standard Step Stone",
        tier: "standard",
        hidden: true,
        badges: ["Simple", "Stepping Paths"],
        description: "A basic 12 in. × 12 in. × 1.5 in. pewter square concrete step stone. Useful for stepping paths and simple-scope walkways where full paver installation isn't needed.",
        specs: [
          { label: "Vendor", value: "Home Depot (Pavestone)" },
          { label: "Size", value: '12" × 12" × 1.5"' },
          { label: "Color", value: "Pewter" },
          { label: "Use Case", value: "Walkways, simple patios, stepping paths" },
        ],
        image: null,
        note: "Specialty option for narrow scopes. Reveal only if the client specifically asks about step stones or simple walkway-only work.",
      },
    ],

    colorSwatchImage: "https://phoenixpaver.com/wp-content/uploads/2025/09/paver-color-examples.png",

    addOns: [
      { name: "Color Borders", description: "Contrasting border pavers in a secondary color — a small touch that makes the patio stand out.", icon: "border" },
      { name: "Lighting", description: "In-ground or path lighting for walkways and patios.", icon: "light" },
      { name: "Drainage", description: "Proper drainage planning for paver surfaces.", icon: "gutter" },
    ],

    faqs: [
      { q: "How long do pavers last?", a: "Quality pavers can last 25–50 years or more with proper installation and base preparation. They are one of the most durable hardscape materials available.", tag: "client" },
      { q: "What goes underneath the pavers?", a: "A properly prepared base typically includes compacted fill material, a layer of crushed aggregate base, and a setting bed of sand. The base preparation is critical to preventing settling and shifting.", tag: "client" },
      { q: "What is the difference between Townscape and Holland?", a: "Townscape comes in a three-piece multi-size set that creates a more varied, natural look. Holland is a single rectangular brick-style paver that works best in traditional patterns like herringbone.", tag: "client" },
      { q: "Can pavers be installed over existing concrete?", a: "Yes — veneer pavers are specifically designed for this. They can be cold-set over existing concrete surfaces, making them ideal for pool deck and patio remodel projects.", tag: "client" },
      { q: "Are pavers good for pool areas?", a: "Yes. Pavers are an excellent choice for pool decks. Veneer pavers and pool coping options are specifically designed for this application.", tag: "client" },
      { q: "How does the project investment vary by paver selection?", a: "The project investment varies by material selection. We walk through options during the consultation to find the best fit for your vision and budget.", tag: "both" },
    ],

    gallery: [
      { src: "https://lh3.googleusercontent.com/d/1kbOoQN1vfDQcDoA6KrD5T4_SYsgfpY5F", alt: "Viva — Paver patio installation", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1IFgICUhiaCMSUsBTcMWpmc9-Q_n6fF8a", alt: "Viva — Paver driveway project", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/17snUQY8qUm_iKvC5ziUKw-esj0YgGKgk", alt: "Viva — Paver backyard transformation", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1mLB9WbrcanpBu5PetXJ43TaEjS8FNPcO", alt: "Viva — Paver outdoor living area", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1SuKWJwMIxLFy49a7j6Fo_U8S_2Lp-k9q", alt: "Viva — Paver patio completed", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1VDQBG7L88yk0nB0lrVhjQ5v4mYEQIFkR", alt: "Viva — Paver walkway and patio", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1J5GBpLz3ia3iBe-edS2J5yiTc5mzxE7t", alt: "Viva — Paver driveway full view", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1ucGglT5vlxLaTuqCV8TqmIaJvOUEP_eF", alt: "Viva — Pavers with turf combo", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1KirwdetmdUItbzZh1ST_A9fffgeRplHU", alt: "Viva — Paver patio side view", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1Ui2LZ9sejkUqGEJyqGHsSg4ZpNQO1G9u", alt: "Viva — Paver pattern detail", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1g_5blL4yyF1URVNHlfllSrXXs4PJbhEt", alt: "Viva — Paver driveway project", category: "pavers" },
      { src: "https://lh3.googleusercontent.com/d/1kP41sK-l5TZJOmvh208FeE2mK4UksytO", alt: "Viva — Paver patio completed project", category: "pavers" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Backyard patio — dirt to Townscape pavers", beforePlaceholder: "Before — dirt yard", afterPlaceholder: "After — Townscape paver patio" },
      { before: null, after: null, label: "Pool deck remodel — concrete to veneer", beforePlaceholder: "Before — old concrete pool deck", afterPlaceholder: "After — veneer paver pool deck" },
    ],

    internalNotes: [
      "Obtain color swatch images for all four Townscape colors.",
      "Select best installed paver photos from Drive (folders: Hardscape/Pavers, Hardscape/Travertine).",
      "Confirm Belgard product options and whether to include in catalog.",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 3. ARTIFICIAL TURF
  // ═══════════════════════════════════════════════════════════
  {
    id: "turf",
    title: "Artificial Turf",
    icon: "turf",
    shortDesc: "Low-maintenance, year-round green — from standard lawns to pet-friendly and putting green options.",
    heroBadges: ["No Watering", "Pet Friendly Options", "Year-Round Green", "Tri-Shield\u2122 Included"],
    heroImage: "https://lh3.googleusercontent.com/d/1DfoCQaFcoc4a4o0_zKf7bPb-jEyxJ7dy",
    sections: ["Overview", "Tri-Shield\u2122", "Standard Collection", "Premium Collection", "Putting Green", "Full Comparison", "Add-Ons", "FAQs", "Gallery"],

    overview: {
      intro: "Artificial turf delivers a consistently green, low-maintenance lawn without the water, mowing, or seasonal dormancy of natural grass. In the Phoenix metro, where water conservation and heat are major factors, turf is one of the most practical and visually impactful property improvements available.",
      vendorNote: "Our primary vendor is No Limit Turf, with premium options also available from Arizona Turf Depot.",
      keyPoints: [
        "No watering, mowing, or fertilizing required.",
        "Stays green year-round regardless of season.",
        "Available in standard, premium, pet-optimized, and putting green options.",
        "Different pile heights and face weights for different looks and uses.",
        "Every installation includes the Tri-Shield\u2122 Outdoor System for lasting results.",
      ],
      consultant_tip: "Ask the client what the space will be used for: general lawn, pets, kids, entertaining, or a putting green. This immediately narrows the product recommendation.",
    },

    // Tri-Shield data for this service
    triShield: {
      layers: [
        {
          id: "foundation",
          name: "Foundation Shield",
          icon: "\uD83D\uDEE1\uFE0F",
          color: "foundation",
          description: "Engineered base preparation that ensures long-term structural stability. What competitors skip \u2014 we build from the ground up.",
          prevents: "Prevents: Shifting, sinking, uneven surfaces",
        },
        {
          id: "water",
          name: "Water Shield",
          icon: "\uD83D\uDCA7",
          color: "water",
          description: "Professional drainage system that protects your property improvement from water damage, pooling, and erosion.",
          prevents: "Prevents: Flooding, water damage, base erosion",
        },
        {
          id: "finish",
          name: "Finish Shield",
          icon: "\u2728",
          color: "finish",
          description: "Precision detailing and multi-point quality inspection ensures every project meets Viva\u2019s standards.",
          prevents: "Prevents: Visible seams, uneven edges, poor finish quality",
        },
      ],
      tagline: "What makes us different: We don\u2019t just install \u2014 we engineer. Every structural project includes all three shields.",
    },

    // Standard Collection (No Limit Turf)
    standardCollection: {
      title: "STANDARD TURF COLLECTION",
      subtitle: "Reliable, durable, and beautiful options for everyday landscapes.",
      products: [
        {
          name: "EVO 70 Lime",
          faceWeight: "45 oz",
          totalWeight: "70 oz",
          pileHeight: '1.5"',
          color: "Emerald & Lime, Green & Yellow Thatch",
          warranty: "16 years",
          drainage: "89.3 in/hr",
          bestFor: "Front yards, side yards, general landscaping",
          description: "Lightweight and resilient with omega-shaped blades for heavy-use applications.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/EVO-60-Lime-scaled-e1705619911645.jpeg",
          badges: [],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "standard",
        },
        {
          name: "EVO 70 Olive",
          faceWeight: "45 oz",
          totalWeight: "70 oz",
          pileHeight: '1.5"',
          color: "Olive & Emerald, Green & Yellow Thatch",
          warranty: "16 years",
          drainage: "89.3 in/hr",
          bestFor: "Backyards, visible landscape areas",
          description: "Features rich olive tones with resilient omega-shaped blades.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/evo60lime_3.jpg",
          badges: [],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "standard",
        },
        {
          name: "Lime 80",
          faceWeight: "53 oz",
          totalWeight: "80 oz",
          pileHeight: '1.78"',
          color: "Su-Green & Su-Lime, Green & Yellow Thatch",
          warranty: "16 years",
          drainage: "89.3 in/hr",
          bestFor: "Backyards, play areas, high-traffic",
          description: "Versatile and durable with a lush, natural appearance and tough C blade structure.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/lime80_3.jpg",
          badges: ["most-popular"],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "standard",
        },
      ],
      included: [
        "Dedicated Specialist Crews",
        "Tri-Shield\u2122 Foundation Shield (base stability)",
        "Tri-Shield\u2122 Water Shield (drainage protection)",
        "Tri-Shield\u2122 Finish Shield (quality control)",
        "Professional Edging & Seaming",
        "Post-Installation Site Cleanup & Walkthrough",
      ],
    },

    // Premium Collection (No Limit Turf + AZ Turf Depot)
    premiumCollection: {
      title: "PREMIUM TURF COLLECTION",
      subtitle: "Enhanced performance, realism, and specialized features for discerning homeowners.",
      products: [
        {
          name: "Pet Play 90",
          faceWeight: "63 oz",
          totalWeight: "90 oz",
          pileHeight: '1.25"',
          color: "Green & Lime Bi-color",
          warranty: "16 years",
          drainage: "178.6 in/hr",
          drainageHighlight: true,
          bestFor: "Pet owners \u2014 double drainage rate",
          description: "Superior drainage for pet areas with vibrant green and lime coloring.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/IMG_4137-scaled-e1740087246834.jpg",
          badges: ["pet-optimized"],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "premium",
        },
        {
          name: "Bermuda 92",
          faceWeight: "65 oz",
          totalWeight: "92 oz",
          pileHeight: '1.77"',
          color: "Emerald & Olive Bi-color",
          warranty: "16 years",
          drainage: "89.3 in/hr",
          bestFor: "Natural Bermuda look, HOA-friendly",
          description: "High-quality with natural emerald & olive coloring for moderate to high traffic.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/nolimit84_3-scaled.jpg",
          badges: [],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "premium",
        },
        {
          name: "Pro 104",
          faceWeight: "77 oz",
          totalWeight: "104 oz",
          pileHeight: '1.97"',
          color: "Emerald & Olive Bi-color",
          warranty: "16 years",
          drainage: "89.3 in/hr",
          bestFor: "FLAGSHIP \u2014 highest density, luxury",
          description: "Higher quality blade for a soft feel and exceptional durability.",
          image: "https://nolimitturf.com/wp-content/uploads/2023/12/premium96_3-scaled.jpg",
          badges: ["flagship"],
          supplier: "No Limit Turf",
          specSheet: null,
          tier: "premium",
        },
        {
          name: "AZ Blend 105",
          faceWeight: "80 oz",
          totalWeight: "105 oz",
          pileHeight: '1.77"',
          color: "Emerald & Olive",
          warranty: "15 years",
          drainage: "49 gal/hr/sqft",
          bestFor: "Arizona-specific color, desert curb appeal",
          description: "Monofilament PE with Thatch designed for local aesthetics.",
          image: "https://arizonaturfdepot.com/wp-content/uploads/2022/05/AZ-Turf-Depot-AZ-BLEND-PRODUCT-IMAGE.jpg",
          badges: [],
          supplier: "Arizona Turf Depot",
          specSheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Spec+Sheets/2023+Oct+New/AZ+Blend+105+Spec+Sheet-AZ+Turf+Depot.pdf",
          warrantySheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Warranty/AZTD+15+Year+Warranty.pdf",
          tier: "premium",
        },
        {
          name: "Bermuda 105",
          faceWeight: "80 oz",
          totalWeight: "105 oz",
          pileHeight: '1.77"',
          color: "Crystal Green & Crystal Olive",
          warranty: "15 years",
          drainage: "49 gal/hr/sqft",
          bestFor: "Replaces natural Bermuda, seamless",
          description: "Crystal tones for a seamless natural Bermuda replacement.",
          image: null,
          badges: [],
          supplier: "Arizona Turf Depot",
          specSheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Spec+Sheets/2023+Oct+New/Bermuda+105+Spec+Sheet-AZ+Turf+Depot.pdf",
          warrantySheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Warranty/AZTD+15+Year+Warranty.pdf",
          tier: "premium",
        },
        {
          name: "Fescue 105",
          faceWeight: "80 oz",
          totalWeight: "105 oz",
          pileHeight: '1.77"',
          color: "Emerald & Olive (darker)",
          warranty: "15 years",
          drainage: "49 gal/hr/sqft",
          bestFor: "Cooler-tone, darker green, unique",
          description: "Darker emerald and olive hues for a distinct, cooler look.",
          image: "https://arizonaturfdepot.com/wp-content/uploads/2022/05/AZ-Turf-Depot-FESCUE-PRODUCT-IMAGE.jpg",
          badges: [],
          supplier: "Arizona Turf Depot",
          specSheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Spec+Sheets/2023+Oct+New/Fescue+105+Spec+Sheet-AZ+Turf+Depot.pdf",
          warrantySheet: "https://azturfdepot.s3.us-west-1.amazonaws.com/Turf+Warranty/AZTD+15+Year+Warranty.pdf",
          tier: "premium",
        },
      ],
      included: [
        "All Standard Inclusions PLUS:",
        "Enhanced Sub-Base Preparation",
        "Premium Infill Options (e.g., antimicrobial)",
        "Extended Workmanship Warranty",
        "Priority Scheduling",
      ],
    },

    // Keep legacy options for Putting Green only
    options: [
      {
        name: "Putting Green Turf",
        subtitle: "No Limit Turf \u2014 Specialty",
        tier: "specialty",
        badges: ["Specialty", "Short Pile", "Smooth Roll"],
        description: "Purpose-built for putting greens. Short, dense pile that allows for smooth ball roll. This is a separate-purpose product \u2014 not a lawn turf upgrade.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Purpose", value: "Putting green / golf practice" },
          { label: "Pile", value: "Short, dense, even surface" },
          { label: "Best For", value: "Backyard putting greens, practice areas" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/augusta_2.jpg",
      },
    ],

    // Face weight consultant tip
    faceWeightTip: "The \u201C105\u201D products have 80oz of FACE weight (what the client touches). The 105oz is the TOTAL weight including the backing. When presenting to the client, lead with 80oz face weight to avoid confusion against the 90oz and 104oz products.",

    comparisons: [],

    addOns: [
      { name: "Infill Material", description: "Antimicrobial infill for pet areas and odor control.", icon: "infill" },
      { name: "Border Edging", description: "Clean edges with bender board or concrete borders.", icon: "border" },
      { name: "Drainage System", description: "Enhanced drainage for pet areas or slopes.", icon: "gutter" },
    ],

    faqs: [
      { q: "What is pile height?", a: "Pile height refers to how tall the turf fibers are. Taller fibers generally look more lush but may lay flatter over time. Shorter fibers are denser and stand more upright.", tag: "client" },
      { q: "What does the weight (oz) mean?", a: "Face weight (measured in ounces per square yard) indicates how much fiber is in the turf. Higher face weight means a denser, fuller turf. Total weight includes the backing. Always compare face weights for an accurate comparison.", tag: "client" },
      { q: "Which turf is best for pets?", a: "The Pet Play 90 is specifically designed for pets with 178.6 in/hr drainage (2X the standard rate). It handles heavy use and is easier to clean.", tag: "client" },
      { q: "Does artificial turf get hot in the Arizona sun?", a: "Yes, turf can get warm in direct summer sun. This is normal. Shaded areas or areas with misters stay much cooler. Morning and evening use is most comfortable in peak summer.", tag: "both" },
      { q: "How long does artificial turf last?", a: "Quality turf with proper installation and the Tri-Shield\u2122 system typically lasts 15\u201320 years depending on use and maintenance. All our products carry 15\u201316 year warranties.", tag: "client" },
      { q: "Is a putting green the same as regular turf?", a: "No. Putting green turf is a separate, purpose-built product with a short, dense pile designed for smooth ball roll. It is not interchangeable with lawn turf.", tag: "client" },
      { q: "What is the difference between Standard and Premium turf?", a: "Standard turf (45\u201353 oz face weight) is reliable for general lawns. Premium (63\u201380 oz face weight) offers softer feel, higher density, and specialized features like double drainage for pets or Arizona-specific color blends.", tag: "client" },
      { q: "What is the Tri-Shield\u2122 system?", a: "Tri-Shield\u2122 is our three-layer installation system: Foundation Shield (engineered base), Water Shield (drainage protection), and Finish Shield (quality detailing). It\u2019s what ensures your turf looks great and lasts for years.", tag: "client" },
    ],

    gallery: [
      { src: "https://lh3.googleusercontent.com/d/1DfoCQaFcoc4a4o0_zKf7bPb-jEyxJ7dy", alt: "Viva — Artificial turf backyard project", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1ooi-qKcvYbMaB5NfhnuAzwHB14C2W8Ag", alt: "Viva — Turf installation completed", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1B-gXdscH05OsX249Q4Qcbxx1Kn3-E_QX", alt: "Viva — Backyard turf full view", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1bGObbXEgBGipLe0j5CtJ1cGJghXpVVOi", alt: "Viva — Turf with pavers combo", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1A-hWL4qMzgyNJqP-DzT2SKQTnNLHLVZd", alt: "Viva — Turf outdoor living area", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1XOgDbSkfcHRrhhlcL73NhxK7CEsT238E", alt: "Viva — Turf install side yard", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1AheaKoRoDFMCBK6M0fnWLAd5aZKuAN8Z", alt: "Viva — Turf large backyard", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1mmzBjhpoijj1234aonPWWcnCznmOEXN8", alt: "Viva — Turf project wide shot", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1s7lle9V835j3-ounl7SrdrUhvKurrlW2", alt: "Viva — Artificial turf finished yard", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1_B-LpTlZlGvhqnyCeWqX0ISn_RhN7AUa", alt: "Viva — Turf installation detail", category: "installed" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Front yard \u2014 gravel to turf", beforePlaceholder: "Before \u2014 gravel front yard", afterPlaceholder: "After \u2014 green turf lawn" },
      { before: null, after: null, label: "Backyard transformation", beforePlaceholder: "Before \u2014 dirt backyard", afterPlaceholder: "After \u2014 premium turf installation" },
    ],

    internalNotes: [
      "All turf product names now match verified vendor data (David handoff 2026-04).",
      "Select best before/after turf photos from Google Drive (folders: Hardscape/Artificial Turf).",
      "Bermuda 105 image pending \u2014 check arizonaturfdepot.com/product/bermuda-105/.",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 4. SOD / NATURAL GRASS
  // ═══════════════════════════════════════════════════════════
  {
    id: "sod",
    title: "Sod / Natural Grass",
    icon: "sod",
    shortDesc: "Real grass for real living — Bermuda, shade-tolerant, and specialty sod for Phoenix-area homes.",
    heroBadges: ["Real Grass", "Irrigation Support", "Year-Round Install", "Phoenix Climate Adapted"],
    heroImage: "https://lh3.googleusercontent.com/d/1PbWFcXu3Ya7I5tTbm3Fc3BwGsnj5zlMp",
    sections: ["Overview", "Midiron vs Tifway 419", "Shade-Tolerant", "St. Augustine", "Seasonal Care", "Irrigation Basics", "FAQs", "Gallery"],

    overview: {
      intro: "Natural sod delivers the look, feel, and experience that only real grass can provide. It cools the air, absorbs dust, and creates a living, breathing outdoor environment. We install natural grass year-round in the Phoenix metro, even through summer heat.",
      vendorNote: "Our preferred vendors are Evergreen Turf and West Coast Turf, both of which carry the Bermuda hybrid varieties we recommend most.",
      keyPoints: [
        "We install sod year-round, including during Arizona summers.",
        "Summer installations require early-morning install and deep initial soaking.",
        "Bermuda hybrids (Midiron and Tifway 419) are our most recommended options.",
        "Shade-tolerant options available for covered or low-light areas.",
        "We engineer and install irrigation systems to support healthy long-term growth.",
      ],
      consultant_tip: "Natural grass appeals to homeowners who value the sensory experience — the feel underfoot, the smell of fresh-cut grass, the cooling effect. Lead with lifestyle benefits, not just specs.",
    },

    comparisons: [
      {
        title: "Midiron vs Tifway 419",
        subtitle: "The two Bermuda hybrids we recommend most",
        items: [
          {
            name: "Midiron",
            subtitle: "Evergreen Turf",
            badges: ["Most Popular", "Arizona Proven"],
            points: [
              "Arizona's most widely installed Bermuda hybrid.",
              "Fine blade texture with good density.",
              "Proven long-term performance in Phoenix heat.",
              "Excellent recovery from traffic and wear.",
              "Available from Evergreen Turf.",
            ],
            image: "https://www.evergreenturf.com/_images/closeup-midiron.jpg",
          },
          {
            name: "Tifway 419",
            subtitle: "Evergreen Turf / West Coast Turf",
            badges: ["Sports-Grade", "Dense"],
            points: [
              "Dense, fine-textured Bermuda hybrid.",
              "Known for exceptional wear tolerance.",
              "Widely used in sports fields and commercial landscapes.",
              "West Coast Turf markets a similar variety as E-Z Turf.",
              "Available from both Evergreen Turf and West Coast Turf.",
            ],
            image: "https://www.evergreenturf.com/_images/closeup-tifway.jpg",
          },
        ],
      },
    ],

    options: [
      {
        name: "TifGrand",
        subtitle: "Shade-Tolerant Bermuda",
        tier: "specialty",
        badges: ["Shade Tolerant", "Bermuda Hybrid"],
        description: "A Bermuda hybrid bred for improved shade tolerance. Good option for yards with partial shade from trees or structures.",
        specs: [
          { label: "Type", value: "Shade-tolerant Bermuda hybrid" },
          { label: "Sun Needs", value: "Tolerates more shade than standard Bermuda" },
          { label: "Best For", value: "Partially shaded yards, north-facing areas" },
        ],
        image: "https://www.evergreenturf.com/_images/closeup-tifgrand.jpg",
      },
      {
        name: "Palmetto St. Augustine",
        subtitle: "Shade-Tolerant Option",
        tier: "specialty",
        badges: ["Shade Tolerant", "Wider Blade"],
        description: "St. Augustine grass with a wider blade and strong shade tolerance. Produces a lush, tropical look. Requires more water than Bermuda varieties.",
        specs: [
          { label: "Type", value: "St. Augustine — Palmetto variety" },
          { label: "Sun Needs", value: "Best in partial shade to partial sun" },
          { label: "Water", value: "Higher water needs than Bermuda" },
          { label: "Note", value: "Not suited for overseeding with rye — stays green differently" },
        ],
        image: "https://www.evergreenturf.com/_images/closeup-palmetto.jpg",
      },
    ],

    seasonalCare: {
      title: "Seasonal Behavior & Care in Phoenix",
      items: [
        { season: "Spring (Mar–May)", note: "Bermuda greens up rapidly. Begin regular mowing. Reduce rye seed watering." },
        { season: "Summer (Jun–Sep)", note: "Peak growth season. Mow regularly. Deep, less frequent watering. Install sod early morning with heavy initial soak." },
        { season: "Fall (Oct–Nov)", note: "Ideal time for overseeding with perennial rye. U of A recommends overseeding when daytime temps are 80–85°F and nights ~55°F." },
        { season: "Winter (Dec–Feb)", note: "Bermuda goes dormant and turns brown. Overseeded rye stays green through winter." },
      ],
      dormancyNote: "Bermuda grass dormancy is completely normal in Arizona winters. It is not dead — it will green up again in spring. Overseeding with ryegrass is the most common way to maintain a green lawn year-round.",
    },

    irrigationBasics: {
      title: "Irrigation Basics",
      points: [
        "We engineer and install custom irrigation systems tailored to each yard.",
        "Proper irrigation is the most important factor in long-term sod health.",
        "New sod requires heavy watering for the first 2–3 weeks to establish roots.",
        "Once established, transition to deep, less frequent watering to encourage root depth.",
        "Seasonal adjustments are critical — summer water needs are significantly higher than winter.",
      ],
      consultant_tip: "Irrigation engineering is a differentiator for Viva. Mention that we design the system — we don't just connect sprinklers.",
    },

    addOns: [
      { name: "Irrigation System", description: "Engineered sprinkler/drip system designed for the yard layout.", icon: "irrigation" },
      { name: "Overseeding (Rye)", description: "Fall ryegrass overseeding for year-round green.", icon: "seed" },
      { name: "Fertilizer Program", description: "Seasonal fertilization plan for optimal health.", icon: "fertilizer" },
      { name: "Sod Edging", description: "Clean edge definition between sod and hardscape.", icon: "border" },
    ],

    faqs: [
      { q: "When is the best time to install grass in Phoenix?", a: "We install year-round. Fall and spring are the easiest seasons, but summer installations work well with early-morning install and deep initial watering. Bermuda actually establishes roots faster in warm soil.", tag: "client" },
      { q: "What is the difference between Midiron and Tifway 419?", a: "Both are high-quality Bermuda hybrids. Midiron is Arizona's most popular variety with proven heat performance. Tifway 419 is denser and more wear-tolerant, often used in sports applications. Both are excellent choices.", tag: "client" },
      { q: "Why does my grass turn brown in winter?", a: "Bermuda grass naturally goes dormant in cooler weather — it's not dead. It will green up again in spring. Overseeding with perennial ryegrass in October keeps your lawn green through winter.", tag: "client" },
      { q: "Which grass is best for pets?", a: "Bermuda hybrids like Midiron and Tifway 419 are both durable and recover well from pet traffic. For shaded pet areas, TifGrand may be a better choice.", tag: "client" },
      { q: "Do you install irrigation?", a: "Yes — we engineer custom irrigation systems. This is not just connecting sprinklers. We design the system for your specific yard, soil, and grass type.", tag: "client" },
      { q: "What is the E-Z Turf from West Coast Turf?", a: "E-Z Turf is West Coast Turf's branded name for a Bermuda hybrid that is very similar to Midiron. They are functionally the same grass.", tag: "internal" },
      { q: "Is St. Augustine a good option for Phoenix?", a: "St. Augustine (Palmetto) can work in partial-shade areas with adequate water, but it requires more irrigation than Bermuda and is not suited for overseeding. It's a niche option, not a primary recommendation.", tag: "both" },
    ],

    gallery: [
      { src: "https://lh3.googleusercontent.com/d/1PbWFcXu3Ya7I5tTbm3Fc3BwGsnj5zlMp", alt: "Viva — Sod installation completed", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1ZzAfqzBekd4dKvWPoFAU7sDHjpkbTZ64", alt: "Viva — Green lawn after sod", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1OdFIMN2moyuTRxPwt8oJRud48x4v5_eI", alt: "Viva — Front yard sod project", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1bVkR0TuOPAOv8UqvcFct8soMm-mpIPTa", alt: "Viva — Sod and irrigation install", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1oWHIuIe6OSsQtR_r9p3EdY45E8RGqpP_", alt: "Viva — Lush lawn transformation", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1411CaGqREJa04IVU8oTZruxK4KV39qOj", alt: "Viva — Sod backyard install", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1vsNaD1v1EFxdqrerBWxA4xtkN9Js9u6n", alt: "Viva — Full lawn sod project", category: "installed" },
      { src: "https://lh3.googleusercontent.com/d/1sMXRsvzwFLB9u1qtuYvxvhpeVnqOliVN", alt: "Viva — Residential sod installation", category: "installed" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Backyard — dirt to Midiron sod", beforePlaceholder: "Before — dirt backyard", afterPlaceholder: "After — lush Midiron lawn" },
      { before: null, after: null, label: "Front yard sod + irrigation install", beforePlaceholder: "Before — sparse gravel yard", afterPlaceholder: "After — green front lawn with irrigation" },
    ],

    internalNotes: [
      "Select best sod installation photos from Google Drive (folders: Media/Sod).",
      "Confirm whether shade-tolerant options are actively offered or only on request.",
    ],
  },
];

/**
 * ─── FUTURE SERVICES (placeholders) ─────────────────────────
 */
const FUTURE_SERVICES = [
  { id: "rock", title: "Decorative Rock", icon: "rock", status: "Research complete — build pending" },
  { id: "firepits", title: "Fire Pits", icon: "fire", status: "Research pending" },
  { id: "outdoor-living", title: "Outdoor Living", icon: "outdoor", status: "Research pending" },
  { id: "plants", title: "Plants & Trees", icon: "plant", status: "Research in progress" },
  { id: "irrigation", title: "Irrigation / Sprinklers", icon: "irrigation", status: "Partial — see Sod section" },
  { id: "retaining-walls", title: "Retaining Walls", icon: "wall", status: "Research pending" },
];

/**
 * ─── GLOBAL BEFORE & AFTER ───────────────────────────────────
 */
const GLOBAL_BEFORE_AFTER = [
  { service: "pergolas", before: null, after: null, label: "Patio cover installation", beforePlaceholder: "Before — open patio", afterPlaceholder: "After — solid patio cover" },
  { service: "pavers", before: null, after: null, label: "Full backyard paver transformation", beforePlaceholder: "Before — dirt yard", afterPlaceholder: "After — paver patio + walkway" },
  { service: "turf", before: null, after: null, label: "Turf installation — front yard", beforePlaceholder: "Before — gravel", afterPlaceholder: "After — lush turf" },
  { service: "sod", before: null, after: null, label: "Natural sod + irrigation", beforePlaceholder: "Before — bare dirt", afterPlaceholder: "After — green lawn" },
];

/**
 * ─── GLOBAL FAQs ─────────────────────────────────────────────
 */
const GLOBAL_FAQS = [
  { q: "Do you offer free consultations?", a: "Yes — we provide consultations where we visit your property, understand your vision, and walk you through options and recommendations.", tag: "client" },
  { q: "What areas do you serve?", a: "We serve the Phoenix metropolitan area including the East Valley, West Valley, and surrounding communities.", tag: "client" },
  { q: "How long does a typical project take?", a: "Project timelines vary by scope. A simple turf or sod installation may take 1–2 days, while a full backyard transformation with pavers, a pergola, and landscaping may take 1–2 weeks.", tag: "client" },
  { q: "Can I combine multiple services in one project?", a: "Absolutely. Many of our projects combine services — for example, pavers + turf + a pergola. Bundled projects often provide the best overall result and value.", tag: "client" },
];

/**
 * ─── INTERNAL RESEARCH FLAGS ─────────────────────────────────
 */
const RESEARCH_FLAGS = [
  // HIGH priority
  { category: "Pergolas", item: "Obtain screenshot of the Duralum colors and finishes page (https://duralum.com/rafter-tail-and-color-choices/). The site is heavy on JavaScript.", priority: "high" },
  { category: "Pergolas", item: "Confirm which pergola configurations are most common (size ranges).", priority: "high" },
  { category: "Media", item: "Obtain access to Google Drive for project photos.", priority: "high" },
  { category: "Media", item: "Select 2\u20134 before/after pairs per core service.", priority: "high" },
  { category: "Pergolas", item: "Confirm Duralum system types Viva installs for electrical add-ons.", priority: "high" },
  { category: "General", item: "Confirm any service limits \u2014 what is offered, what is rare, what should not be promised.", priority: "high" },
  // MEDIUM priority
  { category: "Pavers", item: "Research the 3\u20134 most popular Belgard options in the Phoenix market.", priority: "medium" },
  { category: "Pavers", item: "Confirm specific Travertine products (Dali, Ivory, Turkish Light).", priority: "medium" },
  { category: "Pergolas", item: "Confirm exact term for \u2018two-post pergola\u2019 in client materials.", priority: "medium" },
  { category: "Media", item: "Find video testimonials in Google Drive.", priority: "medium" },
  { category: "Pavers", item: "Get Townscape three-piece combo layout diagram.", priority: "medium" },
  // LOW priority
  { category: "Rock", item: "Identify 1\u20132 additional decorative rock options beyond the 5 listed (Madison Gold, Arizona Beige, River Rock, Desert Brown, Charcoal).", priority: "low" },
  { category: "Sod", item: "Verify current stadium grass varieties for sales hooks.", priority: "low" },
];

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
  tagline: "Transforming Outdoor Living in the Phoenix Metro",
  logo: null,
  website: "https://vivalandscapeanddesign.com",
  phone: null,
  email: null,
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
    shortDesc: "Solid, lattice, and combination patio covers built to enhance outdoor living year-round.",
    heroBadges: ["Aluminum Construction", "Low Maintenance", "Custom Colors", "Add-On Ready"],
    heroImage: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-6.jpg",
    sections: ["Overview", "Lattice vs Solid", "Attached vs Freestanding", "Two-Post / Cantilever", "Add-Ons", "Colors & Finishes", "FAQs", "Gallery"],

    overview: {
      intro: "Pergolas and patio covers are one of the highest-impact upgrades for any Phoenix-area home. They extend usable outdoor living space, reduce direct sun exposure, and add lasting value to the property.",
      vendorNote: "Our preferred vendor is Duralum, a manufacturer with over 60 years of experience producing aluminum patio cover systems. Their products are built for low maintenance and long-term durability in desert climates.",
      keyPoints: [
        "Solid covers provide full shade and weather protection.",
        "Lattice covers allow airflow and filtered sunlight.",
        "Insulated options offer enhanced heat control and hidden wiring channels.",
        "Available as attached (to the home) or freestanding structures.",
        "Add-ons include lighting, ceiling fans, and electrical access.",
      ],
      consultant_tip: "Start by asking the client what they want to use the space for — entertaining, relaxing, working from home, kids' play area. This determines whether lattice or solid is the better recommendation.",
    },

    comparisons: [
      {
        title: "Lattice vs Solid Patio Covers",
        items: [
          {
            name: "Lattice Patio Cover",
            subtitle: "Duralum Phoenix Lattice",
            badges: ["Airflow", "Filtered Light", "Classic Look"],
            points: [
              "Wood-look aluminum with low maintenance.",
              "Allows airflow and filtered sunlight through.",
              "Ideal for areas where full shade is not required.",
              "Works well for garden areas and open entertaining spaces.",
              "Available in attached and freestanding configurations.",
            ],
            image: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-1.jpg",
          },
          {
            name: "Solid Patio Cover",
            subtitle: "Duralum Californian Solid",
            badges: ["Full Shade", "Weather Protection", "Premium Feel"],
            points: [
              "High-grade aluminum with multiple rafter-tail finish options.",
              "Provides complete shade and protection from rain.",
              "Better for outdoor kitchens, seating areas, and living rooms.",
              "Stronger premium perception for higher-ticket projects.",
              "Can support electrical add-ons with proper planning.",
            ],
            image: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-7.jpg",
          },
        ],
      },
      {
        title: "Attached vs Freestanding",
        items: [
          {
            name: "Attached",
            subtitle: "Connected to the home structure",
            badges: ["Seamless Look", "Most Common"],
            points: [
              "Mounts directly to the fascia or wall of the home.",
              "Creates a natural extension of indoor living space.",
              "Most common configuration for backyard patios.",
            ],
            image: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-8.jpg",
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
            image: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-3.jpg",
          },
        ],
      },
    ],

    options: [
      {
        name: "Insulated Patio Cover",
        subtitle: "Duralum Monterey Insulated",
        tier: "premium",
        badges: ["Best Heat Control", "Hidden Wiring"],
        description: "Designed for stronger heat control with insulated panels. Includes hidden internal raceways that allow for ceiling fans, light fixtures, and electrical without exposed conduit.",
        specs: [
          { label: "Material", value: "Insulated aluminum panels" },
          { label: "Wiring", value: "Hidden internal raceways" },
          { label: "Best For", value: "Outdoor living rooms, kitchens, work-from-home spaces" },
        ],
        image: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-9.jpg",
        note: "⚠️ Internal note: Confirm which Duralum system types Viva installs for electrical/fan/light add-ons.",
      },
    ],

    twoPostSection: {
      title: "Two-Post / Cantilever Pergola",
      description: "A two-post or cantilever pergola uses only two support posts on the outer edge, with the structure cantilevering from the home's wall. It creates a cleaner, more open feel.",
      keyPoints: [
        "Uses only two support posts instead of four.",
        "Creates a cleaner, more open feel under the cover.",
        "Typically attached to the home structure for support.",
        "Good option for smaller patios or when post placement is limited.",
      ],
      confirmationNeeded: "Confirm the exact term Viva wants to use for this product in client-facing materials.",
      image: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-5.jpg",
    },

    addOns: [
      { name: "Recessed Lighting", description: "Built-in LED lighting for evening use.", icon: "light" },
      { name: "Ceiling Fans", description: "Outdoor-rated fans for air circulation.", icon: "fan" },
      { name: "Electrical Access", description: "Outlets and wiring for appliances or speakers.", icon: "electric" },
      { name: "Privacy Screens", description: "Side panels for wind protection or privacy.", icon: "screen" },
      { name: "Gutters & Drainage", description: "Integrated drainage for solid covers.", icon: "gutter" },
    ],

    colorOptions: {
      note: "Duralum offers a range of standard and premium colors for all patio cover systems.",
      categories: [
        { label: "Standard Colors", items: ["White", "Sandstone", "Adobe", "Brown"] },
        { label: "Premium / Wood-Grain Finishes", items: ["Knotwood finishes available — confirm exact options with Duralum rep"] },
        { label: "Rafter-Tail Styles", items: ["Multiple decorative rafter-tail end cuts available on solid models"] },
      ],
      placeholder: "Final color swatch images pending — replace with vendor-provided assets.",
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
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-1.jpg", alt: "Lattice patio cover — attached to home", category: "lattice" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-7.jpg", alt: "Solid patio cover — backyard living area", category: "solid" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-3.jpg", alt: "Freestanding lattice pergola", category: "freestanding" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-5.jpg", alt: "Lattice patio cover — open design", category: "lattice" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-8.jpg", alt: "Solid cover attached to home", category: "solid" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-8.jpg", alt: "Lattice cover — outdoor entertaining", category: "lattice" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-phoenix-lattice-patio-cover-1.jpg", alt: "Phoenix lattice patio cover", category: "lattice" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-10.jpg", alt: "Solid patio cover — premium finish", category: "solid" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-11.jpg", alt: "Solid cover — outdoor living room", category: "solid" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-12.jpg", alt: "Lattice patio cover — side view", category: "lattice" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-solid-patio-cover-12.jpg", alt: "Solid cover detail", category: "solid" },
      { src: "https://duralum.com/wp-content/uploads/2013/10/duralum-lattice-patio-cover-14.jpg", alt: "Lattice — garden area application", category: "lattice" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Backyard patio transformation", beforePlaceholder: "Before — empty backyard patio", afterPlaceholder: "After — solid patio cover with lighting" },
      { before: null, after: null, label: "Pool area pergola addition", beforePlaceholder: "Before — open pool deck", afterPlaceholder: "After — freestanding lattice cover" },
    ],

    internalNotes: [
      "Confirm exact Duralum system types Viva installs (lattice, solid, insulated, or all three).",
      "Confirm whether two-post/cantilever is offered and what term to use in client materials.",
      "Obtain Duralum color swatch images for the color options section.",
      "Select 5–10 best installed pergola photos from Google Drive (folders: Categories/Pergolas — Lattice, Cantilever, 4k aluminum).",
      "Clarify which add-ons require the Monterey insulated system vs. other systems.",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 2. PAVERS
  // ═══════════════════════════════════════════════════════════
  {
    id: "pavers",
    title: "Pavers",
    icon: "paver",
    shortDesc: "From economy step stones to premium natural-stone patterns — options for every project and budget.",
    heroBadges: ["Multiple Styles", "Durable", "Versatile Patterns", "Curb Appeal"],
    heroImage: "https://phoenixpaver.com/wp-content/uploads/2025/09/townscape-patio.jpg",
    sections: ["Overview", "Townscape", "Holland", "Veneer / Pool Coping", "Aztec (Premium)", "12×12 Economy", "Product Comparison", "Colors", "FAQs", "Gallery"],

    overview: {
      intro: "Pavers are one of the most transformative outdoor upgrades available. They define walkways, patios, driveways, and pool decks with lasting beauty and function. We offer a curated selection from trusted vendors to match every style and budget.",
      vendorNote: "Our primary vendor is Phoenix Paver, with additional economy options from Home Depot. Premium selections include Belgard pavers for high-end projects.",
      keyPoints: [
        "Townscape is our flagship paver — simple, versatile, and easy to present.",
        "Available in multiple color blends, sizes, and pattern configurations.",
        "Three-piece combos come pre-organized on full 100 sq ft pallets.",
        "Veneer pavers allow overlay on existing concrete without demolition.",
        "Economy 12×12 step stones provide a budget-friendly entry point.",
      ],
      consultant_tip: "Pavers are one of the best categories for before-and-after storytelling. Pattern, border, color, and surrounding upgrades dramatically change the emotional feel of a yard. Lead with transformation visuals.",
    },

    options: [
      {
        name: "Townscape Paver Sets",
        subtitle: "Phoenix Paver — Flagship Product",
        tier: "standard",
        badges: ["Best Seller", "3-Piece Combo", "4 Color Options"],
        description: "The Townscape is our most-used paver. It comes in a three-piece set that covers 100 sq ft per pallet, pre-organized for easy installation. Simple to sell, simple to install.",
        specs: [
          { label: "Vendor", value: "Phoenix Paver" },
          { label: "Set Type", value: "Three-piece combo" },
          { label: "Coverage", value: "~100 sq ft per pallet" },
          { label: "Colors", value: "Territorial, Tierra, Norte, Slate Native (4 options)" },
          { label: "Sizes", value: "Three sizes in each set — see vendor page for exact dims" },
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
        subtitle: "Phoenix Paver — Overlay Solution",
        tier: "standard",
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
        subtitle: "Phoenix Paver — Premium Tier",
        tier: "premium",
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
        note: "This is the premium upsell option. Present it after Townscape to show the upgrade path.",
      },
      {
        name: "12×12 Square Step Stone",
        subtitle: "Home Depot — Economy Tier",
        tier: "economy",
        badges: ["Budget Friendly", "Simple"],
        description: "A basic 12 in. × 12 in. × 1.5 in. pewter square concrete step stone. This is our economy-tier option for projects with tighter budgets or simpler scope.",
        specs: [
          { label: "Vendor", value: "Home Depot (Pavestone)" },
          { label: "Size", value: '12" × 12" × 1.5"' },
          { label: "Color", value: "Pewter" },
          { label: "Use Case", value: "Walkways, simple patios, stepping paths" },
        ],
        image: null,
        note: "Economy option. Good for adding stepping paths or simple patio areas where full paver installation isn't needed.",
      },
    ],

    comparisons: [
      {
        title: "Paver Tier Comparison",
        items: [
          {
            name: "Economy (12×12)",
            badges: ["Budget", "Simple"],
            points: ["Single size and color", "Basic concrete step stone", "Best for walkways and stepping paths"],
            image: null,
          },
          {
            name: "Standard (Townscape / Holland)",
            badges: ["Best Value", "Most Popular"],
            points: ["Multiple sizes, colors, and patterns", "Pre-organized pallet system", "Versatile for patios, driveways, walkways"],
            image: "https://phoenixpaver.com/wp-content/uploads/2025/09/townscape-patio-square.jpg",
          },
          {
            name: "Premium (Aztec / Belgard)",
            badges: ["Premium", "Natural Look"],
            points: ["Large format with natural stone feel", "Highest visual impact", "Best for upscale projects"],
            image: "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_Slate_paver.jpg",
          },
        ],
      },
    ],

    colorSwatchImage: "https://phoenixpaver.com/wp-content/uploads/2025/09/paver-color-examples.png",

    addOns: [
      { name: "Decorative Borders", description: "Contrasting border pavers for definition.", icon: "border" },
      { name: "Sealing", description: "Protective sealant for enhanced color and longevity.", icon: "seal" },
      { name: "Lighting", description: "In-ground or path lighting for walkways and patios.", icon: "light" },
      { name: "Drainage", description: "Proper drainage planning for paver surfaces.", icon: "gutter" },
    ],

    faqs: [
      { q: "How long do pavers last?", a: "Quality pavers can last 25–50 years or more with proper installation and base preparation. They are one of the most durable hardscape materials available.", tag: "client" },
      { q: "What goes underneath the pavers?", a: "A properly prepared base typically includes compacted fill material, a layer of crushed aggregate base, and a setting bed of sand. The base preparation is critical to preventing settling and shifting.", tag: "client" },
      { q: "What is the difference between Townscape and Holland?", a: "Townscape comes in a three-piece multi-size set that creates a more varied, natural look. Holland is a single rectangular brick-style paver that works best in traditional patterns like herringbone.", tag: "client" },
      { q: "Can pavers be installed over existing concrete?", a: "Yes — veneer pavers are specifically designed for this. They can be cold-set over existing concrete surfaces, making them ideal for pool deck and patio remodel projects.", tag: "client" },
      { q: "Are pavers good for pool areas?", a: "Yes. Pavers are an excellent choice for pool decks. Veneer pavers and pool coping options are specifically designed for this application.", tag: "client" },
      { q: "How does pricing work for different paver options?", a: "Pricing varies by material selection. We can walk through options during the consultation. All pricing is subject to change based on specific material choice.", tag: "both" },
    ],

    gallery: [
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/townscape-patio.jpg", alt: "Townscape paver patio installation", category: "townscape" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/townscape_driveway.jpg", alt: "Townscape driveway installation", category: "townscape" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/holland-pavers-driveway.jpg", alt: "Holland paver driveway", category: "holland" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Holland_Slate_Pathway.jpg", alt: "Holland slate pathway", category: "holland" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/veneer-paver-poolside.jpg", alt: "Veneer pavers — poolside", category: "veneer" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/veneer-pool-deck.jpg", alt: "Veneer pool deck overlay", category: "veneer" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Pool-at-Night.jpg", alt: "Aztec premium — pool at night", category: "aztec" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_stone_territorial.jpg", alt: "Aztec stone territorial", category: "aztec" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec_Greendoors_Cafe.jpg", alt: "Aztec stone — commercial application", category: "aztec" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Aztec-tierra-norte.jpg", alt: "Aztec tierra norte color", category: "aztec" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/Veneer-overlay-commercial-pool.jpg", alt: "Veneer overlay — commercial pool", category: "veneer" },
      { src: "https://phoenixpaver.com/wp-content/uploads/2025/09/tonscape_territorial_atrium.jpg", alt: "Townscape territorial — atrium area", category: "townscape" },
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
    heroBadges: ["No Watering", "Pet Friendly Options", "Year-Round Green", "Multiple Tiers"],
    heroImage: "https://nolimitturf.com/wp-content/uploads/2023/12/IMG_7258-scaled.jpg",
    sections: ["Overview", "Standard Tier", "Premium Tier", "Pet Friendly", "Putting Green", "Product Comparison", "Add-Ons", "FAQs", "Gallery"],

    overview: {
      intro: "Artificial turf delivers a consistently green, low-maintenance lawn without the water, mowing, or seasonal dormancy of natural grass. In the Phoenix metro, where water conservation and heat are major factors, turf is one of the most practical and visually impactful upgrades available.",
      vendorNote: "Our primary vendor is No Limit Turf, with premium options also available from Arizona Turf Depot.",
      keyPoints: [
        "No watering, mowing, or fertilizing required.",
        "Stays green year-round regardless of season.",
        "Available in standard, premium, pet-friendly, and putting green options.",
        "Different pile heights and weights for different looks and uses.",
        "Professional installation ensures proper drainage and base preparation.",
      ],
      consultant_tip: "Ask the client what the space will be used for: general lawn, pets, kids, entertaining, or a putting green. This immediately narrows the product recommendation.",
    },

    options: [
      {
        name: "70 oz Lime",
        subtitle: "No Limit Turf — Standard",
        tier: "standard",
        badges: ["Standard", "Best Value"],
        description: "A solid entry-level option with a natural green color and good density for general lawn use.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "70 oz" },
          { label: "Color", value: "Lime green" },
          { label: "Tier", value: "Standard" },
          { label: "Best For", value: "General lawns, front yards, basic landscaping" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/EVO-60-Lime-scaled-e1705619911645.jpeg",
      },
      {
        name: "70 oz Olive",
        subtitle: "No Limit Turf — Standard",
        tier: "standard",
        badges: ["Standard", "Natural Tone"],
        description: "Same construction as the 70 oz Lime but in a darker olive tone for a more muted, natural look.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "70 oz" },
          { label: "Color", value: "Olive" },
          { label: "Tier", value: "Standard" },
          { label: "Best For", value: "Clients preferring a subtler, earth-toned green" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/evo60lime_3.jpg",
      },
      {
        name: "80 oz Lime",
        subtitle: "No Limit Turf — Standard Plus",
        tier: "standard",
        badges: ["Standard Plus", "Fuller Feel"],
        description: "A step up in density and fullness from the 70 oz options. Slightly taller pile height creates a more substantial lawn feel.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "80 oz" },
          { label: "Color", value: "Lime green" },
          { label: "Tier", value: "Standard Plus" },
          { label: "Best For", value: "Clients who want a fuller, more premium feel at a near-standard price" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/lime80_3.jpg",
      },
      {
        name: "90 oz Pet Friendly",
        subtitle: "No Limit Turf — Premium",
        tier: "premium-pet",
        badges: ["Pet Friendly", "Premium", "Drainage"],
        description: "Specifically designed for homes with pets. Enhanced drainage system and durable fibers that handle heavy use and are easy to clean.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "90 oz" },
          { label: "Tier", value: "Premium — Pet" },
          { label: "Key Feature", value: "Enhanced drainage, antimicrobial backing" },
          { label: "Best For", value: "Dog owners, high-traffic pet areas" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/IMG_4137-scaled-e1740087246834.jpg",
      },
      {
        name: "92 oz",
        subtitle: "No Limit Turf — Premium",
        tier: "premium",
        badges: ["Premium", "Soft & Realistic"],
        description: "A high-density premium option with a soft, realistic feel. Ideal for prominent yard areas, entertaining spaces, and clients who prioritize aesthetics.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "92 oz" },
          { label: "Tier", value: "Premium" },
          { label: "Best For", value: "Showcase areas, backyard entertainment, front yards" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/nolimit84_3-scaled.jpg",
        note: "⚠️ Confirm exact product name with No Limit Turf — scope uses informal '92oz' label.",
      },
      {
        name: "104 Pro",
        subtitle: "No Limit Turf — Premium",
        tier: "premium",
        badges: ["Top Tier", "Most Realistic"],
        description: "The highest-density option from No Limit Turf. Maximum realism, softness, and visual appeal. Best for clients who want the most premium result.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Weight", value: "104 oz" },
          { label: "Tier", value: "Premium — Top" },
          { label: "Best For", value: "Premium projects, showcase yards, high-visibility areas" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/premium96_3-scaled.jpg",
      },
      {
        name: "Putting Green Turf",
        subtitle: "No Limit Turf — Specialty",
        tier: "specialty",
        badges: ["Specialty", "Short Pile", "Smooth Roll"],
        description: "Purpose-built for putting greens. Short, dense pile that allows for smooth ball roll. This is a separate-purpose product — not a lawn turf upgrade.",
        specs: [
          { label: "Vendor", value: "No Limit Turf" },
          { label: "Purpose", value: "Putting green / golf practice" },
          { label: "Pile", value: "Short, dense, even surface" },
          { label: "Best For", value: "Backyard putting greens, practice areas" },
        ],
        image: "https://nolimitturf.com/wp-content/uploads/2023/12/augusta_2.jpg",
      },
      {
        name: "AZ Blend 105 (80 oz)",
        subtitle: "Arizona Turf Depot — Premium",
        tier: "premium",
        badges: ["Premium", "AZ Turf Depot"],
        description: "A premium 80 oz turf from Arizona Turf Depot's 105 series. Blended color profile for a natural Arizona landscape look.",
        specs: [
          { label: "Vendor", value: "Arizona Turf Depot" },
          { label: "Weight", value: "80 oz" },
          { label: "Series", value: "105" },
        ],
        image: "https://arizonaturfdepot.com/wp-content/uploads/2022/05/AZ-Turf-Depot-AZ-BLEND-PRODUCT-IMAGE.jpg",
      },
      {
        name: "Bermuda 105 (80 oz)",
        subtitle: "Arizona Turf Depot — Premium",
        tier: "premium",
        badges: ["Premium", "Bermuda Look"],
        description: "Mimics the look of Bermuda grass. 80 oz weight with a natural bermuda color profile from the 105 series.",
        specs: [
          { label: "Vendor", value: "Arizona Turf Depot" },
          { label: "Weight", value: "80 oz" },
          { label: "Series", value: "105" },
          { label: "Style", value: "Bermuda grass appearance" },
        ],
        image: null,
      },
      {
        name: "Fescue 105 (80 oz)",
        subtitle: "Arizona Turf Depot — Premium",
        tier: "premium",
        badges: ["Premium", "Fescue Look"],
        description: "Mimics the look of Fescue grass with a cooler green tone. 80 oz weight from the 105 series.",
        specs: [
          { label: "Vendor", value: "Arizona Turf Depot" },
          { label: "Weight", value: "80 oz" },
          { label: "Series", value: "105" },
          { label: "Style", value: "Fescue grass appearance" },
        ],
        image: "https://arizonaturfdepot.com/wp-content/uploads/2022/05/AZ-Turf-Depot-FESCUE-PRODUCT-IMAGE.jpg",
      },
    ],

    comparisons: [
      {
        title: "Standard vs Premium Turf",
        items: [
          {
            name: "Standard Tier (70–80 oz)",
            badges: ["Value", "Good Quality"],
            points: [
              "70–80 oz weight range.",
              "Natural-looking green in Lime or Olive tones.",
              "Great for general lawns and landscaping.",
              "Best value per square foot.",
            ],
            image: "https://nolimitturf.com/wp-content/uploads/2023/12/EVO-60-Lime-scaled-e1705619911645.jpeg",
          },
          {
            name: "Premium Tier (90–104 oz)",
            badges: ["Premium", "Softest Feel"],
            points: [
              "90–104 oz weight range.",
              "Softer, denser, more realistic feel.",
              "Pet-friendly and specialty options available.",
              "Ideal for showcase areas and entertaining.",
            ],
            image: "https://nolimitturf.com/wp-content/uploads/2023/12/premium96_3-scaled.jpg",
          },
        ],
      },
    ],

    addOns: [
      { name: "Infill Material", description: "Antimicrobial infill for pet areas and odor control.", icon: "infill" },
      { name: "Border Edging", description: "Clean edges with bender board or concrete borders.", icon: "border" },
      { name: "Drainage System", description: "Enhanced drainage for pet areas or slopes.", icon: "gutter" },
    ],

    faqs: [
      { q: "What is pile height?", a: "Pile height refers to how tall the turf fibers are. Taller fibers generally look more lush but may lay flatter over time. Shorter fibers are denser and stand more upright.", tag: "client" },
      { q: "What does the weight (oz) mean?", a: "The face weight (measured in ounces per square yard) indicates how much fiber is in the turf. Higher weight means a denser, fuller turf that generally looks and feels more realistic.", tag: "client" },
      { q: "Which turf is best for pets?", a: "The 90 oz Pet Friendly option is specifically designed for pets with enhanced drainage and antimicrobial backing. It handles heavy use and is easier to clean.", tag: "client" },
      { q: "Does artificial turf get hot in the Arizona sun?", a: "Yes, turf can get warm in direct summer sun. This is normal. Shaded areas or areas with misters stay much cooler. Morning and evening use is most comfortable in peak summer.", tag: "both" },
      { q: "How long does artificial turf last?", a: "Quality turf with proper installation typically lasts 15–20 years depending on use and maintenance. Premium options may last even longer.", tag: "client" },
      { q: "Is a putting green the same as regular turf?", a: "No. Putting green turf is a separate, purpose-built product with a short, dense pile designed for smooth ball roll. It is not interchangeable with lawn turf.", tag: "client" },
    ],

    gallery: [
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/IMG_7258-scaled.jpg", alt: "Premium turf installation — backyard", category: "premium" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/EVO-60-Lime-scaled-e1705619911645.jpeg", alt: "Standard turf — EVO 60 Lime", category: "standard" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/lime80_3.jpg", alt: "80 oz Lime installation", category: "standard" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/premium96_3-scaled.jpg", alt: "Premium 96 oz turf — showcase yard", category: "premium" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/nolimit84_3-scaled.jpg", alt: "No Limit 84 oz installation", category: "premium" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/IMG_4137-scaled-e1740087246834.jpg", alt: "Pet-friendly turf installation", category: "pet" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/augusta_2.jpg", alt: "Augusta putting green", category: "putting-green" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/Choice-74-scaled-e1705620518237.jpeg", alt: "Choice 74 turf — front yard", category: "standard" },
      { src: "https://nolimitturf.com/wp-content/uploads/2025/02/IMG_5124-scaled-e1740087437629.jpg", alt: "Pet turf area — backyard", category: "pet" },
      { src: "https://nolimitturf.com/wp-content/uploads/2023/12/evo60lime_3.jpg", alt: "EVO 60 Lime — yard view", category: "standard" },
    ],

    beforeAfter: [
      { before: null, after: null, label: "Front yard — gravel to turf", beforePlaceholder: "Before — gravel front yard", afterPlaceholder: "After — green turf lawn" },
      { before: null, after: null, label: "Backyard transformation", beforePlaceholder: "Before — dirt backyard", afterPlaceholder: "After — premium turf installation" },
    ],

    internalNotes: [
      "Normalize all turf product names to match vendor catalogs before finalizing.",
      "Select best before/after turf photos from Google Drive (folders: Hardscape/Artificial Turf).",
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
    heroImage: "https://www.evergreenturf.com/_images/home-page/carousel-images/residential1.jpg",
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
      { src: "https://www.evergreenturf.com/_images/home-page/carousel-images/residential1.jpg", alt: "Lush residential lawn — Bermuda sod", category: "residential" },
      { src: "https://www.evergreenturf.com/_images/closeup-midiron.jpg", alt: "Midiron grass closeup", category: "midiron" },
      { src: "https://www.evergreenturf.com/_images/closeup-tifway.jpg", alt: "Tifway 419 grass closeup", category: "tifway" },
      { src: "https://www.evergreenturf.com/_images/home-page/carousel-images/residential2.jpg", alt: "Residential lawn installation", category: "residential" },
      { src: "https://www.evergreenturf.com/_images/home-page/carousel-images/residential3.jpg", alt: "Front yard sod — green lawn", category: "residential" },
      { src: "https://www.evergreenturf.com/_images/closeup-tifgrand.jpg", alt: "TifGrand shade-tolerant closeup", category: "shade" },
      { src: "https://www.evergreenturf.com/_images/closeup-palmetto.jpg", alt: "Palmetto St. Augustine closeup", category: "shade" },
      { src: "https://www.evergreenturf.com/_images/home-page/carousel-images/residential4.jpg", alt: "Residential lawn — wide view", category: "residential" },
      { src: "https://www.evergreenturf.com/_images/home-page/carousel-images/commercial1.jpg", alt: "Commercial sod application", category: "commercial" },
      { src: "https://www.evergreenturf.com/_images/closeup-tiftuf.jpg", alt: "TifTuf variety closeup", category: "variety" },
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
  { category: "Brand", item: "Obtain final brand kit: logo files, brand colors, typography rules.", priority: "high" },
  { category: "Turf", item: "Normalize all turf product names to match vendor catalogs.", priority: "high" },
  { category: "Pergolas", item: "Confirm Duralum system types Viva installs for electrical add-ons.", priority: "high" },
  { category: "Pergolas", item: "Confirm exact term for 'two-post pergola' in client materials.", priority: "medium" },
  { category: "Media", item: "Import internal Viva project photos from Google Drive (Categories/Pergolas, Hardscape/Pavers, Hardscape/Artificial Turf, Media/Sod, Collections/Before and After, Collections/Best Pics).", priority: "high" },
  { category: "Media", item: "Select 2–4 before/after pairs per core service from internal Drive.", priority: "high" },
  { category: "Pavers", item: "Get Townscape three-piece combo layout diagram.", priority: "medium" },
  { category: "Pavers", item: "Confirm Belgard paver options for premium tier.", priority: "low" },
  { category: "Sod", item: "Verify current stadium grass varieties for sales hooks.", priority: "low" },
  { category: "General", item: "Confirm any service limits — what is offered, what is rare, what should not be promised.", priority: "high" },
];

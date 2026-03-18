/**
 * ═══════════════════════════════════════════════════════════════
 * VIVA LANDSCAPE & DESIGN — INTERNAL SALES CATALOG
 * Application Logic (app.js) — v2.0 (Scrollable Pages + Anchor Nav)
 * ═══════════════════════════════════════════════════════════════
 *
 * KEY CHANGE: Service pages are now single vertically-scrollable
 * pages with sticky anchor navigation instead of tabbed sub-views.
 *
 * All content comes from content.js — this file only renders.
 * ═══════════════════════════════════════════════════════════════
 */

// ── STATE ────────────────────────────────────────────────────
let currentPage = "home";

// ── ICON MAP ─────────────────────────────────────────────────
const ICONS = {
  pergola: "🏛️", paver: "🧱", turf: "🌿", sod: "🌱",
  rock: "🪨", fire: "🔥", outdoor: "☀️", plant: "🌳",
  irrigation: "💧", wall: "🧱", home: "🏠", gallery: "🖼️",
  faq: "❓", notes: "📋", light: "💡", fan: "🌀",
  electric: "⚡", screen: "🪟", gutter: "🌧️", border: "📏",
  seal: "🛡️", infill: "🫧", seed: "🌾", fertilizer: "🧪",
  sidebar: "📑", tabs: "📂", compare: "⚖️", search: "🔍",
};

// ── INITIALIZATION ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  navigateTo("home");
  setupMobileToggle();
});

// ── SIDEBAR ──────────────────────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  let html = "";
  html += `<div class="sidebar-section-label">Main</div>`;
  html += navItem("home", "Home", ICONS.home);
  html += `<div class="sidebar-section-label" style="margin-top:12px">Services</div>`;
  SERVICES.forEach(s => {
    html += navItem(s.id, s.title, ICONS[s.icon] || "📄");
  });
  html += `<div class="sidebar-section-label" style="margin-top:12px">Global</div>`;
  html += navItem("before-after", "Before & After Gallery", ICONS.gallery);
  html += navItem("faqs", "FAQs", ICONS.faq);
  html += navItem("research-flags", "Internal Notes / Flags", ICONS.notes);
  html += `<div class="future-services-group">`;
  html += `<div class="sidebar-section-label">Coming Soon</div>`;
  FUTURE_SERVICES.forEach(s => {
    html += `<div class="nav-item future"><span class="nav-icon">${ICONS[s.icon] || "📄"}</span>${s.title}</div>`;
  });
  html += `</div>`;
  nav.innerHTML = html;
  nav.querySelectorAll(".nav-item[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      navigateTo(btn.dataset.page);
      closeMobileSidebar();
    });
  });
}

function navItem(id, label, icon) {
  return `<button class="nav-item" data-page="${id}"><span class="nav-icon">${icon}</span>${label}</button>`;
}

// ── NAVIGATION ───────────────────────────────────────────────
function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll(".nav-item[data-page]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });
  const content = document.getElementById("content-area");
  if (page === "home") {
    content.innerHTML = renderHomePage();
  } else if (page === "before-after") {
    content.innerHTML = renderGlobalBeforeAfter();
  } else if (page === "faqs") {
    content.innerHTML = renderGlobalFAQs();
  } else if (page === "research-flags") {
    content.innerHTML = renderResearchFlags();
  } else {
    const service = SERVICES.find(s => s.id === page);
    if (service) {
      content.innerHTML = renderServicePage(service);
      setupStickyNav(service);
    }
  }
  document.querySelector(".main-content").scrollTo(0, 0);
  setupAccordions();
  setupGalleryClicks();
}

// ── HOME PAGE ────────────────────────────────────────────────
function renderHomePage() {
  let html = `
    <div class="home-hero">
      <div class="home-brand-name">${BRAND.name}</div>
      <h2>${HOME.heroTitle}</h2>
      <p>${HOME.toolDescription}</p>
    </div>
    <div class="home-services-grid">
      ${SERVICES.map(s => `
        <div class="home-service-card" onclick="navigateTo('${s.id}')">
          <div class="home-service-icon">${ICONS[s.icon] || "📄"}</div>
          <h3>${s.title}</h3>
          <p>${s.shortDesc}</p>
        </div>
      `).join("")}
    </div>
    <div class="how-to-use">
      <h3>📖 How to Use This During a Presentation</h3>
      <div class="how-to-grid">
        ${HOME.howToUse.map((item, i) => `
          <div class="how-to-item">
            <div class="how-to-num">${i + 1}</div>
            <div class="how-to-label">${item.label}</div>
            <div class="how-to-text">${item.text}</div>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="how-to-use">
      <h3>🎯 Recommended Presentation Flow</h3>
      <ol style="padding-left:20px; margin-top:16px;">
        ${HOME.recommendedFlow.map(step => `<li style="padding:6px 0; font-size:14px; color:var(--text-secondary);">${step}</li>`).join("")}
      </ol>
    </div>
    <div class="updates-section" style="margin-top: var(--space-xl);">
      <h3>📊 Content Status</h3>
      ${HOME.recentUpdates.map(u => `
        <div class="update-row">
          <span class="update-label">${u.label}</span>
          <span class="update-note">${u.note}</span>
          <span class="status-dot ${u.status}"></span>
        </div>
      `).join("")}
    </div>
  `;
  return html;
}

// ══════════════════════════════════════════════════════════════
// SERVICE PAGE — SCROLLABLE LAYOUT WITH ANCHOR NAV
// ══════════════════════════════════════════════════════════════
function renderServicePage(service) {
  let html = "";

  // Hero with image
  html += `
    <div class="service-hero ${service.heroImage ? 'has-hero-image' : ''}">
      ${service.heroImage ? `<div class="hero-image-bg" style="background-image:url('${service.heroImage}')"></div>` : ''}
      <div class="hero-content-overlay">
        <h2>${service.title}</h2>
        <p class="hero-desc">${service.shortDesc}</p>
        <div class="hero-badges">
          ${service.heroBadges.map(b => `<span class="badge badge-brand">${b}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  // Sticky anchor nav
  const sections = service.sections || [];
  html += `<nav class="anchor-nav" id="anchor-nav">`;
  sections.forEach((s, i) => {
    const slug = slugify(s);
    html += `<a href="#section-${slug}" class="anchor-link ${i === 0 ? 'active' : ''}" data-anchor="${slug}">${s}</a>`;
  });
  html += `</nav>`;

  // Render all sections vertically
  sections.forEach(sectionName => {
    const slug = slugify(sectionName);
    const name = sectionName.toLowerCase();
    html += `<section class="catalog-section" id="section-${slug}">`;
    html += `<div class="section-divider"><h3>${sectionName}</h3></div>`;

    if (name === "overview") {
      html += renderOverview(service);
    } else if (name.includes("vs") || name.includes("attached")) {
      html += renderComparisons(service, sectionName);
    } else if (name.includes("faq")) {
      html += renderFAQs(service.faqs, service.title);
    } else if (name === "gallery") {
      html += renderGallery(service.gallery);
    } else if (name.includes("before") && name.includes("after")) {
      html += renderBeforeAfter(service.beforeAfter);
    } else if (name.includes("add-on") || name === "add-ons") {
      html += renderAddOns(service);
    } else if (name.includes("color") || name.includes("finish")) {
      html += renderColorOptions(service);
    } else if (name.includes("two-post") || name.includes("cantilever")) {
      html += renderTwoPost(service);
    } else if (name.includes("seasonal") || name.includes("care")) {
      html += renderSeasonalCare(service);
    } else if (name.includes("irrigation")) {
      html += renderIrrigationBasics(service);
    } else if (name.includes("shade")) {
      html += renderShadeOptions(service);
    } else if (name.includes("st. augustine") || name.includes("augustine")) {
      html += renderStAugustine(service);
    } else if (name.includes("product comparison")) {
      html += renderProductComparison(service);
    } else if (name.includes("pet")) {
      html += renderTierOptions(service, "premium-pet", "Pet-Friendly Options");
    } else if (name.includes("putting")) {
      html += renderTierOptions(service, "specialty", "Putting Green");
    } else if (name.includes("standard")) {
      html += renderTierOptions(service, "standard", "Standard Tier");
    } else if (name.includes("premium") && !name.includes("pet")) {
      html += renderTierOptions(service, "premium", "Premium Tier");
    } else if (name === "townscape") {
      html += renderSpecificOption(service, "Townscape Paver Sets");
    } else if (name === "holland") {
      html += renderSpecificOption(service, "Holland Pavers");
    } else if (name.includes("veneer")) {
      html += renderSpecificOption(service, "Veneer Pavers / Pool Coping");
    } else if (name.includes("aztec")) {
      html += renderSpecificOption(service, "Aztec Stone Sets");
    } else if (name.includes("12×12") || name.includes("12x12") || name.includes("economy")) {
      html += renderSpecificOption(service, "12×12 Square Step Stone");
    } else if (name.includes("midiron")) {
      html += renderComparisons(service, sectionName);
    } else {
      html += `<p style="color:var(--text-muted);">Content for this section is being prepared.</p>`;
    }

    html += `</section>`;
  });

  return html;
}

// ── STICKY ANCHOR NAV BEHAVIOR ───────────────────────────────
function setupStickyNav(service) {
  const mainContent = document.querySelector(".main-content");
  const anchorNav = document.getElementById("anchor-nav");
  if (!anchorNav || !mainContent) return;

  // Click handler for anchor links
  anchorNav.querySelectorAll(".anchor-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = anchorNav.offsetHeight + 20;
        const top = target.offsetTop - offset;
        mainContent.scrollTo({ top, behavior: "smooth" });
      }
      anchorNav.querySelectorAll(".anchor-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Scroll spy
  let ticking = false;
  mainContent.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveAnchor();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function updateActiveAnchor() {
  const sections = document.querySelectorAll(".catalog-section");
  const anchorNav = document.getElementById("anchor-nav");
  if (!anchorNav) return;
  const mainContent = document.querySelector(".main-content");
  const scrollTop = mainContent.scrollTop;
  const offset = 200;

  let activeId = null;
  sections.forEach(section => {
    if (section.offsetTop - offset <= scrollTop) {
      activeId = section.id;
    }
  });

  if (activeId) {
    anchorNav.querySelectorAll(".anchor-link").forEach(link => {
      const href = link.getAttribute("href").slice(1);
      link.classList.toggle("active", href === activeId);
    });
  }
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ── OVERVIEW ─────────────────────────────────────────────────
function renderOverview(service) {
  const o = service.overview;
  let html = `<div class="overview-section">`;
  html += `<p class="overview-intro">${o.intro}</p>`;
  if (o.vendorNote) {
    html += `<div class="vendor-note">📦 ${o.vendorNote}</div>`;
  }
  if (o.keyPoints) {
    html += `<ul class="overview-key-points">`;
    o.keyPoints.forEach(p => { html += `<li>${p}</li>`; });
    html += `</ul>`;
  }
  if (o.consultant_tip) {
    html += `
      <div class="consultant-tip">
        <div class="consultant-tip-label">💡 Consultant Tip</div>
        <p>${o.consultant_tip}</p>
      </div>
    `;
  }
  html += `</div>`;
  return html;
}

// ── COMPARISONS ──────────────────────────────────────────────
function renderComparisons(service, sectionName) {
  let html = "";
  const comps = service.comparisons || [];
  let relevantComps = comps;
  if (sectionName && sectionName.toLowerCase().includes("vs")) {
    relevantComps = comps.filter(c =>
      c.title.toLowerCase().includes(sectionName.toLowerCase().split(" vs ")[0].trim().split(" ").pop()) ||
      c.title.toLowerCase().includes(sectionName.toLowerCase())
    );
    if (relevantComps.length === 0) relevantComps = comps;
  }
  relevantComps.forEach(comp => {
    html += `
      <div class="comparison-section">
        ${comp.subtitle ? `<p style="color:var(--text-muted);margin-bottom:var(--space-lg);font-size:14px;">${comp.subtitle}</p>` : ""}
        <div class="comparison-grid">
          ${comp.items.map(item => `
            <div class="card comparison-card">
              ${renderImageOrPlaceholder(item.image, item.name)}
              <div class="card-title">${item.name}</div>
              ${item.subtitle ? `<div class="card-subtitle">${item.subtitle}</div>` : ""}
              <div class="card-badges">
                ${(item.badges || []).map(b => `<span class="badge badge-default">${b}</span>`).join("")}
              </div>
              <ul class="card-points">
                ${item.points.map(p => `<li>${p}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  });
  if (html === "") {
    html = `<p style="color:var(--text-muted);padding:var(--space-lg);">Comparison data for this section is being prepared.</p>`;
  }
  return html;
}

// ── OPTIONS RENDERERS ────────────────────────────────────────
function renderTierOptions(service, tier, title) {
  const opts = (service.options || []).filter(o => o.tier === tier || o.tier?.includes(tier));
  let html = "";
  if (opts.length === 0) {
    html += `<p style="color:var(--text-muted)">Options for this tier are being prepared.</p>`;
    return html;
  }
  html += `<div class="card-grid card-grid-2">`;
  opts.forEach(opt => { html += renderOptionCard(opt); });
  html += `</div>`;
  return html;
}

function renderSpecificOption(service, optionName) {
  const opt = (service.options || []).find(o => o.name === optionName);
  if (!opt) return `<p style="color:var(--text-muted);padding:var(--space-lg);">This product section is being prepared.</p>`;
  let html = renderOptionCard(opt, true);
  // Show extra images if available
  if (opt.images && opt.images.length > 0) {
    html += `<div class="option-extra-images">`;
    opt.images.forEach(imgUrl => {
      html += `<div class="gallery-item" data-lightbox="${opt.name}">
        <div class="gallery-image-wrap"><img src="${imgUrl}" alt="${opt.name}" loading="lazy"></div>
      </div>`;
    });
    html += `</div>`;
  }
  return html;
}

function renderProductComparison(service) {
  let html = renderComparisons(service, "comparison");
  if (service.colorSwatchImage) {
    html += `
      <div style="margin-top:var(--space-xl);">
        <div class="section-header"><h3>Color Options</h3><p>Available colors across paver product lines</p></div>
        <div class="card" style="text-align:center;padding:var(--space-lg);">
          <img src="${service.colorSwatchImage}" alt="Paver color options" style="max-width:100%;border-radius:var(--radius-md);" loading="lazy">
        </div>
      </div>
    `;
  }
  return html;
}

function renderOptionCard(opt, expanded = false) {
  const tierClass = opt.tier?.includes("premium") ? "premium" : opt.tier === "economy" ? "economy" : opt.tier === "specialty" ? "specialty" : opt.tier?.includes("pet") ? "pet" : "brand";
  let html = `
    <div class="card ${expanded ? 'card-expanded' : ''}">
      ${renderImageOrPlaceholder(opt.image, opt.name)}
      <div class="card-title">${opt.name}</div>
      <div class="card-subtitle">${opt.subtitle || ""}</div>
      <div class="card-badges">
        ${(opt.badges || []).map(b => `<span class="badge badge-${tierClass}">${b}</span>`).join("")}
      </div>
      <div class="card-desc">${opt.description}</div>
  `;
  if (opt.specs) {
    html += `<table class="specs-table">`;
    opt.specs.forEach(s => {
      html += `<tr><td>${s.label}</td><td>${s.value}</td></tr>`;
    });
    html += `</table>`;
  }
  if (opt.colorOptions) {
    html += `
      <div style="margin-top:var(--space-md)">
        <div style="font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:6px;">Available Colors</div>
        <div class="color-chips">
          ${opt.colorOptions.map(c => `<span class="color-chip">${c}</span>`).join("")}
        </div>
      </div>
    `;
  }
  if (opt.note) {
    html += `<div class="internal-note">${opt.note.replace("⚠️ ", "")}</div>`;
  }
  html += `</div>`;
  return html;
}

// ── ADD-ONS ──────────────────────────────────────────────────
function renderAddOns(service) {
  if (!service.addOns) return "";
  let html = `
    <p style="color:var(--text-secondary);margin-bottom:var(--space-lg);font-size:14px;">These options can be included in the project to enhance the installation.</p>
    <div class="addons-grid">
  `;
  service.addOns.forEach(a => {
    html += `
      <div class="addon-card">
        <div class="addon-icon">${ICONS[a.icon] || "✨"}</div>
        <div class="addon-name">${a.name}</div>
        <div class="addon-desc">${a.description}</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// ── COLOR OPTIONS ────────────────────────────────────────────
function renderColorOptions(service) {
  if (!service.colorOptions) return `<p style="color:var(--text-muted)">Color options section is being prepared.</p>`;
  const co = service.colorOptions;
  let html = "";
  co.categories.forEach(cat => {
    html += `
      <div class="color-category">
        <h4>${cat.label}</h4>
        <div class="color-chips">
          ${cat.items.map(i => `<span class="color-chip">${i}</span>`).join("")}
        </div>
      </div>
    `;
  });
  if (co.placeholder) {
    html += `<div class="internal-note">${co.placeholder}</div>`;
  }
  return html;
}

// ── TWO-POST ─────────────────────────────────────────────────
function renderTwoPost(service) {
  if (!service.twoPostSection) return "";
  const tp = service.twoPostSection;
  let html = `
    <div class="card" style="max-width:700px;">
      ${renderImageOrPlaceholder(tp.image, tp.title)}
      <p class="card-desc">${tp.description}</p>
      <ul class="overview-key-points">
        ${tp.keyPoints.map(p => `<li>${p}</li>`).join("")}
      </ul>
      ${tp.confirmationNeeded ? `<div class="internal-note">${tp.confirmationNeeded}</div>` : ""}
    </div>
  `;
  return html;
}

// ── SEASONAL CARE ────────────────────────────────────────────
function renderSeasonalCare(service) {
  if (!service.seasonalCare) return `<p style="color:var(--text-muted)">Seasonal care content is being prepared.</p>`;
  const sc = service.seasonalCare;
  let html = `
    <div class="season-grid">
      ${sc.items.map(item => `
        <div class="season-card">
          <div class="season-name">${item.season}</div>
          <div class="season-note">${item.note}</div>
        </div>
      `).join("")}
    </div>
  `;
  if (sc.dormancyNote) {
    html += `<div class="consultant-tip" style="margin-top:var(--space-lg)">
      <div class="consultant-tip-label">💡 Key Point for Clients</div>
      <p>${sc.dormancyNote}</p>
    </div>`;
  }
  return html;
}

// ── IRRIGATION BASICS ────────────────────────────────────────
function renderIrrigationBasics(service) {
  if (!service.irrigationBasics) return "";
  const ib = service.irrigationBasics;
  let html = `
    <ul class="overview-key-points">
      ${ib.points.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;
  if (ib.consultant_tip) {
    html += `<div class="consultant-tip" style="margin-top:var(--space-lg)">
      <div class="consultant-tip-label">💡 Consultant Tip</div>
      <p>${ib.consultant_tip}</p>
    </div>`;
  }
  return html;
}

// ── SHADE / ST AUGUSTINE ─────────────────────────────────────
function renderShadeOptions(service) {
  const opts = (service.options || []).filter(o => o.name.toLowerCase().includes("tifgrand") || o.name.toLowerCase().includes("shade") || o.name.toLowerCase().includes("palmetto"));
  if (opts.length === 0) return `<p style="color:var(--text-muted)">Shade-tolerant options are being documented.</p>`;
  let html = `<p style="color:var(--text-secondary);margin-bottom:var(--space-lg);font-size:14px;">For areas with limited sun exposure from trees, structures, or north-facing orientation.</p>`;
  html += `<div class="card-grid card-grid-2">`;
  opts.forEach(opt => { html += renderOptionCard(opt); });
  html += `</div>`;
  return html;
}

function renderStAugustine(service) {
  const opt = (service.options || []).find(o => o.name.toLowerCase().includes("palmetto") || o.name.toLowerCase().includes("augustine"));
  if (!opt) return `<p style="color:var(--text-muted)">St. Augustine content is being prepared.</p>`;
  return `<div style="max-width:700px;">${renderOptionCard(opt, true)}</div>`;
}

// ── FAQ ──────────────────────────────────────────────────────
function renderFAQs(faqs, title) {
  if (!faqs || faqs.length === 0) return `<p style="color:var(--text-muted)">FAQs are being prepared.</p>`;
  let html = "";
  faqs.forEach(faq => {
    const tagClass = faq.tag === "client" ? "client" : faq.tag === "internal" ? "internal" : "both";
    const tagLabel = faq.tag === "client" ? "Client" : faq.tag === "internal" ? "Internal" : "Both";
    html += `
      <div class="accordion-item" data-accordion>
        <button class="accordion-trigger">
          <span>${faq.q}<span class="faq-tag faq-tag-${tagClass}">${tagLabel}</span></span>
          <span class="accordion-arrow">▼</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">${faq.a}</div>
        </div>
      </div>
    `;
  });
  return html;
}

// ── GALLERY ──────────────────────────────────────────────────
function renderGallery(items) {
  if (!items || items.length === 0) return `<p style="color:var(--text-muted)">Gallery images are being collected.</p>`;
  let html = `<p style="color:var(--text-muted);margin-bottom:var(--space-lg);font-size:14px;">Click any image to enlarge during a presentation.</p>`;
  html += `<div class="gallery-grid">`;
  items.forEach(item => {
    html += `
      <div class="gallery-item" data-lightbox="${item.alt}">
        <div class="gallery-image-wrap">
          ${item.src
            ? `<img src="${item.src}" alt="${item.alt}" loading="lazy">`
            : `<div class="gallery-placeholder"><div class="gallery-placeholder-icon">🖼️</div>${item.placeholder || "Image pending"}</div>`
          }
        </div>
        <div class="gallery-label">${item.alt}</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// ── BEFORE / AFTER ───────────────────────────────────────────
function renderBeforeAfter(items) {
  if (!items || items.length === 0) return `<p style="color:var(--text-muted)">Before & After images are being collected from Google Drive.</p>`;
  let html = `<p style="color:var(--text-muted);margin-bottom:var(--space-lg);font-size:14px;">Transformation visuals for client presentations.</p>`;
  html += `<div class="before-after-grid">`;
  items.forEach(item => {
    html += `
      <div class="before-after-card">
        <div class="before-after-images">
          <div class="ba-image-side before">
            <span class="ba-label">Before</span>
            ${item.before
              ? `<img src="${item.before}" alt="Before" style="width:100%;height:100%;object-fit:cover;">`
              : `<div class="ba-placeholder">${item.beforePlaceholder || "Before photo pending"}</div>`
            }
          </div>
          <div class="ba-image-side after">
            <span class="ba-label">After</span>
            ${item.after
              ? `<img src="${item.after}" alt="After" style="width:100%;height:100%;object-fit:cover;">`
              : `<div class="ba-placeholder">${item.afterPlaceholder || "After photo pending"}</div>`
            }
          </div>
        </div>
        <div class="before-after-card-label">${item.label}</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// ── GLOBAL PAGES ─────────────────────────────────────────────
function renderGlobalBeforeAfter() {
  let html = `
    <div class="service-hero">
      <h2>Before & After Gallery</h2>
      <p class="hero-desc">Transformation visuals organized by service. Use these during presentations to show clients the impact of each project type.</p>
    </div>
  `;
  SERVICES.forEach(service => {
    if (service.beforeAfter && service.beforeAfter.length > 0) {
      html += `<div class="section-header" style="margin-top:var(--space-xl)"><h3>${service.title}</h3></div>`;
      html += renderBeforeAfter(service.beforeAfter);
    }
  });
  if (GLOBAL_BEFORE_AFTER.length > 0) {
    html += `<div class="section-header" style="margin-top:var(--space-xl)"><h3>Additional Transformations</h3></div>`;
    html += renderBeforeAfter(GLOBAL_BEFORE_AFTER);
  }
  return html;
}

function renderGlobalFAQs() {
  let html = `
    <div class="service-hero">
      <h2>Frequently Asked Questions</h2>
      <p class="hero-desc">All FAQs across services. Use the search bar to find specific questions quickly.</p>
    </div>
  `;
  html += `<div class="section-header"><h3>General Questions</h3></div>`;
  html += renderFAQs(GLOBAL_FAQS, "General");
  SERVICES.forEach(service => {
    if (service.faqs && service.faqs.length > 0) {
      html += `<div class="section-header" style="margin-top:var(--space-xl)"><h3>${service.title}</h3></div>`;
      html += renderFAQs(service.faqs, service.title);
    }
  });
  return html;
}

function renderResearchFlags() {
  let html = `
    <div class="service-hero" style="border-left:4px solid var(--warning);">
      <h2>📋 Internal Notes & Research Flags</h2>
      <p class="hero-desc">Items that need internal confirmation, missing assets, and open research questions. This section is for the team only — not for client presentations.</p>
    </div>
    <div class="card" style="margin-bottom:var(--space-xl);overflow-x:auto;">
      <table class="flags-table">
        <thead><tr><th>Priority</th><th>Category</th><th>Item</th></tr></thead>
        <tbody>
          ${RESEARCH_FLAGS.map(f => `
            <tr>
              <td><span class="priority-badge priority-${f.priority}">${f.priority}</span></td>
              <td style="font-weight:600;">${f.category}</td>
              <td>${f.item}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
  SERVICES.forEach(service => {
    if (service.internalNotes && service.internalNotes.length > 0) {
      html += `
        <div class="card" style="margin-bottom:var(--space-md);">
          <div class="card-title" style="margin-bottom:var(--space-md);">${service.title} — Notes</div>
          <ul style="padding-left:20px;">
            ${service.internalNotes.map(n => `<li style="padding:4px 0;font-size:13.5px;color:var(--text-secondary);">${n}</li>`).join("")}
          </ul>
        </div>
      `;
    }
  });
  return html;
}

// ── IMAGE HELPER ─────────────────────────────────────────────
function renderImageOrPlaceholder(src, alt) {
  if (src) {
    return `<div class="gallery-image-wrap" style="margin-bottom:var(--space-md);border-radius:var(--radius-md);overflow:hidden;"><img src="${src}" alt="${alt}" loading="lazy"></div>`;
  }
  return "";
}

// ── ACCORDION SETUP ──────────────────────────────────────────
function setupAccordions() {
  document.querySelectorAll(".accordion-item").forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    if (trigger && !trigger._bound) {
      trigger._bound = true;
      trigger.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    }
  });
}

// ── GALLERY LIGHTBOX ─────────────────────────────────────────
function setupGalleryClicks() {
  document.querySelectorAll(".gallery-item[data-lightbox]").forEach(item => {
    if (!item._bound) {
      item._bound = true;
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const caption = item.dataset.lightbox;
        if (img) openLightbox(img.src, caption);
      });
    }
  });
}

function openLightbox(src, caption) {
  const lb = document.getElementById("lightbox");
  lb.querySelector(".lightbox-content img").src = src;
  lb.querySelector(".lightbox-caption").textContent = caption || "";
  lb.classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// ── MOBILE SIDEBAR ───────────────────────────────────────────
function setupMobileToggle() {
  const toggle = document.getElementById("sidebar-toggle");
  const overlay = document.getElementById("sidebar-overlay");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("open");
      overlay.classList.toggle("visible");
    });
  }
  if (overlay) {
    overlay.addEventListener("click", closeMobileSidebar);
  }
}

function closeMobileSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("visible");
}

// ── SEARCH ───────────────────────────────────────────────────
function handleSearch(query) {
  if (!query || query.length < 2) return;
  const q = query.toLowerCase();
  let results = [];
  SERVICES.forEach(service => {
    if (service.title.toLowerCase().includes(q) || service.shortDesc.toLowerCase().includes(q)) {
      results.push({ type: "service", label: service.title, page: service.id });
    }
    (service.faqs || []).forEach(faq => {
      if (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)) {
        results.push({ type: "faq", label: faq.q, page: service.id });
      }
    });
    (service.options || []).forEach(opt => {
      if (opt.name.toLowerCase().includes(q) || opt.description.toLowerCase().includes(q)) {
        results.push({ type: "option", label: opt.name, page: service.id });
      }
    });
  });
  GLOBAL_FAQS.forEach(faq => {
    if (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)) {
      results.push({ type: "faq", label: faq.q, page: "faqs" });
    }
  });
  renderSearchResults(results);
}

function renderSearchResults(results) {
  const container = document.getElementById("search-results");
  if (!container) return;
  if (results.length === 0) {
    container.innerHTML = `<div style="padding:var(--space-md);color:var(--text-muted);font-size:13px;">No results found.</div>`;
    container.style.display = "block";
    return;
  }
  container.innerHTML = results.slice(0, 8).map(r => `
    <button class="search-result-item" onclick="navigateTo('${r.page}');document.getElementById('search-results').style.display='none';document.getElementById('search-input').value='';">
      <span class="search-result-type">${r.type}</span>
      <span>${r.label}</span>
    </button>
  `).join("");
  container.style.display = "block";
}

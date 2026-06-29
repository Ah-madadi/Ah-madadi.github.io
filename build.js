import fs from 'fs';

const configContent = fs.readFileSync('config.js', 'utf8');
const match = configContent.match(/const\s+CONFIG\s*=\s*({[\s\S]*?});/);
if (!match) throw new Error('CONFIG object not found');

const C = eval('(' + match[1] + ')');
let index = fs.readFileSync('index.html', 'utf8');

function escape(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g,
    tag => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[tag] || tag));
}

function replaceBetween(startComment, endComment, content) {
  const startIdx = index.indexOf(startComment);
  const endIdx = index.indexOf(endComment);
  if (startIdx !== -1 && endIdx !== -1) {
    index = index.substring(0, startIdx + startComment.length) +
            '\n' + content + '\n      ' +
            index.substring(endIdx);
  }
}

function replaceDivContent(id, content) {
  const startPattern = `id="${id}"`;
  const idx = index.indexOf(startPattern);
  if (idx === -1) return;
  const divOpenEnd = index.indexOf('>', idx) + 1;
  let depth = 1, curr = divOpenEnd;
  while (depth > 0 && curr < index.length) {
    const nextOpen = index.indexOf('<div', curr);
    const nextClose = index.indexOf('</div', curr);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; curr = nextOpen + 4; }
    else { depth--; curr = nextClose + 5; }
  }
  if (depth === 0) {
    const closeDivIdx = curr - 5;
    index = index.substring(0, divOpenEnd) + '\n' + content + '      ' + index.substring(closeDivIdx);
  }
}

// ── Category mapping (priority-based for correct grouping) ──
function getCat(tags) {
  const tagsLower = tags.map(t => t.toLowerCase());
  const priority = [
    ['Digital / RTL',     ['verilog','quartus','modelsim','risc-v','fpga','mips','booth','systemverilog']],
    ['Power & Machines',  ['digsilent','powerworld','ansys','maxwell','comsol','rmxprt','live scripts','electromagnetics','faraday','400kv','ferrite','litz','high voltage','transmission line','ieee 39']],
    ['Control & Circuits',['simulink','simscape','cstr','ltspice','pspice','multisim','oscilloscope','root locus','bode','feedback','altium','orcad','power quality','overvoltage','arduino','pcb design','prototyping','lab equipment']],
    ['Software & Data',   ['python','numpy','c++','data structures','linked lists','laplace','fourier','convolution','statistical','bayesian','signal processing','autocad','latex','git']]
  ];
  for (const [cat, keywords] of priority) {
    for (const t of tagsLower) {
      if (keywords.some(k => t.includes(k))) return cat;
    }
  }
  return 'Other';
}

// ── SVG Icons ──
const SVGS = {
  power:    `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  digital:  `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
  machines: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0-1.1 1.8-2 4-2s4 .9 4 2-1.8 2-4 2-4-.9-4-2z"></path><path d="M12 12c0-1.1 1.8-2 4-2s4 .9 4 2-1.8 2-4 2-4-.9-4-2z"></path><line x1="1" y1="12" x2="4" y2="12"></line><line x1="16" y1="12" x2="20" y2="12"></line></svg>`,
  control:  `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12A10 10 0 0 0 12 2v10z"></path><path d="M2 12A10 10 0 0 0 12 22v-10z"></path><path d="M12 2a10 10 0 0 1 10 10h-10z"></path><path d="M12 22a10 10 0 0 1-10-10h10z"></path></svg>`,
  circuits: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h3l2-4 3 8 3-8 3 8 2-4h4"></path></svg>`,
  software: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
  resume:   `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  email:    `<svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>`,
  github:   `<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
  linkedin: `<svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm1.336 9.763H3.67V7.775h2.671v8.563zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/></svg>`
};

// ── Skills ──
let skillsHTML = '';
C.skills.items.forEach(s => {
  const iconSVG = SVGS[s.icon] || '';
  const tags = s.tags.map(t => `<span class="skill-tag">${escape(t)}</span>`).join('');
  skillsHTML += `        <div class="skill-card">
          <div class="skill-icon">${iconSVG}</div>
          <h3>${escape(s.title)}</h3>
          <p>${escape(s.desc)}</p>
          <div class="skill-tags">${tags}</div>
        </div>\n`;
});

// ── Contacts ──
let contactHTML = '';
C.contact.links.forEach(c => {
  const target = c.type !== 'email' ? ' target="_blank"' : '';
  const iconSVG = SVGS[c.type] || '';
  contactHTML += `        <a href="${escape(c.href)}" class="contact-card"${target}>
          <div class="contact-icon">${iconSVG}</div>
          <div>
            <div class="contact-label">${escape(c.type)}</div>
            <div class="contact-value">${escape(c.value)}</div>
          </div>
        </a>\n`;
});

// ── Filters ──
const filters = ['All', 'Digital / RTL', 'Power & Machines', 'Control & Circuits', 'Software & Data'];
let filterHTML = '        <div class="filter-group"><button class="filter-btn active" data-filter="All">All</button>';
filters.slice(1).forEach(f => {
  filterHTML += `<button class="filter-btn" data-filter="${escape(f)}">${escape(f)}</button>`;
});
filterHTML += '</div>';

// ── Projects ──
let projectsHTML = '';
C.projects.items.forEach(p => {
  const cat = getCat(p.tech);
  const featuredClass = p.featured ? ' project-featured' : '';
  const featuredBadge = p.featured ? '<span class="project-badge">Featured</span>' : '';
  const status = p.status === 'done' ? 'Completed' : 'In Progress';
  const tech = p.tech.map(t => `<span>${escape(t)}</span>`).join('');
  let link = '';
  if (p.link) {
    link = `<a href="${escape(p.link.url)}" class="project-link" target="_blank">${escape(p.link.label)} ↗</a>`;
  }

  projectsHTML += `        <div class="project-card${featuredClass}" data-category="${escape(cat)}">
          <div class="project-header">
            <div style="display:flex; align-items:center; gap:12px;">
              <h3>${escape(p.title)}</h3>
              ${featuredBadge}
            </div>
            <span class="project-status status-${escape(p.status)}">${status}</span>
          </div>
          <p>${escape(p.desc)}</p>
          <div class="project-tech">${tech}</div>
          ${link}
        </div>\n`;
});

// ── Inject into index.html ──
replaceBetween('<!-- START FILTERS -->', '<!-- END FILTERS -->', filterHTML);
replaceBetween('<!-- START PROJECTS -->', '<!-- END PROJECTS -->', projectsHTML);
replaceDivContent('skills-grid', skillsHTML);
replaceDivContent('contact-grid', contactHTML);

// ── Replace render() function (client-side hydration) ──
const newRenderFunction = `    function render() {
      const C = CONFIG;
      document.getElementById('nav-logo').textContent = C.nav.logo;
      document.getElementById('nav-links').innerHTML = C.nav.links.map(l => \`<a href="\${l.href}">\${l.label}</a>\`).join('');
      const cta = document.getElementById('nav-cta');
      cta.textContent = C.nav.cta;
      cta.href = C.nav.ctaLink;
      document.getElementById('hero-badge').textContent = C.hero.badge;
      document.getElementById('hero-name').textContent = C.hero.name;
      document.getElementById('hero-tagline').textContent = C.hero.tagline;
      document.getElementById('hero-buttons').innerHTML = C.hero.buttons.map(b =>
        \`<a href="\${b.href}" class="btn-\${b.style}">\${b.label}</a>\`
      ).join('');
      document.title = C.hero.name + ' — Electrical Engineer';
      document.getElementById('skills-label').textContent = C.skills.label;
      document.getElementById('skills-title').textContent = C.skills.title;
      document.getElementById('skills-desc').textContent = C.skills.description;
      document.getElementById('projects-label').textContent = C.projects.label;
      document.getElementById('projects-title').textContent = C.projects.title;
      document.getElementById('projects-desc').textContent = C.projects.description;
      document.getElementById('edu-label').textContent = C.education.label;
      document.getElementById('edu-title').textContent = C.education.title;
      document.getElementById('edu-desc').textContent = C.education.description;
      document.getElementById('contact-label').textContent = C.contact.label;
      document.getElementById('contact-title').textContent = C.contact.title;
      document.getElementById('contact-desc').textContent = C.contact.description;
      document.getElementById('footer-text').textContent = C.footer;
    }`;

const renderStartIdx = index.indexOf('function render() {');
const renderEndIdx = index.indexOf('render();', renderStartIdx);
if (renderStartIdx !== -1 && renderEndIdx !== -1) {
  index = index.substring(0, renderStartIdx) + newRenderFunction + '\n\n    ' + index.substring(renderEndIdx);
}

fs.writeFileSync('index.html', index, 'utf8');
console.log('Build successful: index.html updated');

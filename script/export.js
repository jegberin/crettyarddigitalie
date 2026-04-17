import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'public');
const docsDir = path.join(rootDir, 'docs');

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/web-design', file: 'web-design.html' },
  { path: '/microsoft-365', file: 'microsoft-365.html' },
  { path: '/network-wifi-security', file: 'network-wifi-security.html' },
  { path: '/portfolio', file: 'portfolio.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' },
  { path: '/privacy-policy', file: 'privacy-policy.html' },
  { path: '/terms-and-conditions', file: 'terms-and-conditions.html' },
  { path: '/cookie-policy', file: 'cookie-policy.html' },
  { path: '/parental-controls', file: 'parental-controls.html' },
  { path: '/get-a-quote', file: 'get-a-quote.html' }
];

function rewriteLinks(html) {
  html = html.replace(/href="\/(web-design|microsoft-365|network-wifi-security|parental-controls|portfolio|about|contact|privacy-policy|terms-and-conditions|cookie-policy|get-a-quote)#([^"]*)"/g, 'href="/$1.html#$2"');
  html = html.replace(/href="\/(web-design|microsoft-365|network-wifi-security|parental-controls|portfolio|about|contact|privacy-policy|terms-and-conditions|cookie-policy|get-a-quote)"/g, 'href="/$1.html"');
  html = html.replace(/href="\/"/g, 'href="/index.html"');
  html = html.replace(/href="\/#services"/g, 'href="/index.html#services"');
  return html;
}

function stripReactBundle(html) {
  html = html.replace(/<script type="module" crossorigin="" src="\/assets\/index-[^"]+\.js"><\/script>/g, '');
  html = html.replace(/<link rel="modulepreload"[^>]*href="\/assets\/[^"]+\.js"[^>]*>/g, '');
  return html;
}

function fixOgImages(html) {
  html = html.replace(/content="https?:\/\/[^"]*?\/opengraph\.jpg"/g, 'content="https://crettyarddigital.ie/opengraph.jpg"');
  return html;
}

function fixFramerMotionStyles(html) {
  html = html.replace(/style="opacity: 0;[^"]*"/g, 'style="opacity: 1; transform: none;"');
  return html;
}

function fixAccordionContent(html) {
  html = html.replace(/data-\[state=closed\]:animate-accordion-up/g, '');
  html = html.replace(/data-\[state=open\]:animate-accordion-down/g, '');
  // Inject CSS that hides ALL accordion content regions by default.
  // Radix renders content in the DOM via forceMount but doesn't always set
  // data-state="closed" on initial render, so we hide by element role instead.
  html = html.replace('</head>', '<style>div[role="region"][data-orientation="vertical"]{display:none!important;}div[role="region"][data-orientation="vertical"][data-state="open"]{display:block!important;}</style></head>');
  return html;
}

const staticScripts = `
<script>
(function(){
  var btn = document.querySelector('[data-mobile-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  if(btn && menu){
    menu.style.display = 'none';
    btn.addEventListener('click', function(){
      var open = menu.style.display !== 'none';
      menu.style.display = open ? 'none' : 'flex';
      var icons = btn.querySelectorAll('svg');
      if(icons.length === 2){
        icons[0].style.display = open ? 'block' : 'none';
        icons[1].style.display = open ? 'none' : 'block';
      }
    });
    menu.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        menu.style.display = 'none';
        var icons = btn.querySelectorAll('svg');
        if(icons.length === 2){
          icons[0].style.display = 'block';
          icons[1].style.display = 'none';
        }
      });
    });
  }

  var triggers = document.querySelectorAll('[data-orientation="vertical"] > h3 button[aria-expanded]');
  triggers.forEach(function(trigger){
    var contentId = trigger.getAttribute('aria-controls');
    var content = document.getElementById(contentId);
    if(!content) return;
    content.removeAttribute('hidden');
    content.style.display = 'none';
    content.style.overflow = 'hidden';
    trigger.addEventListener('click', function(){
      var isOpen = trigger.getAttribute('data-state') === 'open';
      var parent = trigger.closest('[data-orientation="vertical"]');
      if(parent){
        var root = parent.parentElement;
        if(root){
          root.querySelectorAll('[data-orientation="vertical"] > h3 button[aria-expanded]').forEach(function(otherTrigger){
            if(otherTrigger !== trigger){
              var otherId = otherTrigger.getAttribute('aria-controls');
              var otherContent = document.getElementById(otherId);
              otherTrigger.setAttribute('data-state','closed');
              otherTrigger.setAttribute('aria-expanded','false');
              otherTrigger.closest('[data-orientation="vertical"]').setAttribute('data-state','closed');
              var otherH3 = otherTrigger.closest('h3');
              if(otherH3) otherH3.setAttribute('data-state','closed');
              if(otherContent){
                otherContent.setAttribute('data-state','closed');
                otherContent.style.display = 'none';
              }
              var otherSvg = otherTrigger.querySelector('svg');
              if(otherSvg) otherSvg.style.transform = 'rotate(0deg)';
            }
          });
        }
      }
      if(isOpen){
        trigger.setAttribute('data-state','closed');
        trigger.setAttribute('aria-expanded','false');
        if(parent) parent.setAttribute('data-state','closed');
        var h3el = trigger.closest('h3');
        if(h3el) h3el.setAttribute('data-state','closed');
        content.setAttribute('data-state','closed');
        content.style.display = 'none';
        var svg = trigger.querySelector('svg');
        if(svg) svg.style.transform = 'rotate(0deg)';
      } else {
        trigger.setAttribute('data-state','open');
        trigger.setAttribute('aria-expanded','true');
        if(parent) parent.setAttribute('data-state','open');
        var h3el2 = trigger.closest('h3');
        if(h3el2) h3el2.setAttribute('data-state','open');
        content.setAttribute('data-state','open');
        content.style.display = 'block';
        var svg2 = trigger.querySelector('svg');
        if(svg2) svg2.style.transform = 'rotate(180deg)';
      }
    });
  });
  // Glass-light interaction for service cards
  document.querySelectorAll('.glass-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / card.clientWidth) * 100;
      var y = ((e.clientY - rect.top) / card.clientHeight) * 100;
      card.style.setProperty('--x', x + '%');
      card.style.setProperty('--y', y + '%');
    });
  });

  // Scroll reveal intersection observer
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal-on-scroll').forEach(function(el){ revealObserver.observe(el); });

  var bannerEl = document.querySelector('[data-cookie-banner]');
  if(bannerEl){
    var consent = localStorage.getItem('cookie_consent');
    if(consent){
      bannerEl.style.display = 'none';
    } else {
      bannerEl.style.display = 'block';
      var acceptBtn = bannerEl.querySelector('[data-testid="button-accept-cookies"]');
      var rejectBtn = bannerEl.querySelector('[data-testid="button-reject-cookies"]');
      if(acceptBtn){
        acceptBtn.addEventListener('click', function(){
          localStorage.setItem('cookie_consent','accepted');
          bannerEl.style.display = 'none';
        });
      }
      if(rejectBtn){
        rejectBtn.addEventListener('click', function(){
          localStorage.setItem('cookie_consent','rejected');
          bannerEl.style.display = 'none';
        });
      }
    }
  }
})();

// ── Rotating hero phrases ──────────────────────────────────────────────────
(function(){
  var phrases = ["Win Online.", "Get Found.", "Win Clients.", "Stand Out."];
  var idx = 0;
  var el = document.querySelector('[data-testid="text-hero-rotating"]');
  if(!el) return;
  setInterval(function(){
    idx = (idx + 1) % phrases.length;
    el.style.transition = 'opacity 0.3s ease';
    el.style.opacity = '0';
    setTimeout(function(){
      el.textContent = phrases[idx];
      el.style.opacity = '1';
    }, 320);
  }, 3000);
})();

// ── Animated counters ──────────────────────────────────────────────────────
(function(){
  var els = document.querySelectorAll('[data-counter]');
  if(!els.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      obs.unobserve(el);
      var target   = parseInt(el.getAttribute('data-counter-target'), 10) || 0;
      var suffix   = el.getAttribute('data-counter-suffix') || '';
      var prefix   = el.getAttribute('data-counter-prefix') || '';
      var duration = parseInt(el.getAttribute('data-counter-duration'), 10) || 1800;
      var start = null;
      function step(ts){
        if(!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if(progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.3 });
  els.forEach(function(el){ obs.observe(el); });
})();
</script>
`;

function addStaticScripts(html) {
  html = html.replace('</body>', staticScripts + '</body>');
  return html;
}

async function exportStatic() {
  console.log('Building Vite app...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Starting static server...');
  const app = express();
  app.use(express.static(distDir));
  
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Server running at ${baseUrl}`);

    try {
      await fs.rm(docsDir, { recursive: true, force: true });
      await fs.mkdir(docsDir, { recursive: true });
      
      await fs.cp(path.join(distDir, 'assets'), path.join(docsDir, 'assets'), { recursive: true });
      
      const files = await fs.readdir(distDir);
      for (const file of files) {
        if (file !== 'assets' && file !== 'index.html') {
          const stat = await fs.stat(path.join(distDir, file));
          if (stat.isFile()) {
            await fs.copyFile(path.join(distDir, file), path.join(docsDir, file));
          }
        }
      }

      console.log('Launching Puppeteer...');
      const chromePath = execSync('which chromium').toString().trim();
      const browser = await puppeteer.launch({
        executablePath: chromePath,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();

      const interactivePages = new Set(['get-a-quote.html', 'contact.html', 'parental-controls.html']);

      for (const route of routes) {
        console.log(`Exporting ${route.path} to ${route.file}...`);
        await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'networkidle0' });
        
        await page.waitForSelector('#root > div', { timeout: 5000 }).catch(() => {});
        
        await new Promise(r => setTimeout(r, 1500));
        
        let html = await page.content();
        
        html = rewriteLinks(html);
        if (!interactivePages.has(route.file)) {
          html = stripReactBundle(html);
          html = fixFramerMotionStyles(html);
        }
        html = fixOgImages(html);
        html = fixAccordionContent(html);
        html = addStaticScripts(html);
        
        await fs.writeFile(path.join(docsDir, route.file), html);
      }

      await browser.close();

      const workerSrc = await fs.readFile(path.join(__dirname, 'cloudflare-worker.js'), 'utf8');
      await fs.writeFile(path.join(docsDir, '_worker.js'), workerSrc);

      const wranglerConfig = {
        $schema: 'node_modules/wrangler/config-schema.json',
        name: 'digitalcrettyard',
        main: '_worker.js',
        compatibility_date: '2025-09-27',
        observability: { enabled: true },
        assets: { directory: '.' },
        compatibility_flags: ['nodejs_compat'],
      };
      await fs.writeFile(path.join(docsDir, 'wrangler.jsonc'), JSON.stringify(wranglerConfig, null, 2));

      await fs.writeFile(path.join(docsDir, '.assetsignore'), '_worker.js\nwrangler.jsonc\n.assetsignore\n.nojekyll\n');

      await fs.writeFile(path.join(docsDir, '.nojekyll'), '');

      console.log('Export complete! Files are in the /docs directory.');
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

exportStatic();

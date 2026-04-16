// PNG -> WebP conversion script for newly generated assets.
// Appends new batches over time. Skips targets that already exist
// and are newer than their source PNG (safe to re-run).
// The source PNGs stay on disk (they're gitignored).

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'attached_assets');

// [sourcePng, targetWebp]
const jobs = [
  // Heroes + concept map (names already match)
  ['wd-laois-hero-portlaoise-dusk.png',          'wd-laois-hero-portlaoise-dusk.webp'],
  ['wd-laois-concept-growing-map.png',           'wd-laois-concept-growing-map.webp'],
  ['wd-carlow-hero-tullow-construction-dawn.png','wd-carlow-hero-tullow-construction-dawn.webp'],
  ['wd-kilkenny-hero-medieval-mile-dusk.png',    'wd-kilkenny-hero-medieval-mile-dusk.webp'],

  // Reusable glass concept icons (Laois "What You Get")
  ['concept-local-seo.png',          'concept-local-seo.webp'],
  ['concept-google-maps-pin.png',    'concept-google-maps-pin.webp'],
  ['concept-audience-target.png',    'concept-audience-target.webp'],
  ['concept-conversion-funnel.png',  'concept-conversion-funnel.webp'],

  // Kilkenny sector icons — renamed for semantic clarity
  ['4 glass concept icons - plate and fork.png', 'concept-hospitality-dining.webp'],
  ['4 glass concept icons - shopping bag.png',   'concept-retail-craft.webp'],
  ['4 glass concept icons - B&B.png',            'concept-accommodation.webp'],
  ['4 glass concept icons - briefcase.png',      'concept-professional-services.webp'],

  // EAA accessibility icon
  ['concept-accessibility-eaa.png', 'concept-accessibility-eaa.webp'],

  // M365 glass concept icons (Key Benefits + What's Included)
  ['concept-email-pro.png',        'concept-email-pro.webp'],
  ['concept-cloud-storage.png',    'concept-cloud-storage.webp'],
  ['concept-team-collab.png',      'concept-team-collab.webp'],
  ['concept-business-phone.png',   'concept-business-phone.webp'],
  ['concept-shared-calendar.png',  'concept-shared-calendar.webp'],
  ['concept-work-anywhere.png',    'concept-work-anywhere.webp'],
  ['concept-gdpr-shield.png',      'concept-gdpr-shield.webp'],
  ['concept-licence-match.png',    'concept-licence-match.webp'],
  ['concept-migration-safe.png',   'concept-migration-safe.webp'],
  ['concept-training.png',         'concept-training.webp'],

  // M365 Teams Phone photoreal hero image
  ['m365-teams-phone-multi-device.png', 'm365-teams-phone-multi-device.webp'],
];

// Heroes get higher quality + bigger max dimension; icons stay compact.
const HERO_FILES = new Set([
  'wd-laois-hero-portlaoise-dusk.webp',
  'wd-carlow-hero-tullow-construction-dawn.webp',
  'wd-kilkenny-hero-medieval-mile-dusk.webp',
  'm365-teams-phone-multi-device.webp',
]);

let totalIn = 0;
let totalOut = 0;

let skipped = 0;

for (const [srcName, outName] of jobs) {
  const src = path.join(ROOT, srcName);
  const out = path.join(ROOT, outName);

  let inStat;
  try {
    inStat = await fs.stat(src);
  } catch {
    console.error(`MISSING: ${srcName}`);
    continue;
  }

  // Skip if target exists and is newer than source (idempotent re-runs).
  try {
    const outStatExisting = await fs.stat(out);
    if (outStatExisting.mtimeMs >= inStat.mtimeMs) {
      skipped++;
      continue;
    }
  } catch {
    // target doesn't exist yet, fall through
  }

  totalIn += inStat.size;

  const isHero = HERO_FILES.has(outName);
  const pipeline = sharp(src)
    .resize({
      width: isHero ? 1920 : 1000,
      withoutEnlargement: true,
    })
    .webp({
      quality: isHero ? 82 : 85,
      effort: 6,
    });

  await pipeline.toFile(out);

  const outStat = await fs.stat(out);
  totalOut += outStat.size;

  const kbIn  = (inStat.size  / 1024).toFixed(0).padStart(6);
  const kbOut = (outStat.size / 1024).toFixed(0).padStart(6);
  console.log(`${kbIn} KB -> ${kbOut} KB   ${srcName}  ->  ${outName}`);
}

if (skipped > 0) {
  console.log(`(skipped ${skipped} already up-to-date)`);
}

console.log('');
console.log(`TOTAL: ${(totalIn / 1024 / 1024).toFixed(1)} MB -> ${(totalOut / 1024 / 1024).toFixed(1)} MB`);

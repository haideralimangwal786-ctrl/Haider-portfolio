import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

// Copy index.html
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(dist, 'index.html'));
}

// Copy CV
if (fs.existsSync('Haider_Ali_CV.pdf')) {
  fs.copyFileSync('Haider_Ali_CV.pdf', path.join(dist, 'Haider_Ali_CV.pdf'));
}

if (fs.existsSync('cv-template.html')) {
  fs.copyFileSync('cv-template.html', path.join(dist, 'cv-template.html'));
}

// Copy SEO Assets (sitemap & robots.txt)
if (fs.existsSync('sitemap.xml')) {
  fs.copyFileSync('sitemap.xml', path.join(dist, 'sitemap.xml'));
}
if (fs.existsSync('robots.txt')) {
  fs.copyFileSync('robots.txt', path.join(dist, 'robots.txt'));
}

// Recursively copy directory
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync('src')) {
  copyDir('src', path.join(dist, 'src'));
}

console.log('✅ Luxury Developer Portfolio built successfully into dist/');

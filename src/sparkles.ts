const SPARKLE_COLOR = '#ffffff';
const SPARKLE_PATH = 'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createSparkleEl(color: string) {
  const size = random(10, 20);
  const top = random(0, 100) + '%';
  const left = random(0, 100) + '%';

  const wrapper = document.createElement('span');
  wrapper.className = 'sparkle-wrapper';
  wrapper.style.top = top;
  wrapper.style.left = left;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('viewBox', '0 0 68 68');
  svg.setAttribute('fill', 'none');
  svg.classList.add('sparkle-svg');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', SPARKLE_PATH);
  path.setAttribute('fill', color);

  svg.appendChild(path);
  wrapper.appendChild(svg);
  return wrapper;
}

export function initSparkles(selector: string, color = SPARKLE_COLOR) {
  const container = document.querySelector(selector);
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const sparkles: { el: HTMLElement, createdAt: number }[] = [];
  let interval: ReturnType<typeof setInterval> | null = null;

  function addSparkle() {
    const el = createSparkleEl(color);
    container!.appendChild(el);
    sparkles.push({ el, createdAt: Date.now() });
  }

  function tick() {
    const now = Date.now();
    sparkles.forEach(({ el, createdAt }, i) => {
      if (now - createdAt > 750) {
        el.remove();
        sparkles.splice(i, 1);
      }
    });
    addSparkle();
  }

  container.addEventListener('mouseenter', () => {
    interval = setInterval(tick, random(50, 450));
  });

  container.addEventListener('mouseleave', () => {
    if (interval) clearInterval(interval);
    interval = null;
  });
}
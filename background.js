const canvas = document.createElement('canvas');
canvas.className = 'bg-canvas';
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

let particles = [];
let width = 0;
let height = 0;

const palette = [
  'rgba(255, 204, 1, 0.25)',
  'rgba(255, 230, 120, 0.18)',
  'rgba(255, 204, 1, 0.12)'
];

const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  particles = Array.from({ length: Math.max(30, Math.floor(width / 35)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1 + Math.random() * 2.6,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    c: palette[Math.floor(Math.random() * palette.length)]
  }));
};

const draw = () => {
  ctx.clearRect(0, 0, width, height);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -10) p.x = width + 10;
    if (p.x > width + 10) p.x = -10;
    if (p.y < -10) p.y = height + 10;
    if (p.y > height + 10) p.y = -10;
    ctx.beginPath();
    ctx.fillStyle = p.c;
    ctx.shadowColor = p.c;
    ctx.shadowBlur = 10;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(draw);
};

window.addEventListener('resize', resize);
resize();
draw();

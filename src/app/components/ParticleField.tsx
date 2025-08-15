"use client";
import { useRef, useEffect, type ReactElement } from 'react';

interface Particle { x:number; y:number; vx:number; vy:number; life:number; color:[number,number,number]; }

// Responsive, pointer-reactive particle field
export default function ParticleField(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<{x:number;y:number;active:boolean}>({x:0,y:0,active:false});
  const rafRef = useRef<number | null>(null);
  const lastSpawnRef = useRef(0);
  // schedule for ambient particle spawning (initialized after mount for SSR safety)
  const ambientRef = useRef<{nextAt:number}>({ nextAt: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
  let context: CanvasRenderingContext2D | null = null;
  try {
    context = canvas.getContext('2d', { alpha: true });
  } catch {
    context = null;
  }
  // Abort early in non-browser / test environments that return a stub context without expected APIs
  // Narrow context by checking required methods without using 'any'
  if (!context || typeof context.setTransform !== 'function' || typeof context.createLinearGradient !== 'function') {
    return; // Provide a static placeholder only; keeps tests deterministic
  }

  function resize(): void {
      if(!context) return;
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio,0,0,window.devicePixelRatio,0,0);
    }
    resize();
    window.addEventListener('resize', resize);

    const PALETTE: [number,number,number][] = [
      [186,168,255],  // light purple
      [179,134,0],    // dark gold
      [255,215,0],    // bright gold
      [102,106,112],  // grey
      [217,220,224],  // light grey
    ];

    function spawnBurst(x:number,y:number): void {
      for(let i=0;i<14;i++){
        const angle = Math.random()*Math.PI*2;
        const speed = 0.4 + Math.random()*1.2;
  const color = PALETTE[Math.floor(Math.random()*PALETTE.length)]!; // non-null assertion
        particlesRef.current.push({
          x,y,
          vx: Math.cos(angle)*speed,
          vy: Math.sin(angle)*speed,
          life: 140 + Math.random()*60,
          color,
        });
      }
    }

  // initialize ambient schedule now that performance.now is available
  ambientRef.current.nextAt = performance.now() + 1200;
    function spawnAmbient(): void {
      const logicalW = canvas.width / window.devicePixelRatio;
      const logicalH = canvas.height / window.devicePixelRatio;
      const count = 1 + Math.floor(Math.random()*2); // 1-2 subtle particles
      for(let i=0;i<count;i++){
        const x = Math.random()*logicalW;
        const y = Math.random()*logicalH;
        const angle = Math.random()*Math.PI*2;
        const speed = 0.1 + Math.random()*0.3;
        const color = PALETTE[Math.floor(Math.random()*PALETTE.length)]!;
        particlesRef.current.push({
          x,y,
          vx: Math.cos(angle)*speed,
          vy: Math.sin(angle)*speed*0.6,
          life: 220 + Math.random()*120,
          color,
        });
      }
      // schedule next ambient burst with variability
      ambientRef.current.nextAt = performance.now() + 1000 + Math.random()*2500; // 1s - 3.5s
    }

  function tick(ts:number): void {
      rafRef.current = requestAnimationFrame(tick);
      if(!context) return; // safety
      context.clearRect(0,0,canvas.width,canvas.height);
      const logicalW = canvas.width / window.devicePixelRatio;
      const logicalH = canvas.height / window.devicePixelRatio;

      // subtle gradient background fade
  const grad = context.createLinearGradient(0,0,logicalW,logicalH);
      grad.addColorStop(0,'rgba(255,255,255,0.02)');
      grad.addColorStop(1,'rgba(255,255,255,0.00)');
  context.fillStyle = grad; context.fillRect(0,0,logicalW,logicalH);

      if(pointerRef.current.active && ts - lastSpawnRef.current > 22){
        spawnBurst(pointerRef.current.x, pointerRef.current.y);
        lastSpawnRef.current = ts;
      }

      // ambient spawn check
      if(ts >= ambientRef.current.nextAt){
        spawnAmbient();
      }

      const next: Particle[] = [];
      for(const p of particlesRef.current){
        p.x += p.vx; p.y += p.vy; p.life -= 1; p.vy += 0.004; // gentle drift
        if(p.life <=0) continue;
        // wrap softly
        if(p.x < -10 || p.x > logicalW+10 || p.y < -10 || p.y > logicalH+10) continue;
  const alpha = Math.min(1, p.life/160);
  context.beginPath();
  const [r,g,b] = p.color;
  context.fillStyle = `rgba(${r},${g},${b},${alpha})`;
  context.arc(p.x,p.y,1.6 + (1-alpha)*1.2,0,Math.PI*2);
  context.fill();
        // connection lines
        for(const q of next){
          const dx = p.x - q.x; const dy = p.y - q.y; const d2 = dx*dx + dy*dy;
          if(d2 < 1200){
            const [qr,qg,qb] = q.color;
            const mr = Math.round((r+qr)/2); const mg = Math.round((g+qg)/2); const mb = Math.round((b+qb)/2);
            context.strokeStyle = `rgba(${mr},${mg},${mb},${0.12 - d2/1200*0.12})`;
            context.lineWidth = 1;
            context.beginPath(); context.moveTo(p.x,p.y); context.lineTo(q.x,q.y); context.stroke();
          }
        }
        next.push(p);
      }
      particlesRef.current = next;
    }
    rafRef.current = requestAnimationFrame(tick);

  function onPointer(e:PointerEvent): void {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    }
  function onLeave(): void { pointerRef.current.active = false; }
    canvas.addEventListener('pointermove', onPointer);
    canvas.addEventListener('pointerdown', onPointer);
    canvas.addEventListener('pointerup', onLeave);
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('pointerdown', onPointer);
      canvas.removeEventListener('pointerup', onLeave);
      canvas.removeEventListener('pointerleave', onLeave);
      if(rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-xl overflow-hidden bg-gradient-to-br from-accent/5 via-transparent to-accent/10 border border-foreground/10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none select-none">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">Interactive field</span>
      </div>
    </div>
  );
}

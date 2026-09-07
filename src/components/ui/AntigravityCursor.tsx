"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
};

const PARTICLE_COUNT = 90;
const COLOR = "178, 58, 204";

export function AntigravityCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let animationId = 0;
    let pointerActive = false;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedParticles = () => {
      particles.length = 0;

      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        const x = Math.random() * width;
        const y = Math.random() * height;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: 1.2 + Math.random() * 2.4,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointerActive = true;
    };

    const onPointerLeave = () => {
      pointerActive = false;
    };

    const draw = () => {
      frame += 0.035;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const angle = (index / PARTICLE_COUNT) * Math.PI * 2 + frame;
        const wave = Math.sin(frame * 2 + particle.phase) * 6;
        const radius = 34 + wave;
        const targetX = pointerActive ? pointer.x + Math.cos(angle) * radius : particle.baseX;
        const targetY = pointerActive ? pointer.y + Math.sin(angle) * radius : particle.baseY;

        particle.vx += (targetX - particle.x) * 0.035;
        particle.vy += (targetY - particle.y) * 0.035;
        particle.vx *= 0.82;
        particle.vy *= 0.82;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const alpha = pointerActive ? 0.42 + Math.sin(frame * 3 + particle.phase) * 0.18 : 0.08;
        const size = pointerActive ? particle.size : particle.size * 0.7;

        context.beginPath();
        context.fillStyle = `rgba(${COLOR}, ${alpha})`;
        context.shadowColor = `rgba(${COLOR}, ${alpha})`;
        context.shadowBlur = pointerActive ? 12 : 4;
        context.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        context.fill();
      });

      context.shadowBlur = 0;
      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    seedParticles();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    animationId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60] hidden mix-blend-screen lg:block"
      aria-hidden="true"
    />
  );
}

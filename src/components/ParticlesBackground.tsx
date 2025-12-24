'use client';

import React, { useCallback } from 'react';
// Keep the proper import for runtime
import Particles from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

/**
 * Cast Particles to a more permissive type only in this file so we can pass `init`.
 * This is a very small and local workaround and avoids changing global types.
 */
const ParticlesAny = Particles as unknown as React.ComponentType<any>;

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false } as const,
    background: { color: 'transparent' } as const,
    particles: {
      number: { value: 30 },
      color: { value: '#0ff' },
      shape: { type: 'circle' as const },
      opacity: { value: 0.12 },
      size: { value: { min: 2, max: 6 } },
      move: {
        enable: true,
        speed: 0.6,
        outModes: { default: 'bounce' as const },
      },
    },
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-20">
      <ParticlesAny
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
    </div>
  );
}
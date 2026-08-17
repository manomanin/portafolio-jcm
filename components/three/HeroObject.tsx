'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

const STAMP = '#C1442D';
const THREAD = '#C9A227';
const INK = '#F3EFE4';

function CutGem() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Geometría facetada tipo "ficha cortada" con gradiente stamp -> thread por vértice.
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const from = new THREE.Color(STAMP);
    const to = new THREE.Color(THREAD);
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = THREE.MathUtils.clamp((y + 1.5) / 3, 0, 1);
      const c = from.clone().lerp(to, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.16;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    }
    if (groupRef.current) {
      const targetX = state.pointer.y * 0.25;
      const targetY = state.pointer.x * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial vertexColors flatShading roughness={0.32} metalness={0.25} envMapIntensity={0.6} />
        <Edges threshold={1} color={INK} />
      </mesh>
    </group>
  );
}

export function HeroObject() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} intensity={40} color={STAMP} />
        <pointLight position={[-4, -2, 3]} intensity={30} color={THREAD} />
        <directionalLight position={[0, 5, 5]} intensity={0.6} color={INK} />
        <CutGem />
      </Suspense>
    </Canvas>
  );
}

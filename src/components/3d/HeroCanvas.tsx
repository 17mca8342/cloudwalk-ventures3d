'use client';

import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LODMountain } from './LODMountain';

gsap.registerPlugin(ScrollTrigger);

extend({ OrbitControls, PerspectiveCamera });

interface CloudsProps {
  uProgress: number;
}

const Clouds = ({ uProgress }: CloudsProps) => {
  const timeRef = useRef(0);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: uProgress },
  }), []);

  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uProgress;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.x += sin(pos.y * 0.5 + uTime * 0.1) * 0.5;
        pos.z += cos(pos.x * 0.3 + uTime * 0.08) * 0.3;
        pos.y += uProgress * 0.5;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        float noise = fract(sin(dot(vUv * 10.0 + uTime * 0.05, vec2(12.9898, 78.233))) * 43758.5453);
        float cloud = smoothstep(0.3, 0.7, noise);
        float cloud2 = smoothstep(0.4, 0.8, fract(sin(dot(vUv * 5.0 - uTime * 0.03, vec2(12.9898, 78.233))) * 43758.5453));
        cloud = max(cloud, cloud2 * 0.5);
        vec3 color = mix(vec3(0.9, 0.95, 1.0), vec3(0.6, 0.7, 0.9), cloud);
        float alpha = cloud * 0.6;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    uniforms,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  }), [uniforms]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    uniforms.uTime.value = timeRef.current;
    uniforms.uProgress.value = uProgress;
  });

  return (
    <group>
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh
          key={i}
          geometry={new THREE.SphereGeometry(8 + Math.random() * 5, 16, 16)}
          material={material}
          position={[
            (Math.random() - 0.5) * 200,
            25 + Math.random() * 15,
            (Math.random() - 0.5) * 200 - 50
          ]}
          scale={[1 + Math.random() * 0.5, 0.3 + Math.random() * 0.2, 1 + Math.random() * 0.5]}
          rotation={[0, Math.random() * Math.PI * 2, 0]}
        />
      ))}
    </group>
  );
};

interface ParticlesProps {
  uProgress: number;
}

const Particles = ({ uProgress }: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: uProgress },
    uSize: { value: 2.0 },
  }), []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 50 + Math.random() * 100;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 20;
      positions[i * 3 + 2] = r * Math.cos(phi) - 50;
      
      sizes[i] = 0.5 + Math.random() * 1.5;
      alphas[i] = 0.2 + Math.random() * 0.5;
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.05 + 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));
    return geo;
  }, []);

  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `
      attribute float aSize;
      attribute float aAlpha;
      attribute vec3 aVelocity;
      varying float vAlpha;
      uniform float uTime;
      uniform float uProgress;
      uniform float uSize;
      void main() {
        vAlpha = aAlpha;
        vec3 pos = position;
        pos += aVelocity * uTime * 10.0;
        pos.y += sin(uTime * 0.5 + position.x * 0.05) * 0.5;
        pos.x += cos(uTime * 0.3 + position.z * 0.05) * 0.3;
        pos.y += uProgress * 0.2;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aSize * uSize * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
        vec3 color = mix(vec3(0.4, 0.6, 0.9), vec3(1.0, 1.0, 1.0), gl_PointCoord.y);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: false,
  }), [uniforms]);

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uProgress.value = uProgress;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

const HeroCanvas = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas
      className="canvas-container"
      camera={{ position: [0, 15, 45], fov: 50 }}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      shadows
    >
      <fog color="#87ceeb" near={10} far={200} />
      
      <ambientLight color="#ffffff" intensity={0.6} />
      <directionalLight 
        position={[50, 100, 50]} 
        color="#ffffff" 
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={200}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <directionalLight position={[-30, 50, -30]} color="#ffeaa7" intensity={0.4} />
      <hemisphereLight color="#87ceeb" groundColor="#2d5a2d" intensity={0.5} />

      <Suspense fallback={null}>
        <LODMountain uProgress={scrollProgress} />
        <Clouds uProgress={scrollProgress} />
        <Particles uProgress={scrollProgress} />
      </Suspense>

      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={30}
        maxDistance={80}
        target={[0, 5, -20]}
      />
    </Canvas>
  );
};

export default HeroCanvas;
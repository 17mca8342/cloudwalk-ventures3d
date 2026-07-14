'use client';

import { LOD, Mesh, PlaneGeometry, ShaderMaterial, Vector3, Color, Camera } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect } from 'react';

const vertexShaderLOD0 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform float uProgress;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalMatrix * normal;
    
    vec3 pos = position;
    
    float noise = sin(pos.x * 0.5 + uTime * 0.3) * cos(pos.z * 0.5 + uTime * 0.2);
    noise += sin(pos.x * 1.2 - uTime * 0.1) * cos(pos.z * 1.2 + uTime * 0.15) * 0.5;
    noise += sin(pos.x * 2.5 + uTime * 0.05) * cos(pos.z * 2.5 - uTime * 0.08) * 0.25;
    
    float displacement = noise * 3.0 * smoothstep(0.0, 1.0, pos.y + 2.0);
    pos.y += displacement;
    
    pos.y += uProgress * 2.0 * sin(pos.x * 0.3) * cos(pos.z * 0.3);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShaderLOD0 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform vec3 uColorTop;
  uniform vec3 uColorMid;
  uniform vec3 uColorBase;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform float uProgress;
  
  float getNoise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * getNoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    float height = vPosition.y;
    
    vec3 color;
    float t = smoothstep(-2.0, 8.0, height);
    
    if (t < 0.4) {
      color = mix(uColorBase, uColorMid, t / 0.4);
    } else {
      color = mix(uColorMid, uColorTop, (t - 0.4) / 0.6);
    }
    
    float noise = fbm(vPosition.xz * 0.5 + uTime * 0.02) * 0.1;
    color += noise;
    
    float slope = 1.0 - abs(normal.y);
    color *= mix(1.0, 0.7, slope * 0.5);
    
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    color += fresnel * vec3(0.1, 0.2, 0.4) * 0.3;
    
    float fogFactor = 1.0 - exp(-uFogDensity * length(vPosition) * 0.1);
    color = mix(color, uFogColor, fogFactor);
    
    color += uProgress * vec3(0.05, 0.02, 0.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShaderLOD1 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform float uProgress;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalMatrix * normal;
    
    vec3 pos = position;
    
    float noise = sin(pos.x * 0.4 + uTime * 0.25) * cos(pos.z * 0.4 + uTime * 0.15);
    noise += sin(pos.x * 1.0 - uTime * 0.08) * cos(pos.z * 1.0 + uTime * 0.12) * 0.4;
    
    float displacement = noise * 2.5 * smoothstep(0.0, 1.0, pos.y + 2.0);
    pos.y += displacement;
    
    pos.y += uProgress * 1.5 * sin(pos.x * 0.25) * cos(pos.z * 0.25);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShaderLOD1 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform vec3 uColorTop;
  uniform vec3 uColorMid;
  uniform vec3 uColorBase;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform float uProgress;
  
  float getNoise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 3; i++) {
      value += amplitude * getNoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    float height = vPosition.y;
    
    vec3 color;
    float t = smoothstep(-2.0, 8.0, height);
    
    if (t < 0.4) {
      color = mix(uColorBase, uColorMid, t / 0.4);
    } else {
      color = mix(uColorMid, uColorTop, (t - 0.4) / 0.6);
    }
    
    float noise = fbm(vPosition.xz * 0.4 + uTime * 0.015) * 0.08;
    color += noise;
    
    float slope = 1.0 - abs(normal.y);
    color *= mix(1.0, 0.75, slope * 0.4);
    
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);
    color += fresnel * vec3(0.08, 0.15, 0.3) * 0.25;
    
    float fogFactor = 1.0 - exp(-uFogDensity * length(vPosition) * 0.1);
    color = mix(color, uFogColor, fogFactor);
    
    color += uProgress * vec3(0.04, 0.015, 0.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShaderLOD2 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform float uProgress;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalMatrix * normal;
    
    vec3 pos = position;
    
    float noise = sin(pos.x * 0.3 + uTime * 0.2) * cos(pos.z * 0.3 + uTime * 0.1);
    float displacement = noise * 2.0 * smoothstep(0.0, 1.0, pos.y + 2.0);
    pos.y += displacement;
    
    pos.y += uProgress * 1.0 * sin(pos.x * 0.2) * cos(pos.z * 0.2);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShaderLOD2 = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  uniform float uTime;
  uniform vec3 uColorTop;
  uniform vec3 uColorMid;
  uniform vec3 uColorBase;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform float uProgress;
  
  float getNoise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    float height = vPosition.y;
    
    vec3 color;
    float t = smoothstep(-2.0, 8.0, height);
    
    if (t < 0.4) {
      color = mix(uColorBase, uColorMid, t / 0.4);
    } else {
      color = mix(uColorMid, uColorTop, (t - 0.4) / 0.6);
    }
    
    float noise = getNoise(vPosition.xz * 0.3 + uTime * 0.01) * 0.05;
    color += noise;
    
    float slope = 1.0 - abs(normal.y);
    color *= mix(1.0, 0.8, slope * 0.3);
    
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
    color += fresnel * vec3(0.05, 0.1, 0.2) * 0.2;
    
    float fogFactor = 1.0 - exp(-uFogDensity * length(vPosition) * 0.1);
    color = mix(color, uFogColor, fogFactor);
    
    color += uProgress * vec3(0.03, 0.01, 0.0);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

interface LODMountainProps {
  uProgress: number;
  position?: [number, number, number];
  scale?: [number, number, number];
  distances?: [number, number];
}

const createMountainGeometry = (width: number, depth: number, widthSegments: number, depthSegments: number) => {
  const geometry = new PlaneGeometry(width, depth, widthSegments, depthSegments);
  geometry.rotateX(-Math.PI / 2);
  return geometry;
};

export const LODMountain = ({ 
  uProgress, 
  position = [0, -2, -10],
  scale = [1, 1, 1],
  distances = [50, 150]
}: LODMountainProps) => {
  const { camera } = useThree();
  const lodRef = useRef<LOD | null>(null);
  const timeRef = useRef(0);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: uProgress },
    uColorTop: { value: new Color(0x1a2e1a) },
    uColorMid: { value: new Color(0x2d5a2d) },
    uColorBase: { value: new Color(0x4a7c4a) },
    uFogColor: { value: new Color(0x87ceeb) },
    uFogDensity: { value: 0.15 },
  }), []);

  useEffect(() => {
    uniforms.uProgress.value = uProgress;
  }, [uProgress, uniforms]);

  const materialLOD0 = useMemo(() => new ShaderMaterial({
    vertexShader: vertexShaderLOD0,
    fragmentShader: fragmentShaderLOD0,
    uniforms,
    side: 2,
  }), [uniforms]);

  const materialLOD1 = useMemo(() => new ShaderMaterial({
    vertexShader: vertexShaderLOD1,
    fragmentShader: fragmentShaderLOD1,
    uniforms,
    side: 2,
  }), [uniforms]);

  const materialLOD2 = useMemo(() => new ShaderMaterial({
    vertexShader: vertexShaderLOD2,
    fragmentShader: fragmentShaderLOD2,
    uniforms,
    side: 2,
  }), [uniforms]);

  useEffect(() => {
    const lod = new LOD();
    
    const geo0 = createMountainGeometry(200, 200, 128, 128);
    const mesh0 = new Mesh(geo0, materialLOD0);
    lod.addLevel(mesh0, distances[0]);
    
    const geo1 = createMountainGeometry(200, 200, 64, 64);
    const mesh1 = new Mesh(geo1, materialLOD1);
    lod.addLevel(mesh1, distances[1]);
    
    const geo2 = createMountainGeometry(200, 200, 32, 32);
    const mesh2 = new Mesh(geo2, materialLOD2);
    lod.addLevel(mesh2, Infinity);
    
    lod.position.set(...position);
    lod.scale.set(...scale);
    
    lodRef.current = lod;
    
    return () => {
      geo0.dispose();
      geo1.dispose();
      geo2.dispose();
    };
  }, [materialLOD0, materialLOD1, materialLOD2, position, scale, distances]);

  useFrame(() => {
    timeRef.current += 1 / 60;
    uniforms.uTime.value = timeRef.current;
    
    if (lodRef.current && camera) {
      lodRef.current.update(camera);
    }
  });

  return lodRef.current ? <primitive object={lodRef.current} /> : null;
};
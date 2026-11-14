import { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, Sparkles, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import ImageWithFallback from './ImageWithFallback.jsx'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function createBackLabel() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 768
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f7f5ef'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = '#9ba79c'
  ctx.lineWidth = 5
  ctx.strokeRect(17, 17, 478, 734)
  ctx.fillStyle = '#4f6f64'
  ctx.textAlign = 'center'
  ctx.font = 'bold 31px Georgia, serif'
  ctx.fillText('SHAMAZ', 256, 71)
  ctx.font = 'bold 19px Arial, sans-serif'
  ctx.fillText('14 BOTANICALS', 256, 108)
  ctx.strokeStyle = '#c88a2e'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(62, 132)
  ctx.lineTo(450, 132)
  ctx.stroke()
  const herbs = [
    'Coconut Oil', 'Argan Oil', 'Rosemary Essential Oil', 'Castor Oil',
    'Vitamin E Oil', 'Olive Oil', 'Aloe Vera Extract', 'Bhringraj',
    'Hibiscus', 'Nettle Leaf', 'Black Seeds (Kalonji)', 'Nagarmotha Root Extract',
    'Flaxseed Oil', 'Fenugreek Seeds (Methi)',
  ]
  ctx.textAlign = 'left'
  ctx.fillStyle = '#27382e'
  ctx.font = '17px Arial, sans-serif'
  herbs.forEach((herb, index) => {
    const y = 169 + index * 35
    ctx.fillStyle = '#c88a2e'
    ctx.beginPath()
    ctx.arc(67, y - 6, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#27382e'
    ctx.fillText(herb, 82, y)
  })
  ctx.textAlign = 'center'
  ctx.fillStyle = '#4f6f64'
  ctx.font = 'italic 16px Georgia, serif'
  ctx.fillText('A botanical hair-care ritual', 256, 694)
  return new THREE.CanvasTexture(canvas)
}

function createBoxArtwork() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 1024
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#728a7e'
  ctx.fillRect(0, 0, 512, 1024)
  ctx.strokeStyle = 'rgba(247,246,239,.88)'
  ctx.lineWidth = 5
  ctx.strokeRect(23, 23, 466, 978)
  ctx.textAlign = 'center'
  ctx.fillStyle = '#f7f5ef'
  ctx.font = 'bold 53px Georgia, serif'
  ctx.fillText('SHAMAZ', 256, 582)
  ctx.font = '20px Arial, sans-serif'
  ctx.fillText('ORGANIC PRODUCT', 256, 620)
  ctx.beginPath()
  ctx.arc(256, 410, 95, 0, Math.PI * 2)
  ctx.stroke()
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(256, 464)
  ctx.lineTo(256, 360)
  ctx.moveTo(256, 415)
  ctx.bezierCurveTo(212, 414, 196, 385, 192, 354)
  ctx.bezierCurveTo(227, 354, 251, 371, 256, 415)
  ctx.moveTo(256, 403)
  ctx.bezierCurveTo(262, 368, 286, 348, 321, 348)
  ctx.bezierCurveTo(316, 383, 296, 403, 256, 403)
  ctx.stroke()
  ctx.font = '22px Arial, sans-serif'
  ctx.fillText('100 ml  |  Hair Growth Oil', 256, 694)
  return new THREE.CanvasTexture(canvas)
}

function RosemarySprig({ position, rotation = [0, 0, 0], scale = 1 }) {
  const leaves = [-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45]
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, -0.06]}>
        <cylinderGeometry args={[0.012, 0.018, 1.05, 7]} />
        <meshStandardMaterial color="#6f8674" roughness={0.8} />
      </mesh>
      {leaves.map((y, index) => (
        <group key={y} position={[0, y, 0]}>
          <mesh position={[-0.11, 0.035, 0]} rotation={[0.18, 0.2, 0.72]} scale={[0.13, 0.026, 0.013]}>
            <sphereGeometry args={[1, 16, 10]} />
            <meshStandardMaterial color={index % 2 ? '#708775' : '#829580'} roughness={0.68} />
          </mesh>
          <mesh position={[0.11, -0.025, 0]} rotation={[-0.12, -0.14, -0.72]} scale={[0.13, 0.026, 0.013]}>
            <sphereGeometry args={[1, 16, 10]} />
            <meshStandardMaterial color={index % 2 ? '#829580' : '#708775'} roughness={0.68} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function KalonjiSeeds({ position, scale = 1 }) {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.16
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.45) * 0.08
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.035
    }
  })
  return (
    <group ref={ref} position={position} scale={scale}>
      {Array.from({ length: 7 }, (_, index) => {
        const angle = (index / 7) * Math.PI * 2
        const radius = index % 2 ? 0.105 : 0.07
        return (
          <mesh key={index} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, (index % 3) * 0.025]} rotation={[0.2, 0.4, angle]} scale={[0.07, 0.043, 0.03]} castShadow>
            <sphereGeometry args={[1, 14, 10]} />
            <meshStandardMaterial color={index % 2 ? '#272922' : '#3b3a31'} roughness={0.78} />
          </mesh>
        )
      })}
    </group>
  )
}

function HibiscusBloom({ position, scale = 1, rotation = [0, 0, 0] }) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      {Array.from({ length: 5 }, (_, index) => {
        const angle = (index / 5) * Math.PI * 2
        return (
          <mesh key={index} position={[Math.cos(angle) * 0.13, Math.sin(angle) * 0.13, 0]} rotation={[0, 0, angle]} scale={[0.18, 0.085, 0.035]}>
            <sphereGeometry args={[1, 18, 12]} />
            <meshStandardMaterial color={index % 2 ? '#bf6b62' : '#d07a70'} roughness={0.62} />
          </mesh>
        )
      })}
      <mesh position={[0, 0, 0.04]}>
        <sphereGeometry args={[0.067, 16, 12]} />
        <meshStandardMaterial color="#d6a243" roughness={0.42} metalness={0.18} />
      </mesh>
      <mesh position={[0.01, 0.13, 0.06]} rotation={[0, 0, -0.12]}>
        <cylinderGeometry args={[0.009, 0.014, 0.23, 8]} />
        <meshStandardMaterial color="#d6a243" metalness={0.38} roughness={0.36} />
      </mesh>
      <mesh position={[0.025, 0.25, 0.06]}>
        <sphereGeometry args={[0.024, 12, 10]} />
        <meshStandardMaterial color="#e3b85c" metalness={0.35} roughness={0.32} />
      </mesh>
    </group>
  )
}

function BottleModel() {
  const frontTexture = useTexture('/images/bottle-label-front.png')
  const backTexture = useTexture('/images/bottle-label-back.png')
  frontTexture.colorSpace = THREE.SRGBColorSpace
  frontTexture.anisotropy = 8
  backTexture.colorSpace = THREE.SRGBColorSpace
  backTexture.anisotropy = 8
  const whiteSleeve = useMemo(() => new THREE.CylinderGeometry(0.423, 0.423, 1.16, 64, 1, true), [])
  const frontWrap = useMemo(() => new THREE.CylinderGeometry(0.426, 0.426, 1.11, 64, 1, true, -Math.PI / 2, Math.PI), [])
  const backWrap = useMemo(() => new THREE.CylinderGeometry(0.426, 0.426, 1.11, 64, 1, true, Math.PI / 2, Math.PI), [])

  return (
    <group position={[0.37, -0.12, 0]}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.36, 0.405, 1.58, 64, 1, false]} />
        <meshPhysicalMaterial color="#633014" roughness={0.23} metalness={0.08} clearcoat={0.95} clearcoatRoughness={0.1} />
      </mesh>
      <mesh position={[0, 0.73, 0]} scale={[0.36, 0.2, 0.36]} castShadow>
        <sphereGeometry args={[1, 40, 28]} />
        <meshPhysicalMaterial color="#783b14" roughness={0.2} metalness={0.08} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0.88, 0]} castShadow>
        <cylinderGeometry args={[0.195, 0.21, 0.23, 48]} />
        <meshPhysicalMaterial color="#773a12" roughness={0.2} clearcoat={0.9} />
      </mesh>
      <mesh position={[0, 0.994, 0]}>
        <cylinderGeometry args={[0.215, 0.22, 0.028, 48]} />
        <meshStandardMaterial color="#d4bc8d" metalness={0.65} roughness={0.28} />
      </mesh>
      <mesh position={[0, 1.27, 0]} castShadow>
        <cylinderGeometry args={[0.235, 0.235, 0.54, 48, 1, false]} />
        <meshPhysicalMaterial color="#111714" roughness={0.22} metalness={0.18} clearcoat={0.65} />
      </mesh>
      <mesh position={[0, 1.548, 0]}>
        <cylinderGeometry args={[0.235, 0.235, 0.018, 48]} />
        <meshStandardMaterial color="#222a25" roughness={0.3} />
      </mesh>
      <mesh geometry={whiteSleeve} position={[0, -0.13, 0]}>
        <meshStandardMaterial color="#f6f4ef" roughness={0.48} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={frontWrap} position={[0, -0.13, 0]}>
        <meshBasicMaterial map={frontTexture} transparent side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <mesh geometry={backWrap} position={[0, -0.13, 0]}>
        <meshBasicMaterial map={backTexture} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.93, 0]}>
        <cylinderGeometry args={[0.39, 0.405, 0.07, 48]} />
        <meshStandardMaterial color="#8f481b" roughness={0.25} metalness={0.1} />
      </mesh>
    </group>
  )
}

function CartonModel() {
  const artwork = useTexture('/images/box-front-texture.png')
  artwork.colorSpace = THREE.SRGBColorSpace
  return (
    <group position={[-0.76, -0.12, -0.22]} rotation={[0, 0.04, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.7, 1.82, 0.36]} />
        <meshStandardMaterial color="#71897d" roughness={0.76} />
      </mesh>
      <mesh position={[0, 0.015, 0.184]}>
        <planeGeometry args={[0.63, 1.6]} />
        <meshBasicMaterial map={artwork} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.705, 0.19, 0.365]} />
        <meshStandardMaterial color="#f5f2e9" roughness={0.68} />
      </mesh>
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[0.705, 0.11, 0.365]} />
        <meshStandardMaterial color="#f5f2e9" roughness={0.68} />
      </mesh>
    </group>
  )
}

function OilDrop({ position, scale = 1 }) {
  const ref = useRef(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.45
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.1 + position[0]) * 0.045
    }
  })
  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      <sphereGeometry args={[0.075, 18, 18]} />
      <meshPhysicalMaterial color="#d49a3a" roughness={0.16} metalness={0.1} clearcoat={1} transparent opacity={0.82} />
    </mesh>
  )
}

function Diorama({ scrollProgress }) {
  const group = useRef(null)
  const travertineTexture = useTexture('/images/travertine-texture.jpg')
  travertineTexture.colorSpace = THREE.SRGBColorSpace
  travertineTexture.wrapS = THREE.RepeatWrapping
  travertineTexture.wrapT = THREE.RepeatWrapping
  travertineTexture.repeat.set(2, 1)
  travertineTexture.anisotropy = 8
  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return
    const progress = scrollProgress.current
    const targetYaw = progress * Math.PI + pointer.x * 0.12
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetYaw, 3.5, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.045, 3, delta)
    group.current.position.y = -0.03 + Math.sin(clock.elapsedTime * 0.8) * 0.025
    const scale = 1 + progress * 0.035
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, scale, 2, delta))
  })

  return (
    <>
      <ambientLight intensity={1.35} />
      <directionalLight position={[3.5, 5, 4]} intensity={2.25} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-3, 1.6, 1.2]} intensity={1.7} color="#e3bb75" />
      <pointLight position={[0.2, 2.8, -2]} intensity={2} color="#faf5e8" />
      <group ref={group}>
        <Float speed={1.25} rotationIntensity={0.035} floatIntensity={0.13}>
          <CartonModel />
          <BottleModel />
        </Float>
        <RosemarySprig position={[-1.25, 0.9, 0.08]} rotation={[0.05, 0.1, -0.75]} scale={0.82} />
        <RosemarySprig position={[1.23, -0.25, -0.3]} rotation={[0.1, 0.2, 0.62]} scale={0.65} />
        <HibiscusBloom position={[-1.1, -0.68, 0.48]} rotation={[0.1, 0.12, 0.1]} scale={0.55} />
        <HibiscusBloom position={[1.25, 0.42, -0.24]} rotation={[0.2, -0.25, -0.15]} scale={0.42} />
        <KalonjiSeeds position={[1.16, -0.8, 0.44]} scale={0.82} />
        <KalonjiSeeds position={[-1.15, 0.22, -0.18]} scale={0.62} />
        <OilDrop position={[-1.13, 0.48, 0.38]} scale={0.88} />
        <OilDrop position={[1.18, 0.8, -0.08]} scale={0.72} />
        <OilDrop position={[0.98, -0.72, 0.48]} scale={0.52} />
      </group>
      <mesh position={[-0.12, -1.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.34, 1.42, 0.25, 72]} />
        <meshStandardMaterial map={travertineTexture} roughness={0.82} />
      </mesh>
      <mesh position={[-0.12, -1.405, 0]} receiveShadow>
        <cylinderGeometry args={[1.42, 1.48, 0.08, 72]} />
        <meshStandardMaterial map={travertineTexture} roughness={0.86} />
      </mesh>
      <Sparkles count={26} scale={[3.8, 3.4, 1.8]} size={2.5} speed={0.22} color="#c88a2e" opacity={0.54} />
      <ContactShadows position={[-0.1, -1.47, 0]} opacity={0.28} scale={4.4} blur={2.5} far={4} />
    </>
  )
}

class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function SceneFallback() {
  return (
    <div className="scene-fallback">
      <div className="scene-fallback__halo" />
      <ImageWithFallback
        src="/images/product-hero.jpg"
        fallback="/images/bottle-front.jpg"
        alt="SHAMAZ 100 ml Hair Growth Oil bottle and sage-green box"
        className="scene-fallback__image"
        loading="eager"
      />
      <div className="scene-fallback__plinth" />
      <span className="scene-fallback__note">14 HERBS · 100 ML</span>
    </div>
  )
}

export default function ProductScene() {
  const [webglAvailable, setWebglAvailable] = useState(null)
  const scrollProgress = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      scrollProgress.current = clamp(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 0, 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let gl
    try {
      const canvas = document.createElement('canvas')
      gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    } catch {
      gl = null
    }
    if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext()
    setWebglAvailable(Boolean(gl))
  }, [])

  return (
    <div className="product-scene" aria-label="Interactive 3D SHAMAZ product presentation">
      <div className="product-scene__wash" />
      {webglAvailable ? (
        <SceneErrorBoundary fallback={<SceneFallback />}>
          <Canvas
            shadows
            dpr={[1, 1.6]}
            camera={{ position: [0, 0.16, 5.8], fov: 34 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
            fallback={<SceneFallback />}
          >
            <Suspense fallback={null}>
              <Diorama scrollProgress={scrollProgress} />
            </Suspense>
          </Canvas>
        </SceneErrorBoundary>
      ) : (
        <SceneFallback />
      )}
      <div className="product-scene__caption">
        <span className="product-scene__caption-line" />
        <span>THE HERBAL HAIR RITUAL</span>
        <span className="product-scene__caption-line" />
      </div>
    </div>
  )
}
